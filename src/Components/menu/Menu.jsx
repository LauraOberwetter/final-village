import React, { Component } from 'react';
import "./menu.css"
import menu from "./menu.png";


class Menu extends Component {
    render () {
        return (
            <div class="contentMenu">
                <div class="menuImg">
                    <img class="menu" src={menu}></img>                
                </div>
                <h1 id="menuH1">
                    <a target="_blank" href="https://www.toasttab.com/village-bar-3801-mineral-point-rd/v3">Order Online with Toast</a>
                </h1>
            </div>      
        )
    }
  }
  
  export default Menu