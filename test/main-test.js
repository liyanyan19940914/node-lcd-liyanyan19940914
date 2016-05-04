var main = require('../main/main.js');
var fixtures = require('../main/lcdDigits.js');

describe('test main',function () {
    var allLcds;
    beforeEach(function () {
        allLcds= fixtures.loadAllLcds();
    });
    it('return correct print',function () {
        spyOn(console,'log');
        main.createLcd(910);
        var print='._. ... ._. \n'+'|_| ..| |.| \n'+'..| ..| |_| ';
        expect(console.log).toHaveBeenCalledWith(print);
    });

    describe('test splitNumber', function () {
        var input=910;
        it('return correct numberArray', function () {
            var numberArray = fixtures.buildArray(input);
            expect(numberArray).toEqual([9, 1, 0]);
        });
    });

    describe('test buildLcdArray', function () {
        var numberArray;
        beforeEach(function () {
            numberArray=[9,1,0];
        });

        it('return correct lcdArray',function () {
            var allLcds=fixtures.loadAllLcds();
            var lcdArray=[['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];
            expect(fixtures.buildLcdArray(numberArray,allLcds)).toEqual(lcdArray);
        });
    });

    describe('test toLcd',function () {
        it('return correct print',function () {
            var lcdArray=[['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];
            spyOn(console,'log');
            fixtures.toLcd(lcdArray)
            var print='._. ... ._. \n'+'|_| ..| |.| \n'+'..| ..| |_| ';
            expect(console.log).toHaveBeenCalledWith(print);
        });
    });
});
