import React from 'react';

export const withWebSocket = (url, Component) =>
  class WebSocketComponent extends React.Component {
    constructor (props) {
      super(props);
      this.socket = null;
      this.state = {
        socket: null,
      }
    }

    componentWillMount () {
      this.socket = new WebSocket(url);
      this.socket.onopen = () => this.setState({ socket: this.socket });
    }

    componentWillUnmout () {
      this.socket.close();
    }

    render () {
      return <Component socket={this.state.socket} {...this.props} />
    }
  }