import InputText from "@components/basicComponents/InputText";
import Button from "../basicComponents/Button";
import Link from "next/link";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const getValue = (val) => {
    setSearch(val);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="searchbar">
      <h3>¿Listo para encontrar su próximo auto?</h3>
      <form className="searchfield">
        <div className="fieldrow">
          <InputText
            type="text"
            name="search"
            getValue={getValue}
            placeholder="Busque por modelo, marca o una palabra clave"
            className="form-control custfield"
            value={search}
          />
          <Button className="sbtn" name="Buscar" onClick={handleClick} />
          <Link href="/">
            <a className="extfilter float-right">Búsqueda avanzada</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
