import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function card(Props) {
    const variant = Props.variant
    const classCard = Props.classCard
    const title = Props.title
    const textdesc = Props.textdesc
    const item1 = Props.item1
    const item2 = Props.item2
    const item3 = Props.item3

    return (
        <Card className={classCard} style={{ width: '18rem' }}>
            <Card.Img variant={variant} src={Props.src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {textdesc}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{item1}</ListGroup.Item>
                <ListGroup.Item>{item2}</ListGroup.Item>
                <ListGroup.Item>{item3}</ListGroup.Item>
            </ListGroup>

        </Card>
    );
}

export default card;