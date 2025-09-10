import { useEffect, useState } from "react";

export default function Blog() {
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`../../blog_posts/*`)
        .then(response => response.arrayBuffer())
        .then(response => console.log(response))
        .catch(error => {
            console.error('Error loading posts:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    // return (
    //     <div>
    //         <ul>
    //             {blogs.map(blog => (
    //                 <li><a href={`/blog/posts/${blog}`}></a></li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}