import NavBar from "../Components/NavBar";
import ProdQuickview from "../Components/ProdQuickview";
import Footer from "../Components/Footer";
import FruitCard from "../Components/FruitCard";

export default function ProductDescription () {
    return(
        <div>
            <NavBar />
            <ProdQuickview />
            {/* <FruitCard /> */}
            <Footer />
        </div>
    );
}