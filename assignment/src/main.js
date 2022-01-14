import Navigo from "navigo";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/product";
import NewsDetailPage from "./pages/newsDetail";
import SingIn from "./pages/singin";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news/listNews";
import AdminAddNewsPage from "./pages/admin/news/addNews";

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
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news/listNews": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/addNews": () => {
        print(AdminAddNewsPage.render());
    },
    "/singin": () => {
        print(SingIn.render());
    }

});
router.notFound(() => print(NotFoundPage.render()));
router.resolve();