import intance from "./insta";

export const getAll = () => {
    const url = "/posts/?_start=0&_limit=1";
    return intance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return intance.get(url);
};
export const add = (post) => {
    const url = `/posts`;
    return intance.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return intance.delete(url);
};
export const update = (post) => {
    const url = `/posts/${post.id}`;
    return intance.put(url, post);
};