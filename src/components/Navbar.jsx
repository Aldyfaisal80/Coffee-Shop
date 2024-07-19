import Image11 from '../../public/img/nico.jpg'

import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
    return (
        <header className="flex sm:flex-row-reverse font-poppins justify-between">
            <div className="flex justify-center items-center sm:flex-row-reverse gap-4">
                <img className="w-[50px] border border-white aspect-square rounded-[25%]" src={Image11}
                    alt="" />
                <div className="flex flex-col sm:hidden text-white ">
                    <span>Maverich Elias</span>
                    <span className="text-gray-300">Welcome Back</span>
                </div>
            </div>
            <section id="search" className="hidden sm:flex flex-row-reverse justify-center items-center w-full gap-[10px] font-poppins">
                <div className="flex rounded-[5px] p-[10px] grow gap-[20px]">
                    <form action="" className="flex w-[60%]">
                        <input className="flex justify-center items-center p-[5px] rounded-[5px] w-full outline-none" type="text"
                            placeholder="Coffee, Products, Menu ..." />
                        <button type="submit"><CiSearch size={20} className='text-gray-500 text-[1rem] ml-[-30px] flex justify-center items-center' />
                        </button>
                    </form>
                    <div className="flex justify-around items-center w-[40%] text-white font-poppins">
                        <span><a href="#">Popular</a></span>
                        <span><a href="#">Newest</a></span>
                        <span><a href="#">Recommeded</a></span>
                        <span><a href="#">Most Liked</a></span>
                        <span><a href="#">Best Seller</a></span>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-black border-2 border-orange-500 p-[15px] rounded-[15px] w-[50px]">
                    <BsThreeDotsVertical size={20} className='text-white' />
                </div>
            </section>
            <div className="flex justify-center items-center w-[50px] rounded-[20%] bg-white p-2 sm:hidden">
                <CiSearch className='text-[1.6rem]' />
            </div>
        </header>
    )
}