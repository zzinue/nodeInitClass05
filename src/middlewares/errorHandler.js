const logErrors = (err, req, res, next) => {
    console.log('an error occured');
    console.error(error)
    next(err);
}
const errorHandler = (err, req, res, next) => {
    const { message } = err;
    res.status(500).json({ message });
}
module.exports = { logErrors, errorHandler };