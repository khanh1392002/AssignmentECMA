const Contact = {
    print() {
        return /* html */ `
            <main class="info_connect">
                <div class="box-item"></div>
                <div class="container_main w-[1160px] m-auto flex justify-between pt-[120px]">
                    <div class="main_part">
                        <div class="left_main">
                            <h2 style="color: #777; font-size: 25px;">THÔNG TIN LIÊN HỆ</h2>
                            <p class="pt-[8px]" style="color: #777;">Địa chỉ: 428 Nguyễn Kiệm – P3 – Q. Phú Nhuận</p>
                            <p class="pt-[8px]" style="color: #777;">Hotline: 0111111111</p>
                            <p class="pt-[8px]" style="color: #777;">Zalo :0983416384</p>
                            <p class="pt-[8px]" style="color: #777;">Email :khoidolce@gmail.com</p>
                            <div class="info_item mt-[32px]">
                                <h2 style="color: #777; font-size: 20px;">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                                <div class="box-item2 w-[225px] h-[2px] bg-black opacity-40"></div>
                            </div>
                        </div>
                        <!-- left_main -->
                        <div class="bottom_info mt-[36px]">
                            <input type="text" placeholder="Nhập tên của bạn"
                                class=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current">
                            <br>
                            <input type="text" placeholder="Email của bạn"
                                class=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current">
                            <br>
                            <input type="text" placeholder="Số điện thoại"
                                class=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current">
                            <br>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Nội dung"
                                class=" bg-slate-50 p-[5px] rounded-[20px] w-[530px] border-none outline-none mb-[20px] pl-[15px] text-base border-solid border-[2px] border-current h-[110px]"></textarea>
                            <br>
                            <button
                                class="rounded-[20px] py-[8px] px-[20px] border-none mt-[10px] bg-red-600 text-white hover:bg-red-500">Gửi</button>
                        </div>
                        <!-- bottom_info -->
                    </div>
                    <!-- main_part -->

                    <div class="extra_info">
                        <div class="map_info">
                            <iframe width="600" height="600"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.128603932329!2d106.67734331480098!3d10.801460992304534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ed44048e3%3A0x643d9ea357634c06!2sRincoffee!5e0!3m2!1svi!2s!4v1544426810526"
                                frameborder="0"></iframe>
                        </div>
                    </div>
                    <!-- extra_info -->
                </div>
                <!-- container_main -->
            </main>
            <!-- info_connect -->

        `;
    },
};

export default Contact;