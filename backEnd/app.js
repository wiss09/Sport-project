
/******** Module Importaions *******/




//import express module
const express = require("express"); // le schema du module express
// importer le module body parser pour recupérer les object et return les requete en format    JSON
const bodyParser = require('body-parser')
//import mongoos module
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
//Model importation 
const match = require('./models/match');
const User = require('./models/user');
const Player = require('./models/player');
const Team = require('./models/team');
const Stadium = require('./models/stadium');
//import bcrypt module
const bcrypt = require('bcrypt')
//import jsonWebToken module
const jwt = require('jsonwebtoken');
//import express-session module
const session = require('express-session');
// import module multer
const multer=require('multer');
const path=require('path');

/******** Export Application  *********/


// create express application
const app = express()
// make app exportable
module.exports = app;



/******** Configuration l'Application  *********/
// send reponse with JSON format              
app.use(bodyParser.json())
// Get object from Request (PUT , POST )
app.use(bodyParser.urlencoded({ extended: true })) //is an NPM package that parses incoming request bodies in a middleware before your handlers, available under the req.body property.
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//configuration session avec son secret Clé
const secretKey = "myKey"
app.use(session({ secret: secretKey, }))
/********  *********/
//config Multer qui assurer l'upload de fichier
app.use('/images', express.static(path.join('backend/uploads')));
 const MIME_TYPE = {   
     'image/png': 'png',
  'image/jpeg': 'jpg', 
  'image/jpg': 'jpg' }

//destination

const storageConfig = multer.diskStorage({ destination: (req, file, cb) => { const isValid = MIME_TYPE[file.mimetype];
    if (isValid) {
         cb(null, 'backend/uploads')
         }
    },
     filename: (req, file, cb) => {
         const name = file.originalname.toLowerCase().split(' ').join('-');
      const extension = MIME_TYPE[file.mimetype]; 
      const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
      cb(null, imgName); } });
    

/***** Business Logic *******/
let stadiumTab = [
    { id: 1, name: "Oltraford", country: "Manchester-England", capacity: "80000", img: "assets/images/OldTrafford.jpg" },
    { id: 2, name: "San sero", country: "Milan-Italy", capacity: "80000", img: "assets/images/sanSero.jpg" },
    { id: 3, name: "Roma", country: "Roma-Italy", capacity: "70000", img: "assets/images/Roma.jpg" }
]

let playersTab =
    [{ id: "1", name: 'Messi', number: "10", img: "assets/images/img_3.jpg", position: "ATK", age: "26" },
    { id: "2", name: 'cr7', number: "12", img: "assets/images/img_1.jpg", position: "ATK", age: "22" },
    { id: "3", name: 'M.salah', number: "15", img: "assets/images/img_1.jpg", position: "DEF", age: "26" },
    { id: "4", name: 'S.Mani', number: "19", img: "assets/images/img_2.jpg", position: "MID", age: "29" },
    { id: "5", name: 'Griezman', number: "10", img: "assets/images/img_1.jpg", position: "GK10", age: "19" }]

let matchesTab =
    [{ id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'Esperance', teamTwo: 'Club-africain' },
    { id: 2, scoreOne: 3, scoreTwo: 3, teamOne: 'Man city', teamTwo: 'Liverpool' },
    { id: 3, scoreOne: 0, scoreTwo: 2, teamOne: 'Atletico madrid', teamTwo: 'Barca' },
    { id: 4, scoreOne: 2, scoreTwo: 1, teamOne: 'Inter', teamTwo: 'Milan' }]

let usersTab = [{ id: 1, firstName: 'wissem', lastName: 'abidi', email: 'wissem@gmail.com', pwd: 'azerty123', phone: 51894500 },
{ id: 2, firstName: 'hama', lastName: 'abidi', email: 'hama@gmail.com', pwd: 'azerty1234', phone: 51894500 },
{ id: 3, firstName: 'rihem', lastName: 'abidi', email: 'rihem@gmail.com', pwd: 'azerty123', phone: 51894500 },
{ id: 4, firstName: 'bornia', lastName: 'abidi', email: 'bornia@gmail.com', pwd: 'azerty123', phone: 51894500 }]


function generateID(T) {
    let max;
    if (T.length == 0) {
        max = 0
    } else {
        for (let i = 0; i < T.length; i++) {
            max = T[0].id
            if (max < T[i].id) {
                max = T[i].id;
            }
        }
    }
    return (+max + 1);
}





//get all matches
app.get("/matches", (requete, reponse) => {
    console.log('Here into Bisuness Logic : GET all matches')
    match.find().then((docs) => {
        reponse.json({ matches: docs })
    })

})

/*********************** */
// get match by ID 
app.get("/matches/:id", (requete, reponse) => {
    let id = requete.params.id
    console.log('Here into Bisuness Logic : GET match by ')

    match.findById(id).then((doc) => {
        reponse.json({ objt: doc })
    })

})
/************************** */
app.post("/matches", (requete, reponse) => {
    console.log('Here into Bisuness Logic : ADD  new match ')

    let newMatch = new match(requete.body)
    newMatch.save()


    reponse.json({ verification: 'your new match added', new: newMatch })
})
/*************************** */
app.put("/matches", (requete, reponse) => {
    console.log('Here into Bisuness Logic : EDIT   match ')
    let matchEdited = requete.body
    // let verified;
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchEdited.id == matchesTab[i].id) {
    //         matchesTab[i] = matchEdited;


    //         break;
    //     }
    // }
    match.updateOne({ _id: matchEdited._id }, matchEdited).then((updateResponse) => {
        console.log('here update match', updateResponse);
        if (updateResponse.nModified == 1) {
            reponse.json({ isUpdated: true })
        } else { reponse.json({ isUpdated: false }) }
    })



});
/********************** */

app.delete("/matches/:id", (requete, reponse) => {
    let id = requete.params.id
    match.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log('this is match has been delete', deleteResponse)
        if (deleteResponse.deletedCount == 1) {
            reponse.json({ isDeleted: true })
        } else {
            reponse.json({ isDeleted: false })
        }
    })
    // var deleted = false;
    // var position;
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (id == matchesTab[i].id) {
    //         position = i;
    //         deleted = true;
    //         break;
    //     }


    // }
    // if (deleted) {
    //     matchesTab.splice(position, 1)
    //     reponse.json({ deleted: 'object is deleted' })
    // } else {
    //     reponse.json({ deleted: 'object is not deleted' })

    // }
    // 2éme methode
    // let index = matchesTab.findIndex((object) => id == object.id)
    // matchesTab.splice(index , 1)
})
// get match by Search
app.get('/matches/search', (request, reponse) => {
    console.log('search matches is running')
    let score1 = request.params.score1
    let score2 = request.params.score2
    match.find({ score1: scoreOne, score2: scoreTwo }).then((docs) => {
        console.log('this all ', docs)
        reponse.json({ matches: docs })
    })
    //     let result = []
    //     for (let i = 0; i < matchesTab.length; i++) {
    //         if ((score1 == matchesTab[i].scoreOne) && (score2 == matchesTab[i].scoreTwo)) {
    //             result.push(matchesTab[i])
    //         }

    //     }
    //     if (result.length == 0) {
    //         reponse.json({ results: 'not found' })
    //     } else {
    //         reponse.json({ result: result })
    //     }
})
/********search by Post */
app.post("/matches/search", (req, res) => {
    console.log('search by post(object)')
    let score1 = req.body.s1
    let score2 = req.body.s2



    match.find({ scoreOne: score1, scoreTwo: score2 }).then((docs) => {
        res.json({ matches: docs })

    })
    // let result = matchesTab.filter((elt) => req.body.score1 == elt.scoreOne && req.body.score2 == elt.scoreTwo)
    // if (result.length > 0) {
    //     res.json({ table: result })
    // } else { res.json({ table: 'not found' }) }

})





















/***************Users Logic *******************/

function isFound(email, T) {
    let condition;
    for (let i = 0; i < T.length; i++) {
        if (email == T[i].email) {
            return condition = true
        } else { condition = false }
    }
    return condition
}
//get all User
app.get("/users", (requete, reponse) => {
    console.log('Here into Bisuness Logic : GET all users', requete.body)
    reponse.json({ users: usersTab })
})
//Add User
app.post("/users/signup", multer({storage:storageConfig}).single("img") ,(requete, reponse) => {

    console.log('Here into Bisuness Logic : ADD  new user ')
    console.log(requete.body);
    User.findOne({ email: requete.body.email }).then((found) => {

        if (found) {
            reponse.json({ msg: 'Email exist' })
        } else {
            bcrypt.hash(requete.body.password, 10).then((dataCrypte) => {
                console.log(dataCrypte)
                requete.body.password = dataCrypte;
                requete.body.photo= `http://localhost:3000/images/${requete.file.filename}`
                let newUser = new User(requete.body);
                newUser.save();
                reponse.json({ msg: 'User added with success' }); 
                console.log(newUser);
            })


        }
    })





    // if (isFound(newUser.email, usersTab)) {
    //     reponse.json({ msg: 'your email exist' })
    // } else {
    //     newUser.id = generateID(usersTab)
    //     usersTab.push(newUser);
    //     reponse.json({ verification: 'your new match added', table: usersTab })
    // }
})

//login Function
app.post("/users/login", (requete, reponse) => {
    console.log('Here into Bisuness Logic : Login ', requete.body)
    let newUser = requete.body
    User.findOne({ email: newUser.email }).then((doc) => {
        console.log("here doc", doc);
        if (doc) {
            bcrypt.compare(newUser.password, doc.password).then((data) => {
                console.log("data", data);
                if (data) {
                    const token = jwt.sign(

                        {
                            fName: doc.firstName,
                            lName: doc.lastName,
                            userId: doc._id,
                            role: doc.role
                        },
                        secretKey,
                        { expiresIn: '1h' }
                    );
                    console.log(token)
                    reponse.json({ msg: 'welcome', token: token })
                } else {

                    reponse.json({ msg: 'check your password' })
                }

            })
        } else {

            reponse.json({ msg: 'create account' })
        }

    })
    // let connected;
    // for (let i = 0; i < usersTab.length; i++) {
    //     if (newUser.email == usersTab[i].email && newUser.pwd == usersTab[i].pwd) {
    //         connected = true
    //         break;
    //     } else { connected = false }
    // }


    // if (connected) {
    //     reponse.json({ msg: 'you re connected' })
    // } else {
    //     reponse.json({ msg: 'check your email & password' })
    // }
})









/***********Bisuness Logic player */


//get all players
//get all players
app.get("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : GET all players')
    Player.find().then((docs) => {
        reponse.json({ players: docs })
    })

})

/*********************** */
// get Player by ID 
app.get("/players/:id", (requete, reponse) => {
    let id = requete.params.id
    console.log('Here into Bisuness Logic : GET Player by ')

    Player.findById(id).then((docPlayer) => {
       
              reponse.json({ player: docPlayer })
        })
        
    })


/************************** */
app.post("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : ADD  new Player ')
    Team.findById(requete.body.teamId).then((teamObj) => { // teamObj => result de la recherche d'un objet de la collection teams par ID
        if (teamObj) {
            let newPlayer = new Player({
                name: requete.body.name,
                position: requete.body.position,
                number: requete.body.number,
                age: requete.body.age,
                team: teamObj._id
            })
            newPlayer.save((err, doc) => {
                if (doc) {
                    teamObj.players.push(newPlayer);
                    teamObj.save()
                    reponse.json({ verification: 'your new Player added' })
                } else {
                    //Error
                    reponse.json({ verification: 'your new Player not saved' })
                }
            })

        } else {
            reponse.json({ verification: 'Team not found' })
        }
    })

})




/*************************** */
app.put("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : EDIT   Player ')
    let PlayerEdited = requete.body
    Player.updateOne({ _id: PlayerEdited._id }, PlayerEdited).then((updateResponse) => {
        // let verified;
        // for (let i = 0; i < playersTab.length; i++) {
        //     if (PlayerEdited.id == playersTab[i].id) {
        //         playersTab[i] = PlayerEdited;


        //         break;
        //     }
        // }
        console.log('here update Player', updateResponse);
        if (updateResponse.nModified == 1) {
            reponse.json({ isUpdated: true })
        } else { reponse.json({ isUpdated: false }) }
    })



});
/********************** */

app.delete("/players/:id", (requete, reponse) => {
    let id = requete.params.id
    Player.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log('this is Player has been delete', deleteResponse)
        if (deleteResponse.deletedCount == 1) {
            reponse.json({ isDeleted: true })
        } else {
            reponse.json({ isDeleted: false })
        }
    })
    // var deleted = false;
    // var position;
    // for (let i = 0; i < playersTab.length; i++) {
    //     if (id == playersTab[i].id) {
    //         position = i;
    //         deleted = true;
    //         break;
    //     }


    // }
    // if (deleted) {
    //     playersTab.splice(position, 1)
    //     reponse.json({ deleted: 'object is deleted' })
    // } else {
    //     reponse.json({ deleted: 'object is not deleted' })

    // }
    // 2éme methode
    // let index = playersTab.findIndex((object) => id == object.id)
    // playersTab.splice(index , 1)
})
// get Player by Search
app.get('/players/search', (request, reponse) => {
    console.log('search players is running')
    let ageSearch = request.params.age
        *
        Player.find({ age: ageSearch }).then((docs) => {
            console.log('this all ', docs)
            reponse.json({ players: docs })
        })
    //     let result = []
    //     for (let i = 0; i < playersTab.length; i++) {
    //         if ((score1 == playersTab[i].scoreOne) && (score2 == playersTab[i].scoreTwo)) {
    //             result.push(playersTab[i])
    //         }

    //     }
    //     if (result.length == 0) {
    //         reponse.json({ results: 'not found' })
    //     } else {
    //         reponse.json({ result: result })
    //     }
})
/********search by Post */
app.post("/players/search", (req, res) => {
    console.log('search by post(object)')
    let search = req.body




    Player.find({ name: search }).then((docs) => {
        res.json({ players: docs })

    })
    // let result = playersTab.filter((elt) => req.body.score1 == elt.scoreOne && req.body.score2 == elt.scoreTwo)
    // if (result.length > 0) {
    //     res.json({ table: result })
    // } else { res.json({ table: 'not found' }) }

})








/***********Bisuness Logic Stadium */
//get all Stadium
app.get('/stadiums', (req, res) => {
    console.log('Logic Bisuness of get all stadium is running')
    Stadium.find().then((docs)=>{
        res.json({ stadiums: docs })
    })
    
})
// get stadium by ID
app.get('/stadiums/:id', (req, res) => {
    console.log('Logic Bisuness of get stadium by ID is running')
    let id = req.params.id
    Stadium.findById(id).then((doc)=>{
        res.json({ stadium: doc })
    })
    // let stadium = stadiumTab.find((object) => id == object.id)
    //
})
//add stadium
app.post('/stadiums', (req, res) => {
    console.log('Logic Bisuness of Add stadium is running')
  let  newStadium = req.body
    Team.findById(newStadium.team).then((team)=>{
        console.log(team);
        if (team) {
            newStadium = new Stadium({
                name:newStadium.name,
                country : newStadium.country,
                capacity : newStadium.capacity,
                team:team._id
            })
            newStadium.save((err , saved)=>{
                console.log(saved , err)
                if (saved) {
                    team.stadium=newStadium;
                    team.save()
                    res.json({ verified:'your Stadium is saved' })
                }else {
                    res.json({ verified:" your Stadium didn't saved " })
                }
            })

        }else{
            res.json({ verified:" Not found team by this choice " })
        }
    })
    // newStadium.id = generateID(stadiumTab)
    // stadiumTab.push(newStadium)
    // 
})
// Edit Stadium
app.put('/stadiums', (req, res) => {
    console.log('Logic Bisuness of  edit stadium is running')

    let editedStadium = req.body
    Stadium.updateOne({_id:editedStadium._id},editedStadium).then((res)=>{
        if (nModified == 1) {
            res.json({ verified: 'object was changed'})

        }else{
            res.json({ verified: 'object did not changed'})

        }
    })
    // let index = stadiumTab.findIndex((object) => editedStadium.id == object.id)
    // stadiumTab[index] = editedStadium
})
//delete Stadium
app.delete('/stadium/:id', (req, res) => {
    console.log('Logic Bisuness of Delete stadium is running')
    let id = req.params.id
    for (let i = 0; i < stadiumTab.length; i++) {
        if (id == stadiumTab[i].id) {
            stadiumTab.splice(i, 1)
        }

    }
    res.json({ verified: 'deleted', newTab: stadiumTab })
})






/***************************Bisuness Logic Team */

//get all teams
app.get("/teams", (requete, reponse) => {
    console.log('Here into Bisuness Logic : GET all teams')
    Team.find().populate('players').then((docs) => {
        reponse.json({ teams: docs ,players:docs.players })
    })

})

/*********************** */
// get Team by ID 
app.get("/teams/:id", (requete, reponse) => {
    let id = requete.params.id
    console.log('Here into Bisuness Logic : GET Team by ')

    Team.findById(id).then((doc) => {
        reponse.json({ team: doc })
    })

})
/************************** */
app.post("/teams", (requete, reponse) => {
    console.log('Here into Bisuness Logic : ADD  new Team ')

    let newTeam = new Team(requete.body)
    newTeam.save()


    reponse.json({ verification: 'your new Team added', new: newTeam })
})
/*************************** */
app.put("/teams", (requete, reponse) => {
    console.log('Here into Bisuness Logic : EDIT   Team ')
    let TeamEdited = requete.body
    // let verified;
    // for (let i = 0; i < teamsTab.length; i++) {
    //     if (TeamEdited.id == teamsTab[i].id) {
    //         teamsTab[i] = TeamEdited;


    //         break;
    //     }
    // }
    Team.updateOne({ _id: TeamEdited._id }, TeamEdited).then((updateResponse) => {
        console.log('here update Team', updateResponse);
        if (updateResponse.nModified == 1) {
            reponse.json({ isUpdated: true })
        } else { reponse.json({ isUpdated: false }) }
    })



});
/********************** */

app.delete("/teams/:id", (requete, reponse) => {
    let id = requete.params.id
    Team.deleteOne({ _id: id }).then((deleteResponse) => {
        console.log('this is Team has been delete', deleteResponse)
        if (deleteResponse.deletedCount == 1) {
            reponse.json({ isDeleted: true })
        } else {
            reponse.json({ isDeleted: false })
        }
    })
    // var deleted = false;
    // var position;
    // for (let i = 0; i < teamsTab.length; i++) {
    //     if (id == teamsTab[i].id) {
    //         position = i;
    //         deleted = true;
    //         break;
    //     }


    // }
    // if (deleted) {
    //     teamsTab.splice(position, 1)
    //     reponse.json({ deleted: 'object is deleted' })
    // } else {
    //     reponse.json({ deleted: 'object is not deleted' })

    // }
    // 2éme methode
    // let index = teamsTab.findIndex((object) => id == object.id)
    // teamsTab.splice(index , 1)
})
// get Team by Search
app.get('/teams/search', (request, reponse) => {
    console.log('search teams is running')
    let score1 = request.params.score1
    let score2 = request.params.score2
    Team.find({ score1: scoreOne, score2: scoreTwo }).then((docs) => {
        console.log('this all ', docs)
        reponse.json({ teams: docs })
    })
    //     let result = []
    //     for (let i = 0; i < teamsTab.length; i++) {
    //         if ((score1 == teamsTab[i].scoreOne) && (score2 == teamsTab[i].scoreTwo)) {
    //             result.push(teamsTab[i])
    //         }

    //     }
    //     if (result.length == 0) {
    //         reponse.json({ results: 'not found' })
    //     } else {
    //         reponse.json({ result: result })
    //     }
})
/********search by Post */
app.post("/teams/search", (req, res) => {
    console.log('search by post(object)')
    let score1 = req.body.s1
    let score2 = req.body.s2



    Team.find({ scoreOne: score1, scoreTwo: score2 }).then((docs) => {
        res.json({ teams: docs })

    })
    // let result = teamsTab.filter((elt) => req.body.score1 == elt.scoreOne && req.body.score2 == elt.scoreTwo)
    // if (result.length > 0) {
    //     res.json({ table: result })
    // } else { res.json({ table: 'not found' }) }

})