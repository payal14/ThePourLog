import { useState } from "react";
import { Search, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Top 10 Laptops to Buy in 2026",
    category: "Electronics",
    date: "20 July 2026",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
    description:
      "Looking for the best laptop? We've compared performance, battery life, and value to help you choose.",
      path:"https://www.google.com/search?q=Top+10+Laptops+to+Buy+in+2026&oq=Top+10+Laptops+to+Buy+in+2026&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTE5MzBqMWoxNagCCLACAfEFUDi-x7YWoXM&sourceid=chrome&source=chrome.rb&ie=UTF-8",
  },
  {
    id: 2,
    title: "Best Wireless Headphones Under ₹10,000",
    category: "Audio",
    date: "18 July 2026",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
    description:
      "Discover the best wireless headphones with excellent sound quality and long battery life.",
      path:"https://www.google.com/search?q=Best+Wireless+Headphones+Under+%E2%82%B910%2C000&sca_esv=fbf2635dd64e7c8e&sxsrf=APpeQnulWMi4VLYhpIHnOlMQCFIN6hOi9w%3A1785238464296&ei=wJNoau_NEZaqhvcP0qzQgA0&biw=1280&bih=631&ved=0ahUKEwjvrYPEo_WVAxUWleEIHVIWFNAQ4dUDCBA&uact=5&oq=Best+Wireless+Headphones+Under+%E2%82%B910%2C000&gs_lp=Egxnd3Mtd2l6LXNlcnAiKEJlc3QgV2lyZWxlc3MgSGVhZHBob25lcyBVbmRlciDigrkxMCwwMDAyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIESKgHUABYAHAAeAGQAQCYAa4GoAGuBqoBAzYtMbgBA8gBAPgBAvgBAZgCAaACuwaYAwCSBwM2LTGgB_0CsgcDNi0xuAe7BsIHAzMtMcgHCIAIAQ&sclient=gws-wiz-serp",
  },
  {
    id: 3,
    title: "Top Smartwatches for Fitness Lovers",
    category: "Wearables",
    date: "15 July 2026",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1200",
    description:
      "Track your health, workouts, and notifications with these top-rated smartwatches.",
      path:"https://www.google.com/search?q=Top+Smartwatches+for+Fitness+Lovers&sca_esv=fbf2635dd64e7c8e&biw=1280&bih=631&sxsrf=APpeQntdMeJGuk2NXLly5AGPvhxMxtUwzg%3A1785238641128&ei=cZRoauCrB-mVg8UP2-bW-Ao&ved=0ahUKEwigqKyYpPWVAxXpyqACHVuzFa8Q4dUDCBA&uact=5&oq=Top+Smartwatches+for+Fitness+Lovers&gs_lp=Egxnd3Mtd2l6LXNlcnAiI1RvcCBTbWFydHdhdGNoZXMgZm9yIEZpdG5lc3MgTG92ZXJzMgUQIRigAUiDEVAAWABwAHgBkAEAmAH4CqAB-AqqAQM3LTG4AQPIAQD4AQL4AQGYAgGgAv8KmAMAkgcDNy0xoAe-AbIHAzctMbgH_wrCBwMwLjHIBwKACAE&sclient=gws-wiz-serp",
  },
  {
    id: 4,
    title: "Gaming Accessories Every Gamer Needs",
    category: "Gaming",
    date: "12 July 2026",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200",
    description:
      "Upgrade your gaming setup with the latest keyboards, mice, and headsets.",
      path:"https://www.google.com/search?q=Gaming+Accessories+Every+Gamer+Needs&sca_esv=fbf2635dd64e7c8e&biw=1280&bih=631&sxsrf=APpeQntVahH4cPdMEvagg6H4YRZzuTnhHw%3A1785238701891&ei=rZRoaoiBNo_A4-EP7oeK8AE&ved=0ahUKEwjIi6m1pPWVAxUP4DgGHe6DAh4Q4dUDCBA&uact=5&oq=Gaming+Accessories+Every+Gamer+Needs&gs_lp=Egxnd3Mtd2l6LXNlcnAiJEdhbWluZyBBY2Nlc3NvcmllcyBFdmVyeSBHYW1lciBOZWVkc0igBlAAWABwAHgBkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz-serp",
  },
  {
    id: 5,
    title: "Best Cameras for Content Creators",
    category: "Camera",
    date: "10 July 2026",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
    description:
      "Find the perfect camera for YouTube, Instagram, and professional photography.",
      path:"https://www.google.com/search?q=Best+Cameras+for+Content+Creators&sca_esv=fbf2635dd64e7c8e&biw=1280&bih=631&sxsrf=APpeQnucKTwwqoPhclBKuXpPezhPZUGSNw%3A1785238989093&ei=zZVoauCvBZPtseMP7brUYA&ved=0ahUKEwigyqK-pfWVAxWTdmwGHW0dFQwQ4dUDCBA&uact=5&oq=Best+Cameras+for+Content+Creators&gs_lp=Egxnd3Mtd2l6LXNlcnAiIUJlc3QgQ2FtZXJhcyBmb3IgQ29udGVudCBDcmVhdG9yczIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkiRB1AAWABwAHgBkAEAmAHwAqAB8AKqAQMzLTG4AQPIAQD4AQL4AQGYAgGgAvUCmAMAkgcDMy0xoAevCLIHAzMtMbgH9QLCBwMyLTHIBwSACAE&sclient=gws-wiz-serp",
  },
  {
    id: 6,
    title: "Top Home Office Essentials",
    category: "Home",
    date: "8 July 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    description:
      "Create a productive workspace with these must-have home office accessories.",
      path:"https://www.google.com/search?q=Top+Home+Office+Essentials&sca_esv=fbf2635dd64e7c8e&biw=1280&bih=631&sxsrf=APpeQnvphVHUnKUgVFe1LG8alDN2x8p1TQ%3A1785239020473&ei=7JVoaqS9HNDiseMPxKT2kAc&ved=0ahUKEwik453NpfWVAxVQcWwGHUSSHXIQ4dUDCBA&uact=5&oq=Top+Home+Office+Essentials&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlRvcCBIb21lIE9mZmljZSBFc3NlbnRpYWxzMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIESKAGUABYAHAAeAGQAQCYAa0EoAGtBKoBAzUtMbgBA8gBAPgBAvgBAZgCAaACtQSYAwCSBwM0LTGgB8cGsgcDNC0xuAe1BMIHAzItMcgHBYAIAQ&sclient=gws-wiz-serp"
  },
];

function Blog() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#289eff] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Nikita Mart
          </h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
            Product reviews, buying guides, comparisons,
            and the latest technology news.
          </p>

          <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl flex overflow-hidden">

            <input
              type="text"
              placeholder="Search blog..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-4 outline-none text-black"
            />

            <button className="bg-blue-600 px-6 text-white">
              <Search />
            </button>

          </div>

        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "All",
            "Electronics",
            "Gaming",
            "Camera",
            "Home",
            "Wearables",
            "Audio",
          ].map((item) => (
            <button
              key={item}
              className="bg-white px-5 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* Blog Grid */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredBlogs.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  {blog.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-500 mt-4">

                  <CalendarDays size={18} />

                  <span>{blog.date}</span>

                </div>

                <p className="text-gray-600 mt-4">
                  {blog.description}
                </p>
                <Link to={blog.path}>
                <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">

                  Read More

                  <ArrowRight size={18} />

                </button>
</Link>
              </div>

            </div>

          ))}

        </div>

      </section>
    </div>
  );
}

export default Blog;