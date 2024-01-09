import { Link } from "react-router-dom";
import DeliveryDocumentationLayout from "../../../../layout/DeliveryDocumentationLayout";
const Data = [
  {
    id: 1,
    title: "Authentification",
    child: [
      {
        subtitle: "User",
        subchild: [
          {
            name: "Register",
            path: "users#create-user",
          },
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "Kitchen",
        subchild: [
          { name: "Register", path: "users#create-user" },
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "Admin",
        subchild: [
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "Manager",
        subchild: [
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
      {
        subtitle: "Deliveryman user",
        subchild: [
          { name: "Login", path: "users#sign-in" },
          { name: "Logout", path: "users#logout" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Admin(role)",
    child: [
      {
        subtitle: "Kitchen",
        subchild: [
          { name: "All kitchen", path: "kitchen#all-kitchen" },
          { name: "Kitchen foods", path: "kitchen#kitchen-food-id" },
          {
            name: "Kitchen category",
            path: "kitchen#kitchen-category",
          },
          {
            name: "Kitchen status ",
            path: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Kitchen(role)",
    child: [
      {
        subtitle: "Managers",
        subchild: [
          { name: "All Managers", path: "manager#all-manager" },
          { name: "Create Managers", path: "manager#create-manager" },
        ],
      },
      {
        subtitle: "Deliveryman ",
        subchild: [
          { name: "All  deliveryman", path: "deliveryman#all-deliveryman" },
          {
            name: "Create deliveryman",
            path: "deliveryman#create-deliveryman",
          },
          {
            name: "Update deliveryman",
            path: "deliveryman#update-deliveryman",
          },
        ],
      },
      {
        subtitle: "Kitchen",
        subchild: [
          { name: "All Kitchen", path: "kitchen#all-kitchen" },
          { name: "Create Kitchen", path: "kitchen#create-kitchen" },
          { name: "Update Kitchen", path: "kitchen#update-kitchen" },
          { name: "Delete Kitchen", path: "kitchen#delete-kitchen" },
        ],
      },
      {
        subtitle: "Category (category for the kitchen)",
        subchild: [
          { name: "All Category", path: "kitchen#kitchen-category" },
          { name: "Create Category", path: "kitchen#create-category" },
          { name: "Update Category", path: "kitchen#update-category" },
          { name: "Delete Category", path: "kitchen#delete-category" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Users(role)",
    child: [
      {
        subtitle: "Kitchen",
        subchild: [
          { name: "Category", path: "kitchen#kitchen-category" },
          { name: "Foods", path: "foods#all-foods" },
        ],
      },
      {
        subtitle: "Order",
        subchild: [
          { name: "Send order", path: "orders#all-orders" },
          { name: "Order[id]", path: "orders#orders-id" },
          { name: "Create order", path: "orders#all-orders" },
          { name: "Update order", path: "orders#update-orders" },
        ],
      },
    ],
  },
];
const DocumentationHome = () => {
  return (
    <DeliveryDocumentationLayout>
      <div className="doc-content w-100  home p-5">
        <h1 className="h1 text-primary  text-center mb-4">Documentation</h1>
        <div className="body p-5 border rounded">
          <div className="mb-5">
            <h5 className="h5  text-primary">Roles</h5>
            <ul>
              <li className="fw-semibold">Users</li>
              <li className="fw-semibold">Admins</li>
              <li className="fw-semibold">Kitchen</li>
              <li className="fw-semibold">Delivery</li>
              <li className="fw-semibold">Manager</li>
            </ul>
          </div>
          <hr />
          {Data.map((item) => (
            <div className="" key={item.id}>
              <h5 className="h5  text-primary">{item.title}</h5>
              <ol>
                {item.child.map((e, i) => (
                  <li className="mt-3 fs-" key={i}>
                    <h6 className=" text-primary">{e.subtitle}</h6>
                    <div className="list-child ">
                      {e.subchild.map((item, index) => (
                        <Link
                          key={index}
                          className=" list-link fw-semibold d-block text-decoration-none"
                          to={item.path}
                        >
                          - {item.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}

          <hr />
          <div className="mt-5">
            <h5 className="h5  text-primary">[Sourse code]</h5>
            <ul>
              <li className="fw-semibold">
                Django(REST framewrok){" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="ttps://www.django-rest-framework.org"
                >
                  [https://www.django-rest-framework.org]
                </a>
              </li>
              <li className="fw-semibold">
                JWT{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://django-rest-framework-simplejwt.readthedocs.io/en/latest"
                >
                  [https://django-rest-framework-simplejwt.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                Django-cors-heraders{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pypi.org/project/django-cors-headers/"
                >
                  [https://drf-yasg.readthedocs.io/en/stable/]
                </a>
              </li>
              <li className="fw-semibold">
                Django-social-oauth{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drf-spectacular.readthedocs.io/en/latest/"
                >
                  [https://drf-spectacular.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                Django-allauth{" "}
                <a target="_blank" rel="noreferrer" href="">
                  [pip install django-cors-headers]
                </a>
              </li>
              <li className="fw-semibold">
                django-pillow
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="[https://docs.allauth.org/en/latest/index.html"
                >
                  {" "}
                  [https://docs.allauth.org/en/latest/index.html]
                </a>
              </li>
              <li className="fw-semibold">
                django-postgresql
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://postgres-py.readthedocs.io/en/latest/"
                >
                  {" "}
                  [https://postgres-py.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                django-spectacual
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pypi.org/project/drf-spectacular/"
                >
                  {" "}
                  [https://pypi.org/project/drf-spectacular/]
                </a>
              </li>
              <li className="fw-semibold">
                django-drf-yasg
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drf-yasg.readthedocs.io/en/stable/"
                >
                  {" "}
                  [https://drf-yasg.readthedocs.io/en/stable/]
                </a>
              </li>
              <li className="fw-semibold">
                gunicorn
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.gunicorn.org/en/stable/install.html"
                >
                  {" "}
                  [https://docs.gunicorn.org/en/stable/install.html]
                </a>
              </li>
              <li className="fw-semibold">
                whitenoise
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://whitenoise.readthedocs.io/en/latest/"
                >
                  {" "}
                  [https://whitenoise.readthedocs.io/en/latest/]
                </a>
              </li>
              <li className="fw-semibold">
                facebook-sdk
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://facebook-sdk.readthedocs.io/en/latest/install.html"
                >
                  {" "}
                  [https://facebook-sdk.readthedocs.io/en/latest/install.html]
                </a>
              </li>
              <li className="fw-semibold">
                python-dotenv
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pypi.org/project/python-dotenv/"
                >
                  {" "}
                  [https://pypi.org/project/python-dotenv/]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DeliveryDocumentationLayout>
  );
};

export default DocumentationHome;
