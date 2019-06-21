class ErrDetail {
  description () {
    return 'Includes the error stack trace in the HTTP response.'
  }

  middleware () {
    return async (ctx, next) => {
      try {
        await next()
      } catch (err) {
        err.expose = true
        err.message = err.stack
        throw err
      }
    }
  }
}

module.exports = ErrDetail
