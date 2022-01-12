import Navigo from "navigo";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
import NewsDetailPage from "./pages/newsDetail";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
    "/news/:id": (value)=>{
        print(NewsDetailPage.render(value.data.id));
    }
});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();