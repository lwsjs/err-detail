[![view on npm](https://img.shields.io/npm/v/lws-err-detail.svg)](https://www.npmjs.org/package/lws-err-detail)
[![npm module downloads](https://img.shields.io/npm/dt/lws-err-detail.svg)](https://www.npmjs.org/package/lws-err-detail)
[![Build Status](https://travis-ci.org/lwsjs/err-detail.svg?branch=master)](https://travis-ci.org/lwsjs/err-detail)
[![Dependency Status](https://badgen.net/david/dep/lwsjs/err-detail)](https://david-dm.org/lwsjs/err-detail)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# lws-err-detail

Middleware plugin for [lws](https://github.com/lwsjs/lws) to include the error stack trace in the HTTP response. Always use as the first middleware in the stack.

In this example, `broken.js` is a middleware which throws an exception.

```
$ lws --stack lws-err-detail broken.js
Listening on http://mba4.local:8000, http://127.0.0.1:8000, http://192.168.0.200:8000
```

With `lws-err-detail` at the top of the middleware stack, the response now includes the exception stack trace.

```
$ curl -i http://127.0.0.1:8000
HTTP/1.1 500 Internal Server Error
Content-Type: text/plain; charset=utf-8
Content-Length: 838
Date: Fri, 21 Jun 2019 10:13:06 GMT
Connection: keep-alive

Error: broken
    at /Users/lloyd/Documents/lwsjs/err-detail/broken.js:4:13
    at dispatch (/Users/lloyd/Documents/lwsjs/local-web-server/node_modules/koa-compose/index.js:42:32)
    at /Users/lloyd/Documents/lwsjs/err-detail/index.js:9:15
    at dispatch (/Users/lloyd/Documents/lwsjs/local-web-server/node_modules/koa-compose/index.js:42:32)
    at /Users/lloyd/Documents/lwsjs/local-web-server/node_modules/koa-compose/index.js:34:12
    at Application.handleRequest (/Users/lloyd/Documents/lwsjs/local-web-server/node_modules/koa/lib/application.js:151:12)
    at Server.handleRequest (/Users/lloyd/Documents/lwsjs/local-web-server/node_modules/koa/lib/application.js:133:19)
    at Server.emit (events.js:200:13)
    at parserOnIncoming (_http_server.js:713:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:116:17)err-detail
```

* * *

&copy; 2019 Lloyd Brookes \<75pound@gmail.com\>.
