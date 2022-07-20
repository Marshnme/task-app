import React from 'react'
class Overview extends React.Component{

    

    render() {
        let {tasks} = this.props
        return (
            <div>
                {tasks.map(task => {
                    return <p key={tasks.id}>{task}</p>
                })}
            </div>
        );
	}
}

export default Overview