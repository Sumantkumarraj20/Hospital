import { FiSearch } from "react-icons/fi";
import style from "../assets/styles/Searchbox.module.css";
import { useState } from "react";

const Searchbox = () => {
  const [formData, setFormData] = useState({
    query: "",
  });
  const { query } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Your query received'+ query)
  };

  return (
    <div className={style.searchbox}>
      <form action="post" onSubmit={(e) => onSubmit(e)}>
        <input
          id={style.siteSearch}
          type="search"
          placeholder="Find Locations, Doctor..."
          name="query"
          onChange={(e) => onChange(e)}
          value={query}
        />
        <button id={style.search} type='submit'>
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchbox;
