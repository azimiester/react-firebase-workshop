import React, { Component } from "react";
import "./App.css";
import Messages from "./Messages";
import NewMessage from "./NewMessage";
import SignIn from "./SignIn";
import CurrentUser from "./CurrentUser";
import { auth, database } from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      messages: []
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleSignIn() {
    this.setState({
      currentUser: {
        displayName: "Nawaz Sharif",
        photoURL:
          "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/02/nawaz-1518614509.jpg",
        email: "test email"
      }
    });
  }
  handleNewMessage(message) {
    const newMessage = {
      message: message,
      user: this.state.currentUser,
      time: new Date().getTime()
    }
    this.setState({messages : [...this.state.messages , newMessage]});
    console.log(this.state.messages);
  }

  render() {
    return (
      <div className="App">
        {!this.state.currentUser && <SignIn handleSignIn={this.handleSignIn} />}
        {this.state.currentUser && (
          <CurrentUser currentUser={this.state.currentUser} />
        )}
        {this.state.currentUser && (
          <NewMessage handleNewMessage={this.handleNewMessage} />
        )}
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
