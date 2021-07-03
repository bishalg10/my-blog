import Link from "next/link";
import Image from "next/image";

const PostItem = props => {

    const {image, title, date, excerpt, slug} = props.post;
    const linkPath = `/posts/${slug}`;
    const imagePath = `/images/posts/${slug}/${image}`;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})

    return <li>
        <Link href={linkPath}>
            <a>
                <div>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className="post-detail">
                    <h4>{title}</h4>
                    <time className="body2">{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>

}

export default PostItem;
