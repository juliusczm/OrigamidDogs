import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import { PhotoContext } from '../Photo/PhotoContext';

const FeedPhotos = () => {
    const { photos, loading, error, getPhotos } =
        React.useContext(PhotoContext);

    React.useEffect(() => {
        getPhotos(1, 6, 0);
    }, [getPhotos]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (photos)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {photos.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} />
                ))}
            </ul>
        );
};

export default FeedPhotos;
