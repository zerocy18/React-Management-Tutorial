const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const cors = require("cors");
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "950118",
      gender: "male",
      job: "freshman",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "박성진",
      birthday: "000018",
      gender: "Female",
      job: "fresh",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "야돈킹",
      birthday: "122348",
      gender: "Female",
      job: "포켓몬",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
