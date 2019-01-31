import React, { Component } from 'react';

class Body extends Component {
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
        </form>
        <h3>Second Form</h3>
        <form>
          <label>
            Percentage Tip:
            <input type="text" name="PercentageTip" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h3>Total: </h3>
      </div>
    );
  }
}

export default Body;
