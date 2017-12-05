var parameters = {
    mode : "photo",
    output : changeFilename(),
    width : 400,
    height : 300,
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