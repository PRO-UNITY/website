export const BASE_URL = 'https://api.prounity.uz/food-delivery'

const getHeader = () => {
    return {
        'Content-Type': 'application/json',
    };
};

export const postData = async (item,url) => {
    const response = await fetch(BASE_URL + url, {
        method: 'POST',
        headers: getHeader(),
        body: JSON.stringify(item)
    })
    const data = await response.json();
    return data;
};


export const getRoleUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(
        `${BASE_URL}/user`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
    );
    const data = await response.json();
    const role = data?.groups && data?.groups[0]?.name;
    localStorage.setItem('role', role);
    return role;
}

