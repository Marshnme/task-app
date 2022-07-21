import React from 'react'
class Overview extends React.Component{

    

    render() {
        let {tasks,removeTask,editField,handleEdit,handleEditChange,handleEditSubmit} = this.props
        
        return (
            <div>
                {tasks.map(task => {
                    return (
                        <div key={task.id} className='task-item'>
                            
                            {task.edit ? 
                                <form onSubmit={handleEditSubmit.bind(this,task.id)}  action="">
                                    <input onChange={handleEditChange} value={editField} type='text'></input>
                                    <button type='submit'>submit</button>
                                </form>
                               
                            :
                               <p onClick={handleEdit.bind(this,task)}> <span className='task-num'>{task.num}.</span>{task.item} <span onClick={removeTask.bind(this, task.id)} className='task-delete'>x</span></p>   
                            }
                            
                               
                          
                            
                        </div>
                    )
                })}
            </div>
        );
	}
}

export default Overview