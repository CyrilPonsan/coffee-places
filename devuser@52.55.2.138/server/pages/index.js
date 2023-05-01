(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6786:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "banner_container__dnbLV",
	"title": "banner_title__PYWm4",
	"title1": "banner_title1__ZXVyc",
	"title2": "banner_title2__JqiuP",
	"subTitle": "banner_subTitle__0Nyze",
	"buttonWrapper": "banner_buttonWrapper__R1ZGV",
	"button": "banner_button__e1xYN"
};


/***/ }),

/***/ 4571:
/***/ ((module) => {

// Exports
module.exports = {
	"cardLink": "card_cardLink___xt_C",
	"container": "card_container__UHSnS",
	"cardHeaderWrapper": "card_cardHeaderWrapper__mj_rt",
	"cardHeader": "card_cardHeader__KpFux",
	"cardImageWrapper": "card_cardImageWrapper__fA2sL",
	"cardImage": "card_cardImage__x25Ih"
};


/***/ }),

/***/ 3579:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"heroImage": "Home_heroImage__K_jeP",
	"cardLayout": "Home_cardLayout__5gqjA",
	"card": "Home_card___LpL1",
	"heading2": "Home_heading2__AYxqI",
	"sectionWrapper": "Home_sectionWrapper___hbAJ"
};


/***/ }),

/***/ 3150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(3579);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/banner.module.css
var banner_module = __webpack_require__(6786);
var banner_module_default = /*#__PURE__*/__webpack_require__.n(banner_module);
;// CONCATENATED MODULE: ./components/banner.js



const Banner = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (banner_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                className: (banner_module_default()).title,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: (banner_module_default()).title1,
                        children: "Coffee"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: (banner_module_default()).title2,
                        children: "Connoisseur"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: (banner_module_default()).subTitle,
                children: "Discover your local coffee shops!"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (banner_module_default()).buttonWrapper,
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: (banner_module_default()).button,
                    onClick: props.handleOnClick,
                    children: props.buttonText
                })
            })
        ]
    });
};
/* harmony default export */ const banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/card.module.css
var card_module = __webpack_require__(4571);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
;// CONCATENATED MODULE: ./components/card.js






const Card = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        className: (card_module_default()).cardLink,
        href: props.href,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: external_classnames_default()("glass", (card_module_default()).container),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (card_module_default()).cardHeaderWrapper,
                    children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: (card_module_default()).cardHeader,
                        children: props.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (card_module_default()).cardImageWrapper,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (card_module_default()).cardImage,
                        src: props.imgUrl,
                        width: 260,
                        height: 160,
                        alt: "coffee-place"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const card = (Card);

// EXTERNAL MODULE: ./lib/coffee-stores.js
var coffee_stores = __webpack_require__(601);
;// CONCATENATED MODULE: ./pages/index.js







function Home(props) {
    const handleOnBannerBtnClick = ()=>{};
    console.log(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Coffee Connoisseur"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(banner, {
                        buttonText: "View stores nearby",
                        handleOnClick: handleOnBannerBtnClick
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Home_module_default()).heroImage,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/static/hero-image.png",
                            alt: "banner",
                            width: 700,
                            height: 400,
                            priority: true
                        })
                    }),
                    props.coffeeStores.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: (Home_module_default()).heading2,
                                children: "Pau stores"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (Home_module_default()).cardLayout,
                                children: props.coffeeStores.map((coffeeStore)=>{
                                    return /*#__PURE__*/ jsx_runtime.jsx(card, {
                                        className: (Home_module_default()).card,
                                        name: coffeeStore.name,
                                        imgUrl: coffeeStore.imgUrl || "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
                                        href: `/coffee-store/${coffeeStore.id}`
                                    }, coffeeStore.id);
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: (Home_module_default()).heading2,
                        children: "No stores found right now, try refreshing the page or come back later please..."
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const coffeeStores = await (0,coffee_stores/* fetchCoffeeStores */.M)();
    return {
        props: {
            coffeeStores
        }
    };
}


/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8515:
/***/ ((module) => {

"use strict";
module.exports = require("unsplash-js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,61,601], () => (__webpack_exec__(3150)));
module.exports = __webpack_exports__;

})();