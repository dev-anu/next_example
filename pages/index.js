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
        <link
          rel="stylesheet"
          href="../node_modules/owl.carousel/dist/assets/owl.carousel.css"
        />
        <link
          rel="stylesheet"
          href="../node_modules/owl.carousel/dist/assets/owl.theme.default.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.js"
          integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
          crossorigin="anonymous"
        ></script>
      </Head>

      <Header />
      <section className="mainbanner">
        <SearchBar />
        <Tabmenu />
      </section>
      <div className="chatbtn"></div>
    </div>
  );
}
