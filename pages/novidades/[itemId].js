import Breadcrumbs from "../../src/app/componentes/Breadcrumbs";
import NavBar from "../../src/app/componentes/NavBar";
import Title from "../../src/app/componentes/Title";
import React from "react";
import axios from "axios";
import Layout from "../../src/app/componentes/Layout";

const PostPage = ({ post, comments }) => {
    return(
        <div>
            <Layout>
            <NavBar></NavBar>
            <Breadcrumbs></Breadcrumbs>
            <Title>{post.title}</Title>
            <p>{post.body}</p>
            {/* depois eu arrumo at.te Sergio*/}

            <ul>
            {comments.map((comment) => (
                <div className="bg-white shadow-md rounded p-4 mb-4">
                    <li key={comment.id}>
                        <p>Título: {comment.name}</p>
                        <p>Email: {comment.email}</p>
                        <p>Body: {comment.body}</p>
                    </li>
                </div>
            ))}
            </ul>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { itemId } = params;
    
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
    const post = postResponse.data;

    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
    const comments = commentsResponse.data;

    return{
        props: {
            post,
            comments
        }, 
    };
}

export default PostPage;