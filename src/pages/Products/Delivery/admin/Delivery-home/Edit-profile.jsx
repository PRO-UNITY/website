// import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import { useRef } from "react";
import DeliveryAdminLayout from "../../../../../Layout/Delivery-admin-layout";
import { useEffect, useState } from "react";
import { getDataWithToken } from "../../functions";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const EditProfile = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => hiddenFileInput.current.click();
  const [img, setImg] = useState(null)

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setImg(fileUploaded)
  };
  
  const [user, setUser] = useState({})
  const imgRef = useRef()
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const usernameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()
  const navigate = useNavigate()


  useEffect(()=>{
      getDataWithToken('/user').
      then((res)=>
       {setUser(res)
      console.log(res);
      })
  },[])

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token")
    e.preventDefault();
    const formData = new FormData();
    formData.append('first_name', firstnameRef.current?.value);
    formData.append('last_name', lastnameRef.current?.value);
    formData.append('username', usernameRef.current?.value);
    formData.append('phone', phoneRef.current?.value);
    formData.append('email', emailRef.current?.value);
    if(img){
        formData.append('avatar', img);
    }

    try {
        const response = await axios.put('https://api.prounity.uz/food-delivery/user', formData, {
            headers: {
                'Content-Type': 'multipart/formData',
                Authorization: `Bearer ${token}`,
            },
        });
        window.location.reload()
    } catch (error) {
        console.error('Error creating category', error);
    }
};



  return (
    <DeliveryAdminLayout>
      <div className="mt-4 profile-setting overflow-auto">
        <div className="container">
          <h3>Profile settings</h3>
          <form onSubmit={handleSubmit} className="card profile-setting-card overfoll p-4">
            <div className="card-head rounded-3 d-flex align-items-center justify-content-center p-4 flex-column bg-light">
              <div className="user-img d-flex align-items-center rounded-circle justify-content-center">
                <img style={{width:"40px", height:"40px", borderRadius:"50%", objectFit:"cover"}} src={`https://api.prounity.uz/food-delivery${user.avatar}`} alt="" />
              </div>
              <span className="my-2">Image must be 256 x 256px - Max 2MB</span>
              <div className="mt-1">
                <input
                  type="file"
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  hidden
                />
                <button
                  className="btn py-2 px-3 bg-white border me-3 fw-semibold"
                  type="button"
                  onClick={handleClick}
                >
                  <i className="fa-solid fa-upload me-2"></i>Upload image
                </button>
               
              </div>
            </div>
            <div className="card-body px-0 py-0 pt-4">
              
                <label>Firstname</label>
                <input
                defaultValue={user.first_name}
                 type="text" 
                 className="form-control mb-1"
                 ref={firstnameRef}
                />
                <label>Lastname</label>
                <input
                defaultValue={user.last_name}
                 type="text" 
                 className="form-control mb-1"
                 ref={lastnameRef}
                />
                <label>Username</label>
                <input
                defaultValue={user.username}
                 type="text" 
                 ref={usernameRef}
                 className="form-control mb-1"
                />
                <label>Email</label>
                <input
                defaultValue={user.email}
                 type="email" 
                 ref={emailRef}
                 className="form-control mb-1"
                />
                <label>Email</label>
                <input
                defaultValue={user.phone}
                 type="text" 
                 ref={phoneRef}
                 className="form-control mb-1"
                />
                <button className=" float-end mt-4 btn btn-primary px-4 py-2">
                  Save
                </button>
              
              {/* <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Select"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="myemail@gmail.com"
                    />
                  </div>
                  <div
                    style={{ position: "relative" }}
                    className="col-lg-6 realative"
                  >
                    <img
                      width={30}
                      height={20}
                      className="rounded-1 position-absolute  me-2 start-0"
                      style={{ objectFit: "cover", marginTop:"12px", marginLeft:"20px" }}
                      src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
                      alt=""
                    />
                    <input
                      type="email"
                      className="form-control py-2 ps-5"
                      id="exampleFormControlInput1"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>
                <InputGroup className="mb-3 relative">
                  <DropdownButton
                    variant="outline-secondary"
                    className="border"
                    title="https://"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control placeholder="Enter..." />

                  <div className="form-check position-absolute text-success mt-1 me-2 end-0">
                    <input
                      className="form-check-input bg-outline-success  "
                      type="checkbox"
                      defaultValue
                      id="btn-check-outlined"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckIndeterminateDisabled"
                    >
                      Available
                    </label>
                  </div>
                </InputGroup>
                <textarea
                  className="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter text here..."
                  rows="4"
                ></textarea>
                <button className=" float-end mt-4 btn btn-primary px-4 py-2">
                  Save
                </button>
              </div> */}
            </div>
            
          </form>
        </div>
      </div>
    </DeliveryAdminLayout>
  );
};
export default EditProfile;
