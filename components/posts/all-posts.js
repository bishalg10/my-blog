import Posts from "./posts";

const AllPosts = props => {

    return <section>
        <h3>All Posts</h3>
        <Posts posts={props.posts} />
    </section>

}

export default AllPosts;
