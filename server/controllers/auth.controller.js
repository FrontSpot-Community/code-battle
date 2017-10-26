import axios from 'axios';
export const login = (req, res) => {
    res.json();
};


export const auth = (req, res) => {
    const url = 'https://github.com/login/oauth/access_token';
    const clientId = '0cebe6182174a9aab2d0';
    const clientSecret = '89e7d0c4743410198bb8ec1e5cf29f6106cfe634';
    const {code} = req.query;

    axios
        .post(`${url}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&scope=user`)
        .then((response) => {
            return res.redirect('/');
        })
        .catch((err) => {
            return res.redirect('/login');
        });
};
