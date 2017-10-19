import mongoose from 'mongoose';
import config from '../configuration';
/* eslint-disable no-console */

mongoose.connect(config.get('db:connection'), {useMongoClient: true});

const connection = mongoose.connection;

connection.on('error', function(error) {
    console.log('db connection error', error);
});

connection.once('open', function() {
    console.log('db is connected');
});
connection.once('close', function() {
    console.log('db is closed');
});
export default connection;
