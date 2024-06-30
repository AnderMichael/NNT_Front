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
            <div className="flex flex-col">
                <img src={image47} alt="" className="px-10 pt-5 rounded-lg" />
                <div className="m-auto text-xl">
                    <h3><strong>Nombre del evento:</strong> Fiestita</h3>
                    <p><strong>Fecha:</strong> 20-10-2024</p>
                    <p><strong>Hora:</strong> 13:00</p>
                    <p><strong>Lugar:</strong> La Paz</p>
                    <p><strong>Costo:</strong> 25</p>
                </div>
            </div>
            <div className="mb-28 mt-5 flex justify-center">
                <img src={mapa} alt="" />
            </div>

            <div className="fixed bottom-10 right-10">
                <button className="bg-yellow-300 text-2xl font-bold p-2 w-80 rounded-full shadow-xl">Participare</button>
            </div>

        </>
    );
}

export default EventPage;