import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input , setInput] = React.useState(data ? data : '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate(`/course-list/${input}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="flex rounded-md w-[90%] md:w-[50%]">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-3 md:p-3 rounded-md rounded-r-none border border-2 border-gray-300 bg-white outline-none "
        placeholder="Search here ..."
      />
      <button className="inline-flex items-center gap-2 bg-blue-700 cursor-pointer text-white text-lg font-semibold py-3 px-6 rounded-r-md">
        <FaSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
