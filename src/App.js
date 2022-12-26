import { useState } from "react";
import MainTitle from "./components/MainTitle/MainTitle";
import Button from "./components/Button/Button";
import Tasks from "./containers/Tasks/Tasks";
import './App.css';

function App() {
    const [addform, setAddForm] = useState(false);

    const changeAddFormState = () => setAddForm(addform => !addform);
    console.log(addform);

    return (
        <div className="app-container">

            <MainTitle>
                Just Do It
            </MainTitle>

            <Tasks/>

            <Button click={changeAddFormState}>
                AJOUTER
            </Button>

        </div>
    );
}

export default App;
