const Profile = () => {
    return (
        <div className="w-100 bg-white py-2 px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button className="btn-none fs-4"><i className="fa-solid fa-gears"></i></button>
                <button className="btn-none">
                    <img style={{width:"50px", height:"50px", objectFit:"cover", borderRadius:"20%"}} src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </button>       
            </div>
            <h4>Your Balance</h4>
            <div className="card-balance gap-3 mb-3">
                <div className="balance-item bg-light w-50 rounded px-2 py-2">
                    <p className="m-0 p-0" style={{fontSize:"14px", fontWeight:400}}>Balance</p>
                    <p className="m-0 p-0" style={{fontSize:"20px", fontWeight:800}}>$12.00</p>
                </div>
                <div className="w-50 d-flex">
                <div className="w-50 top-up">
                    <button className="btn-none bg-white rounded px-3 py-2 mb-2">
                    <i className="fa-solid fa-arrow-up"></i>
                    </button>
                    <p style={{fontSize:"10px"}} className="text-white mx-1 mb-0">Top Up</p>
                </div>
                <div className="w-50 top-up">
                    <button className="btn-none bg-white rounded px-3 py-2 mb-2">
                    <i className="fa-solid fa-arrow-down"></i>
                    </button>
                    <p style={{fontSize:"10px"}} className="text-white mx-1 mb-0">Transfer</p>
                </div>
                </div>
            </div>
            <h6 className="text-secondary">Your Address</h6>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <p style={{fontWeight:"700"}} className="p-0 m-0"><i className="fa-solid fa-location-dot orange"></i> Elm Street, 23</p>
                <button className="btn btn-outline-warning btn-sm">Change</button>
            </div>
            <p className="text-secondary">Lorem ipsum dolor, sit amet dolor consectetur adipisicing elit.</p>
            <div className="d-flex gap-3 mb-3">
                <div className="btn btn-outline-secondary btn-sm">Add Details</div>
                <div className="btn btn-outline-secondary btn-sm">Add Details</div>
            </div>
            <h5 className="mb-3">Order Menu</h5>
            <div className="orders">
                <div className="card-order d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-2">
                    <img style={{width:"50px", height:"50px"}} src="https://images.newyorkpizza.nl/Products/Original/Brooklyn-8047.png" alt="" />
                    <div>
                        <p style={{fontWeight:"bold"}} className="m-0 p-0">Pepperoni Pizza</p>
                        <p style={{fontSize:"12px",}} className="m-0 p-0 text-secondary">x1</p>
                    </div>
                    </div>
                    <p style={{fontWeight:"bold"}} className="mx-2">+<span className="orange">$</span>5.59</p>
                </div>
                <div className="card-order d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-2">
                    <img style={{width:"50px", height:"50px"}} src="https://images.newyorkpizza.nl/Products/Original/Brooklyn-8047.png" alt="" />
                    <div>
                        <p style={{fontWeight:"bold"}} className="m-0 p-0">Pepperoni Pizza</p>
                        <p style={{fontSize:"12px",}} className="m-0 p-0 text-secondary">x1</p>
                    </div>
                    </div>
                    <p style={{fontWeight:"bold"}} className="mx-2">+<span className="orange">$</span>5.59</p>
                </div>
                <div className="card-order d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex gap-2">
                    <img style={{width:"50px", height:"50px"}} src="https://images.newyorkpizza.nl/Products/Original/Brooklyn-8047.png" alt="" />
                    <div>
                        <p style={{fontWeight:"bold"}} className="m-0 p-0">Pepperoni Pizza</p>
                        <p style={{fontSize:"12px",}} className="m-0 p-0 text-secondary">x1</p>
                    </div>
                    </div>
                    <p style={{fontWeight:"bold"}} className="mx-2">+<span className="orange">$</span>5.59</p>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <p style={{fontSize:"10px"}}>service</p>
                <p style={{fontWeight:"bold"}} className="mx-2">+<span className="orange">$</span>5.59</p>
            </div>
        </div>
    )
}

export default Profile