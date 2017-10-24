import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, murkup) => {
    if (err) {
        return console.log(err);
    }
    const $ = cheerio.load(murkup);

    $('head').prepend('<link rel="stylesheet"  href="style.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });
});
