import BarraLateral from "../../componentes/gerais/BarraLateral";
import Layout from "../../componentes/gerais/Layout";
import Footer from "../../componentes/gerais/Footer";
import PostDemo from "../../componentes/gerais/PostDemo";
import MainWrapper from "../../componentes/gerais/MainWrapper";

function BlogPostView() {
    return (

        <PostDemo />


    );
}

BlogPostView.getLayout = function getLayout(page) {
    return (
        <>

            <BarraLateral />
            <MainWrapper>
                <Footer />
                <h1>Layout personalizado</h1>
                {page}
            </MainWrapper>

        </>

    )
}


export default BlogPostView;