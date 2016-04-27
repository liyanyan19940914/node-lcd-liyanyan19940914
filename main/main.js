
exports.printLcd = function (input) {
    var allLcd = require('../test/fixtures.js');
    var allLcds = allLcd.loadAllLcds();
    var main = require('./main.js');
    var numberArray = main.splitNumber(input);
    var lcdArray = main.buildLcdArray(numberArray,allLcds);
    main.toLcd(lcdArray);
}

exports.splitNumber = function(input){
    input += '';

    var numberArray=input.split('');

    for(var i=0;i<numberArray.length;i++){
        numberArray[i] = parseInt(numberArray[i]);
    }

    return numberArray;
}

exports.buildLcdArray = function (numberArray,allLcds) {

    var lcdArray = [];
    for (var j = 0; j < allLcds.length; j++) {
        lcdArray[j] = '';
        for (var i = 0; i < numberArray.length; i++) {
            lcdArray[j] += allLcds[j][numberArray[i]];
        }
    }
    return lcdArray
}

exports.toLcd = function (lcdArray) {
    var print='';
    for(var i=0;i<lcdArray.length;i++){
        print+=(lcdArray[i]+'\n');
    }
    console.log(print);
}