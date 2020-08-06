import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
