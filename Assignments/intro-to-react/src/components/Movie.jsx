function Movie(props) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.year}</li>
            <li>{props.rating}</li>
        </ul>
    )
}

export default Movie