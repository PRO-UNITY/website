export const BASE_URL = 'https://api.prounity.uz/hrms';

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
    };
}

// const getHeaderWithToken = () => {
//     return {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//     };
// }

// export const editUserProfile = async (user) => {
//     try {
//         const response = await fetch(BASE_URL + '/user', {
//             method: 'PUT',
//             headers: getHeaderWithToken(),
//             body: user
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(JSON.stringify({ error: errorData, status: response.status }));
//         }
//         const data = await response.json();
//         return { data };
//     } catch (error) {
//         console.error('Error during editUserProfile:', error.message);
//         throw error;
//     }
// }



const getHeaderWithToken = () => {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    };
}

export const editUserProfile = async (user) => {
    try {
        const formData = new FormData();
        Object.keys(user).forEach((key) => {
            formData.append(key, user[key]);
        });
        const response = await fetch(BASE_URL + '/user', {
            method: 'PUT',
            headers: getHeaderWithToken(),
            body: formData,
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify({ error: errorData, status: response.status }));
        }
        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error during editUserProfile:', error.message);
        throw error;
    }
}
