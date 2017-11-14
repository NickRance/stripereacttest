from flask import Flask, render_template, jsonify, request
from flask_restful import Resource, Api, reqparse
import os
import json
import stripeLogic

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('token', help='stripe token submitted from web app')
# parser.add_argument('token', type=int, location='form')

class ReactSite(Resource):
    def get(self):
        return render_template('../public/index.html')

class Subscriptions(Resource):
    def get(self):
        response = jsonify({'hello': 'world'})
        response.headers.add('Access-Control-Allow-Origin','*')
        return response

    def post(self):
        args = parser.parse_args()
        token = json.loads(args['token'])
        print(token)
        stripeLogic.chargeCard(token['id'])

        response = jsonify({'token':args['token']})
        response.headers.add('Access-Control-Allow-Origin','*')
        return response


api.add_resource(Subscriptions, '/stripe/subscriptions')
api.add_resource(ReactSite, '/')

if __name__ == '__main__':
    app.run(debug=True,  host = os.getenv("IP","0.0.0.0"),port = int (os.getenv('PORT', 33507)))
