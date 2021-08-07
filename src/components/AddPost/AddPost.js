import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { fetchPostApi } from "../../redux/actions/postApiActions";

let insertedData;
const AddPost = ({fetchPostApi, insertedPost}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        insertedData = data;
        fetchPostApi(insertedData)
    }


    return (
        <div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
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
    console.log("Inserted Data", state.insertedPost.post)
    return {
        insertedPost:state.insertedPost
    }
}

const mapDispatchToProps = dispatch => {  
    return{
        fetchPostApi: ()=> dispatch(fetchPostApi(insertedData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (AddPost);