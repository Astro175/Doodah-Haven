const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
        // The user is an admin so allow access to the route
    }
    else {
        res.status(403).json({ message: 'Admin access required, Forbidden'});
        // The user is not an admin so forbid access
    }
}

module.exports = isAdmin;