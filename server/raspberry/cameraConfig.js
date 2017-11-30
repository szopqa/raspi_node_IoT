var parameters = {
    mode : "photo",
    output : changeFilename(),
    width : 640,
    height : 480,
    quality : 100,
    encoding : 'jpg',
};

function changeFilename() {
    var fileName = new Date().toISOString().slice(0,19).replace(/:/g,"-");
    return photoPath = './photos/' + fileName + '.jpg';

}

module.exports = {
    parameters : parameters,
    changeFilename : changeFilename
};