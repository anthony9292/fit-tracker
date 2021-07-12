const ExerciseModel =  require("../models/models"); 

module.exports = function (app) { 

    app.get("api/workouts", (req, res) => { 
        ExerciseModel.findOne({})
        .then(workout => { 
            res.json(workout); 
        })
        .catch(err => { 
            res.json(err); 
        });
    })

    app.post("api/workouts", (req, res)  => { 
        ExerciseModel.create({}) 
         .then(workout => { 
             res.json(workout); 
         })
         .catch(err => { 
             res.json(err); 
         }); 
 
        })

    


}