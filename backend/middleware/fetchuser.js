const jwt = require('jsonwebtoken');
const JWT_SECRET = "moazzamis$here"

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token) {
        res.status(401).send("PLease authenticate using a valid token")
    }

    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send("Please autheticate using a valid token")
    }
}

module.exports = fetchuser;