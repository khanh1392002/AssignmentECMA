const footer = {
    print() {
        return /* html */ `
            <div class="footter bg-neutral-900 grid grid-cols-3 p-[70px] mt-[70px]">
                <div class="footter-left">
                    <h3 class="text-white pl-[40px]">ĐIỀU HƯỚNG</h3>
                </div>
                <!-- footter-left-->
                <div class="footter-center text-center">
                    <div class="footter-center-logo">
                        <img src="../img/logo-mona-watches-white.png" class="line2 w-[200px] m-auto">
                    </div>
                    <!-- footter-center-logo-->
                    <div class="footter-center-text">
                        <p class="text-white pt-[10px] text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam
                            nonummy
                            nibh euismod tincidunt
                            ut
                            laoreet ...</p>
                    </div>
                    <!-- footter-center-text-->
                    <div class="footter-center-search">
                        <form action="">
                            <input type="text" placeholder="Email..."
                                class="rounded-[15px] border-none p-[5px] w-[250px] outline-none">
                            <button onclick=""
                                class="rounded-[15px] border-none p-[5px] w-[40px] outline-none bg-white">--></button>
                        </form>
                    </div>
                    <!-- footter-center-search-->
                    <div class="footter-center-content">
                        <p class="text-white pt-[20px]">© All rights reserved. Thiết kế website</p>
                    </div>
                    <!-- footter-center-content-->
                </div>
                <!-- footter-center-->
                <div class="footter-right pl-[180px]">
                    <h3 class="text-white text-xl">THÔNG TIN LIÊN HỆ</h3>
                    <p class="text-white text-base">319 c16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                    <h4 class="pt-[10px] text-lg"><a href="" class="text-white no-underline">0983 416 384</a></h4>
                    <h4 class="pt-[10px] text-lg"><a href="" class="text-white no-underline">khointph15388@fpt.edu.vn</a>
                    </h4>
                </div>
                <!-- footter-right-->
            </div>
            <!-- footter-->
        `;
    },
};

export default footer;