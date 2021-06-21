import { DATA_URL } from '../constant';

// fetch product data in JSON format
const fetchOnlinePriceWatch = async () => {
    const res = await fetch(DATA_URL);
    const data = await res.json();
    return data;
}

export default fetchOnlinePriceWatch;