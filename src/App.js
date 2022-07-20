import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inputField: '', list: [] };

		this.handleChange = this.handleChange.bind(this);
		this.inputSubmit = this.inputSubmit.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({ inputField: e.target.value });
	}

	inputSubmit(e) {
		e.preventDefault();
		this.setState({ list: [...this.state.list, this.state.inputField] });
		this.setState({ inputField: '' });
	}

	render() {
		let { inputField, list } = this.state;
		return (
			<div className="app-container">
				<div className="input-parent">
					<form>
						<input
							type="text"
							onChange={this.handleChange}
							value={inputField}
						></input>
						<button onClick={this.inputSubmit}>Submit</button>
					</form>
				</div>
				<div className="list-parent">
					<Overview tasks={list}></Overview>
				</div>
			</div>
		);
	}
}

export default App;
