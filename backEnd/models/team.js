const mongoose=require('mongoose');
const teamSchema=mongoose.Schema({
    name:String,
    owner:String,
    foundation:String,
    players:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Player'
    }],
    stadium:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Stadium'
    }
})
//Créer un  model et effecter le modelistation (matchSchema) à lui          
const team=mongoose.model('Team' , teamSchema)
module.exports=team;