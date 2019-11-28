import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" id="" name="city" placeholder="City Name" />
          <input type="text" id="" name="country" placeholder="Country Name"/>
		  <button className="btn btn-primary">Get Weather</button>
		
        </form>
      </div>
    );
  }
}
export default Form;
