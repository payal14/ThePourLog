import { Flame, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const deals = [
  {
    id: 1,
    title: "ASUS TUF A15, AMD Ryzen 7 170",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
    price: "₹74,990",
    oldPrice: "₹84,990",
    discount: "12% OFF",
    rating: 4.1,
    category: "Laptop",
    path:"https://link.amazon/B02oENITq"
  },
  {
    id: 2,
    title: "Lixo Massage Chair-LI4400B",
    image:
      "https://amzn.in/d/0fX4W3wk",
    price: "₹69,999",
    oldPrice: "₹1,90,000",
    discount: "63% OFF",
    rating: 4.5,
    category: "Massaging chair",
    path:"https://link.amazon/B09kAxtGk"
  },
  {
    id: 3,
    title: "Samsung Galaxy Watch8",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    price: "₹24,999",
    oldPrice: "₹42,999",
    discount: "42% OFF",
    rating: 4.3,
    category: "Smart Watch",
    path:"https://link.amazon/B0cCTuLvo",
  },
  {
    id: 4,
    title: "Tamron 50–400mm F/4.5-6.3 Di III VC VXD for Nikon Full-Frame mirrorless Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    price: "₹1,02,990",
    oldPrice: "₹1,17,900",
    discount: "13% OFF",
    rating: 4.3,
    category: "Camera",
    path:"https://link.amazon/B0ei4nlRa"
  },
  {
    id: 5,
    title: "Gaming Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    price: "₹4,999",
    oldPrice: "₹6,999",
    discount: "29% OFF",
    rating: 4.6,
    category: "Gaming",
    path:"https://link.amazon/B05MNFWHs"
  },
  {
    id: 6,
    title: "Wireless Speaker",
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800",
    price: "₹7,499",
    oldPrice: "₹9,999",
    discount: "25% OFF",
    rating: 4.8,
    category: "Speaker",
    path:"https://link.amazon/B02Es8eXM",
  },
];

const Deals = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-linear-to-r from-[#289eff] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <Flame size={60} className="mx-auto text-yellow-400" />

          <h1 className="text-5xl font-bold mt-6">
            Today's Best Deals
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
            Discover the latest discounts on top-rated products.
            Save more with exclusive affiliate offers.
          </p>

          <div className="flex justify-center items-center gap-2 mt-8 text-yellow-300">
            <Clock />
            <span>Limited Time Offers</span>
          </div>

        </div>

      </section>

      {/* Filter Buttons */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-wrap gap-4 justify-center">

          {[
            "All",
            "Laptop",
            "Headphones",
            "Smart Watch",
            "Camera",
            "Gaming",
            "Speaker",
          ].map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* Deals Grid */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {deals.map((deal) => (

            <div
              key={deal.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {deal.discount}
                </span>

              </div>

              {/* Content */}

              <div className="p-6">

                <span className="text-blue-600 font-semibold">
                  {deal.category}
                </span>

                <h2 className="text-2xl font-bold mt-2">
                  {deal.title}
                </h2>

                <div className="flex items-center mt-4">

                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />

                  <span className="ml-2 font-semibold">
                    {deal.rating}
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-5">

                  <span className="text-3xl font-bold text-blue-500">
                    {deal.price}
                  </span>

                  <span className="line-through text-gray-400">
                    {deal.oldPrice}
                  </span>

                </div>
<Link to={deal.path}>
                <div className="flex gap-3 mt-8">

                  <button className="flex-1 bg-linear-to-r from-[#289eff] text-black py-3 rounded-xl hover:bg-blue-700">
                    Buy Now
                  </button>

                  {/* <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-600 hover:text-white">
                    Details
                  </button> */}

                </div>
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Deals;