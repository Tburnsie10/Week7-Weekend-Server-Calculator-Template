const express = require('express' );
const app = express();
const PORT = 8000;

let history = [];
//save all our past functions


app.use(express.json());
app.use(express.static('server/public'));

app.post("/calc", (req, res) => {
   let op = req.body.op
   history.unshift(eval(op))
   console.log(op)
   res.sendStatus(201)
})

app.get("/calc", (req, res) => {
   res.status(200).send(history);
} )


app.listen(PORT, () => {
   console.log('server running on: ', PORT);
});
