/********************************************************
Database Connection Settings
*********************************************************/

exports.conString = "postgres://postgres:Milkyway6933@localhost3090:5432/todos";



module.exports = {
   query: function(text, values, cb) {
      pg.connect(function(err, client, done) {
        console.log(pg.connect());
        client.query(text, values, function(err, result) {
          done();
          cb(err, result);
        })
      });
   }
}
