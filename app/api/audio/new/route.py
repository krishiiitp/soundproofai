from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn import preprocessing
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import KFold
from sklearn.metrics import accuracy_score
import time
import numpy as np
import librosa
app= Flask(__name__)
dataset='./DATASET-balanced.csv'
df = pd.read_csv(dataset)
X = df.iloc[:, :-1]
y = df.iloc[:, -1]
lb = preprocessing.LabelBinarizer()
lb.fit(y)
y = lb.transform(y)
y = y.ravel()
model = RandomForestClassifier(n_estimators=50, random_state=1)
kf = KFold(n_splits=5, shuffle=True, random_state=1)
for train_index, test_index in kf.split(X):
    X_train, X_test = X.iloc[train_index, :], X.iloc[test_index, :]
    y_train, y_test = y[train_index], y[test_index]
    model.fit(X_train, y_train)
def extract_features(audio_file):
    audio, sr = librosa.load(audio_file, sr=None)
    chroma_stft = librosa.feature.chroma_stft(y=audio, sr=sr).mean(axis=0)
    rms = librosa.feature.rms(y=audio)[0]
    spectral_centroid = librosa.feature.spectral_centroid(y=audio, sr=sr)[0]
    spectral_bandwidth = librosa.feature.spectral_bandwidth(y=audio, sr=sr)[0]
    rolloff = librosa.feature.spectral_rolloff(y=audio, sr=sr)[0]
    zero_crossing_rate = librosa.feature.zero_crossing_rate(y=audio)[0]
    mfcc = librosa.feature.mfcc(y=audio, sr=sr, n_mfcc=20)
    features = np.vstack([
        chroma_stft, rms, spectral_centroid,
        spectral_bandwidth, rolloff, zero_crossing_rate, mfcc
    ])
    features = features.T
    return features
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
@app.route('/api/audio/new', methods=['POST'])
def predict():
    try:
        audio_file = request.files['file']
        if audio_file:
            input_features = extract_features(audio_file)
            prediction = model.predict(input_features)
            count_fake = np.sum(prediction == 0)
            count_real = np.sum(prediction == 1)
            result=""
            if count_fake >= count_real:
                result = "FAKE" 
            else:
                result = "REAL" 
            return jsonify({'result': result})
        else:
            return jsonify({'error': 'No file provided'})
    except Exception as e:
        return jsonify({'error': str(e)})
if __name__ == '__main__':
    app.run(debug=True)
