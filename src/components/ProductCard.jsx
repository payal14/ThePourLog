import {  Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">

        <h3 className="font-bold text-lg">
          {product.title}
        </h3>

        <div className="flex items-center mt-3">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="ml-2 font-medium">
            {product.rating}
          </span>

        </div>

        <div className="mt-4 flex items-center gap-3">

          <h2 className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </h2>

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>

        </div>
<Link to={product.path}>
        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">
          Buy Now
        </button>
</Link>
      </div>

    </div>
  );
};

export default ProductCard;