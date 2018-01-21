import React, {Component} from "react";

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {sumTotal: 0, 
    	number1: '', 
    	number2: ''}

    this.number1 = this.number1.bind(this);
    this.number2 = this.number2.bind(this);
    this.reset = this.reset.bind(this);
    

    }
  number1(event){
  	let num = Number(event.target.value);
  	let temp = this.state.sumTotal;
  	this.setState({sumTotal: num + temp, number1: num})
  	console.log(this.state.number1);

  }
  number2(event){
  	let num = Number(event.target.value);
  	let temp = this.state.sumTotal;
  	console.log(typeof num);
  	console.log('num', num);
  	console.log('sum', temp);
  	this.setState({sumTotal: num + temp, number2: num})
  }

  reset(){
  	this.setState({sumTotal: 0, number1: '', number2: ''})
  }

  render() {
    return (
      <div className="container">
  		<h1>React Calculator</h1>
        </
  		<div className="add">
	    	<input type="number" value={this.state.number1} onChange={this.number1} />
	    <span>+</span>
	    	<input type="number"  value={this.state.number2} onChange={this.number2} />
	    <span>=</span>
    	<h3>Addition results go here!</h3>
    	{this.state.sumTotal}
    	<button onClick={this.reset}>Reset Total</button>

  	</div>
</div>
    );
  }
}

export default Calculator;