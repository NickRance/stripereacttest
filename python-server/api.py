from flask import Flask
from flask_restful import Resource, Api, reqparse
import os

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('token', help='stripe token submitted from web app')

class Subscriptions(Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        args = parser.parse_args()
        return {'token':args['token']}

api.add_resource(Subscriptions, '/stripe/subscriptions')

if __name__ == '__main__':
    app.run(debug=True,  host = os.getenv("IP","0.0.0.0"),port = int (os.getenv('PORT', 33507)))
