import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex items-center overflow-hidden mt-8">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-5 py-4 outline-none"
      />

      <button className="bg-blue-600 text-white px-6 py-4">
        <Search />
      </button>

    </div>
  );
};

export default SearchBar;