import express, { response } from 'express';

const app = express();

//patch => alteração específica


app.get("/", (request, response) => {
  return response.json({'hey': 'Hello, World! :D'})
});

app.post('/', (req, res) => {
  return res.send("Save successfully")
});

app.listen(3333, () => console.log("Server is running!"));

