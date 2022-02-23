import footer from "../components/footer";
import header from "../components/header";
import Contact from "../components/page-contact";

const PageContact = {
    print() {
        return /* html */ `
            <header>
                ${header.print()}
            </header>
            <main>
                ${Contact.print()}
            </main>
            <footer>
                ${footer.print()}
            </footer>
        `;
    },
};

export default PageContact;