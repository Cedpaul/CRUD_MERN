import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo, onSubmit }) => {

    const {register, handleSubmit} = useForm({defaultValues: {text: todo ? todo.text : "", description: todo ? todo.description : ""}, });
    

    const history = useHistory();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push("/");
    });

    return (
        
                 <form onSubmit={submitHandler}>
                     <div className="form-group">
                         <label htmlFor="text"> Text: </label>
                         <input className="form-control"  {...register('text', { required: true })} type="text" name="text" id="text"></input>

                         <label htmlFor="text"> Description: </label>
                         <input className="form-control"  {...register('description', { required: true })} type="text" name="description" id="description"></input>
                     </div>
                     <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Save Todo
                        </button>
                     </div>
                 </form>
    );  
}