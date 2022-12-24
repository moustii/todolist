import React, {Component} from 'react';
import './Tasks.css';

class Tasks extends Component {

    state = {
        tasks: [
            {id: 1, title: "Rdv dentiste", description: "Detartrage annuel à 15h"},
            {id: 2, title: "Controle technique", description: "Prendre rdv pour le CT"},
            {id: 3, title: "Boulangerie", description: "Acheter du pain et des croissants"},
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
                                <p>{task.title.toUpperCase()}</p>
                                <p>{task.description}</p>
                            </div>
                        )
                    })
                }
            </div>
      
            
        );
    }









}

export default Tasks;