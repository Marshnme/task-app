import React from 'react'
class Overview extends React.Component{

    

    render() {
        let {tasks,removeTask} = this.props
        console.log(tasks)
        return (
            <div>
                {tasks.map(task => {
                    return (
                        <div key={task.id} className='task-item'>
                            <p> <span className='task-num'>{task.num}.</span>{task.item} <span onClick={removeTask.bind(this, task.id)} className='task-delete'>x</span></p>
                        </div>
                    )
                })}
            </div>
        );
	}
}

export default Overview