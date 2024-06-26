import Image from "next/image";
import Container from "../components/layout/Container";
import PostForm from "../components/layout/posts/PostForm";

export default function Home() {
  return (
    <Container>
      <PostForm />
    </Container>
  );
}
