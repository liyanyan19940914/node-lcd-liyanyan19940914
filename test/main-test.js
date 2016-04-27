var main = require('../main/main.js');
var fixtures = require('./fixtures.js');

describe('unit testing',function () {
    var allLcds;
    beforeEach(function () {
        allLcds= fixtures.loadAllLcds();
    });

    describe('test splitNumber', function () {
        it('return correct numberArray', function () {
            var numberArray = main.splitNumber(910);
            expect(numberArray).toEqual([9, 1, 0]);
        });
    });

    describe('test buildLcdArray', function () {

        it('return correct lcdArray',function () {
            expect(main.buildLcdArray([9,1,0],allLcds)).toEqual(['._. ... ._. ','|_| ..| |.| ','..| ..| |_| '])
        });
    });

    describe('test toLcd',function () {
        it('return correct print',function () {
            spyOn(console,'log');
            main.printLcd(910);
            var print='._. ... ._. \n'+'|_| ..| |.| \n'+'..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(print);
        });
    });
});