import React from 'react';
import ProCoder from '../../imgg/ProCoder.png';
import './Main.scss';

export const Header = () => {
    return (
        <header className='center'>
            <img src={ProCoder} alt="logo" />
        </header>
    )
}
