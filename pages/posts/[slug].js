import PostContent from "../../components/posts/post-content";
import {getPostData, getPostFiles} from "../../lib/posts-util";
import {Fragment} from "react";
import Head from "next/head";

const PostDetailPage = props => {

    return <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name="description" content={props.post.excerpt}/>
        </Head>
        <PostContent post={props.post} />
    </Fragment>

}

export const getStaticProps = context => {
    const { params } = context;
    const { slug } = params;

    const post = getPostData(slug);

    return {props: {post}, revalidate: 600}
}

export const getStaticPaths = context => {

    const allFiles = getPostFiles();
    const slugs = allFiles.map(file => file.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: false
    }
}

export default PostDetailPage;
