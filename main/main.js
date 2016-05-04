exports.createLcd=function(input){
    printLcd=require('./lcdDigits');
    var allLcds=printLcd.loadAllLcds();
    var numberArray=printLcd.buildArray(input);
    var lcdArray=printLcd.buildLcdArray(numberArray,allLcds);
    printLcd.toLcd(lcdArray);
}