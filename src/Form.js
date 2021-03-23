import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

  // This is where you will create a function where you will make a fetch call to your edit route from your api.
  //  You will save all the user input in the state and then you will then send that user input data living in state to your API
  
	render() {
		console.log('edit dog inside form', this.props);
		return (
			<form>
				<label for="breed">Breed:</label>
				<input name="breed" placeholder={this.props.dogToEdit.name} />
				<div>
					<button>Update Dog</button>
				</div>
			</form>
		);
	}
}
