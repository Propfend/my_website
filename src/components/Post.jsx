import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Post() {
    const params = useParams();
    const postName = params.post;

      const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`../../blog_posts/${postName}`)
      .then(response => response.text())
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading post:', error);
        setLoading(false);
    });
  }, [postName]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="blog-post">
      <pre>{content}</pre>
    </div>
  );
}