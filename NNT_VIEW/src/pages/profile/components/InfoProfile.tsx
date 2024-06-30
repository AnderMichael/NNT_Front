import React from "react";

const InfoProfile = (props: any) => {
    const {dataUser} = props;
    return(
        <>
            <div className="flex flex-row w-full h-1/2 py-10 px-2.5 bg-slate-100 items-center">
                <img className="rounded-full w-32 h-32 mx-5 object-contain" src={dataUser.photo}/>
                <div className="flex flex-col pr-3">
                    <span className="font-bold">{dataUser.username}</span>
                    <span className="font-normal italic">{dataUser.name}</span>
                    <span>{dataUser.description}</span>
                </div>
            </div>
        </>
    );
}

export default InfoProfile;