/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import img from "../../assets/image 55.png";
import profile from "../../assets/perfilRanking.png";
import top from "../../assets/top.png";

const RankingPage = () => {

    const [ranking, setRanking] = useState([{}]);
    const [top3, setTop3] = useState([{name: "", points: 0}]);

    useEffect(() => {
        setTop3([
            {name: "Adrian", points: 250},
            {name: "Ander", points: 190},
            {name: "Ambar", points: 160},
        ]);
        setRanking([
            {name: "Juan", points: 100},
            {name: "Pedro", points: 90},
            {name: "Maria", points: 80},
            {name: "Jose", points: 70},
            {name: "Ana", points: 60},
            {name: "Luis", points: 50},
            {name: "Laura", points: 40},
            {name: "Carlos", points: 30},
        ]);
    }, []);
    

    return(
        <>
            <div className="flex items-center">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="text-3xl font-bold"> Misiones completadas</div>
            </div>
            <div className="flex flex-col items-center">
                <div className="border-black border-2 rounded-xl bg-yellow-100 p-1 flex justify-center w-48 gap-2 h-28">
                    <div className="absolute top-12 left-20 bg-red-500 w-14 h-10 text-center text-2xl font-bold rounded-full">1</div>
                    <img src={top} alt=""/>
                    <div className="flex flex-col ">
                        <span>{top3[0].name}</span>
                        <span>{top3[0].points} M</span>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="absolute top-40 left-2 bg-green-500 w-14 h-10 text-center text-2xl font-bold rounded-full">2</div>
                    <div className="border-black border-2 rounded-xl bg-yellow-100 p-1 flex flex-col items-center justify-center w-40 h-32">
                        <img src={top} alt="" className="h-24 w-28"/>
                        <span>{top3[1].name} {top3[1].points} M</span>
                    </div>
                    <div className="absolute top-40 left-48 bg-yellow-500 w-14 h-10 text-center text-2xl font-bold rounded-full">3</div>
                    <div className="border-black border-2 rounded-xl bg-yellow-100 p-1 flex flex-col items-center justify-center w-40 h-32">
                        <img src={top} alt="" className="h-24 w-28"/>
                        <span>{top3[2].name} {top3[2].points} M</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 py-5">
                {
                    ranking.map((rank: any, i:number) => (
                        <div className="flex items-center">
                        <span className="text-4xl ml-4">{i+4}</span>
                        <div className="flex border-black border-2 items-center overflow-hidden justify-between w-80 h-20 rounded-xl m-auto bg-yellow-100">
                            <img src={profile} alt="" className="h-20" />
                            <div className="w-48 flex justify-around items-center">
                                <div className="font-bold text-3xl">{rank.name}</div>
                                <div className="font-bold text-xl">{rank.points} M</div>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default RankingPage;