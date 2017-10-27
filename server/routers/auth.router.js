import express from 'express';
import passport from 'passport';

const router = express.Router();
router.get('/auth/github', passport.authenticate('github', {scope: 'repo'}));
router.get('/auth/github/callback',
    passport.authenticate('github', {failureRedirect: '/login'}),
    function(req, res) {
        res.redirect('/');
    });


export default router;
