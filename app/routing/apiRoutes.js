let potterchardata = require("../data/potterchars");
let seekerData = require("../data/seekerdata");

module.exports = function(app) {
    
// Get Requests
    
    app.get("/api/potterchars", function(req, res) {
        res.json(potterchardata);
      });

      app.get("/api/seekers", function(req, res) {
        res.json(seekerData);
      });

// Post Requests

app.post("/api/seekers", function(req, res) {
        seekerData.push(req.body);
        res.json(true);
      });

}