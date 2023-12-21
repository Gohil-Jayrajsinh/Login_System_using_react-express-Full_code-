// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const app = express();
// const port = 3002;
// app.use(cors());
// app.use(express.json());

// const dbconn = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   password: '',
//   database: 'rk'
// })






// // Henld sign up request ######################################################################################

// app.post('/Signup', async (req, resp) => {
//   const exist_check = 'SELECT * FROM admin WHERE username = ?';

//   dbconn.query(exist_check, [req.body.name], (err, result) => {
//     if (err) {
//       console.error('Error executing query : ', err);
//       return resp.json("Error: " + err);
//     } else {
//       if (result.length > 0) {
//         return resp.json([{ "status" : "Already Exists" }]);
//       } else {
//         const insrt_sql = ' INSERT INTO `admin` ( `username`, `password`) VALUES ( ? , ?)';

//         dbconn.query(insrt_sql, [req.body.name, req.body.password], (err, result2) => {
//           if (err) {
//             console.error('Error executing query:', err);
//             return resp.json("Error: " + err);
//           }else{
//               return resp.json([{ "status" : "Done" }]);    
//           }
//         }
//         )

//       }
//     }
//   });
// });



// // Henld login request ######################################################################################

// app.post('/Login', async (req, resp)=>{
//   const login_query = 'SELECT * FROM admin WHERE username = ? AND password = ?';

//   dbconn.query(login_query, [req.body.name, req.body.password], (err, result) => {
//     if(err){
//       console.log(err);
//       return resp.json(err);
//     }else{
//       if( result.length > 0 ){
//         return resp.json([{ "status": "Founded" }]);
//       }else{
//         return resp.json([{ "status": "Not Founded" }]);
//       }
//     }
//   } )


// })















// app.listen(port, () => {
//   console.log('listening on port' + port);
// })