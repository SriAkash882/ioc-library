# IOC Library

## About
IOC library provides a container that enables the concept of Inversion of Control. This container containes the some methods that can be used to decouple your tightly coupled classes. It also provides proper error messages when correct arguments are not passed to the functions


## Prerequisites
1. Node.JS version 10 or higher
2. Npm version 6 or higher


## Installation and Usage
1. Installing the library
    > npm install ioc-library

2. Require the library in your file
    > const container = require('ioc-library/src/container')

3. Use the library functions
    > const container = new Container

    > container.set('key', 'value')

## Methods Available

1. get - to get the value of the object based on key
    > container.get('key name')
    >> returns the object with specified key

2. set - to set the key : value pair in the object
    > container.set('key', 'value')

3. has - to check if a key is present in object
    > container.has('key name')
    >> returns true / false

4. keys - to convert the object into array of keys
    > container.keys()
    >> returns array or keys

5. raw - provide the value of the key
    > container.raw('key name')
    >> return the value associated with the key

