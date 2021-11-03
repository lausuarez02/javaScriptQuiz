import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = async (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
    
        // set configurations
        const configuration = {
          method: "post",
          url: "https://auth-nodejs-first.herokuapp.com/login",
          data: {
            "email": email ,
            "password": password,
          },
        }
        // make the API call
         await axios(configuration) .then((result) => {
            // set the cookie
            cookies.set("TOKEN", result.data.token, {
              path: "/",
            });
            // redirect user to the auth page
            window.location.href = "/auth";
    
            setLogin(true);
          })
          .catch((error) => {
            error = new Error();
          });
      };
      
    return (
      
            <form >
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" class="form-control" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" class="form-control" />
                </div>
                <button variant="primary" type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e)} onSubmit={(e) => handleSubmit(e)}>Submit</button>
                {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
            </form>
       
    );
};

export default Login;