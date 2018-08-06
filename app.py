# -*- coding: utf-8 -*-
import os

from flask import Flask, abort, jsonify, request, render_template
from flask_mail import Mail, Message


app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

app.config.update(dict(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USE_SSL=False,
    MAIL_DEBUG=False,
    MAIL_USERNAME='Jacketprod.info@gmail.com',
    MAIL_PASSWORD='sd33fjkl379jh3AA',
    MAIL_DEFAULT_SENDER='Jacketprod.info@gmail.com',
    MAIL_MAX_EMAILS=None,
    MAIL_ASCII_ATTACHMENTS=False,
))

mail = Mail(app)


@app.route('/google486a3d035b6420f4.html', methods=['GET'])
def verify():
    if request.method == 'GET':
        return render_template('google486a3d035b6420f4.html')


@app.route('/send_email/', methods=['POST', 'GET'])
def send_email():
    if request.method == 'POST' and request.json:  # and request.json:

        name = request.json.get('name')
        phone_number = request.json.get('phone')
        service = request.json.get('services')

        if not name or not phone_number or not service:
            response = jsonify({'message': 'Data {name}, {phone} and {service} is required'})
            response.status_code = 400
            return response

        msg = Message('Заявка x-fit!',
                      sender='ukraine.trends@gmail.com',
                      recipients=['info@trends.com.ua'])

        body = 'Новая заявка с сайта x-fit:\n' \
               'Имя: %s. Телефон: %s.\n' \
               'Услуга: %s' % (name, phone_number, service)

        msg.body = '%s' % body
        msg.html = "<b>%s</b>" % body

        mail.send(msg)

        response = jsonify({'message': 'Successful'})
        response.status_code = 200
        return response

    else:
        abort(404)


if __name__ == '__main__':
    app.run(debug=False)
