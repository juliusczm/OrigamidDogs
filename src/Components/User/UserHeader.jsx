import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const [title, setTitle] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        const routeLastName = location.pathname.split('/').at(-1);

        switch (routeLastName) {
            case 'estatisticas':
                setTitle('Estatisticas');
                break;
            case 'postar':
                setTitle('Poste Sua Foto');
                break;
            default:
                setTitle('Minha Conta');
                break;
        }
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};

export default UserHeader;
