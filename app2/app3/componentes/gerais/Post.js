

function Post(props) {

	var imagem = `assets/images/blog/${props.imagem}`;
	var urlBlog = `/blog/${props.id}/${props.seoTitulo}`;

	return (

		<div className="item mb-5">
			<div className="row g-3 g-xl-0">

				<div className="col-2 col-xl-3">
					<img className="img-fluid post-thumb " src={imagem} alt="image" />
				</div>
				<div className="col">
					<h3 className="title mb-1"><a className="text-link" href="blog-post.html">{props.titulo}</a></h3>
					<div className="meta mb-1"><span className="date">{props.dataPublicacao}</span><span className="time">{props.tempoLeitura}</span><span className="comment"><a className="text-link" href="#">{props.comentarios}</a></span></div>
					<div className="intro">{props.descricao}</div>
					
				</div>
			</div>
		</div>

	);
}

export default Post;