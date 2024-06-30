import React, { useEffect, useState } from "react";
import { getAllMissionsGeneral } from "../../api/mission";

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
      {dataMissions.map((mission: IMission) => (
        <div className="border-2 border-red-300 p-4 rounded-lg mb-4">
          <div className="flex items-center">
            <div className="flex-grow">
              <div className="bg-gray-200 h-fit flex items-center justify-around">
                
              <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>

                <span className=" bg-yellow-300">
                  {mission.statement}
                </span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
              </div>
              <p className="mt-2">uwu</p>
            </div>
            <div className="ml-4">
              <button className="bg-yellow-400 p-2 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16M4 12h8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MissionsPage;
