const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3006;
// Enable CORS for all routes
app.use(cors());
// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));
// Define the '/james' route
app.get('/james', (req, res) => {
  const JamesData = {
    name: 'James Presley',
    school: 'Pickerington Central',
    gradYear: 2020,
    profilePic: '',
    schoolPic: '',
  };
  res.json(JamesData);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// //app.get('/james', (req, res) => {
//     //res.send('This is james route!');
//  // });
// app.get('/james', (req, res) => {
//     const jamesData ={
//         name: 'James Presley',
//         school: 'Pickerington Central',
//         gradYear: 2020,
//         profilePic:'',
//         schoolPic:'',
//       }
//        res.json(jamesData);
    
//   });
//  // app.get('/filmon', (req, res) => {
//     //res.send('This is Filmon route!');
// //});
// app.get('/filmon',(req, res)=> {
//     const filmonData ={
//       name: 'Filmon',
//       school: '?',
//       gradYear: '?',
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(filmonData);
//   });
//   app.get('/absara',(req, res)=> {
//     const absaraData ={
//       name: 'Absara Kidanemariam',
//       school: 'Csn',
//       gradYear: 2016,
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(absaraData);
//   });
//   app.get('/miracle',(req, res)=> {
//     const miracleData ={
//       name: 'Miracle Mathis',
//       school: 'Reynoldsburg High School',
//       gradYear: 2011,
//       profilePic:'',
//       schoolPic: '',
//     }
//      res.json(miracleData);
//   });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
