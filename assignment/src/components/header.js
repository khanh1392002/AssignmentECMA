const Header = {
    render(){
        return /* html */`
            <header>
                <div class="header-top" style="text-align: center; padding: 10px 0; background-color: #272f54;">
                    <a href="">
                        <img src="https://caodang.fpt.edu.vn/vinmart/images/icon2a.png" alt="" width="110px"></a>
                    </div>
                <div class="header-main" style="display: grid; grid-template-columns: 69% 1fr; background-color: #ca7800;">
                    <div class="menu" >
                        <ul >
                        <li style="display: inline-block; padding: 10px 15px;"><a href="/"  style="text-decoration: none; color: white;  ">Trang chủ</a></li>
                        <li style="display: inline-block; padding: 10px 15px;"><a href="/about"  style="text-decoration: none; color: white;  ">Tuyển sinh</a></li>
                        <li style="display: inline-block; padding: 10px 15px;"><a href="/product"  style="text-decoration: none; color: white;  ">Chương trình đào tạo</a></li>
                        <li style="display: inline-block; padding: 10px 15px;"><a href="/contact"  style="text-decoration: none; color: white;  ">Góc sinh viên</a></li>
                        <li style="display: inline-block; padding: 10px 15px;"><a href=""  style="text-decoration: none; color: white;  ">Tuyển dụng</a></li>
                        </ul>
                    </div>
                    <div class="search">
                        <form action="" style="padding: 7px 0px">
                        <input type="text" placeholder="Tìm kiếm" style="padding: 3px 10px; width: 210px;">
                        <input type="submit" value="Tìm kiếm" style="padding: 3px 15px; background-color: #272f54; color: white; border: 1px solid white;">
                        </form>
                    </div>
                </div>
        </header>
        `;

    }
};
export default Header;