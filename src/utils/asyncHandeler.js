// metthod one of handeling request  using promise

// const asyncHandeler = async (requestHandeler) => {
//   (error, req, res, next) => {
//     Promise.resolve(requestHandeler(error, req, res, next)).catch((error) => {
//       next(error)
//     })
//   }

// }

// export { asyncHandeler }


// method 2 of handeling request using try and catch 

export const asyncHandeler = (fn) = async (error, req, res, next) => {
  try {
    await fn(error, req, res, next)

  } catch (error) {
    res.err(err.code || 500).json({
      success: false,
      message: err.message
    })
  }
}