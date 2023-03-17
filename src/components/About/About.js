import styles from './About.module.scss';
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

const About = () => {

    return (
        <Container >
            <PageTitle>About</PageTitle>
            <p>Some text here</p>
        </Container>
    );
};

export default About;