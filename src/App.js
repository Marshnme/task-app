import React from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputField: { text: '', id: uniqid() },
			list: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.inputSubmit = this.inputSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			inputField: { text: e.target.value, id: this.state.inputField.id },
		});
	}

	listCounter = 1;

	inputSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		if (this.state.list.length === 0) {
			this.listCounter = 1;
		}
		this.setState({
			list: [
				...this.state.list,
				{
					item: this.state.inputField.text,
					id: this.state.inputField.id,
					num: this.listCounter,
				},
			],
		});
		this.setState({ inputField: { text: '', id: uniqid() } });
		this.listCounter++;
	}

	deleteItem(id, e) {
		e.preventDefault();
		console.log(this.state.list);
		let newState = this.state.list.filter((item) => {
			if (item.id !== id) {
				return item;
			}
		});
		this.setState({ list: newState });
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
							value={inputField.text}
						></input>
						<button onClick={this.inputSubmit}>Submit</button>
					</form>
				</div>
				<div className="list-parent">
					<Overview
						tasks={list}
						removeTask={this.deleteItem}
					></Overview>
				</div>
			</div>
		);
	}
}

export default App;
