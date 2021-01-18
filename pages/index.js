import Head from "next/head";
import Header from "../components/header/Header";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "@components/searchbar/SearchBar";
import Tabmenu from "@components/tabmenu/Tabmenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section class="mainbanner">
        <SearchBar />
        <Tabmenu />
      </section>
      <div class="chatbtn"></div>
    </div>
  );
}
