import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-36 pb-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            🔥 Best Deals Everyday
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Discover The Best
            <br />
            Products Online
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Honest reviews, top-rated products, exclusive deals,
            and expert buying guides to help you shop smarter.
          </p>

          {/* <SearchBar />

          <div className="flex gap-4 mt-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Explore Deals
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Read Reviews
            </button>
          </div> */}
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
            alt="Shopping"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;