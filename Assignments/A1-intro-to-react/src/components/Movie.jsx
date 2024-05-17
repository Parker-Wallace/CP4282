import ListGroup from 'react-bootstrap/ListGroup';

function Movie(props) {
    return (
        <ListGroup>
            <ListGroup.Item>{props.name}</ListGroup.Item>
            <ListGroup.Item>{props.year}</ListGroup.Item>
            <ListGroup.Item>{props.rating}</ListGroup.Item>
        </ListGroup>
    )
}

export default Movie