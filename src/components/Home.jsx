import { images } from "../data/images";

const Home = () => {
  return (
    <section id="home" className="pb-4">
      <div className="w-full flex items-center justify-center py-4 mb-5">
        <h1 className="uppercase text_heading font-medium heading text-[50px] md:text-[58px] lg:text-[77px] border-b-2 border-slate-700 border-opacity-70 cursor-default ">
          on the blog
        </h1>
      </div>
      <div className="grid  w-full grid-cols-1  md:grid-cols-3 justify-items-center px-4 gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            className=" w-full h-[370px] md:w-[290px] md:h-[340px] lg:w-[350px] lg:h-[440px]   navbar-bg rounded-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-fill rounded-[20px] hover:scale-105 duration-150 ease-out hover:rounded-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
