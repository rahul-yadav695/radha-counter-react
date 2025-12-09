import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();

    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">Blog Details Page</h1>
                <p className="mt-3 text-gray-600">You opened blog number: {id}</p>
            </div>

        </>
    );
};

export default BlogDetails;
