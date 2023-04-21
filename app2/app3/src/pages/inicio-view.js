import MainWrapper from "../../componentes/gerais/MainWrapper";
import BarraLateral from "../../componentes/gerais/BarraLateral";
import Titulo from "../../componentes/gerais/Titulo";
import BlogPosts from "../../componentes/gerais/BlogPosts";
import Footer from "../../componentes/gerais/BlogPosts";
import Layout from "../../componentes/gerais/Layout";


function InicioView({ Component, pageProps }) {

  return (
    <Layout>
      <Titulo />
      <BlogPosts/>
    </Layout>
  );
}

export default InicioView;