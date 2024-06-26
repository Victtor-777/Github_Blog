import { useCallback, useEffect, useState } from "react";
import { PostHeader } from "./components/PostHeader";
import { IPost } from "../home";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState<IPost>({} as IPost);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <div>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </div>
  );
}
