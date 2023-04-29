import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="post1" title="Hello Next.js" />
      <PostLink id="post2" title="Learn Next.js is awesome" />
      <PostLink id="post3" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);
