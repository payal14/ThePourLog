import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const[isMenuOpen, setIsMenuOpen]=useState(false);

  const links = [
    {name:'Home', href:'/'},
    // {name:'Categories', href:'components/Categories'},
    {name:'Deals', href:'/Deals'},
    // {name:'Reviews', href:'/Reviews'},
    {name:'Blog', href:'/Blog'},
    {name:'Contact', href:'/Contact'},
  ];
   const scrollToSection=(href)=>{
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior:'smooth'
        });
    }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-600">
          Nikita Mart
        </h1>

        {/* <nav className='hidden md:flex items-center gap-10'> */}
                <ul className='flex gap-8 text-black'>
                    {links.map((item)=>(
                        <li key={item.name}>
                          <Link to={item.href}>
                            <button
                            onClick={()=>scrollToSection(item.href)}
                            className='text-black-300 hover:text-blue-600 text-base font-medium transition-colors'>
                                    {item.name}
                            </button>
                           </Link> 
                        </li>
                    ))}
                </ul>

        {/* <div className="hidden lg:flex gap-5 items-center">
          <Search className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Sign In
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button> */}
      </div>

      {open && (
        <div className="lg:hidden bg-white px-6 pb-6 shadow">
          {links.map((item) => (
            <p
              key={item}
              className="py-3 border-b cursor-pointer"
            >
              {item}
            </p>
          ))}

          <button className="mt-5 bg-blue-600 text-white w-full py-2 rounded-lg">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;