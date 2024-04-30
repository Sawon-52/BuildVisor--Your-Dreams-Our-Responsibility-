import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";

const Home = () => {
  return (
    <div>
      <div className="w-full md:w-4/5 mx-auto">
        <Navber></Navber>
        <div className="my-8">
          <Banner></Banner>
        </div>
      </div>

      <div className="bg-ash mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
