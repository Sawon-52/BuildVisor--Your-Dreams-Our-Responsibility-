import { Link } from "react-router-dom";
import bannerImg from "../../../src/assets/bannar2.jpg";
const Banner = () => {
  return (
    <div className=" relative  w-full min-h-[600px] bg-gradient-to-r from-gray-100 to-gray-600 rounded-xl overflow-hidden ">
      <div>
        <img className="absolute object-cover  object-right-top w-full h-full mix-blend-overlay" src={bannerImg} alt="banner img" />
      </div>

      <div className="absolute flex  flex-col gap-5 justify-center h-full p-2 md:p-8  w-full md:w-4/5 ">
        <div>
          <h2 className=" font-syne text-4xl md:text-5xl font-bold leading-normal md:leading-normal">
            Finally, Time to{" "}
            <span className="text-primary">
              Relax, <br /> Enjoy
            </span>{" "}
            a Organized Home <br />
            with <span className="text-primary">B</span>uild<span className="text-primary">V</span>isor
          </h2>
        </div>
        <div>
          <p className="text-xl w-full  md:w-2/3">
            Transform your living space into a stress-free haven with <span className="text-primary">B</span>uild<span className="text-primary">V</span>isor's expert house making solutions.
          </p>
        </div>
        <div className="mt-4">
          <button>
            <Link className="p-2 px-3 border-2 border-primary text-xl  text-black rounded-3xl hover:bg-primary hover:text-white duration-500">Explore More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
