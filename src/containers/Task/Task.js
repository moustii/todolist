import React from "react";
import Button from "../../components/Button/Button";

const Task = (props) => {
    return (
        <>
            <p>
                {props.title}
                <br/>
                {props.description}
            </p>
            <Button 
                typeBtn="btn-warning" 
                click={props.delete} 
            >
                Supprimer
            </Button>
        </>
    );
}

export default Task;