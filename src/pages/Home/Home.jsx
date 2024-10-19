import PropertyCategories from "../../components/categories/PropertyCategories";
import Newsletter from "../../components/newsLetter/NewsLetter";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PropertyCategories></PropertyCategories>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;