
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



const Login = () => {


    return (

        <GoogleOAuthProvider clientId="205002162751-hg4b210sq2furhsafu0ou4jll6vtog7d.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </GoogleOAuthProvider>
    )
}


export default Login;