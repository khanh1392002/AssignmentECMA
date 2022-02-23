import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../ultils";

const header = {
    print() {
        return /* html */ `      
            <div class="header">
                <div class="menu bg-neutral-900 flex justify-between fixed p-[5px] w-[100%] z-[3] h-[70px]">
                    <nav>
                        <ul>
                            <li class="inline-block p-[10px] pt-[15px]"><a href="/gioithieu"
                                    class="no-underline text-slate-50 hover:text-orange-500">GIỚI THIỆU</a></li>
                            <li class="inline-block p-[10px] pt-[15px]"><a href="/page/product"
                                    class="no-underline text-slate-50 hover:text-orange-500">SẢN PHẨM</a></li>
                            <li class="inline-block p-[10px] pt-[15px]"><a href="/page/contact"
                                    class="no-underline text-slate-50 hover:text-orange-500">LIÊN HỆ</a></li>
                        </ul>
                    </nav>
                    <div class="logo pt-[10px]">
                        <a href="/"><img src="../img/logo-mona-watches-white.png" width="130" style="margin-right: 90px;"></a>
                    </div>
                    <!-- logo-->
                    <div class="icon pt-[5px] mr-[35px]">
                        <i class="fas fa-search text-slate-50 hover:text-orange-500 p-[10px]"></i>
                        <a href="/dangnhap" class="no-underline text-slate-50 hover:text-orange-500 p-[10px]">
                            Đăng nhập
                        </a>
                        <!-- <i id="account-email" class="fas fa-user text-slate-50 hover:text-orange-500 p-[10px]"></i> -->
                        <i class="fas fa-cart-plus text-slate-50 hover:text-orange-500 p-[10px]"></i>
                    </div>
                    <!-- icon-->
                </div>
                <!-- menu-->
            </div>
            <!-- header-->
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const loguot = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        loguot.addEventListener("click", () => {
            toastr.success("logout thành công");
            localStorage.removeItem("user");
            reRender(header, "#header");
        });
    },
};

export default header;