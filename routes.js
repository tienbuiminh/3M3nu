this.register = function(app) {
  app.get('/', function (req, res) {
    res.send('Hello World this is a test!');
  });
};
