import toastr from "toastr";
import { get, update } from "../../../api/posts";
import AdminNav from "../../../components/admin/AdminNav";

const AdminEditPost = {
    async print(id) {
        const { data } = await get(id);
        return /* html */ `
            <div class="min-h-full">
                ${AdminNav.print()}
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:items-center lg:justify-between">
                            <div class="flex-1 min-w-0">
                                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Edit ${data.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <div class="px-4 py-6 sm:px-0">
                            <form id="form-edit">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Chọn ảnh</label>
                                    <input class="form-control" type="file" id="img-post" value="${data.img}">
                                </div>
                                <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Tên phụ sản phẩm</label>
                                    <input type="text" class="form-control" id="title-post" value="${data.title}" aria-describedby="textHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="desc-post" value="${data.desc}" aria-describedby="textHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Giá sản phẩm</label>
                                    <input type="text" class="form-control" id="price-post" value="${data.price}" aria-describedby="textHelp">
                                </div>
                                <button type="submit" class="btn btn-primary">Update</button>
                            </form>
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
            </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");

        // handle sự kiện change để xem ảnh trên local
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                img: document.querySelector("#img-post").value,
                title: document.querySelector("#title-post").value,
                desc: document.querySelector("#desc-post").value,
                price: document.querySelector("#price-post").value,
            })
                .then(() => toastr.success("Sửa thành công"))
                .then(() => {
                    document.location.href = "/#/admin/news";
                });
        });
    },
};

export default AdminEditPost;