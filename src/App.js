import { useState } from "react";
import MainTitle from "./components/MainTitle/MainTitle";
import Button from "./components/Button/Button";
import Tasks from "./containers/Tasks/Tasks";
import './App.css';

function App() {
    const [addform, setAddForm] = useState(false);
    const [btnRender, setBtnRender] = useState(false);

    const changeAddFormState = () => setAddForm(addform => !addform);

    const changeRender = () => setBtnRender(btnRender => !btnRender);

    return (
        <div className="appContainer">

            <MainTitle>
                Just Do It
            </MainTitle>

            <div>
                <Button click={changeRender}>
                    {
                        !btnRender? 'en cours' : 'terminées'
                    }
                </Button>
            </div>
            <Tasks 
                form={addform} 
                closeAddForm={() => setAddForm(addform => !addform)}
                btnDisplay={btnRender}
            />

            <Button click={changeAddFormState}>
                {!addform? 'AJOUTER' : 'FERMER'}
            </Button>

        </div>
    );
}

export default App;
