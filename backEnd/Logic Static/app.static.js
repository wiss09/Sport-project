
/******** Module Importaions *******/




//import express module
const express = require("express"); // le schema du module express
// importer le module body parser pour recupérer les object et return les requete en format    JSON
const bodyParser = require('body-parser')
//import mongoos module
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');




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

/******** Models importation  *********/
const match=require('./models/match')

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
    reponse.json({ matches: matchesTab })
})

/*********************** */
// get match by ID 
app.get("/matches/:id", (requete, reponse) => {
    let id = requete.params.id
    let obj;
    console.log('Here into Bisuness Logic : GET match by ', id)
    for (let i = 0; i < matchesTab.length; i++) {
        if (id == matchesTab[i].id) {
            obj = matchesTab[i];
            break;
        }
    }
    reponse.json({ objt: obj })
})
/************************** */
app.post("/matches", (requete, reponse) => {
    console.log('Here into Bisuness Logic : ADD  new match ')

    let newMatch = requete.body
    newMatch.id = generateID(matchesTab) //to add new ID for the object

    matchesTab.push(newMatch);
    reponse.json({ verification: 'your new match added', new: newMatch })
})
/*************************** */
app.put("/matches", (requete, reponse) => {
    console.log('Here into Bisuness Logic : EDIT   match ')
    let verified;
    let matchEdited = requete.body
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchEdited.id == matchesTab[i].id) {
            matchesTab[i] = matchEdited;


            break;
        }
    }
    reponse.json({ obj: 'your matched has Edited', newTable: matchesTab })
})
/********************** */

app.delete("/matches/:id", (requete, reponse) => {
    let id = requete.params.id
    var deleted = false;
    var position;
    for (let i = 0; i < matchesTab.length; i++) {
        if (id == matchesTab[i].id) {
            position = i;
            deleted = true;
            break;
        }

        // 2éme methode
        // let index = matchesTab.findIndex((object) => id == object.id)
        // matchesTab.splice(index , 1)
    }
    if (deleted) {
        matchesTab.splice(position, 1)
        reponse.json({ deleted: 'object is deleted' })
    } else {
        reponse.json({ deleted: 'object is not deleted' })

    }

})
// get match by Search
app.get('/matches/:score1/:score2', (request, reponse) => {
    console.log('search matches is running')
    let score1 = request.params.score1
    let score2 = request.params.score2
    let result = []
    for (let i = 0; i < matchesTab.length; i++) {
        if ((score1 == matchesTab[i].scoreOne) && (score2 == matchesTab[i].scoreTwo)) {
            result.push(matchesTab[i])
        }

    }
    if (result.length == 0) {
        reponse.json({ results: 'not found' })
    } else {
        reponse.json({ result: result })
    }
})
/********search by Post */
app.post("/matches/search", (req, res) => {
    console.log('search by post(object)')
    let result = matchesTab.filter((elt) => req.body.score1 == elt.scoreOne && req.body.score2 == elt.scoreTwo)
    if (result.length > 0) {
        res.json({ table: result })
    } else { res.json({ table: 'not found' }) }

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
app.post("/users", (requete, reponse) => {






    console.log('Here into Bisuness Logic : ADD  new user ')
    let newUser = requete.body


    if (isFound(newUser.email, usersTab)) {
        reponse.json({ msg: 'your email exist' })
    } else {
        newUser.id = generateID(usersTab)
        usersTab.push(newUser);
        reponse.json({ verification: 'your new match added', table: usersTab })
    }
})

//login Function
app.post("/users/login", (requete, reponse) => {
    console.log('Here into Bisuness Logic : Login ')
    let newUser = requete.body
    let connected;
    for (let i = 0; i < usersTab.length; i++) {
        if (newUser.email == usersTab[i].email && newUser.pwd == usersTab[i].pwd) {
            connected = true
            break;
        } else { connected = false }
    }


    if (connected) {
        reponse.json({ msg: 'you re connected' })
    } else {
        reponse.json({ msg: 'check your email & password' })
    }
})









/***********Bisuness Logic player */


//get all players
app.get("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : GET all players', requete.body)
    reponse.json({ players: playersTab })
})

/*********************** */
// get player by ID 
app.get("/players/:id", (requete, reponse) => {
    let id = requete.params.id
    let obj;
    console.log('Here into Bisuness Logic : GET players by ', id)
    for (let i = 0; i < playersTab.length; i++) {
        if (id == playersTab[i].id) {
            obj = playersTab[i];
            break;
        }
    }
    reponse.json({ player: obj })
})
//add player
app.post("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : ADD  new players ')

    let newPlayer = requete.body
    newPlayer.id = generateID(playersTab) //to add new ID for the object

    playersTab.push(newPlayer);
    reponse.json({ verification: 'your new match added', new: newPlayer, tab: playersTab })
})
// modified player
app.put("/players", (requete, reponse) => {
    console.log('Here into Bisuness Logic : EDIT   players ', requete.body)
    let verified;
    let playerEdited = requete.body
    for (let i = 0; i < playersTab.length; i++) {
        if (playerEdited.id == playersTab[i].id) {
            playersTab[i] = playerEdited;


            break;
        }
    }
    reponse.json({ obj: 'your matched has Edited', newTable: playersTab })
})
// delete player 

app.delete("/players/:id", (requete, reponse) => {
    let id = requete.params.id
    for (let i = 0; i < playersTab.length; i++) {
        if (id == playersTab[i].id) {
            playersTab.splice(i, 1)
            break;
        }

        // 2éme methode
        // let index = matchesTab.findIndex((object) => id == object.id)
        // matchesTab.splice(index , 1)
    }
    reponse.json({ deleted: 'objected is deleted' })
    console.log('Here into Bisuness Logic : DELETE player ', id)

})
// get player by Search
app.get('/players/search/:searchValue', (request, reponse) => {
    console.log('search players is running')
    let searchValue = request.params.searchValue

    let result = []
    for (let i = 0; i < playersTab.length; i++) {
        if ((searchValue == playersTab[i].name) || (searchValue == playersTab[i].position)) {
            result.push(playersTab[i])
        }

    }
    if (result.length == 0) {
        reponse.json({ results: 'not found' })
    } else {
        reponse.json({ result: result })
    }
})








/***********Bisuness Logic Stadium */
//get all Stadium
app.get('/stadiums', (req, res) => {
    console.log('Logic Bisuness of get all stadium is running')
    res.json({ stadiumTab: stadiumTab })
})
// get stadium by ID
app.get('/stadiums/:id', (req, res) => {
    console.log('Logic Bisuness of get stadium by ID is running')
    let id = req.params.id
    let stadium = stadiumTab.find((object) => id == object.id)
    res.json({ stadium: stadium })
})
//add stadium
app.post('/stadiums', (req, res) => {
    console.log('Logic Bisuness of Add stadium is running')
    newStadium = req.body
    newStadium.id = generateID(stadiumTab)
    stadiumTab.push(newStadium)
    res.json({ verified: 'done', newTab: stadiumTab })
})
// Edit Stadium
app.put('/stadiums', (req, res) => {
    console.log('Logic Bisuness of  edit stadium is running')

    let editedStadium = req.body
    let index = stadiumTab.findIndex((object) => editedStadium.id == object.id)
    stadiumTab[index] = editedStadium
    res.json({ verified: 'done', editedTab: stadiumTab })
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

