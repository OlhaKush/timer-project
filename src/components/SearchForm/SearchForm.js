import styles from './SearchForm.module.scss';
import {useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { searchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(searchString({title}));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchString ({title}));
        setTitle('');
    };

        return (
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <TextInput placeholder="Search…" value={title} onChange={e => setTitle(e.target.value)}/>
                <Button>
                    <span className="fa fa-search"/>
                </Button>
            </form>
        );
};

export default SearchForm;
