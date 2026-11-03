import Button from "../Component/ui/button";
import Input from "../Component/ui/input";
import { useForm } from "react-hook-form";

console.log("LOGIN FILE LOADED");

  
const Login = () => {
const { register, handleSubmit } = useForm();
  
    const SubmitData = (data) =>{
      console.log(data)
    }
    return (
        <div>
            <h1>TASK MANAGER</h1>
            <p>Plan your day with us</p>

              <form onSubmit={handleSubmit(SubmitData)}>
                <Input label="email"placeholder="enter your emailId" register={register("email")} />
                <Input   label="password" placeholder="enter your password" register={register("password")}/>
                <Button type='submit'>Login</Button>
              </form>
        </div>
    );
}
export default Login;