import { ListGroup, Container, Card } from "react-bootstrap";

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage}</ListGroup.Item>);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    );
}