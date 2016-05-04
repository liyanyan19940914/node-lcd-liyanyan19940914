function loadAllLcds() {
    return {0:['._.','|.|','|_|'],1:['...','..|','..|'],2:['._.','._|','|_.'],3:['._.','._|','._|'],4:['...','|_|','..|'],
        5:['._.', '|_.','._|'],6:['._.','|_.','|_|'],7:['._.','..|','..|'],8:['._.','|_|','|_|'],9:['._.','|_|','..|']};
}
function buildArray(input) {
    input += '';
    var numberArray = input.split('');

    for (var i = 0; i < numberArray.length; i++) {
        numberArray[i] = parseInt(numberArray[i]);
    }
    return numberArray;
}
function buildLcdArray(numberArray,allLcds) {
    var lcdArray=[];

    for(var i=0;i<numberArray.length;i++) {
        lcdArray.push(allLcds[numberArray[i]]);
    }
    return lcdArray;
}
function toLcd(lcdArray) {
    var print = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < lcdArray.length; j++) {
            print += lcdArray[j][i]+" ";
            if (i!=2&&j===lcdArray.length-1) {
                print += '\n';
            }
        }
    }
    console.log(print);
}
module.exports={
    loadAllLcds:loadAllLcds,
    buildArray:buildArray,
    buildLcdArray:buildLcdArray,
    toLcd:toLcd
}