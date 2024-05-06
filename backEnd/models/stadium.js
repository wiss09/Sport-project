const mongoose=require('mongoose');
const stadiumSchema=mongoose.Schema({
    name:String,
    country:String,
    capacity:Number,
    team :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team'
    }
})
//Créer un  model et effecter le modelistation (matchSchema) à lui          
const stadium=mongoose.model('Stadium' , stadiumSchema)
module.exports=stadium;