const Banner = () => {
  return (
    <div className="carousel w-full relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Find Your Dream Property
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter location"
            className="px-4 py-2 text-black rounded-l-lg"
          />
          <button className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-r-lg">
            Search
          </button>
        </div>
      </div>

      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/XztsHP6/slider1.jpg"
          alt="Slide 1"
          className="w-full"
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

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/LQJ734q/slider2.jpg"
          alt="Slide 2"
          className="w-full"
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

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/LrMqBSZ/slider3.jpg"
          alt="Slide 3"
          className="w-full"
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

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/KzRMRxy/slider4.jpg"
          alt="Slide 4"
          className="w-full"
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
