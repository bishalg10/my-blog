import {Fragment} from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";

const HomePage = props => {

    return <Fragment>
        <Head>
            <title>Kumar&apos;s Blog</title>
            <meta name="description" content="I post about programming and web development."/>
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>

}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();
    return {props: {posts: featuredPosts}}
}

export default HomePage;
