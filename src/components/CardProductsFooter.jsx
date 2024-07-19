
import Image1 from '../../public/img/1.jpg'
import Image2 from '../../public/img/1.png'
// import Image3 from '../../public/img/2.png'
import Image4 from '../../public/img/2.jpg'
export default function CardProductsFooter() {
    return (
        <div className="flex flex-col w-full sm:flex-row sm:justify-around sm:items-center gap-[20px] pt-[20px] font-poppins">
            <div className="rounded-[2vh] hidden sm:flex">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image4} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
            <div className="flex rounded-[2vh]">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image1} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
            <div className="rounded-[2vh] hidden sm:flex">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image2} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
            <div className="flex rounded-[2vh]">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image2} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
            <div className="rounded-[2vh] hidden sm:flex">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image1} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
            <div className="flex rounded-[2vh]">
                <div className="w-[100px]">
                    <img className="aspect-square rounded-[20px]" src={Image1} alt="" />
                </div>
                <div className="text-white flex flex-col gap-[4px] pl-[15px] pt-[10px]">
                    <span className="font-bold">Indonesian Beans</span>
                    <span className="text-gray-300">Coffee Beans</span>
                    <span>Rating : 4,9<i className="fa-solid fa-star text-orange-600 text-[1rem] ml-[10px]"></i></span>
                </div>
            </div>
        </div>
    )
}