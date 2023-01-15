import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            <h2>Homepage</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title='All the Blogs!' /> } 
            { blogs && <BlogList blogs={blogs.filter(blogs => blogs.author === "mario")} title="Mario's Blogs!" /> }
        </div>
    );
}

export default Home;