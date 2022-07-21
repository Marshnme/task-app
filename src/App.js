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
			editField: '',
			edit: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEditChange = this.handleEditChange.bind(this);
		this.inputSubmit = this.inputSubmit.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleEditSubmit = this.handleEditSubmit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			inputField: { text: e.target.value, id: this.state.inputField.id },
		});
	}

	handleEditChange(e) {
		e.preventDefault();
		this.setState({
			editField: e.target.value,
		});
	}

	listCounter = 1;

	inputSubmit(e) {
		e.preventDefault();
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
					edit: false,
				},
			],
		});
		this.setState({ inputField: { text: '', id: uniqid() } });
		this.listCounter++;
	}

	handleEdit(task, e) {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.edit === true) {
			return;
		} else {
			let newList = this.state.list.map((item) => {
				if (task.id === item.id) {
					if (item.edit === true) {
						item.edit = false;
						return item;
					} else if (item.edit === false) {
						console.log('EDDITING');
						item.edit = true;
						this.setState({ edit: true });
						this.setState({ editField: item.item });
						return item;
					}
				} else {
					return item;
				}
			});
			this.setState({ list: newList });
		}
	}

	handleEditSubmit(id, e) {
		console.log(id, e);
		e.preventDefault();
		let newState = this.state.list.map((item) => {
			if (item.id === id) {
				item.item = this.state.editField;
				item.edit = false;
				this.setState({ edit: false });
				return item;
			} else {
				return item;
			}
		});
		this.setState({ list: newState });
	}

	deleteItem(id, e) {
		e.preventDefault();
		e.stopPropagation();
		let newState = this.state.list.filter((item) => {
			if (item.id !== id) {
				return item;
			}
		});
		this.setState({ list: newState });
	}

	render() {
		let { inputField, list, editField } = this.state;
		return (
			<div className="app-container">
				<h2>ITEM LIST</h2>
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
						editField={editField}
						handleEdit={this.handleEdit}
						handleEditChange={this.handleEditChange}
						handleEditSubmit={this.handleEditSubmit}
					></Overview>
				</div>
			</div>
		);
	}
}

export default App;
