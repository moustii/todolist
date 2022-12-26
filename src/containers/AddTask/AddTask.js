import React, {Component} from 'react';
import Button from '../../components/Button/Button';

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
                <form>
                    <label htmlFor='title'>Titre</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={this.state.title}
                        onChange={(event) => this.setState({title:event.target.value})}
                    />
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                        value={this.state.description}
                        onChange={(event) => this.setState({description:event.target.value})}

                    />

                    <Button click={this.handleSubmit}>Enregistrer</Button>

                </form>




            </>
        )
    }












}

export default AddTask;