const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] relative">
      {" "}
      {/* Carousel height */}
      {/* Title - smaller and placed higher */}
      <div className="absolute top-1/4 left-0 w-full flex items-center justify-center z-20">
        {" "}
        {/* Moved up */}
        <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-50 px-6 py-2 rounded-md">
          Welcome to Our Real Estate Project
        </h1>
      </div>
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/XztsHP6/slider1.jpg"
          alt="Slide 1"
          className="w-full h-full object-cover" // Ensures the image covers the carousel properly
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/LQJ734q/slider2.jpg"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/LrMqBSZ/slider3.jpg"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-full">
        <img
          src="https://i.ibb.co/KzRMRxy/slider4.jpg"
          alt="Slide 4"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
