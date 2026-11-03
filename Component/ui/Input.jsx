
const Input =({label ,  placeholder ,register }) => {
    return (
        <div> 
            <label htmlFor="" > {label}</label>
            <input type="text" placeholder={placeholder} {...register}/>
        </div>
    )
}
export default Input;