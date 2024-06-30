import React, { useEffect, useState } from "react";
import ModalMenu from '../ModalMenu';
import { getAllMissionsEvent } from "../../api/mission";
import Progress from '../missions/components/Progress';

export interface IEvent {
    _id: string;
    icon: string;
    statement: string;
    status: number;
    type: string;
    __v: number;
  }

const MissionsEventPage = () => {
    const [dataMissions, setDataMissions] = useState<IEvent[]>([
        {
          _id: "",
          icon: "",
          statement: "",
          status: 0,
          type: "",
          __v: 0,
        },
      ]);
    
      const fetchData = async () => {
        const data = await getAllMissionsEvent();
        setDataMissions(data);
      };

      useEffect(() => {
        fetchData();
      }, []);
    
      return (
        <>
        <ModalMenu />
          <div className="pt-28"/>
          <h3 className="text-3xl mx-2 mb-2 font-bold">Feria del Libro</h3>
          {dataMissions.map((mission: IEvent) => (
            <div key={mission._id} className="border-2 border-red-300 p-4 rounded-3xl mb-4 bg-amber-50 mx-2">
              <div className="flex items-center">
                <div className="flex-grow w-full">
                  <Progress status={mission.status} />
    
                  <div className="mt-5 bg-gray-200 h-fit flex  flex-row items-center justify-around">
                    <span className=" bg-yellow-300 mr-5">{mission.statement}</span>
                    <img
                      className="h-10 w-10"
                      src="https://cdn-icons-png.flaticon.com/512/4363/4363595.png"
                    />
                  </div>
                </div>
                <div className="ml-4"></div>
              </div>
            </div>
          ))}
        </>
      );
}

export default MissionsEventPage;