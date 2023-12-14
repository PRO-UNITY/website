// export const postVacancy = async (vacancy) => {
//     const response = await fetch(BASE_URL + '/job/job-vacancies', {
//         method: 'POST',
//         headers: getHeader(),
//         body: JSON.stringify(vacancy)
//     });
//     const data = await response.json();
//     return data;
// };

export const BASE_URL = 'https://api.prounity.uz/hrms';

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
    };
};



export const registerUser = async (user) => {
    const response = await fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
}

export const loginUser = async (user) => {
    const response = await fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(user),
    });

    if (response && typeof response === 'object') {
        console.log('response : ' + response);
    }

    if (!response.ok) {
        // console.log('response ok : ' + response.ok);
        throw new Error('Invalid response structure. Token property missing.');
    }
    const data = await response.json();
    return data;
};




