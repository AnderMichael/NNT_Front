import React, { useEffect, useState } from "react";
import { getAllMissionsGeneral } from "../../api/mission";
import ProgressBar from "./components/Progress";
import Progress from "./components/Progress";
import ModalMenu from "../ModalMenu";

export interface IMission {
  _id: string;
  icon: string;
  statement: string;
  status: number;
  type: string;
  __v: number;
}

const MissionsPage = () => {
  const [dataMissions, setDataMissions] = useState<IMission[]>([
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
    const data = await getAllMissionsGeneral();
    setDataMissions(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <ModalMenu />
      <div className="pt-28"/>
      {dataMissions.map((mission: IMission) => (
        <div className="border-2 border-red-300 p-4 rounded-3xl mb-4 bg-amber-50 mx-2">
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
};

export default MissionsPage;
