import React, { Component } from 'react';


class NewCampaign extends Component {

  componentDidMount() {
    // fetch(API + DEFAULT_QUERY)
    //   .then(response => response.json())
    //   .then(data => this.setState({ hits: data.hits }));
  }



  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }


}
export default NewCampaign;