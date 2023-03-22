import styles from './Card.module.scss';
import Button from "../Button/Button";
import {useDispatch} from 'react-redux';
import { toggleCard } from '../../redux/store';
import { removeCard } from '../../redux/store';
import clsx from 'clsx';

const Card = props => {
    const dispatch = useDispatch();

    return (
        <li className={styles.card}>{props.title}
            <Button >
                <span className={clsx("fa fa-star-o", props.isFavorite ? styles.isFavorite : styles.notFavorite)}
                      onClick={() => dispatch(toggleCard(props.id))}/>
            </Button>
            <Button>
                <span className="fa fa-trash" onClick={()=> {dispatch(removeCard(props.id))}}/>
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



