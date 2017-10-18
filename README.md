# CODE-BATTLE
# Frontspot code battle platform

# Command Line Commands

## Development

```Shell
npm run start
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```Shell
npm start
```

Starts the development server and makes application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

### Production

```Shell
npm run start:production
```

 * Runs tests (see `npm test`)
 * Builds your app (see `npm run build`)
 * Starts the production server (see `npm run start:prod`)

The app is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```Shell
npm run build
```

Preparationsfor deployment app (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to web server to see work live!

## Unit testing

```Shell
npm test
```

Test application with the unit tests specified in the `**/tests/*.js` files
throughout the application.  
All the `test` commands allow an optional `-- [string]` argument to filter
the tests run by Jest. Useful if you need to run a specific test only.

```Shell
# Run only the Button component tests
npm test -- Button
```

## Linting

```Shell
npm run lint
```

