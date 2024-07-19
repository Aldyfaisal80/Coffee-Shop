export default function CategoriesMobile() {
    return (
        <section className="w-full mt-[20px] font-poppins flex sm:hidden">
            <div className="flex justify-between gap-3 items-center text-white overflow-x-scroll">
                <span
                    className="px-5 py-2 shrink-0 rounded-[2vh] border-2 border-white hover:bg-orange-200 hover:text-black hover:border-orange-200">Populxar</span>
                <span
                    className="px-5 py-2 shrink-0 rounded-[2vh] border-2 border-white hover:bg-orange-200 hover:text-black hover:border-orange-200">Newest</span>
                <span
                    className="px-5 py-2 shrink-0 rounded-[2vh] border-2 border-white hover:bg-orange-200 hover:text-black hover:border-orange-200">Recommeded</span>
                <span
                    className="px-5 py-2 shrink-0 rounded-[2vh] border-2 border-white hover:bg-orange-200 hover:text-black hover:border-orange-200">Most
                    Liked</span>
                <span
                    className="px-5 py-2 shrink-0 rounded-[2vh] border-2 border-white hover:bg-orange-200 hover:text-black hover:border-orange-200">Best
                    Seller</span>
            </div>
        </section>
    )
}