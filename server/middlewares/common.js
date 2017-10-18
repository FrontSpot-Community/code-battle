/* eslint-disable no-console */
import config from '../configuration';
import path from 'path';
import {getHash} from '../libs/crypto';
import {createError} from '../libs/error';

export function listen(err) {
    return err
        ? console.log(err)
        : console.log(`Server is running on port:${config.get('port')}`);
}
export function errorHandler(err, req, res, next) {
    return res.status(err.status ? err.status : 500).json(err);
}
export function sendIndexHtml(req, res) {
    res.sendFile(path.join(
        global._root,
        config.get('static') + '/index.html')
    );
}

export async function hash(req, res, next) {
    try {
        if(req.body.password) {
            if(req.body.repeatPassword) {
                if(req.body.repeatPassword !== req.body.password) {
                    return next(createError('Passwords must be the same', 400));
                } else {
                    req.body.password = await getHash(req.body.password);
                    next();
                }
            } else {
                next(createError('Repeat Password field required'));
            }
        } else {
            next(createError('Password field required'));
        }
    } catch(exp) {
        next(exp);
    }
}
