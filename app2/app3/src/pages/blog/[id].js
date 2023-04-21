//Função getStaticPaths que define os caminhos a usar em /blog/[id]
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        //true, false, blocking
        fallback: true,
    }
};

//Função que obtem os valores passados por parâmetros no URL
export async function getStaticProps({ params }) {
    const postData = params.id;
    return {
        props: {
            postData,
        },
    };
}

//Componente React para exibir valor na interface gráfica
export default function PostExemplo({ postData }) {
    return (<h1 >{postData}</h1>);
}
