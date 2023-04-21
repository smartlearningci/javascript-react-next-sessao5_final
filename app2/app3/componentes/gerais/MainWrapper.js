import Footer from "./Footer";
import Titulo from "./Titulo";
import BlogPosts from "./BlogPosts";

function MainWrapper(props) {
    return (
        <div className="main-wrapper">
            
            {props.children}
            
        </div>
    )
}
export default MainWrapper