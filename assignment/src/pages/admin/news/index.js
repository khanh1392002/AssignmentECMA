import toastr from "toastr";
import { getAll, remove } from "../../../api/posts";
import AdminNav from "../../../components/admin/AdminNav";
import "toastr/build/toastr.min.css";

const AdminNews = {
    async print() {
        const { data } = await getAll();
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
                        Quản lý tin tức
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Thêm mới
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
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Phụ Sản Phẩm</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Sản Phẩm</th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                                <th scope="col" class="relative px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((post, index) => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
                                    <td class="px-6 py-4 whitespace-nowrap"><img src="${post.img}" width="50"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap">${post.title}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">${post.desc}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">${post.price}</td>
                                    <td><a class="btn btn-success" href="/admin/news/${post.id}/edit">Edit</a></td>
                                    <td><a class="btn btn-remove btn-danger" data-id="${post.id}" href="">Xoá</a></td>
                                </tr>
                            `).join("")}
                            </tbody>
                        </table>
                    </div>
                    <!-- /End replace -->
                </div>
                </main>
            </div>
        `;
    },
    afterRender() {
        // lay danh sach buttun sau khi render
        const buttons = document.querySelectorAll(".btn-remove");
        // tao vong lap cho nodeList buttun
        buttons.forEach((btn) => {
            // lay id tu thuoc tinh data id cua button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xoá không ?");
                if (confirm) {
                    // goi ham delete trong foder api va ban id vao ham
                    remove(id).then(() => {
                        toastr.success("Đã xoá thành công");
                    });
                }
            });
        });
    },
};

export default AdminNews;