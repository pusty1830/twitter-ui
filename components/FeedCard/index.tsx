import Image from 'next/image';
import React from 'react'
import { LuMessageCircle } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";

interface TwiterSidebarButton {
    id: string;
    icon: React.ReactNode;
}

const MainIcon: TwiterSidebarButton[] = [
    {
        id: '1',
        icon: <LuMessageCircle />
    }, {
        id: '2',
        icon: < FaRetweet />
    }, {
        id: '3',
        icon: <CiHeart />
    }
    , {
        id: '4',
        icon: <FiUpload />
    }
]

const FeedCard: React.FC = () => {
    return (
        <div className=' border border-r-0 border-l-0 border-b-0 border-gray-400 p-5 hover:bg-slate-500 cursor-pointer transition-all '>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <Image src="https://avatars.githubusercontent.com/u/126335408?v=4" alt='user Image' height={50} width={50} className='rounded-full' />
                </div>
                <div className='col-span-10'>
                    <h5>Amitav Pusty</h5>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel sint quidem cumque aspernatur,
                        expedita veritatis numquam ipsum perferendis consequuntur.</p>

                    <div className='flex justify-between mt-5 text-xl items-center'>
                        {MainIcon.map(item =>
                            <div key={item.id}>
                                {item.icon}

                            </div>)}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FeedCard;
