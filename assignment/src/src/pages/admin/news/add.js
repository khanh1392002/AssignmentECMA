import axios from "axios";
import toastr from "toastr";
import { add } from "../../../api/posts";
import AdminNav from "../../../components/admin/AdminNav";

const AdminAddPost = {
    print() {
        return /* html */ `
            <div class="min-h-full">
                ${AdminNav.print()}
                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <!-- This example requires Tailwind CSS v2.0+ -->
                        <div class="lg:flex lg:items-center lg:justify-between">
                            <div class="flex-1 min-w-0">
                                <h2
                                class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                                >
                                Thêm mới
                                </h2>
                            </div>
                            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                <a href="/" class="sm:ml-3">
                                    <button
                                        type="button"
                                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Quay lại
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <!-- Replace with your content -->
                        <div class="px-4 py-6 sm:px-0">
                            <form id="form-add-post" onsubmit="validateForm()">
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Chọn ảnh</label>
                                    <input class="form-control" type="file" id="img-post" required>
                                </div>
                                <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Tên phụ sản phẩm</label>
                                    <input type="text" class="form-control" id="title-post" aria-describedby="textHelp" required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="desc-post" aria-describedby="textHelp" required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputtext1" class="form-label">Giá sản phẩm</label>
                                    <input type="text" class="form-control" id="price-post" aria-describedby="textHelp" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
                </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dqd4urvf6/image/upload";
        const CLOUDINARY_PRESET = "zmppimam";

        // handle sự kiện change để xem ảnh trên local
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);
            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/x-www-form-endcoded",
                },
            });
            // call api them bai viet
            add({
                img: data.url,
                title: document.querySelector("#title-post").value,
                desc: document.querySelector("#desc-post").value,
                price: document.querySelector("#price-post").value,
            })
                .then(() => toastr.success("Thêm thành công"))
                .then(() => {
                    document.location.href = "/#/admin/news";
                });
        });
    },
};

export default AdminAddPost;