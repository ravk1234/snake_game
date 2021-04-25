import React,{useState} from "react";
import "./home.css";
import Snake from './Snake';
import Food from "./Food";
import App from "./App";

function Home() {
   let [state, setState] = useState('start')

   function openGame() {
    setState('startGame')
  };

  return(

    <div className="game-area">
      {
        state ='start' && (
        <>
        <h1 className="heading"> Snake Game</h1>
        <button className="para" onClick={openGame}>Start Game</button>
        <button className="para">About</button>
        <button className="para">Instructions</button>
        </>)
      }

      {
        state='startGame' && (<App/>)
      }


    </div>
  );



}


export default Home;
