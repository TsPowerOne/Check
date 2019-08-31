/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/
import {integer, float, cap, email, genericPhoneNumber, italianMobilePhone, negative} from '@tspower/regexpr';


/**
* Return if value is undefined, null or empty
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export  function isEmpty(value: any): boolean {
    if (value != null && value != undefined && value.length != 0) return false;
    return true;
}
/**
* invert Empty function
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function notEmpty(value: any): boolean {
    if (isEmpty(value)) return false;
    return true;
}
/**
* Return if value is an integer
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isInteger(value: any) {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return integer.test(value);
    }
    return false;
}
/**
* return if value is a float
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export  function isFloat(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return float.test(value);
    }
    return false;
}
/**
* Return if value is negative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isNegative(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return negative.test(value);
    }
    return false;
}
/**
* Return if value is an Italian Zip Code
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isItalianZipCode(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return cap.test(value);
    }
    return false;
}
/**
* return if value is an Email
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isEmail(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return email.test(value);
    }
    return false;
}
/**
* return if value is a Generic Phone Number
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isGenericPhoneNumber(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return genericPhoneNumber.test(value);
    }
    return false;
}
/**
* return if value is an Italian Mobile Phone Number
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function  isItalianMobilePhoneNumber(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        return italianMobilePhone.test(value);
    }
    return false;
}


