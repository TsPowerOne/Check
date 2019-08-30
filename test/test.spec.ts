import { expect } from 'chai';
import { isEmpty, notEmpty, isInteger, isFloat, isNegative, isItalianZipCode } from '../lib/check';

let nullEmpty = [null, undefined, ""];
let notEmptyValue = [" ", 0, 123, "0", false, true];
let integerValue = [0, 1, 1000, "0", "1", "1000"];
let notIntegerValue = [0.5, 12.3, "0.5", "12.3", true, false, "text", "1.text", "1.text", "333/2222"];
let floatValue = [ -0.2, 0.1, 123.1123, "-0.2", "0.1", "123.1123"];
let notFloatValue = [ ...nullEmpty, false, true, "1.text", "333/333"];
let negativeValue = [-5, -33, "-2", "-123"];
let notNegativeValue = [...integerValue];
let capValue = ["00333", "71033"];
let notCapValue = ["a1222", "dkslfd", "11122121221", "1234", "123", "12", "1"];

describe('isItalianZipCode function', () => {
  capValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
        expect(isItalianZipCode(e)).to.equal(true);
      });
  });

  notCapValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
        expect(isItalianZipCode(e)).to.equal(false);
      });
  });
});

describe('isNegative function', () => {
  negativeValue.forEach(e=>{
      it(`if ${e} should return true`, () => {
        expect(isNegative(e)).to.equal(true);
      });
  });

  notNegativeValue.forEach(e=>{
      it(`if ${e} should return false`, () => {
        expect(isNegative(e)).to.equal(false);
      });
  });
});

describe('IsEmpty function', () => {
    nullEmpty.forEach(e=>{
        it(`if ${e} should return true`, () => {
          expect(isEmpty(e)).to.equal(true);
        });
    });
 
    notEmptyValue.forEach(e=>{
        it(`if ${e} should return false`, () => {
          expect(isEmpty(e)).to.equal(false);
        });
    });
});

describe('notEmpty function', () => {
 
  nullEmpty.forEach(e=>{
    it(`if ${e} should return true`, () => {      
      expect(notEmpty(e)).to.equal(false);
    });
  });
  
  notEmptyValue.forEach(e=>{
    it(`if ${e} should return false`, () => {
      expect(notEmpty(e)).to.equal(true);
    });
  });

});

describe('isInteger function', () => {
  
  integerValue.forEach(e=>{
    it(`if ${e} should return true`, () => {
      expect(isInteger(e)).to.equal(true);
    });
  });
  
  notIntegerValue.forEach(e=>{
    it(`if ${e} should return false`, () => {
      expect(isInteger(e)).to.equal(false);
    });
  });
});

describe('isFloat function', () => {
  
  floatValue.forEach(e=>{
    it(`if ${e} should return true`, () => {
      expect(isFloat(e)).to.equal(true);
    });
  });
  
  notFloatValue.forEach(e=>{
    it(`if ${e} should return false`, () => {
      expect(isFloat(e)).to.equal(false);
    });
  });
});