const db = require("../models"); 
const router = require("express").Router();

// retrieves all workouts and adds a duration 
router.get("/api/workouts", (req, res) => { 
    db.Workout.aggregate([{ $set: { 
        totalDuration: { $sum: "$exercises.duration"},
    }},
    ])
    .then((workouts) => { 
        res.json(workouts);
    })
       .catch((err) => { 
           console.error(err); 
           res.json(err); 
       })});


    //posting new workouts
     router.post("/api/workouts", (req, res) => { 
         db.Workout.create(req.body)
         .then((workout) => {
             res.json(workout);
         })
         .catch((err) => { 
             console.error(err);
             res.json(err);
         });
     }); 

//updates workouts by id 
  router.put("/api/workouts/:id", (req, res) => { 
      db.Workout.findOneAndUpdate (
              { _id: req.params.id},
              { $push: { exercises: req.body } },
              { new: true }
          ).then((workout) => { 
              res.json(workout); 
          })
          .catch((err) => { 
              console.error(err);
              res.json(err);
          });
        });
   
    //retrieves all workout information from the past 7 days 
   router.get("/api/workouts/range", (req, res) => { 
     db.Workout.aggregate([ 
         {
             $set: { 
                 totalDuration: {$sum: "$exercises.duration"}, 
             },
         },
     ] 

     ).sort({ "day": -1})
       .limit(7)
    
       .then((workouts) => { 
           workouts.reverse();
           res.json(workouts); 
       })
       .catch((err) => { 
           console.error(err); 
           res.json(err);
       });
    }); 


    module.exports = router; 

 