import React from "react";

const Progress = (props) => {
    const {status} = props;
    const data: number[] =[0,0,0,0,0,0,0];



    return(
    <div className="flex flex-row w-full justify-between items-center">
        {
        data.map((a: any, index: number) => (
            <>
            <div className={`flex h-6 w-6 ${index<status ? "bg-yellow": "bg-amber-100"} rounded-full`}/>
            <div className={`flex h-1 w-6 ${index<status-1 ? "bg-yellow": "bg-amber-100"} rounded-full`}/>
            </>
        ))
        }
            <div className={`flex h-6 w-6 ${8<status ? "bg-yellow": "bg-amber-100"} rounded-full`}/>


    </div>
    );
}

export default Progress;