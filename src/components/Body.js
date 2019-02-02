import React, { Component } from 'react';

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: null
    };
  }

  handleChange = (event) => {
    this.setState({
      total: event.target.value
    });
  };


  render(){
    return(
      <div>
        <h3>First Form</h3>
        <form>
          <div>
           <label>
             Bill Amount:
             <input
              type="text"
              name="billAmount"
              placeholder="$"
              value={this.state.total}
              onChange={this.handleChange.bind(this)} />
           </label>
          </div>
          <div>
           <label>
             Percentage Tip:
             <input type="text" name="PercentageTip" placeholder="%" />
           </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <h3>Total: ${this.state.total}</h3>
      </div>
    );
  }
}

export default Body;
