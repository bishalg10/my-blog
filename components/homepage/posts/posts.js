import PostItem from "./post-item";

const Posts = props => {

    const {posts} = props;

    return <ul>
        {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>

}

export default Posts;
