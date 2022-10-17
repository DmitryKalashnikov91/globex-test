import styles from './styles/PopupContent.module.css';

const PopupContent = ({ users, usersIndex }) => {
    return (
        <>
            <h2>{users[usersIndex].name}</h2>
            <div className={styles.popup_content}>
                <section className={styles.table}>
                    <label>Телефон:</label>
                    <p>{users[usersIndex].phone}</p>
                    <label>Почта:</label>
                    <p>
                        <a href={`mailto:${users[usersIndex].email}`}>{users[usersIndex].email}</a>
                    </p>
                    <label>Дата приема:</label>
                    <p>{users[usersIndex].hire_date}</p>
                    <label>Должность:</label>
                    <p>{users[usersIndex].position_name}</p>
                    <label>Подразделение:</label>
                    <p>{users[usersIndex].department}</p>
                </section>
                <label>Дополнительная информация:</label>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quae natus
                    quiullam vero fugiat animi dignissimos neque.
                </p>
            </div>
        </>
    );
};

export default PopupContent;
