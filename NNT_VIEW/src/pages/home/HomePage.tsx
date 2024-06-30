/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/event";
import img from "../../assets/image 55.png";
import { useNavigate } from "react-router-dom";

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
      <div className="flex justify-between fixed w-full bg-purple-100">
        <div className="flex justify-start ml-2">
          <img src={img} alt="" />
        </div>
        <div className="text-5xl font-bold mr-32"> NNT</div>
      </div>

      <div className="pt-14 bg-purple-100"></div>

      <div className="flex px-10 gap-5 h-40 items-center overflow-x-auto bg-purple-100">
        {events.map((event: any) => (
            <div onClick={() => navigate(`/event/1`)}
             className="min-w-80 bg-yellow-100 flex justify-between rounded-lg h-32 shadow-lg">
              <div className="w-48 flex flex-col gap-2 justify-center items-center">
                <h1 className="text-xl font-bold">{event.name}</h1>
                <div className="border-black rounded-xl border-4 p-1">10/06/2024</div>
                <p>13:00 - 21:00 </p>
              </div>
              <img src={event.photo}/>
            </div>
          ))}
      </div>

      <div className="flex overflow-x-auto py-5 bg-purple-100">
        {categories.map((category) => (
          <div className="min-w-32 text-center rounded-lg mx-5 px-5 bg-yellow-200 border-l-4 hover:bg-purple-600 hover:border-l-4 hover:border-black hover:text-white">{category}</div>
        ))}
      </div>

      <div className="flex pt-3 flex-col px-10 gap-5 pb-10 bg-purple-100">
        {events.map((event: any) => (
          <div onClick={() => navigate(`/event/1`)} className=" bg-yellow-100 flex justify-between rounded-lg overflow-hidden h-32 shadow-xl">
            <div className="w-48 flex flex-col gap-2 justify-center items-center">
              <h1 className="text-xl font-bold">{event.name}</h1>
              <div className="border-black rounded-xl border-4 p-1">10/06/2024</div>
              <p>13:00 - 21:00 </p>
            </div>
            <img src={event.photo}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
