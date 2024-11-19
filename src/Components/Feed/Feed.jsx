import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { ModalPhotoContext } from './ModalPhotoContext';
import { PhotoContext, PhotoProvider } from '../Photo/PhotoContext';

const Feed = () => {
    const { modalPhoto } = React.useContext(ModalPhotoContext);
    return (
        <div>
            <PhotoProvider>
                {modalPhoto && <FeedModal />}
                <FeedPhotos />
            </PhotoProvider>
        </div>
    );
};

export default Feed;
