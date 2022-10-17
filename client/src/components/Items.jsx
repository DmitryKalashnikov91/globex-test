// libraries
import axios from 'axios';
import { createContext } from 'react';
import { useEffect, useState } from 'react';

// Components
import Popup from './Popup';
import PopupContent from './PopupContent';
import Search from './Search';

// Styles
import styles from './styles/Items.module.css';

export const SearchContext = createContext();

const Items = () => {
    const [searchValue, setSearchValue] = useState('');
    const [popupActive, setPopupActive] = useState(false);
    const [users, setUsers] = useState([]);
    const [usersIndex, setUsersIndex] = useState(); // get index of card

    useEffect(() => {
        let cards = document.querySelectorAll('#cards'); // get element crd for click
        cards.forEach((card, i) => {
            card.addEventListener('click', () => {
                setUsersIndex(i);
                setPopupActive(true);
            });
        });
    }, [users]);
    useEffect(() => {
        const search = searchValue ? `?term=${searchValue}` : '';
        axios
            .get(`http://localhost:3001/${search}`)
            .then((res) => res)
            .then((arr) => setUsers(arr.data));
    }, [searchValue]);

    // sorted users of query response
    const usersData = users.filter((obj) => {
        if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    });

    return (
        <>
            <div className={styles.container}>
                <SearchContext.Provider value={{ searchValue, setSearchValue, users }}>
                    <Search />
                    <ul className={styles.items}>
                        {usersData.map((user) => (
                            <li key={user.phone} className={styles.card} id='cards'>
                                <h2>{user.name}</h2>
                                <span>
                                    <i className='bi bi-phone'> </i>
                                    {user.phone}
                                </span>
                                <br />
                                <span>
                                    <i className='bi bi-envelope'> </i>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </span>
                            </li>
                        ))}
                        {popupActive && (
                            <Popup active={popupActive} setActive={setPopupActive}>
                                <PopupContent users={users} usersIndex={usersIndex} />
                            </Popup>
                        )}
                    </ul>
                </SearchContext.Provider>
            </div>
        </>
    );
};
export default Items;
