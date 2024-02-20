const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    text: "Add"
}

export default Button