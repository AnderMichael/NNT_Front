import axios from "axios";
import { SERVER_URL } from "../config/config";

export const apiEvent = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiEvent.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getEventById = async (id:string) => {
    const res = await apiEvent.get(`/events/${id}`         
    );
    return res.data;
  };

  export const getAllMissionsGeneral = async () => {
    const res = await apiEvent.get(`/missions-general`         
    );
    return res.data;
  };
  
  export const getAllMissionsEvent = async () => {
    const res = await apiEvent.get(`/missions-event`         
    );
    return res.data;
  };

export const getAllEvents = () => {
  const events = [
    {
      id: 1,
      name: "Feria feriosa",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFphmAHo7tmcuGwhVjdsb4cD4Iu8lhvnwsQ&s",
    },
    {
      id: 2,
      name: "Noche de Museos",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JDgZ9L_e8bZmxLJ6cZqpjxWDkohNuPe8OA&s"    },
    {
      id: 3,
      name: "Concierto fino",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHZxNPX4i1IcKBGq6ZJE3NIJu7cJphbiDpQ&s",
    },
    {
      id: 4,
      name: "Concierto fino",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHZxNPX4i1IcKBGq6ZJE3NIJu7cJphbiDpQ&s",
    },
    {
      id: 5,
      name: "Concierto fino",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHZxNPX4i1IcKBGq6ZJE3NIJu7cJphbiDpQ&s",
    },
    {
      id: 6,
      name: "Concierto fino",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHZxNPX4i1IcKBGq6ZJE3NIJu7cJphbiDpQ&s",
    }
  ];
  return events;
};
