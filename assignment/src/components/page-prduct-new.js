import { getAll } from "../api/posts";

const PagePrductNews = {
    async print() {
        const { data } = await getAll();
        return /* html */ `
            <div class="content pt-[100px]">
                <h2 class="fonts text-center">SẢN PHẨM MONA</h2>
                ${data.map((post) => `
                     <div class="content-top grid grid-cols-4 pt-[50px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <div class="text">
                                <del>20,217,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 1-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <div class="text">
                                <del>5,600,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 2-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 3-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 3-->
                    </div>
                    <!-- content-top-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>3,042,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 4-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>7,680,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 5-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 7-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>1,863,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>3,042,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 4-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>7,680,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 5-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 7-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>1,863,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>3,042,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 4-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>7,680,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 5-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 7-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img sr${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>1,863,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                    <div class="content-top-new grid grid-cols-4 pt-[30px]">
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>3,042,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 4-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>7,680,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 5-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <!-- <del>7,680,000đ</del> -->
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 7-->
                        <div
                            class="content-top-product border-dashed border-2 w-[310px] border-slate-400 text-center m-auto h-[370px] pt-[10px]">
                            <div class="hihi overflow-hidden">
                                <a href="#">
                                    <img src="${post.img}" width="200" class="hover:scale-110 duration-700 m-auto">
                                </a>
                            </div>
                            <p class="pt-[10px] text-sm text-slate-500">${post.title}</p>
                            <h4 class="text-base"><a href="/chitietsanpham/${post.id}" class="no-underline text-stone-900 hover:text-amber-700">${post.desc}</a></h4>
                            <!-- <del>5,600,000đ</del> -->
                            <div class="text">
                                <del>1,863,000đ</del>
                                <strong>${post.price}</strong>
                            </div>
                        </div>
                        <!-- content-top-product 8-->
                    </div>
                    <!-- content-top-new-->
                `).join("")}
            </div>
            <!-- content-->
        `;
    },
};

export default PagePrductNews;