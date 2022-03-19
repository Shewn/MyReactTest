const Button = ({handleOnClick, label}) => {
    return <button className="buttons" onClick={handleOnClick}>
        {label}
    </button>
}
export default Button;