import React, {Component} from 'react';
import Button from '../../components/Button/Button';
import classes from './AddTask.module.css'

class AddTask extends Component {

    state = {
        title: "",
        description: "",
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask(this.state.title, this.state.description);
        this.setState({
            title: "",
            description: "",
        });
    }

    render() {
        return (
            <>
                <h2>Ajouter une nouvelle tâche</h2>
                <form style={{marginBottom: 30}}>
                    <label htmlFor='title'>Titre</label>
                    <input
                        className={classes.formInput}
                        type='text'
                        id='title'
                        name='title'
                        value={this.state.title}
                        onChange={(event) => this.setState({title:event.target.value})}
                        autoFocus
                        required
                        maxLength="20"
                    />
                    <label htmlFor='description'>Description</label>
                    <textarea
                        className={classes.formInput}
                        type='text'
                        id='description'
                        name='description'
                        value={this.state.description}
                        onChange={(event) => this.setState({description:event.target.value})}
                        maxLength="100"
                    >
                    </textarea>

                    <Button click={this.handleSubmit}>Enregistrer</Button>

                </form>




            </>
        )
    }












}

export default AddTask;