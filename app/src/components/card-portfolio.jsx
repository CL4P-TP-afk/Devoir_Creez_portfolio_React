import { Button, Card, CardTitle, CardText, CardImg,CardHeader, CardBody, CardFooter } from 'reactstrap';

const CardPortfolio = (props) => {
    return (
        <Card>
            <CardHeader className='p-0'>
                <CardImg alt={props.alt} src={props.src} width="100%" />
            </CardHeader>                  
            <CardBody >
                <CardTitle tag="h2">
                {props.title}
                </CardTitle>
                <CardText>
                {props.text}
                </CardText>
                <Button>Voir le site</Button>
            </CardBody>
            <CardFooter>
            {props.footer}
            </CardFooter>
        </Card>
    );
};

export default CardPortfolio;
