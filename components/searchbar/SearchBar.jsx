import InputText from "@components/basicComponents/InputText";
import Button from "../basicComponents/Button";
import Link from "next/link";

function SearchBar() {
  return (
    <div className="searchbar">
      <h3>¿Listo para encontrar su próximo auto?</h3>
      <form className="searchfield">
        <div className="fieldrow">
          <InputText
            type="text"
            name=""
            placeholder="Busque por modelo, marca o una palabra clave"
            className="form-control custfield"
          />
          <Button className="sbtn" name="Buscar" />
          <Link href="/">
            <a className="extfilter float-right">Búsqueda avanzada</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
