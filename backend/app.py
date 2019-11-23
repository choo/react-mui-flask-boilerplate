#! /usr/bin/env python3
#-*- coding: utf-8 -*-

import os, argparse
from flask import Flask, jsonify, send_from_directory, request


ROOT_DIR = './build'
STATIC_DIR = os.path.join(ROOT_DIR, 'static')
app = Flask(__name__, static_folder=STATIC_DIR)


''' API definitions '''

@app.route('/api/sample')
def items():
    ''' Sample API returns repeated query words '''
    query = request.args.get('query', '')
    page = int(request.args.get('page', 1))
    sort = request.args.get('sort')
    res  = [query * i for i in range(1, 11)] if query else []
    return jsonify(res)


''' static html '''

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return send_from_directory(ROOT_DIR, 'index.html')


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Flask web application server')
    parser.add_argument('--port', type=int, dest='port', required=False,
                        default=int(os.environ.get('PORT', 8080)), help='port number.')
    parser.add_argument('--is_dev', dest='is_dev', action='store_true',
                        help='running on dev mode or not')
    args = parser.parse_args()
    app.run(host='0.0.0.0', port=args.port, debug=args.is_dev)
