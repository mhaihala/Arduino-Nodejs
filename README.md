# Arduino-Nodejs-HTML
Communication between Arduino and HTML using Nodejs and Socket.IO

Sensor "DHT11 Temperature & Humidity Sensor V2" connected to "Arduino Uno WiFI Rev2" communicating with HTML through Nodejs server

The Arduino code currently connects to WiFi for possibility of wireless data transfer but this is currently not used so if you are testing the code yourself the WiFi components can be safely commented out.

In order for this setup to work you need to:
Install => "DHT Sensor library" + "Adafruit Unified Sensor" library for Arduino (WiFiNINA is optional for the WiFi capabilities).

DHT11 Sensor connection to the Arduino board => Black/- to GRND, Red/+ to 5V, Green/Data to Digital 2

![IMG_20240213_103605](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/8ea34700-72b2-42ee-85fb-07fa90e9defd)


To see what COM port you are using with the Arduino app click on tools on the top bar:

![image](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/f0aeedc7-9baf-4104-a699-ddfc1a765651)

To get parameters of COM port use "mode" in cmd:

![image](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/2693e44e-f819-4e98-98cb-b8ae85110662)


Change parameters accordingly in "Arduino.js" for the "const port":

![image](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/f70a56ed-cb71-4409-ae29-7d57d73d1657)






[![Video of code](https://img.youtube.com/vi/z-D6T3KnEGo/0.jpg)](https://www.youtube.com/watch?v=z-D6T3KnEGo)


Shamelessly stolen from Adam Thomas:
https://github.com/codeadamca/arduino-to-nodejs/tree/main
