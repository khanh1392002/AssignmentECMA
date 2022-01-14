import Banner from "../components/banner";
import Newlist from "../components/newlist";
import Header from "../components/header";
import Footer from "../components/footer";
const HomePage = {
    render() {
        return /* html */`
            <div class="container" >
                    ${Header.render()}
                    <main>
                        <div>${Banner.render()} </div>

                        <div>${Newlist.render()} </div>
                    </main>
                    ${Footer.render()}
            </div>    
            `;
        
    }
};
export default HomePage;