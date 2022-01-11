import data from "../data";

const NewsList = {
    render() {
        return /* html */`
            <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */`
                        <div class="border p-4">
                        <a href="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdGBQkytEyNFNYAm42nOtBOxo8GvdNmb95PuPUtM0r5sa8h1fUkdUWtEXAxz3mMVMUKc&usqp=CAU" alt="" width="100%"/>                    
                        </a>
                        <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">${post.name}</a></h3>
                        <p class="text-sm text-gray-500">${post.desc} </p>
                    </div>
                `).join("")}
            </div>
            <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */`
                        <div class="border p-4">
                        <a href="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdGBQkytEyNFNYAm42nOtBOxo8GvdNmb95PuPUtM0r5sa8h1fUkdUWtEXAxz3mMVMUKc&usqp=CAU" alt="" width="100%"/>                    
                        </a>
                        <h3 class="my-3"><a href="#" class="font-semibold text-orange-500 text-lg">${post.name}</a></h3>
                        <p class="text-sm text-gray-500">${post.desc} </p>
                    </div>
                `).join("")}
            </div>
        
        `;
    },
};
export default NewsList;