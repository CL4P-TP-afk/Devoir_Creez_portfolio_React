import { Button, Card, CardTitle, CardText, CardImg,CardHeader, CardBody, CardFooter } from 'reactstrap';
import "../pages/card-effect.css";

const CardPortfolio = (props) => {
    return (
        
            <Card style={{width: '100%'}} className='h-100 card-hover'>
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
                    <Button href="#" tag="a" color="primary">Voir le site</Button>
                </CardBody>
                <CardFooter>
                {props.footer}
                </CardFooter>
            </Card>
       
    );
};

export default CardPortfolio;
