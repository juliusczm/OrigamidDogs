import React from 'react';
import Feed from './Feed/Feed';
import { ModalPhotoProvider } from './Feed/ModalPhotoContext';
import Loading from './Helper/Loading';

const Home = () => {
    return (
        <section className="mainContainer container">
            <ModalPhotoProvider>
                <Loading />
                {/* <Feed /> */}
            </ModalPhotoProvider>
        </section>
    );
};

export default Home;
