//Example to use ioc containers

const Container = require('./src/container')

const container = new Container({})
container.set('name','abc')
console.log(container.raw('name'))

