# Smart Monitoring System – IoT platform

![screenshot from 2018-01-04 20-21-46](https://user-images.githubusercontent.com/16049905/36019755-8ce5fed0-0d80-11e8-89ac-6ed08b29cc66.png)


## Description 
Smart Monitoring System is an automatic monitoring system, using Rapberry Pi as its computing unit, mini HD camera as means of acquiring needed data, and what’s most important – web application,
which will act as control center. Web application was written in React, and device is being controller by Node server.

![schema](https://user-images.githubusercontent.com/16049905/36019726-7c89e60a-0d80-11e8-89ac-8bf47226421e.png)


Main idea is that system works in two different modes: “Standby mode” and “Stream mode”.
#### Standby mode 
Whenever motion is detected photo is being captured and saved to
database with notification which contains date of event and a photo
taken as an attachment. Also user is being notified by an email. This mode works as default.

#### Stream mode
User can see a live stream from camera. In this mode he/she is capable of wirelessly controlling camera’s angles using servomechanisms so that nothing will be missed.



































	
