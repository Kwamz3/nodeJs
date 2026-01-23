const posts = [
    {id: 1, title: "Post_1"},
    {id: 2, title: "Post_2"},
    {id: 3, title: "Post_3"}
];


const getPosts = () => posts;
const getPostLength = () => posts.length;

// exporting without "default" means you'll add the braces around the the const call
// export { getPosts };

// exporting without the curly braces means you'll add "default" the export statement
export default getPosts;
export { getPostLength };