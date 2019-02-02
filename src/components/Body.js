import React, { Component } from 'react';

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      billAmount: "",
      percentageTip: "",
      total: ""
    };
  }

  handleChangeBillAmount = (event) => {
    this.setState({
      billAmount: event.target.value
    });
  };

  // Check out "Numeric Input" for React (https://www.npmjs.com/package/react-numeric-input).
  handleChangePercentageTip = (event) => {
    this.setState({
      percentageTip: event.target.value
    });
  };

  handleSubmit(event) {
    // event.preventDefault();
    // this.setState({
    //   total: this.state.billAmount + this.state.percentageTip
    });
  }


  render(){
    return(
      <div>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
           <label>
             Bill Amount:
             <input
              type="text"
              name="billAmount"
              placeholder="$"
              value={this.state.billAmount}
              onChange={this.handleChangeBillAmount.bind(this)} />
           </label>
          </div>
          <div>
           <label>
             Percentage Tip:
             <input type="text"
             name="PercentageTip"
             placeholder="%"
             value={this.state.percentageTip}
             onChange={this.handleChangePercentageTip.bind(this)} />
           </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <h3>Bill Amount: ${this.state.billAmount}</h3>
        <h3>Percentage Tip: {this.state.percentageTip}%</h3>
        <h3>Total: ${this.state.total}</h3>
      </div>
    );
  }
}

export default Body;
