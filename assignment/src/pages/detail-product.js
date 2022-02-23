import { get } from "../api/posts";
import footer from "../components/footer";
import header from "../components/header";

const detailProduct = {
    async print(id) {
        const { data } = await get(id);
        return /* html */ `
        ${header.print()}
            <div class="products p-[20px] pt-[120px]">
                <div class="row-pr grid grid-cols-2">
                    <div class="image-pr">
                        <div class="image-right">
                            <div class="right-pr">
                                <img src="${data.img}" alt="" class="m-auto w-3/5">
                            </div>
                        </div>
            </div>
                <div class="cart p-[30px] w-[74%] m-auto">
                    <div class="top">
                        <h3 class="text-2xl pb-[20px]">${data.desc}</h3>
                        <span>${data.price}</span>
                    </div>
                    <div class="botbot text-center bg-teal-300 p-[20px] mt-[30px] text-2xl">
                        <a href="" class="no-underline text-white">Thêm vào giỏ hàng</a>
                    </div>
                </div>
        </div>
        <div class="row2-pr w-[66%] m-auto">
            <div class="title4 text-xl text-center mb-[30px]">
                <ul>
                    <li class="active inline-block py-0 px-[10px]"><a href="#infor"
                            class="no-underline text-black pb-[6px]">Thông tin</a>
                    </li>
                    <li class="inline-block py-0 px-[10px]"><a href="#coment"
                            class="no-underline text-black pb-[6px]">Đánh
                            giá</a></li>
                </ul>
            </div>
            <div class="div">
                <div class="information" id="infor">
                    <p>Nhìn thấy rõ ở đây với màu sắc Dark Mocha gọn gàng gợi nhớ nhiều đến bản collab đắt tiền của
                        Travis
                        Scott, Air Jordan 1 trông đẹp hơn bao giờ hết được chế tác từ da nubuck chính hãng và da lộn cao
                        cấp. Biểu tượng Swoosh của Nike chạy dọc gọn gàng ở mỗi bên má ngoài và má trong, trong khi đó
                        nhãn
                        hiệu Nike Air và biểu tượng Wings vẫn có vị trí tương ứng trên lưỡi gà và cổ giày. Các tông màu
                        nâu
                        và đen được cân bằng một cách tuyệt vời với các mảng màu trắng. Mũi giày được đục lỗ theo phong
                        cách
                        cổ điển của Michael Jordan, trong khi các điểm nhấn bằng da màu đen mang lại cảm giác cổ điển.
                        Phía dưới bàn chân, một bộ phận đế giữa màu trắng và đế ngoài màu đen chứa gọn gàng được lấp đầy
                        bằng công nghệ đệm của Nike Air. Những chiếc giày này cực kỳ thoải mái trong mọi hoạt động và vị
                        trí
                        bạn di chuyển. Nếu bạn đang muốn bổ sung vào bộ sưu tập Jordan của mình hoặc cho dù bạn mới bắt
                        đầu
                        chời giày, thì đây cũng là đôi hoàn hảo nhất tại thời điểm này.
                    </p>
                </div>
                <div class="coment border-solid border-gray-400 border-[1px]" id="coment">
                    <h5 class="py-[15px] px-[25px]">Nhận xét về sản phẩm</h5>
                    <form action="" class="form-coment py-[0px] px-[25px]">
                        <input type="text" placeholder="Đánh giá của bạn về sản phẩm"
                            class="input-coment w-[90%] py-[15px] px-[10px]">
                        <input type="submit" value="Nhận xét" class="sb-comnet py-[10px] px-[15px]">
                    </form>
                </div>
            </div>
        </div>
        <div class="row-ct my-[50px] mx-[20px] text-center">
            <h3>Sản phẩm cùng loại</h3>
            <div class="pr-ct grid grid-cols-4 gap-[10px]">
                <div class="pr p-[20px]">
                    <a href=""><img src="${data.img}" alt="" class="w-[80%] m-auto"></a>
                    <h3 class="text-base py-[15px] px-[0px]">ĐỒNG HỒ CANDINO C4433/3 NỮ PIN DÂY INOX</h3>
                    <p class="text-sm">3,996,000đ</p>
                </div>
                <div class="pr p-[20px]">
                    <a href=""><img src="${data.img}" alt="" class="w-[80%] m-auto"></a>
                    <h3 class="text-base py-[15px] px-[0px]">ĐỒNG HỒ SKAGEN 885SSLB NỮ PIN DÂY DA</h3>
                    <p class="text-sm">5,900,000đ</p>
                </div>
                <div class="pr p-[20px]">
                    <a href=""><img src="${data.img}" alt="" class="w-[80%] m-auto"></a>
                    <h3 class="text-base py-[15px] px-[0px]">ĐỒNG HỒ DANIEL WELLINGTON DW00500001 NỮ PIN DÂY INOX</h3>
                    <p class="text-sm">4,230,000đ</p>
                </div>
                <div class="pr p-[20px]">
                    <a href=""><img src="${data.img}" alt="" class="w-[80%] m-auto"></a>
                    <h3 class="text-base py-[15px] px-[0px]">ĐỒNG HỒ CASIO GA-100DE-2ADR NỮ PIN DÂY NHỰA</h3>
                    <p class="text-sm">4,393,000đ</p>
                </div>
            </div>
        </div>
    </div>
    ${footer.print()}
        `;
    },
};

export default detailProduct;