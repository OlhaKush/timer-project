import styles from './ColumnForm.module.scss';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addColumn } from '../../redux/store';
import { useParams } from 'react-router-dom';


const ColumnForm = () => {
    const dispatch = useDispatch();
    const { listId } = useParams();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.columnFormLable}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.columnFormLable}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;