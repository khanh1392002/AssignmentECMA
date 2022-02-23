import footer from "../components/footer";
import header from "../components/header";

const introducePage = {
    print() {
        return /* html */ `
            <header>
                ${header.print()}
            </header>
            <div class="content pt-[100px]">
                <h2 class="fonts text-center">MONA MEDIA</h2>
                <div class="content-img">
                    <img src="./img/banner3.jpg" alt="" class="h-[450px] w-[1200px] m-auto pt-[10px]">
                </div>
                <!-- content-img-->
                <div class="content-item pt-[20px] grid grid-cols-3 text-center">
                    <div class="item-left">
                        <img src="./img/diamond.png" alt=""
                            class="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500">
                        <h3 class="text-2xl pt-[15px]">CONCEPT</h3>
                        <p class="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p class="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p class="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a href="">
                            <input type="button" value="CLICK ME!"
                                class="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]">
                        </a>
                    </div>
                    <!-- item-left-->
                    <div class="item-left">
                        <img src="./img/network.png" alt=""
                            class="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500">
                        <h3 class="text-2xl pt-[15px]">NETWORK</h3>
                        <p class="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p class="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p class="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a href="">
                            <input type="button" value="CLICK ME!"
                                class="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]">
                        </a>
                    </div>
                    <!-- item-left-->
                    <div class="item-left">
                        <img src="./img/eye.png" alt=""
                            class="m-auto w-[50px] border-solid border-[2px] border-amber-500 rounded-[30px] hover:bg-amber-500">
                        <h3 class="text-2xl pt-[15px]">SEO</h3>
                        <p class="text-base pt-[5px]">Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                        <p class="text-base pt-[5px]">elit, sed diam nonummy nibh euismod tincidunt ut</p>
                        <p class="text-base pt-[5px]">laoreet dolore magna aliquam erat volutpat….</p>
                        <a href="">
                            <input type="button" value="CLICK ME!"
                                class="pt-[10px] text-gray-100 bg-black border-none p-[10px] rounded-[30px]">
                        </a>
                    </div>
                    <!-- item-left-->
                </div>
                <!-- content-item-->
            </div>
            <footer>
                ${footer.print()}
            </footer>
        `;
    },
};

export default introducePage;