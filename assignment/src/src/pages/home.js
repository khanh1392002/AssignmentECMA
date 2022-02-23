import banner from "../components/banner";
import footer from "../components/footer";
import header from "../components/header";
import newContent from "../components/news";

const Home = {
    async print() {
        return /* html */ `
            <div class="wapper w-[100%]">
                <div id="header">
                    ${header.print()}
                    <div class="banner">
                        ${banner.print()}
                    </div>
                </div>
                <main>        
                    <div class="news">
                        ${await newContent.print()}
                    </div>
                </main>
                <footer>
                    ${footer.print()}
                </footer>
            </div>
            <!-- wapper-->
        `;
    },
};

export default Home;