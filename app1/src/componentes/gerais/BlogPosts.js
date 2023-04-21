import DataService from "../../servicos/DataService";
import Post from "./Post";
import { useContext } from 'react';
import { nivelContexto } from "../../contextos/contextoNivel";

function BlogPosts() {

    var posts = DataService.getTodosPosts();
    const nivel = useContext(nivelContexto);
    const listPosts = posts.map((post, index) =>
        <Post key={index}
            id={post.id}
            titulo={post.titulo}
            imagem={post.imagem}
            comentarios={post.comentarios}
            dataPublicacao={post.dataPublicacao}
            seoTitulo={post.seoTitulo}
            tempoLeitura={post.tempoDeLeitura}
            descricao={post.pequenaDescricao}
        >
        </Post>
    );


    return (
        <section class="blog-list px-3 py-5 p-md-5">
            <div class="container single-col-max-width">
                <h2>Contexto: {nivel}</h2>
                <nivelContexto.Provider value={nivel + 1}>
                    <div>{listPosts}</div>
                </nivelContexto.Provider>
                <nav className="blog-nav nav nav-justified my-5">
                    <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a className="nav-link-next nav-item nav-link rounded" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div>
        </section>
    );
}

export default BlogPosts;