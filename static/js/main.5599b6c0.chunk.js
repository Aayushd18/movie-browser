(this.webpackJsonpmoviebrowser=this.webpackJsonpmoviebrowser||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(20),i=c.n(n),r=(c(27),c(9)),o=(c(28),c(3)),l=c(5),d=c(0),b=function(e){var t=e.searchText,c=e.setSearchText,a=Object(o.f)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(l.b,{className:"navbar-brand",to:"/aayushd18.github.io/movie-browser/",children:"Movie Browser"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/aayushd18.github.io/movie-browser/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/aayushd18.github.io/movie-browser/about",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link disabled",to:"/",tabIndex:"-1","aria-disabled":"true",children:"Comming Soon"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2 search-bar bg-dark",type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:function(e){a.push("/aayushd18.github.io/movie-browser/search"),c(e.target.value)}}),Object(d.jsx)(l.b,{to:"/aayushd18.github.io/movie-browser/search",className:"btn btn-outline-info",children:"Search"})]})]})]})})},j=function(e){var t=e.text,c=e.backdrop;return Object(d.jsxs)("header",{className:"bg-dark text-white p-5 hero-container",children:[Object(d.jsx)("h1",{className:"hero-text",children:t}),c&&Object(d.jsx)("div",{className:"hero-backdrop",style:{backgroundImage:"url(".concat(c,")")}})]})},h=function(e){var t=e.movie,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/aayushd18.github.io/movie-browser/movies/".concat(t.id);return null===t.poster_path&&(c="/movie-browser/commingsoon.webp"),Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-4 my-4 cards  shadow-lg",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c,className:"card-img-top card-img",alt:t.original_title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.original_title}),Object(d.jsx)(l.b,{to:a,className:"btn btn-primary",children:"Movie Details"})]})]})})},m=function(e){var t=e.movie,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/aayushd18.github.io/movie-browser/movies/".concat(t.id);return null===t.poster_path&&(c="/movie-browser/commingsoon.webp"),Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-4 my-4 cards shadow-lg",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c,className:"card-img-top card-img",alt:t.original_title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.original_title}),Object(d.jsx)(l.b,{to:a,className:"btn btn-primary",children:"Movie Details"})]})]})})},u=function(e){var t=e.genres;return Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-4 my-4 cards shadow-lg genre",children:Object(d.jsx)("div",{className:"card genre",children:Object(d.jsx)("div",{className:"card-body d-flex justify-content-center genre",children:Object(d.jsx)("h5",{className:"card-title",children:t.name})})})})},x=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),i=Object(r.a)(n,2),o=i[0],l=i[1],b=Object(a.useState)([]),x=Object(r.a)(b,2),v=x[0],O=x[1];Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/all/day?api_key=9810fdab8a6872c19c905c5c33b3e351").then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[c]),Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate").then((function(e){return e.json()})).then((function(e){O(e.results)}))}),[v]),Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US").then((function(e){return e.json()})).then((function(e){l(e.genres)}))}),[o]);var g=c.map((function(e,t){return Object(d.jsx)(h,{movie:e},t)})),p=v.map((function(e,t){return Object(d.jsx)(m,{movie:e},t)})),f=o.map((function(e,t){return Object(d.jsx)(u,{genres:e},t)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{text:"Movie Browser: A Place for Movie Lovers",backdrop:"/movie-browser/inline_image.webp"}),Object(d.jsxs)("div",{className:"trending-container",children:[Object(d.jsx)("h1",{className:"trend-head",children:"Trending"}),g&&Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"trend-sec",children:g})})})]}),Object(d.jsxs)("div",{className:"trending-container",children:[Object(d.jsx)("h1",{className:"trend-head",children:"Discover"}),p&&Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"trend-sec",children:p})})})]}),Object(d.jsxs)("div",{className:"trending-container",children:[Object(d.jsx)("h1",{className:"trend-head",children:"Genres"}),f&&Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"trend-sec",children:f})})})]})]})},v=c(17),O=c(11),g=c(22),p=c(18);O.b.add(g.a,p.a,p.b);var f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{text:"Why Choose Us",backdrop:"/movie-browser/index.jpg"}),Object(d.jsxs)("div",{className:"trending-container about-sec",children:[Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-lg-8 offset-lg-2 my-5",children:Object(d.jsxs)("p",{className:"lead text-white",children:["Movie Browser is a website biult for learning React. This is a little extension to project given by Kalob Taulien under a Udemy Course. Kalob teaches very good.",Object(d.jsx)("br",{})," Will add new featues in future....."]})})})}),Object(d.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Built by: Aayush Deshmukh"}),Object(d.jsx)("p",{className:"text-info",children:"Under Kalob Taulien (Udemy Instructor)"})]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("div",{className:"icon d-flex justify-content-center align-items-center",children:Object(d.jsx)(v.a,{className:"i",icon:["fab","github"]})}),Object(d.jsxs)("h5",{children:["Github: ",Object(d.jsx)("a",{href:"https://github.com/Aayushd18?tab=repositories",children:"Aayushd18"})]})]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("div",{className:"icon d-flex justify-content-center align-items-center",children:Object(d.jsx)(v.a,{className:"i",icon:["fab","linkedin"]})}),Object(d.jsxs)("h5",{children:["LinkedIn: ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/aayush-deshmukh-b88b6819a/",children:"Aayush Deshmukh"})]})]})]}),Object(d.jsx)("div",{className:"mx-3 end-label",children:Object(d.jsx)("h5",{children:"@2021. All Rights Reserved"})})]})]})},N=function(e){var t=e.movie,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/aayushd18.github.io/movie-browser/movies/".concat(t.id);return null===t.poster_path&&(c="/movie-browser/commingsoon.webp"),Object(d.jsx)("div",{className:"col-lg-3 col-md-3 col-2 my-4 shadow-lg",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c,className:"card-img-top",alt:t.original_title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t.original_title}),Object(d.jsx)(l.b,{to:a,className:"btn btn-primary",children:"Movie Details"})]})]})})},w=function(e){var t=e.keyword,c=e.searchResults,a="You are searching for ".concat(t);if(null===c)return Object(d.jsx)("h1",{children:"No Results Found"});var s=c.map((function(e,t){return Object(d.jsx)(N,{movie:e},t)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{text:a}),Object(d.jsx)("div",{className:"trending-container",children:s&&Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:s})})})]})},y=function(){var e=Object(o.g)().id,t=Object(a.useState)({}),c=Object(r.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(!0),l=Object(r.a)(i,2),b=l[0],h=l[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US")).then((function(e){return e.json()})).then((function(e){n(e),h(!1)}))}),[e]),function(){if(b)return Object(d.jsx)(j,{text:"Loading..."});if(s){var e="https://image.tmdb.org/t/p/w500".concat(s.poster_path),t="https://image.tmdb.org/t/p/original".concat(s.backdrop_path);return null===s.poster_path&&(e="/movie-browser/commingsoon.webp"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{text:s.original_title,backdrop:t}),Object(d.jsx)("div",{className:"trending-container about-sec",children:Object(d.jsx)("div",{className:"container my-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("img",{src:e,alt:"...",className:"img-fluid shadow rounded"})}),Object(d.jsxs)("div",{className:"col-md-9 text-white",children:[Object(d.jsx)("h2",{children:s.original_title}),Object(d.jsx)("p",{className:"lead text-white",children:s.overview})]})]})})})]})}}()},_=function(){return Object(d.jsxs)("div",{className:"error-page",children:[Object(d.jsx)("h1",{className:"text-center",children:"Error 404 Not Found"}),Object(d.jsx)("p",{className:"text-center",children:"This isnt a registered page"}),Object(d.jsx)(l.b,{to:"/aayushd18.github.io/movie-browser/",children:Object(d.jsx)("button",{className:"btn btn-danger mx-5",children:"Home Page"})})]})};var k=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){l&&fetch("https://api.themoviedb.org/3/search/movie?api_key=9810fdab8a6872c19c905c5c33b3e351&language=en-US&query=".concat(l,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[l]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{searchText:l,setSearchText:j}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/aayushd18.github.io/movie-browser/",exact:!0,children:Object(d.jsx)(x,{})}),Object(d.jsx)(o.a,{path:"/aayushd18.github.io/movie-browser/about",component:f}),Object(d.jsx)(o.a,{path:"/aayushd18.github.io/movie-browser/search",children:Object(d.jsx)(w,{keyword:l,searchResults:c})}),Object(d.jsx)(o.a,{path:"/aayushd18.github.io/movie-browser/movies/:id",component:y}),Object(d.jsx)(o.a,{component:_})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(k,{})})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.5599b6c0.chunk.js.map