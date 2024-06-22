import { IPost } from "../..";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{post.create_at}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
}
