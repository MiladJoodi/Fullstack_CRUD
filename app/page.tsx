import Image from "next/image";
import Container from "../components/layout/Container";
import PostForm from "../components/layout/posts/PostForm";
import ListPosts from "../components/layout/posts/ListPosts";

export default function Home() {
  return (
    <Container>
      <PostForm />
      <ListPosts />
    </Container>
  );
}
