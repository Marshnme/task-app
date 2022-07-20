import React from 'react'
class Overview extends React.Component{

    

    render() {
        let { tasks } = this.props
        console.log(tasks)
        return (
            <div>
                {tasks.map(task => {
                    return (
                        <div key={task.id} className='task-item'>
                           <p> <span>{task.num}.</span>{task.item}</p>
                        </div>
                    )
                })}
            </div>
        );
	}
}

export default Overview