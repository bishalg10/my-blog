import {Fragment} from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";

const HomePage = props => {

    return <Fragment>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>

}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();
    return {props: {posts: featuredPosts}}
}

export default HomePage;
