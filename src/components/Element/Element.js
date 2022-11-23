const Element = (props) => {
    console.log(props)
    return <a href="/#" style={{ color: props.colorText}}>{props.nombre}</a>

}

export default Element