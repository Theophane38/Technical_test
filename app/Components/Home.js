import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {routes} from "../config/routes";

const Home = () => {
    return(
        <div className='flex justify-center pt-[200px]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] w-full max-w-[1280px] mx-auto'>
                <div className='bg-[#1a1a1a] h-[360px] relative px-[40px] rounded-[10px] flex flex-col justify-center space-y-[40px]'>
                    <span className='text-white text-center font-bold text-[1.875rem]'>Copain or not copain ?</span>
                    <Link to={routes.algo} className='text-center bg-white rounded-[110px] text-[1.125rem] px-[40px] py-[20px] font-bold'>Voir le test</Link>
                    <span className='text-center text-white'>Test algo</span>
                </div>
                <div className='bg-[#0B5351] h-[360px] relative px-[40px] rounded-[10px] flex flex-col justify-center space-y-[40px]'>
                    <span className='text-white text-center font-bold text-[1.875rem]'>Vous avez un nouveau message !</span>
                    <Link to={routes.react} className='text-center bg-white rounded-[110px] text-[1.125rem] px-[40px] py-[20px] font-bold'>Voir le test</Link>
                    <span className='text-center text-white'>Test ReactJS</span>
                </div>
                <div className='bg-[#1a1a1a] h-[360px] relative px-[40px] rounded-[10px] flex flex-col justify-center space-y-[40px]'>
                    <span className='text-white text-center font-bold text-[1.875rem]'>En quête de la requête</span>
                    <Link to={routes.sql} className='text-center bg-white rounded-[110px] text-[1.125rem] px-[40px] py-[20px] font-bold'>Voir le test</Link>
                    <span className='text-center text-white'>Test SQL</span>
                </div>
            </div>
        </div>
    )
}


export default Home
