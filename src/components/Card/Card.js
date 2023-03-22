import styles from './Card.module.scss';
import Button from "../Button/Button";
import {useDispatch} from 'react-redux';
import { toggleCard } from '../../redux/store';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCard(props.id));
        };

    return (
        <li className={styles.card}>{props.title}
            <Button >
                <span className={clsx("fa fa-star-o", props.isFavorite ? styles.isFavorite : styles.notFavorite)} onClick={handleSubmit}/>
            </Button>
            <Button>
                <span className="fa fa-trash"/>
            </Button>
        </li>
    );
};


// const Card = props => {
//     const [isFavorite, setFavorite] = useState('');
//
//     const toggleClass = () => {
//         setFavorite(!isFavorite);
//     };
//
//     return (
//         <li className={styles.card}>{props.title}
//             <Button >
//                 <span className={clsx("fa fa-star-o", isFavorite ? styles.isFavorite : styles.notFavorite)} onClick={toggleClass}/>
//             </Button>
//             <Button>
//                 <span className="fa fa-trash"/>
//             </Button>
//         </li>
//     );
// };

export default Card;



