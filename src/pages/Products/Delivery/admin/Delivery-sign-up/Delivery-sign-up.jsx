import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { postData } from "../../functions";

const DeliverySignUp = () => {  
  const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate();
  const [active, setActive] = useState(false)
  const [alertMessage, setAlertMessage] = useState({
      text:"",
      type:""
  })

  const handleSignUpUser = async (e) => {
      e.preventDefault();
      const user = {
         first_name : firstname, 
         last_name : lastname, 
         username : username,
         email : email,
         password : password,
         confirm_password : password2,
      };
          const res = await postData(user,"/auth/signup")
          if(res && res.token){
              console.log(res);
              setAlertMessage({
                  text: `Registration successfully`,
                  type: 'success',
              });
              setTimeout(()=>{
                  setAlertMessage('')
                  navigate('/products/delivery/admin/auth/sign-in');
              },2000)

          }else{
              if (res && typeof res === 'object' && Object.keys(res).length > 0) {
                  const errorMessage = Object.keys(res).map(field => (
                      Array.isArray(res[field])
                          ? res[field].map(error => `${field}: ${error}`).join(', ')
                          : `${field}: ${res[field]}`
                  )).join(', ');
  
                  setAlertMessage({
                      text: `Error during registration: ${errorMessage}`,
                      type: 'danger',
                  });
              }
          }
       
  };

useEffect(()=>{
  if(username != "" && firstname != "" && lastname != "" && email != "" && password != "" && password2 != "" ){
      setActive(true)
  }
},[password2])


  return (
    <section className="auth hrms-dash w-100 register">
      <main className="form-signin  h-100  w-100 d-flex flex-column justify-content-center align-items-center m-auto">
      {alertMessage && (
      <div className={`alert alert-${alertMessage.type} m-auto my-3`} role="alert">
          {alertMessage.text}
      </div>
      )}

        <form
          className="bg-white mx-3 p-4 p-md-5 border "
          onSubmit={handleSignUpUser}
        >
          <h1 className="h2 mb-3  text-center primary-text fw-semibold">
            Register
          </h1>
          <div className="form-floating">
            <input
              onChange={(e)=>setFirstname(e.target.value)}
              required
              type="text"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e)=>setLastname(e.target.value)}
              type="text"
              required
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              onChange={(e)=>setUsername(e.target.value)}
              required
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control rounded-0 my-4"
              required
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating rounded-3">
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="form-control rounded-0 my-4"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating rounded-3">
            <input
              type="password"
              onChange={(e)=>setPassword2(e.target.value)}
              className="form-control rounded-0"
              required
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>

          {
            active ?
            <button
            className="btn rounde-0 mt-3 btn-primary w-100 py-3   text-white rounded-3"
            type="submit">
            Sign up
          </button>:
          <button
          className="btn rounde-0 mt-3 btn-primary w-100 py-3   text-white rounded-3"
          disabled
          type="submit">
          Sign up
        </button>
          }
          <div className="text-center mt-3 text-center">
            Don&apos;t have you account?{" "}
            <Link
              to={"/products/delivery/admin/auth/sign-in"}
              className="fw-medium text-decoration-none"
            >
              Sign in
            </Link>
          </div>
        </form>
      </main>
    </section>
  );
};

export default DeliverySignUp;
