/**
 * Created by vlad on 9/25/2016.
 */
import nconf from 'nconf';
import path from 'path';
nconf
    .argv()
    .env()
    .file({
        file: path.join(__dirname, process.env.NODE_ENV + '.json')
    });

export default nconf;
