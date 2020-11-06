webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vandebron/windmolen */ "./node_modules/@vandebron/windmolen/dist/index.js");
/* harmony import */ var _vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProjectCard */ "./components/ProjectCard.jsx");
var _jsxFileName = "/Users/royderks/code/tech-blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var posts = _ref.posts;
  var firstPost = posts[0].meta;
  var otherPosts = posts.slice(1);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "vandebron.tech"), __jsx("meta", {
    name: "Description",
    content: "Vandebron Engineering & Data. Leading the renewable energy transition with innovative solutions.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "vandebron.tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Vandebron Engineering & Data. Leading the renewable energy transition with innovative solutions.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://www.vandebron.tech/images/hero.jpg",
    key: "ogimage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      marginBottom: 60
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    alignItems: "center",
    style: {
      marginBottom: 60
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: 12,
    sm: 12,
    md: 6,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["H4"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Vandebron Engineering & Data"), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Leading the renewable energy transition with innovative solutions")), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: 12,
    sm: 12,
    md: 6,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["BoxShadow"], {
    style: {
      width: "100% "
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    aspectRatio: "2:1",
    src: "images/hero.jpg",
    alt: "Solar panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justifyContent: "between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: 12,
    sm: 12,
    md: 7,
    lg: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["H4"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Latest posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: firstPost.slug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["BlogCard"], {
    key: firstPost.slug,
    title: firstPost.title,
    image: firstPost.coverImage,
    imageProps: {
      aspectRatio: "2:1",
      alt: firstPost.title
    },
    description: firstPost.description,
    date: new Date(firstPost.date),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, otherPosts.map(function (post) {
    var _post$meta = post.meta,
        title = _post$meta.title,
        description = _post$meta.description,
        date = _post$meta.date,
        coverImage = _post$meta.coverImage,
        slug = _post$meta.slug;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: slug,
      href: slug,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      col: 12,
      sm: 12,
      md: 6,
      lg: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("div", {
      style: {
        cursor: "pointer"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["BlogCard"], {
      key: slug,
      image: coverImage,
      title: title,
      description: description,
      date: new Date(date),
      imageProps: {
        alt: title
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }))));
  }))), __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    colr: 12,
    sm: 12,
    md: 4,
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, __jsx(_vandebron_windmolen__WEBPACK_IMPORTED_MODULE_1__["H4"], {
    style: {
      marginBottom: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Links"), __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Vandebron on Github",
    href: "https://github.com/vandebron",
    icon: "github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Windmolen",
    href: "https://windmolen.netlify.app/",
    icon: "external-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Work with us",
    href: "https://werkenbij.vandebron.nl/",
    icon: "friend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.d0c31bfc6d4a3b1bff9e.hot-update.js.map