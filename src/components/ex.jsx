export const exChange = async() => {
const response = await fetch('https://api.exchangerate.host/latest?base=USD')

return response.json();
};


export const searchEx = (rates, searchTerm) => {
    if(searchTerm.trim().length === 0) return;

    const results = {};

    for (const [key, value] of Object.entries(rates)) {
     
        if (key.toUpperCase().includes(searchTerm.toUpperCase())) {
            results[key] = value;
        }

    }

    return results;
};

