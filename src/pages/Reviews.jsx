import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react";

const reviews = [
  {
    id: 1,
    title: "Apple MacBook Air M3",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200",
    rating: 4.9,
    score: "9.8/10",
    price: "₹99,990",
    pros: [
      "Excellent performance",
      "Outstanding battery life",
      "Lightweight & premium design",
    ],
    cons: [
      "Limited ports",
      "Premium price",
    ],
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
    rating: 4.8,
    score: "9.6/10",
    price: "₹27,999",
    pros: [
      "Industry-leading noise cancellation",
      "Amazing sound quality",
      "Comfortable for long use",
    ],
    cons: [
      "No waterproof rating",
      "Expensive",
    ],
  },
  {
    id: 3,
    title: "Apple Watch Ultra",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200",
    rating: 4.9,
    score: "9.7/10",
    price: "₹79,999",
    pros: [
      "Premium build quality",
      "Excellent fitness tracking",
      "Long battery life",
    ],
    cons: [
      "Large size",
      "High price",
    ],
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Product Reviews
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-2xl mx-auto">
            Honest product reviews with expert ratings,
            pros & cons, and buying recommendations.
          </p>

        </div>

      </section>

      {/* Reviews */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="space-y-10">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Content */}

                <div className="p-8">

                  <div className="flex justify-between items-center">

                    <h2 className="text-3xl font-bold">
                      {item.title}
                    </h2>

                    <span className="bg-green-600 text-white px-4 py-2 rounded-full">
                      {item.score}
                    </span>

                  </div>

                  {/* Rating */}

                  <div className="flex items-center mt-5">

                    {[1,2,3,4,5].map((star)=>(
                      <Star
                        key={star}
                        size={20}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    <span className="ml-3 font-semibold">
                      {item.rating}
                    </span>

                  </div>

                  {/* Price */}

                  <h3 className="text-3xl text-blue-600 font-bold mt-6">
                    {item.price}
                  </h3>

                  {/* Pros */}

                  <div className="mt-8">

                    <h4 className="text-xl font-bold text-green-700 mb-3">
                      Pros
                    </h4>

                    {item.pros.map((pro, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3 mb-2"
                      >

                        <CheckCircle className="text-green-600" />

                        <span>{pro}</span>

                      </div>

                    ))}

                  </div>

                  {/* Cons */}

                  <div className="mt-8">

                    <h4 className="text-xl font-bold text-red-600 mb-3">
                      Cons
                    </h4>

                    {item.cons.map((con, index) => (

                      <div
                        key={index}
                        className="flex items-center gap-3 mb-2"
                      >

                        <XCircle className="text-red-500" />

                        <span>{con}</span>

                      </div>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-10">

                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex justify-center items-center gap-2">

                      <ShoppingCart />

                      Buy Now

                    </button>

                    <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl transition">

                      Read Full Review

                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Reviews;