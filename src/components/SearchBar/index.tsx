import { useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { createOptionsRequest } from "../../services/createOptionsRequest";
import { requestAPI } from "../../services/requestAPI";

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const searchUser = async (searchValue: string) => {
    const token = localStorage.getItem('authTekurt');
    const options = createOptionsRequest('GET', {}, 'users', {authorization: `Bearer ${token}`});
    const {data} = await requestAPI<IUser>(options);
    console.log(data);

  }
  return (
    <form>
      <input
      type="text"
      value={searchValue}
      onChange={({target}) => setSearchValue(target.value)}
      />
      <button
      type="button"
      onClick={() => searchUser(searchValue)}>
        Search User
      </button>
    </form>
  );
}

export default SearchBar;