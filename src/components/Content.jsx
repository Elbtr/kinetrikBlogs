const Content = () => {
  return (
    <section
      id="blog"
      className="flex w-full flex-col items-center  px-4 py-6 mt-5 gap-6 mb-5"
    >
      <div className="flex flex-col heading text_heading text-center">
        <h1 className="uppercase text-[55px] lg:text-[60px] font-semibold">
          Latest Trends
        </h1>
        <h1 className="italic text-[55px] lg:text-[60px] font-semibold">
          in Photography
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between px-2 gap-5 lg:gap-5 mt-3">
        <p className="text-justify list flex flex-col gap-4  leading-6 tracking-wide  font-medium text-[15px] md:text-[16px] lg:text-[18px]">
          <span>
            {" "}
            <span className="ml-4">Photography</span> has always been an art
            form that captures the essence of a moment, freezes time, and tells
            stories through visual narratives. In recent years, the world of
            photography has witnessed a remarkable transformation with the
            emergence of new trends that push the boundaries of creativity.
            These trends reflect the evolving tastes and preferences of both
            photographers and audiences, showcasing the ever-changing landscape
            of this dynamic art form. From innovative techniques to unique
            subject matters, the latest trends in photography offer exciting
            possibilities for photographers to experiment and express their
            vision in new and captivating ways. One of the prominent trends in
            photography today is the rise of drone photography.
          </span>
          <span>
            <span className="ml-4">With</span> the advent of affordable and
            advanced drone technology, photographers are now able to capture
            breathtaking aerial views that were once only accessible to
            professional filmmakers. From sweeping landscapes to architectural
            marvels, drone photography provides a fresh perspective and allows
            photographers to explore new dimensions of composition and
            storytelling. The ability to capture images from unique angles and
            heights has revolutionized the way we perceive and appreciate the
            world around us.
          </span>
        </p>
        <p className=" flex flex-col gap-4 text-justify list leading-6 tracking-wide  font-medium text-[15px] md:text-[16px] lg:text-[18px] ">
          <span>
            {" "}
            <span className="ml-4">Another</span> noteworthy trend in
            photography is the increasing popularity of mobile photography. With
            the advancements in smartphone camera technology, almost everyone
            now has a capable camera in their pockets. This accessibility has
            democratized photography and opened doors for a wider audience to
            express their creativity. Mobile photography has not only become a
            convenient and instant way to capture moments but has also given
            birth to a vibrant community of mobile photographers on social media
            platforms.
          </span>
          <span>
            <span className="ml-4">Through</span> various editing apps and
            filters, photographers can enhance their images, experiment with
            different styles, and share their work with the world. Additionally,
            the world of fashion and portrait photography has witnessed a shift
            towards more inclusive and diverse representation. There is a
            growing demand for authentic and empowering images that celebrate
            individuality, body positivity, and cultural diversity.
            Photographers are embracing this trend by capturing images that
            challenge traditional beauty standards and tell stories of
            resilience, identity, and self-expression. By highlighting
            underrepresented voices and shedding light on marginalized
            communities, photography becomes a powerful tool for social change
            and amplifying diverse perspectives.
          </span>
        </p>
      </div>
      <div className="w-[85%] mx-auto border-t-2 border-[#544541] border-opacity-70 mt-5">
        <div className="w-full flex items-start justify-between mt-3">
          <a
            href="#"
            className="heading text_heading border-b text-[15px] md:text-[16px] lg:text-[18px] border-slate border-text_heading py-2 px-4 active:scale-95 duration-150 ease-in-out"
          >
            View Blog Post No. 3
          </a>
          <a
            href="#"
            className="heading text_heading border-b text-[15px] md:text-[16px] lg:text-[18px] border-slate border-text_heading py-2 px-4 active:scale-95 duration-150 ease-in-out"
          >
            View Blog Post No. 5
          </a>
        </div>
      </div>
    </section>
  );
};

export default Content;
