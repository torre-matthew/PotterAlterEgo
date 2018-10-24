let potterchardata = require("../data/potterchars");

module.exports = function(app) {
    app.get("/api/potterchars", function(req, res) {
        res.json(potterchardata);
      });
}