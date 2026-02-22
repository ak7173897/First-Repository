from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/echo', methods=['POST'])
def api_echo():
    data = request.get_json(silent=True) or {}
    text = data.get('text', '')
    # simple interactive transformation: reverse text and return length
    transformed = text[::-1]
    return jsonify({
        'input': text,
        'output': transformed,
        'length': len(text)
    })


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
