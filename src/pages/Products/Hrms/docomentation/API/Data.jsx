export const User = {
  CreateUserSucces: {
    token: {
      refresh: "string",
      access: "string",
    },
  },
  CreateUserError: {
    email: ["This field must be unique."],
    username: ["This field must be unique."],
    password: [
      "This password is too short. It must contain at least 8 characters.",
    ],
  },
  GetUserSucces: {
    token: {
      refresh: "string",
      access: "string",
    },
  },
  GetUserError: {
    "errors": [
      "Incorrect email or password"
    ]
  },
  ProfileUserSucces: {
    "id": "number",
    "username": "string",
    "first_name": "string",
    "last_name": "string",
    "avatar": "string",
    "email": "string",
    "phone": "string",
    "user_id": "number",
    "groups": [
      {
        "id": "string",
        "name": "string"
      }
    ],
    "active_profile": false
  },
  ProfileUserError: {
    error: {
      none_filed_error: ["This user is not available to the system"],
    },
  },
  UpdateUserSuccess: {
    "id": "number",
    "first_name": "string",
    "last_name": "string",
    "role": "string",
    "phone": "string",
    "country": "string",
    "city": "string",
    "bio": "string",
    "avatar": "file"
  },
  UserDetailSuccess: {
    "id": "number",
    "first_name": "string",
    "username": "string",
    "last_name": "string",
    "email": "string@gmail.com",
    "role": "string",
    "phone": "string",
    "country": "string",
    "city": "string",
    "bio": "string",
    "avatar": "file"
  }
};

// Orders
export const orders = {
  AllOrderSucces: [
    {
      id: 0,
      klient: 0,
      delivery: 0,
      status: 0,
      foods: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string",
      },
      kitchen: 0,
      is_delivery: true,
      is_active: true,
      address: "string",
      latitude: "string",
      longitude: "string",
      total_price: 2147483647,
      create_at: "2023-12-15T22:14:45.147Z",
      updated_at: "2023-12-15T22:14:45.147Z",
    },
  ],
  OrderIDSucces: {
    id: 0,
    klient: 0,
    delivery: 0,
    status: 0,
    foods: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
    kitchen: 0,
    is_delivery: true,
    is_active: true,
    address: "string",
    latitude: "string",
    longitude: "string",
    total_price: 2147483647,
    create_at: "2023-12-15T22:14:45.147Z",
    updated_at: "2023-12-15T22:14:45.147Z",
  },
};
