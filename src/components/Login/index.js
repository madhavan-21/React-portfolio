import { signInWithGoogle } from "../../firebase";

const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                sign with google
            </button>

        </div>
    )
}

export default Login;