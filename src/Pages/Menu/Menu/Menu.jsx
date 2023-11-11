import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
    <Helmet>
        <title>Bistro Boss | Menu</title>
    </Helmet>
    <Cover img={menuImg} title="our menu" height={'700px'} description={'Would you like to try a dish?'}></Cover>
    {/* main cover */}
    <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
    {/* offered menu items */}
    <MenuCategory items={offered}></MenuCategory>
    {/* dessert menu items  */}
    <MenuCategory items={dessert} title="dessert" img={dessertImg} height={'500px'}></MenuCategory>
    <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} height={'500px'}></MenuCategory>
    <MenuCategory items={salad} title={"salad"} img={saladsImg} height={'500px'}></MenuCategory>
    <MenuCategory items={soup} title={"soup"} img={soupsImg} height={'500px'}></MenuCategory>
</div>
  );
};

export default Menu;
