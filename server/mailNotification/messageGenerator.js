module.exports = (function () {

    const getEmailBody = function (notificationDate, image, webAppAddress) {
        const imageSrc = '<img src=\"'+image+'\">';


        // '   <style>  '  +
        // '       body {  '  +
        // '           background: #681f1f;  '  +
        // '           text-align: center;  '  +
        // '           margin: auto;  '  +
        // '       }  '  +
        // '       .header{  '  +
        // '           font-size: 2em;  '  +
        // '           font-weight: bold;  '  +
        // '       }  '  +
        // '       .activity-date{  '  +
        // '           font-weight: normal;  '  +
        // '           font-size: 1em;  '  +
        // '       }  '  +
        // '       .webapp-link{  '  +
        // '           font-size: 1.4em;  '  +
        // '       }  '  +
        // '   </style>  '  +
        // '     '  +
        // '   <div class="email-body">  '  +
        // '       <div class="header">  '  +
        // '           Activity from Smart Monitoring System  '  +
        // '           <div class="activity-date">  '  +
        //                 notificationDate  +
        // '           </div>  '  +
        // '       </div>  '  +
        // '       <div class="description">  '  +
        // '           <h1>Motion Detected !</h1>  '  +
        // '           <img src="'+image+'\">'  +
        // '           </br>  '  +
        // '           <div class="webapp-link">  '  +
        // '               You can view livestream by going to a <a href=\"'+webAppAddress+'\">web application</a>  '  +
        // '           </div>  '  +
        // '       </div>  '  +
        // '  </div>  ' ;

        const notificationBody =
        '   <div class="email-body" style="background: #b9d2ff;text-align: center;margin: auto;">  '  +
        '       <div class="header" style=" font-size: 2em; font-weight: bold; margin-top: 5%">  '  +
        '           Activity from Smart Monitoring System  '  +
        '           <div class="activity-date" style="font-weight: normal;font-size: 1em;">  '  +
                        notificationDate  +
        '           </div>  '  +
        '       </div>  '  +
        '       <div class="description">  '  +
        '           <h1>Motion Detected !</h1>  '  +
        '               <img src="'+image+'\">'  +
        '       </br>  '  +
        '           <div class="webapp-link" style="font-size: 1.4em;">  '  +
        '               You can view livestream by going to a <a href="'+webAppAddress+'\">web application</a>  '  +
        '           </div>  '  +
        '       </div>  '  +
        '  </div>  ' ;

        return notificationBody;
    };

    return {
        getEmailBody
    }
})();