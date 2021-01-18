import SearchBar from "@components/searchbar/SearchBar";
import Tabmenu from "@components/tabmenu/Tabmenu";
import Header from "../components/header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="mainbanner">
        <SearchBar />
        <Tabmenu />
      </section>
      <div className="chatbtn"></div>
    </>
  );
}
