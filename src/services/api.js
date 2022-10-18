import axios from "axios"

const url = 'https://kitsu.io/api/edge/anime'

/**
 * Translate error code to message
 * @param error: error code (ex: 404)
 */
const handleError = (error) => {
    let errorResponse = null;
    if (error.code === "ECONNABORTED") {
        errorResponse = {
            status: 408,
            error: [{ msg: error.message }],
            message: "Request Time Out",
        };
    } else if (error.response) {
        errorResponse = error.response.data;
    } else {
        errorResponse = {
            status: 501,
            error: [{ msg: "Server Implementation Error" }],
        };
    }
    return errorResponse;
};

export const getAllAnimeList = async () => {
    var errorResponse = null;
    var tokenData;
    await axios.get(url)
        .then(function (response) {
            tokenData = response.data;
        })
        .catch(function (error) {
            errorResponse = handleError(error);
        });
    return [tokenData, errorResponse];
}

export const getDetailAnime = async (id) => {
    var errorResponse = null;
    var tokenData;
    await axios.get(`${url}/${id}`)
        .then(function (response) {
            tokenData = response.data;
        })
        .catch(function (error) {
            errorResponse = handleError(error);
        });
    return [tokenData, errorResponse];
}