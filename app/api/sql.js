import {makeRequest, Methods} from "./MakeRequest";

export const getReviews = (id) => {
    const url = 'http://localhost:8888/test_technique/get_reviews.php?id=' + id
    return makeRequest(url, Methods.GET)
}

export const getAllArtisans = () => {
    const url = 'http://localhost:8888/test_technique/get_artisans.php?id=1'
    return makeRequest(url, Methods.GET)
}
