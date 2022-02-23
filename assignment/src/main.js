import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import PageContact from "./pages/contact";
import detailProduct from "./pages/detail-product";
import Home from "./pages/home";
import introducePage from "./pages/introduce";
import PageProduct from "./pages/page-product";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.print(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => { }, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // neu userID === 1 thi render
        if (userId === 1) {
            done();
        } else {
            // nguoc lai thi redirect ve trang chu
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => render(Home),
    "/gioithieu": () => render(introducePage),
    "/chitietsanpham/:id": ({ data }) => {
        const { id } = data;
        render(detailProduct, id);
    },
    "/dangky": () => render(Signup),
    "/dangnhap": () => render(Signin),
    "/admin/dashboard": () => render(Dashboard),
    "/admin/news/add": () => render(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => render(AdminEditPost, data.id),
    "/admin/news": () => render(AdminNews),
    "/page/product": () => render(PageProduct),
    "/page/contact": () => render(PageContact)
});

router.resolve();