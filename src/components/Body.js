import React, { Component } from 'react';

class Body extends Component {
  render(){
    return(
      <div>
        <form>
          <label>
            Bill Amount:
            <input type="text" name="billAmount" />
          </label>
          <input type="submit" value="Submit" />
          <h1>Next</h1>
        </form>
      </div>
    );
  }
}

export default Body;
