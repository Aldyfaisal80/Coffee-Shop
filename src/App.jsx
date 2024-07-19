import Navbar from './components/Navbar'
import CategoriesMobile from './components/CategoriesMobile'
import ContentHead from './components/ContentHead'
import CardProducts from './components/CardProducts'
import CardProductsFooter from './components/CardProductsFooter'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className="p-4 bg-black">
      <Navbar />
      {/* <!-- MAIN CONTENT --> */}
      <ContentHead />
      {/* <!-- END OF MAIN CONTENT -->
    <!-- SECTION CATEGORIES MOBILE --> */}
      <CategoriesMobile />
      {/* <!-- END OF SECTION CATEGORIES -->
    <!-- SECTION OF CARD --> */}
      <CardProducts />
      {/* <!-- END OF SECTION CARD -->
     <!-- SECTION OF Recommeded --> */}
      <section className="mb-[60px] sm:mb-0">
        {/* <!-- head Recomended --> */}
        <div className="flex text-white justify-between pt-[15px] font-poppins">
          <span className="font-bold sm:text-[2rem]">Recomended</span>
          <span className="text-gray-300 sm:text-[1.5rem]">View all</span>
        </div>
        {/* <!-- end head --> */}
        <CardProductsFooter />
      </section>
      {/* <!-- FOOTER TIXED --> */}
      <Footer />
    </div>
  )
}