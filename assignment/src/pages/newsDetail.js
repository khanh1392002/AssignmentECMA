import data from "../data";

const newsDetail = {
    render(id){
        const result = data.find((post)=> post.id === id);

        return /*html*/ `
            <h1>${result.name}</h1>
            <img src="${result.img}"/>
            <p>${result.desc}</p>
        `;
    }
};
export default newsDetail;