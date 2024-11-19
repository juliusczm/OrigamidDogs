import React from 'react';
import styles from './FeedPhotosItem.module.css';
import { ModalPhotoContext } from './ModalPhotoContext';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo }) => {
    const { setModalPhoto } = React.useContext(ModalPhotoContext);

    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
