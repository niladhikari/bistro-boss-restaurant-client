import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommands";
import ChefService from "../ChefService/chefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
// import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            {/* <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;