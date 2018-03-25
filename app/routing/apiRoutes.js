var friends = require("../data/friends");
var path = require("path");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {


        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        var bestMatch = 1000;
        var index = -1;

        for (var i = 0; i < friends.length; i++) {

            total = 0;

            for (var j = 0; j < newScore.length; j++) {

                var diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
            }
            if (total < bestMatch) {
                bestMatch = total;
                index = i;
            }
        }
        
        console.log('Best Match:', friends[index]);

        var matchFriend = {
            name: friends[index].name,
            photo: friends[index].photo
        }

console.log(matchFriend.name)
console.log(matchFriend.photo)

        friends.push(newFriend);
        res.json(matchFriend);

        
    });
};
