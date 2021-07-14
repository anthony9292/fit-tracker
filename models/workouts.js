const mongoose = require('mongoose'); 
const Schema =  mongoose.Schema

const workout = new Schema ({ 
    exercises:  [{
    type: {
        type: String,
        trim: true,
        required: true,
        },
        name: {
            type:String, 
            trim: true, 
            required: true,
        }, 

         duration: { 
             type: Number, 
             trim: true, 
             required: true,

         }, 
         weight: { 
             type: Number, 
         }, 
      reps: { 
          type: Number, 
      },
      sets: { 
          type: Number,
      },
       distance: { 
           type: Number,
       },
    }
],
  day: { 
      type: Date, 
      default: () => Date.now(),
  },
}); 

const Workout = mongoose.model("Workout", workout); 


module.exports = Workout;