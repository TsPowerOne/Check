"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/
var regexpr_1 = require("@tspower/regexpr");
/**
* Return if value is undefined, null or empty
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isEmpty(value) {
    if (value != null && value != undefined && value.length != 0)
        return false;
    return true;
}
exports.isEmpty = isEmpty;
/**
* invert Empty function
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function notEmpty(value) {
    if (isEmpty(value))
        return false;
    return true;
}
exports.notEmpty = notEmpty;
/**
* Return if value is an integer
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isInteger(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.integer.test(value);
    }
    return false;
}
exports.isInteger = isInteger;
/**
* return if value is a float
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isFloat(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.float.test(value);
    }
    return false;
}
exports.isFloat = isFloat;
/**
* Return if value is negative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isNegative(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.negative.test(value);
    }
    return false;
}
exports.isNegative = isNegative;
/**
* Return if value is an Italian Zip Code
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianZipCode(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.cap.test(value);
    }
    return false;
}
exports.isItalianZipCode = isItalianZipCode;
/**
* return if value is an Email
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isEmail(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.email.test(value);
    }
    return false;
}
exports.isEmail = isEmail;
/**
* return if value is a Generic Phone Number
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isGenericPhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.genericPhoneNumber.test(value);
    }
    return false;
}
exports.isGenericPhoneNumber = isGenericPhoneNumber;
/**
* return if value is an Italian Mobile Phone Number
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianMobilePhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        return regexpr_1.italianMobilePhone.test(value);
    }
    return false;
}
exports.isItalianMobilePhoneNumber = isItalianMobilePhoneNumber;
