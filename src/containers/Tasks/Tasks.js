import React, {Component} from 'react';
import './Tasks.css';
import Task from '../Task/Task';

class Tasks extends Component {

    state = {
        tasks: [
            {id: 1, title: "Rdv dentiste", description: "Detartrage annuel à 15h"},
            {id: 2, title: "Controle technique", description: "Prendre rdv pour le CT"},
            {id: 3, title: "Boulangerie", description: "Acheter du pain et des croissants"},
            {id: 4, title: "Dev", description: "Initiation aux hooks"},
        ],
    };

    handleDeleteTask = (id) => {
        const taskIndex = this.state.tasks.findIndex(task => {
            return task.id === id
        });
        const copyTasks = [...this.state.tasks];
        copyTasks.splice(taskIndex, 1);
        this.setState({tasks:copyTasks});
    }

    
    render() {
        return (
            <div className='tasks-list'>
                {
                    this.state.tasks.map(task => {
                        return (
                            <div className='task' key={task.id}>
                                <Task 
                                    title={task.title.toUpperCase()} 
                                    description={task.description}
                                    delete={() => this.handleDeleteTask(task.id)}
                                />
                            </div>
                        )
                    })
                }
            </div>
      
            
        );
    }









}

export default Tasks;