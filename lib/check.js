"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/
var regexpr_1 = require("@tspower/regexpr");
/**
* isEmpty
* @param value  value to test
* @return true or false
*/
function isEmpty(value) {
    if (value != null && value != undefined && value.length != 0)
        return false;
    return true;
}
exports.isEmpty = isEmpty;
/**
* notEmpty
* @param value  value to test
* @return true or false
*/
function notEmpty(value) {
    if (isEmpty(value))
        return false;
    return true;
}
exports.notEmpty = notEmpty;
/**
* isInteger
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isInteger(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.integer))
            return true;
        return false;
    }
    return false;
}
exports.isInteger = isInteger;
/**
* isFloat
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isFloat(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.float))
            return true;
        return false;
    }
    return false;
}
exports.isFloat = isFloat;
/**
* isNegative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isNegative(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.float))
            return true;
        return false;
    }
    return false;
}
exports.isNegative = isNegative;
/**
* isItalianZipCode
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianZipCode(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.cap))
            return true;
        return false;
    }
    return false;
}
exports.isItalianZipCode = isItalianZipCode;
/**
* isEmail
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isEmail(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.email))
            return true;
        return false;
    }
    return false;
}
exports.isEmail = isEmail;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isGenericPhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.genericPhoneNumber))
            return true;
        return false;
    }
    return false;
}
exports.isGenericPhoneNumber = isGenericPhoneNumber;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianMobilePhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regexpr_1.italianMobilePhone))
            return true;
        return false;
    }
    return false;
}
exports.isItalianMobilePhoneNumber = isItalianMobilePhoneNumber;
