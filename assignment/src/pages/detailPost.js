import axios from 'axios';
import { get } from '../api/post';

const DetailPost = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return `
            <div>
                <h1>${data.title}</h1>
                <img src="${data.img}"/>
                <p>${data.desc}</p> 
            </div>
        `
    },
};
export default DetailPost;
