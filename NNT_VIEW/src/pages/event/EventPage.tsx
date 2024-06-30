import { useNavigate } from "react-router-dom";
import BsArrowLeftCircleFill from "../../assets/BsArrowLeftCircleFill.png";
import image47 from "../../assets/image 47.png";
import mapa from "../../assets/mapa.png";
import React from "react";
import ModalMenu from "../ModalMenu";

const EventPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <ModalMenu />
            <div className="bg-whitePurple min-h-screen">
                <div className="bg-whitePurple pt-20 flex flex-col">
                    <img src={image47} alt="Evento" className="px-10 pt-5 rounded-lg" />
                    <div className="m-auto text-xl p-5">
                        <h3><strong>Nombre del evento:</strong> Fiestita</h3>
                        <p><strong>Fecha:</strong> 20-10-2024</p>
                        <p><strong>Hora:</strong> 13:00</p>
                        <p><strong>Lugar:</strong> La Paz</p>
                        <p><strong>Costo:</strong> 25 Bs.</p>
                    </div>
                </div>
                <div className="flex-col items-center bg-whitePurple px-20 flex justify-center">
                    <p className="font-bold text-2xl">Ubicacion</p>
                    <img src={mapa} alt="Mapa" className="w-full h-auto max-w-md" />
                </div>
                <div className="bg-whitePurple mt-5 max-h-full pb-20">
                    <div className="fixed bottom-10 right-10">
                        <button className="bg-yellow text-2xl font-bold p-2 w-80 rounded-full shadow-xl">
                            Participaré
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventPage;
