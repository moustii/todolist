import React, {Component} from 'react';
import './Tasks.css';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';

class Tasks extends Component {

    state = {
        tasks: [
            {id: 1, title: "Rdv dentiste", description: "Detartrage annuel à 15h"},
            {id: 2, title: "Controle technique", description: "Prendre rdv pour le CT"},
            {id: 4, title: "Boulangerie", description: "Acheter du pain et des croissants"},
            {id: 7, title: "Dev", description: "Initiation aux hooks"},
        ],
        doneTasks: [],
    };

    handleDeleteTask = (id) => {
        const taskIndex = this.state.tasks.findIndex(task => {
            return task.id === id
        });
        // copy des tableaux
        const copyTasks = [...this.state.tasks];
        const copyOldTasks = [...this.state.doneTasks];

        // recuperation et ajout de la tache qui a été supprimée dans un nouveau tableau
        const oldTask = this.state.tasks[taskIndex];
        copyOldTasks.push(oldTask);

        // effacement de la tache de la liste des taches (this.state.tasks) 
        copyTasks.splice(taskIndex, 1);

        // update
        this.setState({
            tasks: copyTasks,
            doneTasks: copyOldTasks
        });
    }

    handleAddTask = (title, description) => {
        const lastIndex = (this.state.tasks.length) - 1;
        const lastId = this.state.tasks[lastIndex].id;

        const newTask = {
            id: lastId + 1,
            title: title,
            description: description
        };
        const copyTasks = [...this.state.tasks];
        copyTasks.push(newTask);
        this.setState({tasks: copyTasks});    
        this.props.closeAddForm();   
    }
    
    render() {
        console.log(this.state.doneTasks);
        return (
            <>
                <div className='tasks-list'>
                    {
                        !this.props.btnDisplay &&  

                        this.state.tasks.reverse().map(task => {
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

                    {
                        this.props.btnDisplay &&  
                        this.state.doneTasks.reverse().map(doneTask => {
                                return (
                                    <div className='task' key={doneTask.id}>
                                        <Task 
                                            title={doneTask.title.toUpperCase()} 
                                            description={doneTask.description}
                                            delete={() => this.handleDeleteTask(doneTask.id)}
                                        />
                                    </div>
                                )
                            })
                    }
                    
                </div>

                {
                    this.props.form && <AddTask addTask={this.handleAddTask}/>
                }
            </>
        );
    }
}

export default Tasks;