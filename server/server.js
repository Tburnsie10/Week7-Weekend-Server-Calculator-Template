const express = require('express' );
 const app = express();
 const PORT = 8000;

 let history = [];
 //save all our past functions


 app.use(express.json());




 app.use(express.static('server/public'));




 app.listen(PORT, () => {
    console.log('server running on: ', PORT);
 });
