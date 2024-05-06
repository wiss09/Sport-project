const mongoose=require('mongoose');
const playerSchema=mongoose.Schema({
    name:String,
    position:String,
    number:Number,
    age:Number,
    team:{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Team'
    }
})
//Créer un  model et effecter le modelistation (matchSchema) à lui          
const player=mongoose.model('Player' , playerSchema)
module.exports=player;