import MainWrapper from "../../componentes/gerais/MainWrapper";
import BarraLateral from "../../componentes/gerais/BarraLateral";
import Footer from "../../componentes/gerais/Footer";

export default function Layout({ children }) {
    return (
        <>
            <BarraLateral />
            <MainWrapper>
                <main>{children}</main>
                <Footer />
            </MainWrapper>
        </>
    )
}