import Image from "next/image";

const Hero = () => {

    return <section className="hero">
        <div>
            <Image src="/images/site/kumar.jpg" alt="Kumar" width="300" height="300" />
        </div>
        <h1>Hi, I&apos;m Kumar.</h1>
        <p>A web developer and 3d designer.</p>
    </section>

}

export default Hero;
