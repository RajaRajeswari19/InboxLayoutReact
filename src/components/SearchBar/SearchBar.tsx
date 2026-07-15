import "./SearchBar.css";
import  type { SearchBarProps } from "../../types/Email"


function SearchBar({ searchText, onSearchChange, }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text" placeholder="Search email..." value={searchText}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;