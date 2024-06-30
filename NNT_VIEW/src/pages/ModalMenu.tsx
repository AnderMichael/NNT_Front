
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const ModalMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='z-20 bg-whitePurple'>
            <div className="flex justify-between fixed w-full bg-whitePurple p-3">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-16 h-16 cursor-pointer" 
                    onClick={toggleModal} 
                />
                <div className="text-5xl font-bold mr-32">NNT</div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-64">
                        <div className="flex flex-col">
                            <button onClick={toggleModal} className="self-end text-gray-500 hover:text-gray-700">
                                ×
                            </button>
                            <Link to="/home" className="mb-2 text-lg font-semibold" onClick={toggleModal}>Home</Link>
                            <Link to="/profile" className="mb-2 text-lg font-semibold" onClick={toggleModal}>Perfil</Link>
                            <Link to="/ranking" className="mb-2 text-lg font-semibold" onClick={toggleModal}>Ranking</Link>
                            <Link to="/missions" className="mb-2 text-lg font-semibold" onClick={toggleModal}>Misiones</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalMenu;
