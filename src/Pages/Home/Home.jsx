import Banner from "../../Components/Banner/Banner";
import Navber from "../../Components/Navber/Navber";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Navber></Navber>
      <div className="my-8">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
