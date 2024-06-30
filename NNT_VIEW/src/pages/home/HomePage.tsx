/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/event";
import { useNavigate } from "react-router-dom";
import ModalMenu from "../ModalMenu";
import React from "react";

const HomePage = () => {

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const categories = [
    "All Events",
    "Ferias",
    "Conciertos",
    "Deportes",
    "Cultura",
    "Teatro"
  ];

  useEffect(() => {
    const data: any = getAllEvents();
    setEvents(data);
  }, []);


  return (
    <>
      <ModalMenu />
      <div className="pt-20">
        <div className="flex px-10 gap-5 h-40 items-center overflow-x-auto bg-whitePurple">
          {events.map((event: any) => (
            <div onClick={() => navigate(`/event/1`)}
              className="min-w-80 bg-white flex justify-between rounded-lg h-32 shadow-lg">
              <div className="w-48 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-xl font-bold">{event.name}</h1>
                <div className="border-black rounded-xl border-4 p-1">10/06/2024</div>
                <p>13:00 - 21:00 </p>
              </div>
              <img src={event.photo} />
            </div>
          ))}
        </div>

        <div className="flex overflow-x-auto py-5 bg-whitePurple">
          {categories.map((category) => (
            <div className="min-w-32 text-center rounded-lg mx-5 px-5 bg-yellow border-l-4 hover:bg-purple hover:border-l-4 hover:border-black hover:text-white">{category}</div>
          ))}
        </div>

        <div className="flex pt-3 flex-col px-10 gap-5 pb-10 bg-whitePurple">
          {events.map((event: any) => (
            <div onClick={() => navigate(`/event/1`)} className=" bg-white flex justify-between rounded-lg overflow-hidden h-32 shadow-xl">
              <div className="w-48 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-xl font-bold">{event.name}</h1>
                <div className="border-black rounded-xl border-4 p-1">10/06/2024</div>
                <p>13:00 - 21:00 </p>
              </div>
              <img src={event.photo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
