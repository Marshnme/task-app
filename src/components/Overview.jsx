import React from 'react'
class Overview extends React.Component{

    

    render() {
        return (
            <div>
                {this.props.tasks.map(task => {
                    return <p key={this.props.tasks.indexOf(task)}>{task}</p>
                })}
            </div>
        );
	}
}

export default Overview