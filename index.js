class ErrDetail {
  description () {
    return 'Includes the error stack trace in the HTTP response.'
  }

  middleware () {
    return async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        ctx.status = err.status || 500
        ctx.body = err.stack
      }
    }
  }
}

module.exports = ErrDetail
