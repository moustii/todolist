import classes from "./MainTitle.module.css";

const MainTitle = (props) => {
    return (
        <h1 className={classes.mainTitle}>
            {props.children}
        </h1>
    )
}

export default MainTitle;