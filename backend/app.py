#! /usr/bin/env python3
#-*- coding: utf-8 -*-

import os
from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS


IS_DEBUG = True
PORT = 8888

ROOT_DIR = './build'
STATIC_DIR = os.path.join(ROOT_DIR, 'static')
app = Flask(__name__, static_folder=STATIC_DIR)

if IS_DEBUG:
    CORS(app)


''' API definitions '''

@app.route('/api/sample')
def items():
    '''Sample API route for data'''
    page = int(request.args.get('page', 1))
    return jsonify({'foo': 'a', 'bar': 'b', 'page': page})


''' static html '''

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory(ROOT_DIR, 'index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=PORT, debug=IS_DEBUG)
