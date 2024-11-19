import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { ModalPhotoProvider } from '../Feed/ModalPhotoContext';

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ModalPhotoProvider>
                            <Feed />
                        </ModalPhotoProvider>
                    }
                />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
};

export default User;
