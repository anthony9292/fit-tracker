const ExerciseModel =  require("../models/models"); 

modele.exports = function (app) { 
    app.get("api/workouts", (req, res) => { 
        ExerciseModel.findOne({})
        .then(workout => { 
            res.json(workout); 
        })
        .catch(err => { 
            res.json(err); 
        });
    })
}