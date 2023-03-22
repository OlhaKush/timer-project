import styles from './Favorite.module.scss';
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/store';


const Favorite = props => {

    const cards = useSelector(state => getFavorite(state, props.id));

    return (
        <Container >
            <PageTitle>Favorite</PageTitle>
            <p>Some text here</p>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
                </ul>
            </article>
        </Container>
    );
};

export default Favorite;
