import config from '../configuration';

const jwt = {};

export const setToken = (res, token) => {
    res.setHeader('x-access-token', token);
};


export const getToken = (req) => {
    return req.headers['x-access-token'];
};

export const signToken = (data) => {
    return jwt.sign(
        data,
        config.get('key'),
        {expiresIn: config.get('expirationPeriod')}
    );
};

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        return jwt.verify(token, config.get('key'), (err, decoded) => {
            return err ? reject(err) : resolve(decoded);
        });
    });
};
