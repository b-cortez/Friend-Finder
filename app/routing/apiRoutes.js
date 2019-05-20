var friends = require("../data/friends");


module.exports = function (app) {
    //Gets total list of friend entries 
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    // Adds new friend entry  
    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        // parseInt for scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriends = 0;
        var leastDifferent = 40;

        // Examine all existing friends in the list
        for (var i = 0; i < friends.length; i++) {

            // Compute differenes for each question
            var totalScore = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var diff = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalScore += diff;
            }

            if (totalScore < leastDifferent) {
                bestFriends = friends[i].name;
                leastDifferent = totalScore;
            }
        }

        // Add new user
        friends.push(user);

        // Send appropriate response
        res.json(friends[bestFriends]);
    });
};
