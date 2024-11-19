import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import { ModalPhotoContext } from './ModalPhotoContext';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = () => {
    const { modalPhoto, setModalPhoto } = React.useContext(ModalPhotoContext);
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(modalPhoto.id);
        request(url, options);
    }, [modalPhoto, request]);

    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') setModalPhoto(null);
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [setModalPhoto]);

    function handleOutsidelick(event) {
        if (event.target === event.currentTarget) setModalPhoto(null);
    }

    return (
        <div className={styles.modal} onClick={handleOutsidelick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    );
};

export default FeedModal;
