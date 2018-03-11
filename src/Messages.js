import React from 'react';
import map from 'lodash/map';
import Message from './Message';
import './Messages.css';

const Messages = ({messages}) => (
  <section className="Messages">
    {
      map(messages, (message, key) => (
        <Message 
          key={key}
          {...message}
        />
      ))
    }
  </section>
);

export default Messages;
