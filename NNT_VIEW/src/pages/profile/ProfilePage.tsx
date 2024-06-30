import { useEffect, useState } from "react";
import InfoProfile from "./components/InfoProfile";
import ActivityCard from "./components/ActivityCard";
import { getUser } from "../../api/usser";
import { getEventById } from "../../api/event";
import React from "react";

interface IdataRecentActivities {
  photo: string;
  title: string;
  place: string;
  nmissions: number;
  ncompleted: number;
  rank: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  __v: number;
  description: string;
  goals: { url: string; name: string }[];
  last_events: string[];
  username: string;
  missions: number;
  photo: string;
  fav_event: string;
}

export interface EventData {
  _id: string;
  date: string;
  hour: string;
  direction: string;
  price: number;
  description: string;
  contact: string;
  sponsor: string;
  organizer: string;
  __v: number;
  photo: string;
  title: string;
  nComplete: number;
  nMissions: number;
  rank: number;
}

const ProfilePage = () => {
  const [dataUser, setDataUser] = useState<IUser>({
    _id: "",
    name: "",
    email: "",
    password: "",
    __v: 0,
    description: "",
    goals: [],
    last_events: [],
    username: "",
    missions: 0,
    photo: "",
    fav_event: "",
  });
  const [dataRecentActivities, setDataRecentActivities] = useState<EventData[]>([]);
  const [dataFavoriteActivity, setDataFavoriteActivity] = useState<EventData>({
    _id: "",
    date: "",
    hour: "",
    direction: "",
    price: 0,
    description: "",
    contact: "",
    sponsor: "",
    organizer: "",
    __v: 0,
    photo: "",
    title: "",
    nComplete: 0,
    nMissions: 0,
    rank: 0,
  });

  const fetchData = async () => {
    try {
      const dataU = await getUser();
      setDataUser(dataU);

      if (dataU.fav_event) {
        const favoriteActivity = await getEventById(dataU.fav_event);
        setDataFavoriteActivity(favoriteActivity);
      }

      const recentActivitiesPromises = dataU.last_events.map((eventid: string) =>
        getEventById(eventid)
      );
      const recentActivities = await Promise.all(recentActivitiesPromises);
      setDataRecentActivities(recentActivities);
    } catch (error) {
      console.log("uwun't");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <InfoProfile dataUser={dataUser!} />
      <span className="py-5 mx-5 font-bold text-2xl"> Logros</span>
      {/* Achievements Section */}
      <div className="mx-6">
        <div className="flex justify-start mt-2 gap-4">
          {dataUser.goals.map((goal: any) => (
            <img className=" w-16 h-16 rounded-full" src={goal.url}></img>
          ))}
        </div>
      </div>
      <span className="pt-5 mx-5 font-bold text-2xl"> Favorito</span>

      <div className="p-5">
        <ActivityCard dataActivity={dataFavoriteActivity} />
      </div>
      <span className=" mx-5 font-bold text-2xl"> Actividad Reciente</span>

      <div className="pt-5 mx-5">
        {dataRecentActivities.map((activity: EventData) => (
          <ActivityCard dataActivity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
