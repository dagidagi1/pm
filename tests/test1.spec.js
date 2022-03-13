const expect = require('chai').expect;

describe('Array', ()=>{
    describe('#sort', ()=>{
        it('should sort the array by name', ()=>{
            var names = ['misha','betsalel', 'dagi', 'yossi'];
            expect(names.sort()).to.be.eql(['betsalel','dagi', 'misha', 'yossi']);
        });
    });
});