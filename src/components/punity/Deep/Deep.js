import React, { Component } from 'react';
import Ruins from './Ruins.png';
import Dungeon from './Dungeon.png';
import Attachments from './Attachments.png';

class Deep extends Component
{
    render()
    {
        return (
            <div className="content no-in-line">
                <div className="title">Deep</div>
                <div className="image"><img id="InGameTabber" alt="In Game Tabber Image" src={ Ruins } /></div><br/>
                <div className="description">
                    Deep is a random generated dungeon explorer game. It implements an item levelling system similar to Dark Cloud where stats
                    are increased via attachments. After a certain level, items can be broken down into special attachments that maintain
                    most of their stats that can then be placed into other items.
                </div><br/>
                <div className="image"><img id="InGameTabber" alt="In Game Tabber Image" src={ Dungeon } /></div><br/>
                <div className="image"><img id="InGameTabber" alt="In Game Tabber Image" src={ Attachments } /></div>
            </div>
        );
    }
}

export default Deep;