import React, { Component } from "react";
import getFeedbackByProductViewData from '../client';
class Home extends Component {
  constructor(props) {
    super(props);

    getFeedbackByProductViewData("puls")

  };


  componentDidMount() { }
  render() {
    return (
      <div className="todoListMain">Hello</div>

    )
  }
}
export default Home
