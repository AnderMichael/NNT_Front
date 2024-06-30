import React from "react";

const ActivityCard = (props: any) => {
  const { dataActivity } = props;
  console.log(dataActivity);
  return (
    <>
      <div className="flex flex-row w-full max-h-max  bg-[#F7ECE1] items-center shadow-md shadow-slate-800 rounded-lg mb-4">
        <img className="rounded-md w-1/3 mr-5 " src={dataActivity.photo} />
        <div className="flex flex-col pr-3 w-full">
          <div className="flex justify-center h-full ">
            <span className="font-bold">{dataActivity.title}</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <span className="font-semibold">Lugar</span>
              <span className="font-normal italic text-sm">
               {dataActivity.direction}
            </span>
            </div>
            <div className="flex flex-row justify-between">
            <span className="font-semibold">Misiones</span>
           
            <span className="font-normal italic">
               {dataActivity.nComplete}/{dataActivity.nMissions}
            </span>
            </div>
            
          </div>
         
        </div>
        <div className="w-[1px] min-h-20 rounded-lg bg-black text-[#F7ECE1]">{" l"}</div>
        <div className="m-3 flex items-center">
          <span className="text-center">{dataActivity.rank}° Lugar</span>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
