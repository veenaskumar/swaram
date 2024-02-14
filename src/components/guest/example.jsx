import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import '../../stylesheet/guest.css'; 
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: "1",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 2,
    content: "2",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 3,
    content: "2",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 4,
    content: "3",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 5,
    content: "4",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 6,
    content: "5",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
  {
    key: 7,
    content: "6",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF5shC8lsPbTuUDQl66opCxRE54jMvD2C2Q&usqp=CAU"
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 1,
    showNavigation: true,
    config: config.gentle
  };
  

  render() {
    return (
      <div
        className="contain sm:w-[100%]  "
      >
        <div className="ml-[100px] mt-[30px] mb-[70px] text-6xl text-white-400 sm:text-[20px] sm:mx-[5%] text-wrap   sm:text-center">Ready to know about the <span className="text-red-500">GUEST</span></div>
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation} 
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
