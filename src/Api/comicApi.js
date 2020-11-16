import axios from 'axios';


export async function getComic({ random }) {
    const url = `https://xkcd.com/${random}/info.0.json`;

    const params = {
        headers: {
            "Content-Type": "application/json",

        }
    };
    try {
        const resp = await axios.get(url, params);

        return resp;

    } catch (error) {

        return error.response;
    }

}