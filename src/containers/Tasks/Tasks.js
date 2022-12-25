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

    
    render() {
        console.log(this.state.tasks);
        return (
            <div className='tasks-list'>
                {
                    this.state.tasks.map(task => {
                        return (
                            <div className='task'>
                                <Task 
                                    title={task.title.toUpperCase()} 
                                    description={task.description}
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