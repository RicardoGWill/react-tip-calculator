import React, { Component } from 'react';

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 10
    };
  }


  render(){
    return(
      <div>
        <h3>First Form</h3>
        <form>
          <label>
            Bill Amount:
            <input type="text" name="billAmount" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Percentage Tip:
            <input type="text" name="PercentageTip" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Total: ${this.state.total}</h3>
      </div>
    );
  }
}

export default Body;
