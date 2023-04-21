import { nivelContexto } from "../contextos/contextoNivel";
import { useContext } from 'react';

import MainWrapper from "../componentes/gerais/MainWrapper";
import BarraLateral from "../componentes/gerais/BarraLateral";
import Titulo from "../componentes/gerais/Titulo";
import BlogPosts from "../componentes/gerais/BlogPosts";
import Footer from "../componentes/gerais/BlogPosts";


function InicioView() {
  const nivel = useContext(nivelContexto);
  console.log(nivel);
  return (
    <>
      <nivelContexto.Provider value={nivel + 1}>
        <BarraLateral />
        <MainWrapper>
          <Titulo />
          <BlogPosts />
          <Footer />
        </MainWrapper>
      </nivelContexto.Provider>

    </>
  );
}

export default InicioView;