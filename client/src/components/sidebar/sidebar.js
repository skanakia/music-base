// import React from "react";

import React, { Component } from "react";
import "./sidebar.css";
import API from "../../utils/API";
import Main from "../main"
import Audio from '../audio';

class sidebar extends Component {
    constructor(props) {
        super(props);
    this.state = {
        src: ["http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3"
        ]};
    }

render() {
    const x = this.state.src;
    return (
<div className="sidebar">

    <h1>Playlist</h1>
        <ul>
        {x ? 
            this.state.src.map(src => (
            <li>
            <Audio
            src={src} />
            </li>
            ))
             : (
                <h3>No Results to Display</h3>
              )}
        </ul>
            
    </div>
   );
  }
}



export default sidebar;