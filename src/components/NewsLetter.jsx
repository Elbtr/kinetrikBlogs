import flowers from "../assets/image/flowers.jpg";

const NewsLetter = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="w-full h-[250px]">
        <img
          src={flowers}
          alt="news_letter/flowers"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-center py-5">
        <a
          href="#"
          className="uppercase font-light opacity-75 heading border-b-2 border-[#544541] border-opacity-60"
        >
          www.reallygreatsite.com
        </a>
      </div>
    </section>
  );
};

export default NewsLetter;
