"use strict";

function assert(ok, message) {
    if (!ok) {
        throw new Error(message)
    }
}

function isFunction(fn) {
    return Object.prototype.toString.call(fn) === "[object Function]" && fn.constructor.name === "Function";
}

function isAsyncFunction(fn) {
    return Object.prototype.toString.call(fn) === "[object AsyncFunction]" && fn.constructor.name === "AsyncFunction";
}

function isPlainObject(value) {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }
    let prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.prototype;
}

function checkDefined(container, key) {
    assert(container.has(key), `Identifier "${key}" is not defined.`);
}


module.exports = {
    assert,
    isFunction,
    isAsyncFunction,
    isPlainObject,
    checkDefined,
    
}