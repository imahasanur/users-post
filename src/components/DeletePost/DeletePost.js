import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { fetchDeleteApi } from "../../redux/actions/delApiActions";

let insertedId;
const DeletePost = ({fetchDeleteApi, deletedPost}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        insertedId = data.id;
        insertedId = Number(insertedId);
        fetchDeleteApi(insertedId)
    }

    return (
        <div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-2"> 
                        <input type="number" {...register("id", { min: 1, max: 100 })}  placeholder="id .. (1-100)" />
                    </div>
                    <div className="p-2">
                        <input type="submit" value="Delete Now" className="btn btn-success"/>
                    </div>
                </form>

            </div>
            <div className="d-flex justify-content-center" style={{color:'Blue'}}>
                {
                    deletedPost && deletedPost.post.status && <h5>Successfully deletedPost  Status {deletedPost.post.status} for id {insertedId}</h5>

                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    console.log("Deleted Data", state.deletedPost.post)
    return {
        deletedPost:state.deletedPost
    }
}

const mapDispatchToProps = dispatch => {  
    return{
        fetchDeleteApi: ()=> dispatch(fetchDeleteApi(insertedId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (DeletePost);