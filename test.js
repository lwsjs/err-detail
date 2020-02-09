const Tom = require('test-runner').Tom
const a = require('assert').strict
const fetch = require('node-fetch')
const Lws = require('lws')
const ErrDetail = require('./')

const tom = module.exports = new Tom()

tom.test('err stack trace returned', async function () {
  const port = 9800 + this.index
  class Broken {
    middleware () {
      return function (ctx, next) {
        throw new Error('broken')
      }
    }
  }
  const lws = Lws.create({
    port,
    stack: [ ErrDetail, Broken ]
  })
  const response = await fetch(`http://localhost:${port}/`)
  lws.server.close()
  a.equal(response.status, 500)
  const body = await response.text()
  a.ok(/test.js/.test(body))
})
