(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),o=n.n(r),i=(n(13),n(2)),s=(n(14),n(0)),u=function(e){var t=e.children;return Object(s.jsx)("div",{className:"Container",children:t})};n(16);function l(e){var t=e.onClose,n=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[]);var a=function(e){e.currentTarget!==e.target&&"Escape"!==e.code||t()};return Object(s.jsx)("div",{className:"Overlay",onClick:a,children:Object(s.jsx)("div",{className:"Modal",children:n})})}var j=n(7);n(17);var b=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(s.jsx)("header",{className:"Searchbar",children:Object(s.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(s.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(s.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(s.jsx)("input",{className:"SearchForm-input",type:"text",value:r,onChange:function(e){o(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},h=(n(18),function(e){var t=e.src,n=e.alt,c=e.dataSource;return Object(s.jsx)("img",{src:t,alt:n,"data-source":c,className:"ImageGalleryItem-image"})}),d=(n(19),function(e){var t=e.gallery,n=e.onClick;return Object(s.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,c=e.webformatURL,a=e.largeImageURL,r=e.tags;return Object(s.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(s.jsx)(h,{src:c,alt:r,dataSource:a,className:"ImageGalleryItem-image"})},t)}))})}),m=(n(20),function(e){var t=e.onClick;return Object(s.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}),f=n(5),O=n.n(f),g="20386842-9f390c2ddb67ac927c9e310bb",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;console.log("searchQuery in FetchGallery",e);var c="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(n,"&key=").concat(g);return fetch(c).then((function(e){return e.json()})).then((function(e){var n=e.hits;return t+=1,n})).catch((function(e){return console.log(e)}))};v.propTypes={searchQuery:O.a.string.isRequired,currentPage:O.a.number,pageSize:O.a.number};var p=v;var x=function(e){var t=e.openModal,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)([]),l=Object(i.a)(u,2),h=l[0],f=l[1],O=Object(c.useState)(1),g=Object(i.a)(O,2),v=g[0],x=g[1],y=Object(c.useState)(!1),S=Object(i.a)(y,2),k=S[0],w=S[1],C=Object(c.useState)(null),N=Object(i.a)(C,2),I=N[0],E=N[1];Object(c.useEffect)((function(){""!==r&&F()}),[r]);var F=function(){w(!0),p(r,v).then((function(e){f([].concat(Object(j.a)(h),Object(j.a)(e))),x(v+1)})).catch((function(e){return E(e)})).finally((function(){return w(!1)})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};return Object(s.jsxs)("div",{children:[I&&Object(s.jsx)("h1",{children:"Error!"}),Object(s.jsx)(b,{onSubmit:function(e){console.log(e),o(e),x(1),f([]),E(null)}}),Object(s.jsx)(d,{gallery:h,onClick:t}),k&&Object(s.jsx)("p",{children:"Loading..."}),h.length>0&&Object(s.jsx)(m,{onClick:F})]})};n(23);var y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],h=function(e){var t=e.target.dataset.source;a(t),d()},d=function(){b(!j)};return Object(s.jsxs)(u,{children:[Object(s.jsx)(x,{openModal:h}),j&&Object(s.jsx)(l,{onClick:h,onClose:d,children:Object(s.jsx)("img",{src:n,alt:""})})]})};n(24);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.df37c8b2.chunk.js.map