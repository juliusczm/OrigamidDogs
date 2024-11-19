import React from 'react';

// Criação do contexto
export const ModalPhotoContext = React.createContext();

// Provedor do contexto
export const ModalPhotoProvider = ({ children }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <ModalPhotoContext.Provider value={{ modalPhoto, setModalPhoto }}>
            {children}
        </ModalPhotoContext.Provider>
    );
};
