import {useForm} from "react-hook-form";
import {userService} from "../services";
import css from "./UserForm.module.css"
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidators} from "../validators";

const UserForm = ({setUsers}) => {
    let {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver:joiResolver(userValidators),mode:'all'});

    const submit = (obj) => {
        userService.create(obj).then(({data}) => setUsers(users=> [...users, data]));
    };

    return (
        <form onSubmit={handleSubmit(submit)} className={css.form}>
            <input type="text" placeholder={"id"} {...register('id', {valueAsNumber: true})}/>
            {errors.id&&<span>{errors.id.message}</span>}
            <input type="text" placeholder={"name"} {...register('name')}/>
            {errors.name&&<span>{errors.name.message}</span>}
            <input type="text" placeholder={"username"} {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <input type="text" placeholder={"phone"} {...register('phone', {valueAsNumber: true})}/>
            {errors.phone&&<span>{errors.phone.message}</span>}
            <button disabled={!isValid} className={css.btn}>send</button>
        </form>
    );
};

export default UserForm;