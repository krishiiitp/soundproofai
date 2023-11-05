import pandas as pd
from sklearn import preprocessing
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import KFold
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