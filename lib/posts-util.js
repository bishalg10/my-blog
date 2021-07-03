import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
    return fs.readdirSync(POSTS_DIRECTORY);
}

export const getPostData = filename => {
    const postSlug = filename.replace(/\.md$/, '');

    const filePath = path.join(POSTS_DIRECTORY, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug: postSlug,
        ...data,
        content
    };
}

export const getAllPosts = () => {
    const postFiles = getPostFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}


export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.isFeatured);
}
