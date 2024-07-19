import Navbar from '../components/Navbar'
import CategoriesMobile from '../components/CategoriesMobile'
import ContentHead from '../components/ContentHead'
import CardProducts from '../components/CardProducts'
import CardProductsFooter from '../components/CardProductsFooter'
import Footer from '../components/Footer'

export default function IndexMain () {
    return (
        <div className="p-4 bg-black">
            <Navbar />
            <ContentHead />
            <CategoriesMobile />
            <CardProducts />
            <section className="mb-[60px] sm:mb-0">
                <div className="flex text-white justify-between pt-[15px] font-poppins">
                    <span className="font-bold sm:text-[2rem]">Recomended</span>
                    <span className="text-gray-300 sm:text-[1.5rem]">View all</span>
                </div>
                <CardProductsFooter />
            </section>
            <Footer />
        </div>
    )
}