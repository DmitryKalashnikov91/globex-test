import { useContext } from 'react';
import { SearchContext } from './Items';
import styles from './styles/Search.module.css';

const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    return (
        <>
            <div className={styles.search}>
                <input
                    className={styles.input}
                    type='search'
                    placeholder='search'
                    name='searchQuery'
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <button className={styles.btn}>
                    <i className='bi bi-search'></i>
                </button>
            </div>
        </>
    );
};

export default Search;
