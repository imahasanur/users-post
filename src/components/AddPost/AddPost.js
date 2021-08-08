import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { fetchPostApi } from "../../redux/actions/postApiActions";

let insertedData;

const AddPost = ({fetchPostApi, insertedPost}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        insertedData = data;
        fetchPostApi(insertedData)
    }

    return (
        <div style={{background: "whitesmoke", minHeight: "700px"}}>
            <div className="text-center p-2 mb-3">
                <h5 className="text-decoration-underline">Add Post</h5>
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)} style={{border:'2px solid gray',padding:'30px 20px', borderRadius:'5px'}}>
                    <div className="p-2"> 
                        <input {...register("userId")} placeholder="userId" required />
                    </div>
                    <div className="p-2">
                        <input {...register("title")} placeholder="title" required />
                    </div>
                    <div className="p-2">
                        <input {...register("body")} placeholder="body" required />
                    </div>
                    <div className="p-2">
                        <input type="submit" value="Post Now" className="btn btn-success"/>
                    </div>
                </form>
            </div>

            <div className="d-flex justify-content-center" style={{color:'green'}}>
                {
                    insertedPost && insertedPost.post.id && <h5>Successfully inserted post {insertedPost.post.id}</h5>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    state.post.post = {};
    state.deletedPost.post = {};
    return {
        insertedPost: state.insertedPost
    }
}

const mapDispatchToProps = dispatch => {  
    return{
        fetchPostApi: ()=> dispatch(fetchPostApi(insertedData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (AddPost);