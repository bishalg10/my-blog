import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('js', js);

const PostContent = props => {

    const {image, title, date, excerpt, slug, content} = props.post;
    const imagePath = `/images/posts/${slug}/${image}`;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})


    const imgComponent = ({node, ...props}) => <Image src={`/images/posts/${slug}/${props.src}`} alt={image.alt} width={600} height={300}/>
    const renderers = {
        h1: 'h3',
        img: imgComponent,
        code({node, inline, className, children, ...props}) {
            const language = /language-(\w+)/.exec(className || '');
            return <SyntaxHighlighter language={language[1]} style={atomDark}>{children}</SyntaxHighlighter>
        }
    }

    return <section>
        <article>
            <div className="post-header">
                <h1>{title}</h1>
                <Image src={imagePath} alt={title} width={200} height={150} />
            </div>
            <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
        </article>
    </section>

}

export default PostContent;
