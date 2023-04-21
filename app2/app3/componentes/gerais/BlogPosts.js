import React, { useEffect, useState } from "react";
import Post from "./Post";


function BlogPosts() {


    const [listPosts, setListPosts] = useState(new Map());

    useEffect(() => {
        const url = "http://localhost:3001/api/blogs/";


        const fetchData = async () => {

            try {

                const response = await fetch(url);

                const posts = await response.json();

                const mylistPosts = posts.map((posts, index) =>
                    <Post key={index}
                        id={posts.id}
                        titulo={posts.titulo}
                        imagem={posts.imagem}
                        comentarios={posts.comentarios}
                        dataPublicacao={posts.dataPublicacao}
                        seoTitulo={posts.seoTitulo}
                        tempoLeitura={posts.tempoDeLeitura}
                        descricao={posts.pequenaDescricao}
                    >
                    </Post>
                );
                 
                setListPosts(mylistPosts);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);




    return (
        <section class="blog-list px-3 py-5 p-md-5">
            <div class="container single-col-max-width">

                <div>{listPosts}</div>
                <nav className="blog-nav nav nav-justified my-5">
                    <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                    <a className="nav-link-next nav-item nav-link rounded" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                </nav>

            </div>
        </section>
    );
}

export default BlogPosts;