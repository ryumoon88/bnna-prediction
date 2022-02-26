from flask import Flask, render_template, request
import pickle
import numpy as np


model = pickle.load(open('banana.pkl', 'rb'))

app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def main():
    status = ""
    print(request.method)
    if request.method == 'POST':
        status = predict(request.form.getlist('data[]', type=int))
        print(status)
        return status
    return render_template('index.html')

def predict(data):
    # data1 = request.form['a']
    # data2 = request.form['b']
    # data3 = request.form['c']
    # data4 = request.form['d']
    # data5 = request.form['e']
    # data6 = request.form['f']
    # data7 = request.form['g']
    # data8 = request.form['h']
    # data9 = request.form['i']
    # data10 = request.form['j']
    # data11 = request.form['k']
    # data12 = request.form['l']
    # data13 = request.form['m']
    d = []
    for i in data:
        print(i)
        d.append(i)
    # arr = np.array([[data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13]])
    arr = np.array([d])
    print(arr)
    pred = model.predict(arr)
    status = ""
    if(pred == 1): status = "Underripe"
    elif(pred == 2): status = "Ripe"
    else: status = "Overripe";
    return status;

if __name__ == "__main__":
    app.run(debug=True)