import React, { Component } from 'react';
import InGameTabber from './TabberInGame.png';
import './Tabber.css';

class Tabber extends Component
{
    render()
    {
        return(
            <div className="content no-in-line">
                <div className="title">Tabber</div>
                <div className="image"><img id="InGameTabber" alt="In Game Tabber Image" src={ InGameTabber } /></div>
                <div className="portLink"><a target="_blank" href="https://github.com/FedoraGameDev/Tabber">Github</a></div>
                <div className="description">
                    Tabber makes creating tab-style menus in Unity extremely easy.<br/>
                    Normally, you would need to have each tab turn the other tabs in the set on, itself off, unload each panel and load the necessary panel.
                    With tabber, you just add 2 components to the whole container and it works like magic.
                </div>
            </div>
        );
    }
}

export default Tabber;