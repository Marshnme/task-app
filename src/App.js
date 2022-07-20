import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}

	render() {
		return (
			<div>
				<div className="input-parent">
					<input></input>
				</div>
				<div className="list-parent">
					<Overview tasks={this.state.list}></Overview>
				</div>
			</div>
		);
	}
}

export default App;
