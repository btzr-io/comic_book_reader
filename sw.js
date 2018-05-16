"use strict";var precacheConfig=[["./989f12afbaf7b7f022fa.worker.js","132f8a4c4dcb31dbda2c3dd217350e1f"],["./assets/favicon.ico","0001e732fb9105d570a883238d8f3598"],["./assets/js/jszip.js","d3dd7d2c56576020392a992104483c0d"],["./assets/js/libunrar.js","88d984c9bc25e4c598a03c76585bfce3"],["./assets/js/libunrar.js.mem","18bc2f1bebeedb0706b01c44d47b7a27"],["./assets/js/libuntar.js","273176cc95c9ba21d6482ca2d49ee8a0"],["./assets/js/uncompress.js","68099c9a1db7572b1009e5d40c2c242a"],["./assets/logo.svg","70ed083f8998ca447d05046da46964e5"],["./bundle.49bd6.js","b6c049584975943b8cf85425cc8643eb"],["./favicon.ico","0001e732fb9105d570a883238d8f3598"],["./index.html","a2967a7a12d70a1502a1a443605048f8"],["./manifest.json","a53f32b18b4b4fc51ded1b15026c5008"],["./route-unsupported.chunk.da7ec.js","4f768845a42d1f243f2b1e452f0e27dc"],["./route-viewer.chunk.173ad.js","d3f0a0c7a4c0f27def39ca7bf86fd648"],["./route-welcome.chunk.51fb3.js","71b8212c2549d03e134ea17d3f04c295"],["./style.7be63.css","392afbdfe84ae376ada9484d75b32bde"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});