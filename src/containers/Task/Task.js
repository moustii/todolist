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

            {
                props.done &&
                <Button 
                    click={props.delete} 
                >
                    OK
                </Button>
            }
        </>
    );
}

export default Task;