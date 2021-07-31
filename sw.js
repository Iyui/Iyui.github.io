const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "GumYi"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bb08a946ec1104bf15cff39be99a6261","url":"./2021/07/28/hello-world - 副本/index.html"},{"revision":"8f521f180ae3bafc5996ac36983cc22d","url":"./2021/07/28/hello-world/index.html"},{"revision":"e7bc96088750aa89345dbbe1400ede34","url":"./about/index.html"},{"revision":"ed31939e08df8b0efe25fc704215eda4","url":"./archives/2021/07/index.html"},{"revision":"b0118e4321bfcbd346b6349a2865af54","url":"./archives/2021/index.html"},{"revision":"cc74160af3488d0275bcaa2e0e8e2c4a","url":"./archives/index.html"},{"revision":"ea51b315cc67254a951b4e8b3cef2901","url":"./categories/Butterfly/index.html"},{"revision":"cdc427e48777e60cc6b19a64b2169b73","url":"./categories/Hexo/index.html"},{"revision":"2d543d6fbce664e235033882a91ca1be","url":"./categories/index.html"},{"revision":"e87e5d9463eef83b4224fefc164921ee","url":"./css/index.css"},{"revision":"d703b31b6ef6c72e1c6a826e75d6675a","url":"./css/iyui.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3e050a253c01f920bbd5168c797dbc52","url":"./Gallery/index.html"},{"revision":"8400c7b5ae40f86055a33a1ee2e77cce","url":"./Gallery/二次元/index.html"},{"revision":"f9e75bb8e74403cfbf48466e8d80e968","url":"./index.html"},{"revision":"0bab70268f475ebac4747176eb0b9343","url":"./js/iyui.js"},{"revision":"01f62452fd05335569c6341d3ac0f52b","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"f630a3beeea26199671b55b8e745003e","url":"./manifest.json"},{"revision":"b66e5571ae7c646bdafb06032bffe9a3","url":"./service-worker.js"},{"revision":"2b63ac24e484a2e011c4695f242ac42b","url":"./tags/Gossip/index.html"},{"revision":"e14a0cdf55ae580ba711c0c3f228813c","url":"./tags/Hexo/index.html"},{"revision":"ad56d9ff27767a8aefd8f158260ade99","url":"./tags/index.html"},{"revision":"bd441d2f6fabda7e180357d63244be82","url":"./workbox-21410b98.js"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();