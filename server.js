// console.log('server file is running')

// function muzaffer(){
//     console.log("Successfully run the function");
// }

// const add = function(a,b, prince){
//     var sume = a+b;
//     console.log("Result "+ sume);
//     muzaffer();
// }

// add(12,18, ()=>console.log("HHHHHHHHH"));

// var fs =require('fs');
// var os =require('os');

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('demofile.txt', 'Hello developer how are you ? \n',()=> {console.log('created')})

// const testfile = require('./testfile.js');

// var age = testfile.age;
// console.log(age);


const express = require('express');
const app = express();

const db = require('./db');
//const Person = require('./models/Person');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON request bodies
// app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World Muzaffer')
})

//app.post('/person', async (req, res)=> {

  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.work = data.worke;
  // newPerson.mobile = data.mobile;
  // newPerson.email = data.email;
  // newPerson.address = data.address;
  // newPerson.sallary = data.sallary;
  // Save the person using a callback

//   try {
//     const data  = req.body;
//     const newPerson = new Person(data);
//     const response = await newPerson.save();
//     console.log('Data saved in to database');
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({error: 'Internal server error'});
//   }

// });

// app.get('/persons', async (req, res)=>{

//     try {
//       const persons = await Person.find();
//       console.log('Persons data found');
//       res.status(200).json({
//         message: 'Data fetched successfully',
//         data: persons,
//       });

//     } catch (error) {
//       console.log(error);
//       res.status(500).json({error: 'Internal server error'});
//     }
// })



// app.post('/menuItems', async (req, res)=> {
//   try {
//     const data  = req.body;
//     const newMenuItems = new MenuItem(data);
//     const response = await newMenuItems.save();
//     console.log('Menu data saved successfully');
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);

//     if (error.name === 'ValidationError') {
//       // Extract and format validation error messages
//       const errorMessages = Object.values(error.errors).map(err => err.message);
//       return res.status(400).json({
//         error: 'Validation error',
//         details: errorMessages,
//       });
//     }
//     res.status(500).json({error: 'Internal server error' + error});
//   }
// });


// app.get('/menus', async (req, res)=>{

//   try {
//     const menus = await MenuItem.find();
//     console.log('Persons data found');
//     res.status(200).json({
//       message: 'Data fetched successfully',
//       data: menus,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({error: 'Internal server error'});
//   }
// })

// app.get('/person/:workType', async(req,res)=>{
//   try {
//       const workType = req.params.workType;
//       if(workType ==='cheif' || workType ==='waiter' || workType ==='manager'){
//           const response = await Person.find({work:workType});
//           res.status(200).json({
//             message: 'Data fetched successfully',
//             data: response,
//           });
//       }else{
//         res.status(500).json({error: 'Invalide parameter'. workType});
//       }

//     } catch (error) {
//       res.status(500).json({error: 'Internal server error'});
//     }
// })


// app.get('/chicken', (req, res)=>{
//     res.send('I am loving to chicken to eat')
// });

// app.get('/didi', (req, res)=>{
//     res.send("Welcome to patna")
// })

// app.post('/test2', (req, res)=>{
//     const data = { message: "Success", body: req.body };
//     res.send(data);
// })

const personRouter = require('./routes/PersonRoutes');
app.use('/person', personRouter);

const menuRouter = require('./routes/MenuRoutes');
app.use('/menus', menuRouter);

app.listen(PORT, ()=>{
    console.log('server listing on port ' + PORT);
})