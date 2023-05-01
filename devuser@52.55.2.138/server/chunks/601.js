"use strict";
exports.id = 601;
exports.ids = [601];
exports.modules = {

/***/ 601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ fetchCoffeeStores)
/* harmony export */ });
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8515);
/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);
//initialize unsplash

// on your node server
const unsplashApi = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    accessKey: "VLnrk0k0QKAn3zDmT0CfxMKddlFh1rKBfguNQWEMRB8"
});
const getListOfCoffeeStorePhotos = async ()=>{
    const photos = await unsplashApi.search.getPhotos({
        query: "coffee shop",
        perPage: 30
    });
    const unsplashResults = photos.response?.results || [];
    return unsplashResults.map((result)=>result.urls["small"]);
};
const getUrlForCoffeeStores = (latLong, query, limit)=>{
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};
const fetchCoffeeStores = async (latLong = "43.653833032607096%2C-79.37896808855945", limit = 6)=>{
    const photos = await getListOfCoffeeStorePhotos();
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: "fsq3yyTfRSjh5/41+A9e+EVoZsZXZxKVKSdhNpBLGfEkBHc="
        }
    };
    const response = await fetch(getUrlForCoffeeStores(latLong, "coffee", limit), options);
    const data = await response.json();
    return data.results.map((result, idx)=>{
        const neighborhood = result.location.neighborhood;
        return {
            id: result.fsq_id,
            address: result.location.address,
            name: result.name,
            neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
            imgUrl: photos.length > 0 ? photos[idx] : null
        };
    });
};


/***/ })

};
;