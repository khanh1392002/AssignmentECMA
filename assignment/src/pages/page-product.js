import footer from "../components/footer";
import header from "../components/header";
import PagePrductNews from "../components/page-prduct-new";

const PageProduct = {
    async print() {
        return /* html */ `
            <header>
                ${header.print()}
            </header>
            <main>
                ${await PagePrductNews.print()}
            </main>
            <footer>
                ${footer.print()}
            </footer>
        `;
    },
};

export default PageProduct;