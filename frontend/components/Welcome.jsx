var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('..//helloUtil');
var Dropdown = require('react-dropdown');
var options = [
  {value: "boy-bands", label: "Boy Bands"},
  {value: "fruit", label: "Fruits"},
  {value: "car-brands", label: "Car Brands"},
  {value: "cold-cereals", label: "Cold Cereals"}
];


var Welcome = React.createClass({
  getInitialState: function(){
    return({username: null, password: null, message: "", selected: null})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  yesClick: function(){

    this.props.nextClick('PreferPage');

  },
  noClick: function(){
    this.props.nextClick("Anarchy");
  },
  _onSelect: function(option){
    console.log('You selected ', option.label);
    this.setState({selected: option});
  },

  render: function() {
    return (
      <div className="inner">
          <h1>What things would you like to compare?</h1>
          <p>Here are some suggestions! </p>
          <Dropdown options={options} onChange={this._onSelect} value={"boy-bands"} placeholder="Select an option" />
          <div className="vertical-container">
            <button className="btn btn-primary" onClick={this.yesClick}>Graph!</button>
          </div>
      </div>

    );
  }

});

module.exports = Welcome;
