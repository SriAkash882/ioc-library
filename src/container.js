"use strict";

const {assert, isFunction, isAsyncFunction, isPlainObject, checkDefined} = require('./functions')

class Container {

    static provider(register) {
      return ({ register });
    }
    
    constructor(values) {
        this._items = {};
        this._instances = new Map();
        this._factories = new Set();
        this._protected = new Set();
        values = isPlainObject(values) ? values : {};
        Object.keys(values).forEach(function(key) {
            this.set(key, values[key]);
        }, this);
    }
    
    
    get(key) {
        checkDefined(this, key);
        let item = this._items[key];
        let obj;
        if (isFunction(item) || isAsyncFunction(item)) {
            if (this._protected.has(item)) {
                obj = item;
            } else if (this._instances.has(item)) {
                obj = this._instances.get(item);
            } else {
                obj = item(this);
                if (!this._factories.has(item)) {
                    this._instances.set(item, obj);
                }
            }
        } else {
            obj = item;
        }
        return obj;
    }
    

    set(key, value) {
        this._items[key] = value;
    }

    has(key) {
        return this._items.hasOwnProperty(key);
    }

    keys() {
        return Object.keys(this._items);
    }

    raw(key) {
        checkDefined(this, key);
        return this._items[key];
    }
}

module.exports = Container;
