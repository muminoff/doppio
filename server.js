var redis = require('redis'),
    rclient = redis.createClient(),
    geohash = require('ngeohash'),
    faker = require('faker'),
    winston = require('winston');

winston.level = 'debug';

var myobj1 = { 180: ["uid1"]};

winston.log("info", myobj1);

rclient.on("error", function(err) {
  winston.log("Error" + err);
});


rclient.get("foo", function(err, reply) {
  winston.log(reply);
});

for(i=0;i<100;i++){
  rclient.sadd("aaaa", faker.internet.userName());
  winston.log("info", "ok" + i);
}

rclient.scard("aaaa", function(err, reply) {
  winston.info(reply);
});

rclient.quit();
