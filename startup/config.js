module.exports = function (app, express) {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.static("public"));
};
