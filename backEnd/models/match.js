const mongoose=require('mongoose');
const matchSchema=mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:Number,
    scoreTwo:Number
})
//Créer un  model et effecter le modelistation (matchSchema) à lui          
const match=mongoose.model('Match' , matchSchema)
module.exports=match;