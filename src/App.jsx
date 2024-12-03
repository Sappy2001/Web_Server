//rafce react arrow func with export
import React from 'react'
//for connecting to stream-chat
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
//imports are getting directed from components-index.js;
import {ChannelListContainer,ChannelContainer} from './components';

//apikey for stream chat initialliztion
const apiKey='qgtk9ttyha7j';
//create instance of streamchhat
const client=StreamChat.getInstance(apiKey);



const App = () => {
  return (
    <div>
        <div className="app_wrapper">
            <Chat client={client} theme="team light">
            {/*create the components and import it*/}
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    </div>
  );
}

export default App