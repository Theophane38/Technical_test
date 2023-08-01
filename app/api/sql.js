import {makeRequest, Methods} from "./MakeRequest";

export const getReviews = (id) => {
    const url = 'https://theophane-duval.fr/php/get_reviews.php?id=' + id
    return makeRequest(url, Methods.GET)
}

export const getAllArtisans = () => {
    const url = 'https://theophane-duval.fr/php/get_artisans.php'
    return makeRequest(url, Methods.GET)
}
