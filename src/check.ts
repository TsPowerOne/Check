/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/
import {integer, float, cap, email, genericPhoneNumber, italianMobilePhone} from '@tspower/regexpr';

/**
* isEmpty
* @param value  value to test
* @return true or false
*/
export  function isEmpty(value: any): boolean {
    if (value != null && value != undefined && value.length != 0) return false;
    return true;
}
/**
* notEmpty
* @param value  value to test
* @return true or false
*/
export function notEmpty(value: any): boolean {
    if (isEmpty(value)) return false;
    return true;
}
/**
* isInteger
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isInteger(value: any) {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(integer)) return true;
        return false;
    }
    return false;
}
/**
* isFloat
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export  function isFloat(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(float)) return true;
        return false;
    }
    return false;
}
/**
* isNegative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isNegative(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(float)) return true;
        return false;
    }
    return false;
}
/**
* isItalianZipCode
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isItalianZipCode(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(cap)) return true;
        return false;
    }
    return false;
}
/**
* isEmail
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isEmail(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(email)) return true;
        return false;
    }
    return false;
}
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isGenericPhoneNumber(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(genericPhoneNumber)) return true;
        return false;
    }
    return false;
}
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function  isItalianMobilePhoneNumber(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(italianMobilePhone)) return true;
        return false;
    }
    return false;
}


