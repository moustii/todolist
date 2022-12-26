import { useState } from "react";
import MainTitle from "./components/MainTitle/MainTitle";
import Button from "./components/Button/Button";
import Tasks from "./containers/Tasks/Tasks";
import './App.css';

function App() {
    const [addform, setAddForm] = useState(false);

    const changeAddFormState = () => setAddForm(addform => !addform);

    return (
        <div className="app-container">

            <MainTitle>
                Just Do It
            </MainTitle>

            <Tasks form={addform} closeAddForm={() => setAddForm(addform => !addform)}/>

            <Button click={changeAddFormState}>
                {!addform? 'AJOUTER' : 'FERMER'}
            </Button>

        </div>
    );
}

export default App;
