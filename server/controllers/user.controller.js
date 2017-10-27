export const userController = (req, res) => {
    res.json({isAuthenticated: req.isAuthenticated()});
};
