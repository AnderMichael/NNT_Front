import { useEffect, useState } from "react";
import { getAllEvents } from "../../api/event";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const data: any = getAllEvents();
    setEvents(data);
  }, []);
  return (
    <>
      <div> Aqui estará el home todo bonito</div>
      <div className="flex flex-row p-3  ">
        {" "}
        {events.map((event: any) => (
          <div className="bg-slate-100">
            {" "}
            <h1>{event.name}</h1>{" "}
            <img src={event.photo}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
