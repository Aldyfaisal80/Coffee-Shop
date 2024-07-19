export default function Footer() {
    return (
        <footer className="w-full text-gray-300 pt-[20px] font-poppins fixed bottom-0 left-0 border-t-2 border-orange-500 bg-black sm:hidden">
            <div className="w-full flex justify-around">
                <div className="flex flex-col justify-center items-center">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <i className="fa-regular fa-heart"></i>
                    <span>Favourite</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Inbox</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <i className="fa-regular fa-rectangle-list"></i>
                    <span>Order</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>Bag</span>
                </div>
            </div>
        </footer>
    )
}