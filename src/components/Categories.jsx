import { categories } from "../data/products";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-4">
            Browse our top affiliate categories.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-14">

          {categories.map((category) => (
            <Link to={category.path} >
            <div
              key={category.id} 
              className={`${category.color} rounded-2xl p-8 text-center cursor-pointer hover:scale-105 transition`}
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-4 font-semibold">
                {category.title}
              </h3>
             
            </div>
            </Link>
            
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;