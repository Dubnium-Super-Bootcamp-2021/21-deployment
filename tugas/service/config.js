const rc = require('rc');

const defaultConfig = {
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dubnium',
  },
  objectStorage: {
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
  },
  server: {
    portWorker: 7001,
    portTask: 7002,
    portPerformance: 7003,
  },
};

const config = rc('tm', defaultConfig);

module.exports = {
  config,
};
