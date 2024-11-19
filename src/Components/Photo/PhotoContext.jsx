import React from 'react';
import { PHOTOS_GET, PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';

export const PhotoContext = React.createContext();

export const PhotoProvider = ({ children }) => {
    const [photos, setPhotos] = React.useState(null);
    const [selectedPhoto, setSelectedPhoto] = React.useState(null);
    const { loading, error, request } = useFetch();

    const getPhotos = React.useCallback(
        async (page = 1, total = 6, user = 0) => {
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { json } = await request(url, options);
            setPhotos(json);
        },
        [request]
    );

    const getPhotoById = React.useCallback(
        async (id) => {
            const { url, options } = PHOTO_GET(id);
            const { json } = await request(url, options);
            setSelectedPhoto(json);
        },
        [request]
    );

    return (
        <PhotoContext.Provider
            value={{
                photos,
                selectedPhoto,
                loading,
                error,
                getPhotos,
                getPhotoById,
                setSelectedPhoto,
            }}
        >
            {children}
        </PhotoContext.Provider>
    );
};
