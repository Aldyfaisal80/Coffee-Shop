import Image5 from '../../public/img/30-off-removebg-preview.png'
import Image8 from '../../public/img/coffee-beans-white-paper_662214-45598.jpg'
import Image11 from '../../public/img/kopibg.png'

export default function ContentHead() {
    return (
        <main className="flex justify-between bg-white mt-[20px] w-full bg-cover bg-center p-3 font-poppins rounded-[2vh] "
            style={{ backgroundImage: `url(${Image8})` }}>
            <div className="w-[1/2]">
                <div className="text-[1.6rem] sm:text-[3.2rem] mb-[15px]">
                    <span className="flex font-black">Start <p className="ml-[5px] text-orange-600">YOUR</p></span>
                    <span className="flex font-black text-orange-600">DAY<p className="text-black ml-[5px]"> WITH</p></span>
                    <span className="font-black">COFFEE</span>
                </div>
                <div className="sm:text-[1.2rem] leading-5 font-semibold">
                    <span className="">The nest grain the finest</span>
                    <span>
                        <p></p>roast the most powerful
                    </span>
                    <span>flavor</span>
                </div>
                <div className="bg-black text-white w-[150px] rounded-[20px] mt-[10px]">
                    <span className="flex justify-center items-center text-[1rem] p-2">Order Now</span>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center relative">
                <img className="w-[200px]" src={Image11} alt="" />
                <img className="absolute bottom-[20px] left-[-10px] sm:left-[280px] w-[60px] sm:w-[80px]"
                    src={Image5} alt="" />
            </div>
        </main>
    )
}