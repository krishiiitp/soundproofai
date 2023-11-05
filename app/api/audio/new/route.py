from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import librosa
from model import model
from pydub import AudioSegment
app= Flask(__name__)
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
            print("hello")
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
