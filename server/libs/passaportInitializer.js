const passportInitializer = (passport, strategy) => {
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((githubId, done) => done(null, githubId));
    passport.use(strategy);
};

export default passportInitializer;
