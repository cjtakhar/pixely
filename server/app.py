from flask import Flask, jsonify

app = Flask(__name__)
pricing = 30

@app.route('/pricing')
def get_pricing():
    return jsonify({'pricing': pricing})

if __name__ == '__main__':
    app.run(host='localhost', port=5000)