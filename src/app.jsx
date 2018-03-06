import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 25,
      amountReceived: 30,
      changeDue: "",
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0

    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);

  }
  handleChange(evt) {
    event.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });

  }

  calculate() {

    var amountDue = this.state.amountDue;
    var amountReceived = this.state.amountReceived;
    var changeDue = (amountReceived - amountDue).toFixed(2);



    var twenties = Math.floor(changeDue / 20)
    var twentyDollars = changeDue % 20

    var tens = Math.floor(twentyDollars / 10)
    var tenDollars = twentyDollars % 10

    var fives = Math.floor(tenDollars / 5)
    var fiveDollars = tenDollars % 5

    var ones = Math.floor(fiveDollars / 1)
    var one = fiveDollars % 1

    var quarters = Math.floor(one / .25)
    var quarter = one % .25

    var dimes = Math.floor(quarter / .10)
    var dime = quarter % .10

    var nickels = Math.floor(dime / .05)
    var nickel = dime % .05

    var pennies = Math.round(nickel / .01)
    var penny = nickel % .01

    this.setState({
      changeDue: changeDue,
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies
    });

    console.log(changeDue);
    console.log(pennies);
  }

  render() {





    return (<div className="container">
      <p></p>
      <h1 className="text-white">Change Calculator</h1>
      <hr className="bg-white" ></hr>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header"> Enter Information
    </div>
            <div className="card-body">
              <p className="Card-text"> How much is due?

              <input name="amountDue" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.amountDue} onChange={this.handleChange}></input></p>

              <p className="Card-text"> How much was received?

              <input name="amountReceived" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={this.state.amountReceived} onChange={this.handleChange}></input></p>
              <div className="card-footer"><a href="#" className="btn btn-primary btn-block" onClick={this.calculate}>Calculate</a>

              </div>

            </div>
          </div>

        </div>

        <div className="col-md-8">
          <div className="card w-100">
            <div className="card-body">
              <div value="changeDue" name="changeDue" onChange={this.handleChange} role="alert" className={`alert-${this.state.changeDue > 0 ? 'success' : 'danger'}`} ><div className="alert text-center">Total change due is ${this.state.changeDue}</div> </div>
            </div>
            <div className="card-body">



              <div className="row">
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body ">
                      <p className="Card-text text-center font-weight-bold">Twenties</p>
                      <p className="Card-text text-center" value={this.state.twenties}>{this.state.twenties}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Tens</p>
                      <p className="Card-text text-center" value={this.state.tens}>{this.state.tens}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Fives</p>
                      <p className="Card-text text-center" value={this.state.fives}>{this.state.fives}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Ones</p>
                      <p className="Card-text text-center" value={this.state.ones}>{this.state.ones}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p></p>


              <div className="row">
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Quarters</p>
                      <p className="Card-text text-center" value={this.state.quarters}>{this.state.quarters}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Dimes</p>
                      <p className="Card-text text-center" value={this.state.dimes}>{this.state.dimes}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Nickels</p>
                      <p className="Card-text text-center" value={this.state.nickels}>{this.state.nickels}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 mb-2 bg-light text-black card-outline-secondary">
                    <div className="card-body">
                      <p className="Card-text text-center font-weight-bold">Pennies</p>
                      <p className="Card-text text-center" value={this.state.pennies}>{this.state.pennies}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>)


  }
}

export default App;
