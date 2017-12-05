function formatNotificationDate (filename) {
    // const regex = /^(?:.*?)(\d*)-(\d*)-(\d*)\w(\d*)-(\d*)-(\d*)/g;
    const regex = /(?:.\/photos\/)(\d*)-(\d*)-(\d*)T(\d*)-(\d*)-(\d*)/g;

    var date = {
        year : '',
        month : '',
        day : '',
        hours : '',
        minutes : '',
        seconds : ''
    };

    var matches = regex.exec(filename);

    matches.forEach((match, groupIndex) => {
        if(groupIndex > 0)
            date[Object.keys(date)[groupIndex-1]] = match;
    });

    return date.day + '-' + date.month + '-' + date.year +
            '   ' + date.hours + ' : ' + date.minutes + ' : ' + date.seconds;
}

module.exports = {
    formatNotificationDate : formatNotificationDate
};