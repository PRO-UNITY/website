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
    confirm_password: ["error: Those passwords don't match"],
  },
  GetUserSucces: {
    token: {
      refresh: "string",
      access: "string",
    },
  },
  GetUserError: {
    errors: ["Incorrect email or password"],
  },
  ProfileUserSucces: {
    data: {
      count: "number",
      next: "https://api.prounity.uz/hrms/users?page=number'",
      previous: null,
      results: [
        {
          id: "number",
          first_name: "string",
          username: "string",
          last_name: "string",
          email: "string",
          role: "string",
          phone: "string",
          country: "string",
          city: "string",
          bio: "string",
          avatar: "file",
        },
      ],
    },
  },
  ProfileUserError: {
    error: {
      none_filed_error: ["This user is not available to the system"],
    },
  },
  UpdateUserSuccess: {
    id: "number",
    first_name: "string",
    last_name: "string",
    role: "string",
    phone: "string",
    country: "string",
    city: "string",
    bio: "string",
    avatar: "file",
  },
  UserDetailSuccess: {
    id: "number",
    first_name: "string",
    username: "string",
    last_name: "string",
    email: "string@gmail.com",
    role: "string",
    phone: "string",
    country: "string",
    city: "string",
    bio: "string",
    avatar: "file",
  },
  Hrlist: {
    id: "number",
    first_name: "string",
    username: "string",
    last_name: "string",
    email: "string",
    role: "string",
    phone: "string",
    country: "string",
    city: "string",
    bio: "string",
    avatar: "string",
  },
  DeleteUserSuccess: {
    message: "deleted successfully",
  },
};

// Jobs
export const Jobs = {
  applyJob: {
    id: "number",
    user: "number",
    jobs: "number",
    jobs_status: "number",
    resume: "number",
    created_at: "string",
  },
  applyJobErr: {
    jobs: ['Invalid pk "250" - object does not exist.'],
    resume: ['Invalid pk "71" - object does not exist.'],
  },
  JobAnalytics: {
    day: [
      {
        datedate: "2023-12-19",
        number: 1,
      },
    ],
    week: [
      {
        datedate: "2023-12-13",
        number: 1,
      },
      {
        datedate: "2023-12-18",
        number: 2,
      },
      {
        datedate: "2023-12-19",
        number: 1,
      },
    ],
    month: [
      {
        datedate: "2023-12-13",
        number: 1,
      },
      {
        datedate: "2023-12-18",
        number: 2,
      },
      {
        datedate: "2023-12-19",
        number: 1,
      },
    ],
  },
  JobFilter: [
    {
      id: 26,
      job_category: {
        id: 1,
        tag: "Quality Control Specialist",
      },
      applied_count: 0,
      viewer_count: 0,
      looked_count: 0,
      title: "string title",
      description: "string",
      salary: 100.0,
      job_type: {
        id: 1,
        type: "Fixed Price",
      },
      company: {
        id: 0,
        name: "string",
        logo: "string",
        content: "string",
        hrs: [
          {
            id: "number",
            first_name: "string",
            last_name: "string",
            email: "string",
            role: null,
            phone: "string",
            country: "string",
            city: "string",
            bio: "string",
            avatar: "string",
          },
        ],
        users: [
          {
            id: "number",
            first_name: "string",
            last_name: "string",
            email: "string",
            role: null,
            phone: null,
            country: null,
            city: null,
            bio: null,
            avatar: null,
          },
          {
            id: 154,
            first_name: "string",
            last_name: "string",
            email: "string",
            role: "string",
            phone: "string",
            country: "string",
            city: "string",
            bio: "string",
            avatar: "string",
          },
          {
            id: 156,
            first_name: "string",
            last_name: "string",
            email: "string",
            role: "string",
            phone: "string",
            country: "string",
            city: "string",
            bio: "string",
            avatar: null,
          },
        ],
        countries: {
          id: 2,
          name: "Spain",
          latitude: null,
          longitude: null,
        },
        created_at: "2023-12-13",
      },
      experience: true,
      work_hours: "100",
      created_at: "2023-12-19",
      updated_at: "2023-12-19",
    },
  ],
  JobCategory: [
    {
      id: "number",
      tag: "string",
    },
  ],
  JobCategoryId: {
    id: "number",
    tag: "string",
  },
  JobCountry: [
    {
      id: 1,
      name: "number",
      latitude: "string",
      longitude: "string",
    },
  ],
  JobDetail: {
    id: 0,
    user: {
      id: 0,
      first_name: "string",
      last_name: "string",
      email: "user@example.com",
      role: "string",
      phone: "string",
      country: "string",
      city: "string",
      bio: "string",
      avatar: "string",
    },
    jobs: {
      id: 0,
      title: "string",
      description: "string",
      salary: 0,
      experience: true,
      work_hours: "string",
      updated_at: "2023-12-19",
      created_at: "2023-12-19",
      is_activate: true,
      job_category: 0,
      job_type: 0,
      company: 0,
      is_seen: [0],
      is_look_user: [0],
    },
    resume: {
      id: 0,
      user: {
        id: 0,
        first_name: "string",
        last_name: "string",
        email: "user@example.com",
        role: "string",
        phone: "string",
        country: "string",
        city: "string",
        bio: "string",
        avatar: "string",
      },
      job_tag: {
        id: 0,
        tag: "string",
      },
      content: "string",
      location: "string",
      date_of_brith: "2023-12-19",
      phone: "string",
      level_of_education: {
        id: 0,
        level: "string",
      },
      place_of_study: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string",
      },
      position: "string",
      about: "string",
      created_at: "2023-12-19",
    },
    jobs_status: {
      id: 0,
      name: "string",
    },
    created_at: "2023-12-19",
  },
  JobFavourite: {
    id: "number",
    user: "number",
    jobs: "string",
    created_at: "string",
  },
  JobResume: {
    id: 0,
    user: {
      id: 0,
      first_name: "string",
      username: "string",
      last_name: "string",
      email: "user@example.com",
      role: "string",
      phone: "string",
      country: "string",
      city: "string",
      bio: "string",
      avatar: "string",
    },
    job_tag: {
      id: 0,
      tag: "string",
    },
    content: "string",
    location: "string",
    date_of_brith: "2023-12-19",
    phone: "string",
    level_of_education: {
      id: 0,
      level: "string",
    },
    place_of_study: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
    position: "string",
    about: "string",
    job_experiences: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
    created_at: "2023-12-19",
  },
  JobVacancies: {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        id: 21,
        job_category: {
          id: 1,
          tag: "Quality Control Specialist",
        },
        applied_count: 3,
        viewer_count: 1,
        looked_count: 0,
        title: "test",
        description: "test",
        salary: 100.0,
        job_type: {
          id: 1,
          type: "Fixed Price",
        },
        company: {
          id: 9,
          name: "Google",
          logo: "/media/logo/6c3b2845206c01e709798fc3a82f9aca.jpg",
          content: "string",
          hrs: [
            {
              id: 68,
              first_name: "test1",
              last_name: "test1",
              email: "dweb0987654321@gmail.com",
              role: null,
              phone: "997090576",
              country: "Uzb",
              city: "Bukhara",
              bio: "No Context",
              avatar: "/media/avatar/5a46b63332adedb7d795ba690b03e58c.png",
            },
          ],
          users: [
            {
              id: 70,
              first_name: "test1",
              last_name: "test1",
              email: "test-user1@gmail.com",
              role: null,
              phone: null,
              country: null,
              city: null,
              bio: null,
              avatar: null,
            },
          ],
          countries: {
            id: 2,
            name: "Spain",
            latitude: null,
            longitude: null,
          },
          created_at: "2023-12-13",
        },
        experience: true,
        work_hours: "5",
        created_at: "2023-12-13",
        updated_at: "2023-12-13",
      },
    ],
  },
  JobVacanciesDetail: {
    id: "number",
    job_category: {
      id: 1,
      tag: "Quality Control Specialist",
    },
    applied_count: 3,
    viewer_count: 1,
    looked_count: 0,
    title: "test",
    description: "test",
    salary: 100.0,
    job_type: {
      id: 1,
      type: "Fixed Price",
    },
    company: {
      id: 9,
      name: "Google",
      logo: "/media/logo/6c3b2845206c01e709798fc3a82f9aca.jpg",
      content: "string",
      hrs: [
        {
          id: 68,
          first_name: "test1",
          last_name: "test1",
          email: "dweb0987654321@gmail.com",
          role: null,
          phone: "997090576",
          country: "Uzb",
          city: "Bukhara",
          bio: "No Context",
          avatar: "/media/avatar/5a46b63332adedb7d795ba690b03e58c.png",
        },
      ],
      users: [
        {
          id: 70,
          first_name: "test1",
          last_name: "test1",
          email: "test-user1@gmail.com",
          role: null,
          phone: null,
          country: null,
          city: null,
          bio: null,
          avatar: null,
        },
        {
          id: 154,
          first_name: "first_name",
          last_name: "last_name",
          email: "email@gmail.com",
          role: "user",
          phone: "997090576",
          country: "UZB",
          city: "Bukhara",
          bio: "No bio",
          avatar: "/media/avatar/2ec46220cd88ec5682a67f17c2d69167.png",
        },
        {
          id: 156,
          first_name: "first_name-test",
          last_name: "last_name-test",
          email: "email-test@gmail.com",
          role: "user",
          phone: "997090576",
          country: "UZB",
          city: "Bukhara",
          bio: "No bio",
          avatar: null,
        },
      ],
      countries: {
        id: 2,
        name: "Spain",
        latitude: null,
        longitude: null,
      },
      created_at: "2023-12-13",
    },
    experience: true,
    work_hours: "5",
    created_at: "2023-12-13",
    updated_at: "2023-12-13",
  },
  JobTypes: [
    {
      id: "number",
      type: "string",
    },
  ],
  Delete: {
    message: "deleted successfully",
  },
};

// Resumes
export const Company = {
  CompanyList: {
    count: 10,
    next: null,
    previous: null,
    results: [
      {
        id: 18,
        name: "Windows Bukhara",
        logo: "/media/logo/5a46b63332adedb7d795ba690b03e58c_kZTA54R.png",
        content: "123",
        users: [
          {
            id: 56,
            first_name: "amirbek",
            last_name: "azimov",
            email: "amirbekazimov7@gmail.com",
            role: "user",
            phone: null,
            country: "uzb",
            city: "buk",
            bio: "iam bio",
            avatar: "/media/avatar/image_2023-12-05_23-12-50_v8HSW86.png",
          },
        ],
        countries: {
          id: 2,
          name: "Spain",
          latitude: null,
          longitude: null,
        },
        hrs: [
          {
            id: 158,
            first_name: "first_name-test-hr",
            last_name: "last_name-test-hr",
            email: "email-test-hr1@gmail.com",
            role: "hr",
            phone: null,
            country: null,
            city: null,
            bio: null,
            avatar: null,
          },
        ],
        sub_company: {
          id: 17,
          name: "Windows",
          logo: "/media/logo/5a46b63332adedb7d795ba690b03e58c_rHZwjQ4.png",
          content: "123",
          users: [],
          countries: 2,
          created_at: "2023-12-18",
          sub_company: null,
        },
        user_count: 1,
        hrs_count: 1,
        created_at: "2023-12-18",
      },
    ],
  },
  CompanyDetail: {
    id: 18,
    name: "Windows Bukhara",
    logo: "/media/logo/5a46b63332adedb7d795ba690b03e58c_kZTA54R.png",
    content: "123",
    users: [
      {
        id: 56,
        first_name: "amirbek",
        last_name: "azimov",
        email: "amirbekazimov7@gmail.com",
        role: "user",
        phone: null,
        country: "uzb",
        city: "buk",
        bio: "iam bio",
        avatar: "/media/avatar/image_2023-12-05_23-12-50_v8HSW86.png",
      },
    ],
    countries: {
      id: 2,
      name: "Spain",
      latitude: null,
      longitude: null,
    },
    hrs: [
      {
        id: 158,
        first_name: "first_name-test-hr",
        last_name: "last_name-test-hr",
        email: "email-test-hr1@gmail.com",
        role: "hr",
        phone: null,
        country: null,
        city: null,
        bio: null,
        avatar: null,
      },
    ],
    sub_company: {
      id: 17,
      name: "Windows",
      logo: "/media/logo/5a46b63332adedb7d795ba690b03e58c_rHZwjQ4.png",
      content: "123",
      users: [],
      countries: 2,
      created_at: "2023-12-18",
      sub_company: null,
    },
    user_count: 1,
    hrs_count: 1,
    created_at: "2023-12-18",
  },
  CompanyVacansy: [
    {
      id: 25,
      job_category: {
        id: 23,
        tag: "Front QA",
      },
      applied_count: 1,
      viewer_count: 0,
      looked_count: 0,
      title: "title",
      description: "description",
      salary: 1000.0,
      job_type: {
        id: 1,
        type: "Fixed Price",
      },
      company: {
        id: 18,
        name: "Windows Bukhara",
        logo: "/media/logo/5a46b63332adedb7d795ba690b03e58c_kZTA54R.png",
        content: "123",
        hrs: [
          {
            id: 158,
            first_name: "first_name-test-hr",
            last_name: "last_name-test-hr",
            email: "email-test-hr1@gmail.com",
            role: "hr",
            phone: null,
            country: null,
            city: null,
            bio: null,
            avatar: null,
          },
        ],
        users: [
          {
            id: 56,
            first_name: "amirbek",
            last_name: "azimov",
            email: "amirbekazimov7@gmail.com",
            role: "user",
            phone: null,
            country: "uzb",
            city: "buk",
            bio: "iam bio",
            avatar: "/media/avatar/image_2023-12-05_23-12-50_v8HSW86.png",
          },
        ],
        countries: {
          id: 2,
          name: "Spain",
          latitude: null,
          longitude: null,
        },
        created_at: "2023-12-18",
      },
      experience: true,
      work_hours: "2 days",
      created_at: "2023-12-18",
      updated_at: "2023-12-18",
    },
  ],
};
export const Resumes = {
  LevelEdu: [
    {
      id: "number",
      level: "string",
    },
  ],
  ResumeList: [
    {
      id: 0,
      user: {
        id: 0,
        first_name: "string",
        username: "string",
        last_name: "string",
        email: "user@example.com",
        role: "string",
        phone: "string",
        country: "string",
        city: "string",
        bio: "string",
        avatar: "string",
      },
      job_tag: {
        id: 0,
        tag: "string",
      },
      content: "string",
      location: "string",
      date_of_brith: "2023-12-19",
      phone: "string",
      level_of_education: {
        id: 0,
        level: "string",
      },
      place_of_study: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string",
      },
      position: "string",
      about: "string",
      job_experiences: {
        additionalProp1: "string",
        additionalProp2: "string",
        additionalProp3: "string",
      },
      created_at: "2023-12-19",
    },
  ],
  ResumeDetails: {
    id: 0,
    user: {
      id: 0,
      first_name: "string",
      username: "string",
      last_name: "string",
      email: "user@example.com",
      role: "string",
      phone: "string",
      country: "string",
      city: "string",
      bio: "string",
      avatar: "string",
    },
    job_tag: {
      id: 0,
      tag: "string",
    },
    content: "string",
    location: "string",
    date_of_brith: "2023-12-19",
    phone: "string",
    level_of_education: {
      id: 0,
      level: "string",
    },
    place_of_study: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
    position: "string",
    about: "string",
    job_experiences: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
    created_at: "2023-12-19",
  },
  UserResumes: [
    {
      id: 7,
      user: {
        id: 56,
        first_name: "amirbek",
        username: "amirbekazimov",
        last_name: "azimov",
        email: "amirbekazimov7@gmail.com",
        role: "user",
        phone: null,
        country: "uzb",
        city: "buk",
        bio: "iam bio",
        avatar: "/media/avatar/image_2023-12-05_23-12-50_v8HSW86.png",
      },
      job_tag: {
        id: 1,
        tag: "Quality Control Specialist",
      },
      content: "no-content",
      location: "UZB",
      date_of_brith: "2000-05-18",
      phone: "997090576",
      level_of_education: {
        id: 1,
        level: "Primary education.",
      },
      place_of_study: [
        {
          date: "2019-09-03",
          name: "BUKHSU",
        },
      ],
      position: "Backend-developer",
      about: "Your name is Ibrokhim",
      job_experiences: [
        {
          date: "2019-09-03",
          name: "Bukhara state university",
        },
      ],
      created_at: "2023-12-18",
    },
  ],
};
//hrs
export const Hrs = {
  data: {
    count: "number",
    next: null,
    previous: null,
    results: [
      {
        id: "number",
        first_name: "first_name-test-hr",
        username: "username-test-hr1",
        last_name: "last_name-test-hr",
        email: "email-test-hr1@gmail.com",
        role: "hr",
        phone: null,
        country: null,
        city: null,
        bio: null,
        avatar: null,
      },
    ],
  },
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
