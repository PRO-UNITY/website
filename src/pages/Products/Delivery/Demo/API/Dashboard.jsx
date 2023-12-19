import DemoLayout from "../../../../../Layout/DemoLayout"

const Dashboard = () => {
    return ( 
        <DemoLayout>
            <div className="w-100 body-main  p-5">
                <div className="vaucher d-flex flex-column justify-content-center align-items-start p-4 mb-4">
                    <h3 className="text-white">Det Discount Vaucher <br /> Up To 20%</h3>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Neque reiciendis sit doloremque aliquam </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Category</h3>
                <button className="orange text-center mb-1 btn-none">View All <i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="categories w-100 mb-3">
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-bread-slice orange icon-category"></i>
                        <p className="name-category">Bakery</p>
                    </div>
                    <div className="category-item bg-white">
                    <i className="fa-solid fa-burger orange icon-category"></i> 
                    <p className="name-category">Burger</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-mug-hot orange icon-category"></i>
                        <p className="name-category">Beverage</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-drumstick-bite orange icon-category"></i>
                        <p className="name-category">Chicken</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-pizza-slice orange icon-category"></i>
                        <p className="name-category">Pizza</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-fish orange icon-category"></i>
                        <p className="name-category">Seafood</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Restaurants</h3>
                <button className="orange text-center mb-1 btn-none">View All <i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="categories w-100 mb-3">
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-bread-slice orange icon-category"></i>
                        <p className="name-category">Shafran</p>
                    </div>
                    <div className="category-item bg-white">
                    <i className="fa-solid fa-burger orange icon-category"></i> 
                    <p className="name-category">Lacafe</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-mug-hot orange icon-category"></i>
                        <p className="name-category">Zarafshon</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-drumstick-bite orange icon-category"></i>
                        <p className="name-category">Garden</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-pizza-slice orange icon-category"></i>
                        <p className="name-category">Bella Italia</p>
                    </div>
                    <div className="category-item bg-white">
                        <i className="fa-solid fa-fish orange icon-category"></i>
                        <p className="name-category">Sardoba</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Popular Foods</h3>
                <button className="orange text-center mb-1 btn-none">View All <i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="foods">
                    <div className="food-item bg-white">
                        <div className="w-100 d-flex justify-content-center">
                        <img style={{width:"160px", height:"160xp", objectFit:"contain"}} src="https://static.vecteezy.com/system/resources/previews/027/546/580/original/fresh-fishburger-isolated-png.png" alt="" />
                        </div>
                        <div className="mb-2">
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        </div>
                        <div className="d-flex justify-content-between w-100 align-items-center">
                            <div>
                            <p className="p-0 m-0">Fish Burger</p>
                            <p style={{fontWeight:800}}><span className="orange">$</span>5.59</p>
                            </div>
                            <button className="btn-add bg-orange"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="sale">
                            <div className="d-flex justify-content-center align-items-center px-2 text-white sale-percent">15% Off</div>
                            <button style={{color:"rgb(247, 69, 69)"}} className="btn-favourite"><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>  
                    <div className="food-item bg-white">
                        <div className="w-100 d-flex justify-content-center">
                        <img style={{width:"160px", height:"160xp", objectFit:"contain"}} src="https://static.vecteezy.com/system/resources/previews/027/546/580/original/fresh-fishburger-isolated-png.png" alt="" />
                        </div>
                        <div className="mb-2">
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        </div>
                        <div className="d-flex justify-content-between w-100 align-items-center">
                            <div>
                            <p className="p-0 m-0">Fish Burger</p>
                            <p style={{fontWeight:800}}><span className="orange">$</span>5.59</p>
                            </div>
                            <button className="btn-add bg-orange"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="sale">
                            <div className="d-flex justify-content-center align-items-center px-2 text-white sale-percent">15% Off</div>
                            <button className="btn-favourite"><i className="fa-solid fa-heart text-secondary"></i></button>
                        </div>
                    </div>  
                    <div className="food-item bg-white">
                        <div className="w-100 d-flex justify-content-center">
                        <img style={{width:"160px", height:"160xp", objectFit:"contain"}} src="https://static.vecteezy.com/system/resources/previews/027/546/580/original/fresh-fishburger-isolated-png.png" alt="" />
                        </div>
                        <div className="mb-2">
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        <i className="fa-solid fa-star orange"></i>
                        </div>
                        <div className="d-flex justify-content-between w-100 align-items-center">
                            <div>
                            <p className="p-0 m-0">Fish Burger</p>
                            <p style={{fontWeight:800}}><span className="orange">$</span>5.59</p>
                            </div>
                            <button className="btn-add bg-orange"><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className="sale">
                            <div className="d-flex justify-content-center align-items-center px-2 text-white sale-percent">15% Off</div>
                            <button className="btn-favourite"><i className="fa-solid fa-heart text-secondary"></i></button>
                        </div>
                    </div>  
                </div>
            </div>
        </DemoLayout>
    )
}

export default Dashboard