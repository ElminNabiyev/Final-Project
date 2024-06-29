import mongoose from 'mongoose';
const gamesSchema = new mongoose.Schema({
    img:{type:String,required:true},
    detailImg1:{type:String,required:true},
    detailImg2:{type:String,required:true},
    name: {type:String,required:true,unique:[true,"This game has alredy exist"]},
    heading:{type:String,required:true},
    price:{type:String,required:true},
    rating:{type:String,required:true},
    developer:{type:String,required:true},
    publisher:{type:String,required:true},
    releaseDate:{type:String,required:true},
    minSystem:{type:Object,required:true},
    recSystem:{type:Object,required:true},
    h1:{type:String},
    h2:{type:String},
    h3:{type:String},
    h1Des:{type:String},
    h2Des:{type:String},
    h3Des:{type:String},
    showMore:{type:Object},
    privacy:{type:String,required:true},
    discount:{type:Boolean,default:false},
    discountedPrice:{type:String,default:"$0"},
    discountPercent:{type:String,default:"-0%"},
    topSellers:{type:Boolean,default:false},
    mostPlayed:{type:Boolean,default:false},
    dealsOfWeek:{type:Boolean,default:false},
  });
 export const GamesModel = mongoose.model('GamesModel', gamesSchema);