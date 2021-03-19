import serial
import time

import json
import os

arduino = serial.Serial('COM4',9600)

data = {}
DIR = "C:\\xampp\htdocs\PROYECTO\WEB"
FILE_NAME = "index.json"

data['historico'] = [0]

anterior = -1

while 1:
	dato_lectura = int(arduino.readline())
	voltaje = 60/255*dato_lectura
	data['voltaje'] = voltaje

	if data['historico'][-1] != voltaje:
		data['historico'].append(voltaje)

	with open(os.path.join(DIR, FILE_NAME), 'w') as file:
		json.dump(data,file)
	
	if anterior != voltaje:
		anterior = voltaje
		print(voltaje," volts")

arduino.close()
