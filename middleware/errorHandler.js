const { constats } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constats.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constats.UNAUTHORIZED:
      res.json({
        title: "Unauthorized access error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constats.FORBIDDEN:
      res.json({
        title: "Forbidden error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constats.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constats.SERVER_ERROR:
      res.json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
        console.log("No Error, all Good !");
      break;
  }
};

module.exports = errorHandler;
