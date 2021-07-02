import Posts from "./posts/posts";

const FeaturedPosts = props => {

    return <section className="featured-posts">
        <h3>Featured Posts</h3>
        <Posts posts={props.posts} />
    </section>

}

export default FeaturedPosts;
