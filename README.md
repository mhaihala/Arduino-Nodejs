# Arduino-Nodejs-HTML
Communication between Arduino and HTML using Nodejs and Socket.IO

Sensor "DHT11 Temperature & Humidity Sensor V2" connected to "Arduino Uno WiFI Rev2" communicating with HTML through Nodejs server

The Arduino code currently connects to WiFi for possibility of wireless data transfer but this is currently not used so if you are testing the code yourself the WiFi components can be safely commented out.
In order for this setup to work you need to:
Install => "DHT Sensor library" + "Adafruit Unified Sensor" library for Arduino (WiFiNINA is optional for the WiFi capabilities).
To see what COM port you are using with the Arduino app:
![image](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/f0aeedc7-9baf-4104-a699-ddfc1a765651)

To get specs of COM port use "mode" in cmd:
![image](https://github.com/mhaihala/DHT11-to-HTML/assets/149393029/155574e2-9082-40bb-a65e-8d399b9ff2e4)





[![Video of code](https://img.youtube.com/vi/z-D6T3KnEGo/0.jpg)](https://www.youtube.com/watch?v=z-D6T3KnEGo)


Shamelessly stolen from Adam Thomas:
https://github.com/codeadamca/arduino-to-nodejs/tree/main
