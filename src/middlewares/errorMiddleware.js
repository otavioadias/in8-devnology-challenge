export const errorMiddleware = (err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
};