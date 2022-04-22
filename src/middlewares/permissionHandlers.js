const adminHandler = async(req, res, next) => {
    try {
        console.log('req.params', req.params);
        const { role } = req.params.tokenPayload;
        if (role !== 'admin') {
            throw new Error('You are not authorized to perform this action')
        }
        next()
    } catch (err) {
        res.status(401).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = { adminHandler };