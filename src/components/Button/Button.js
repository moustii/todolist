import classes from './Button.module.css';

const Button = (props) => {
    let css = "";
    switch (props.children) {
        case 'AJOUTER': css = classes.taskButton;
            break;
        case 'en cours': css = classes.btnRender;
            break;
        case 'terminées': css = classes.btnRender;
            break;
        default: css= classes.taskButton;
    }

    return (
        <button className={css} onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;