export const BASE_URL = 'https://api.prounity.uz/hrms';

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
    };
};

export const registerUser = async (user) => {
    try {
        const response = await fetch(BASE_URL + '/auth/register', {
            method: 'POST',
            headers: getHeader(),
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify({ error: errorData, status: response.status }));
        }
        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error during registerUser:', error.message);
        throw error;
    }
}

export const loginUser = async (user) => {
    const response = await fetch(BASE_URL + '/auth/login', {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(user),
    });
    if (!response.ok) {
        // throw new Error('Invalid response structure. Token property missing.');
        const errorData = await response.json();
        throw new Error(JSON.stringify({ error: errorData, status: response.status }));
    }
    const data = await response.json();
    return data;
};


export const getJobs = async () => {
    const response = await fetch(BASE_URL + `/job/vacancies`, {
        method: 'GET',
        headers: getHeader(),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify({ error: errorData, status: response.status }));
    }
    const data = await response.json();
    return data;
}
