const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "GumYi"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4ecb9d4257570793a00083cb41cefaba","url":"./2021/07/28/hello-world - 副本/index.html"},{"revision":"8a8a7ccc13ed04451ea53054ce058d72","url":"./2021/07/28/hello-world/index.html"},{"revision":"d29915ed017d2c6482ca4b680feaf90a","url":"./about/index.html"},{"revision":"bc0c412e0f99e1e10929d57a74116c26","url":"./archives/2021/07/index.html"},{"revision":"47e2cc6249b4b3a017024f498e1afa0d","url":"./archives/2021/index.html"},{"revision":"fb312a1fdc1bfad8b50af0973e701cb8","url":"./archives/index.html"},{"revision":"84f1107cef5e52393f8fff8e90722088","url":"./categories/Butterfly/index.html"},{"revision":"d1ee1040e71744a55bded3c6ad99501e","url":"./categories/Hexo/index.html"},{"revision":"5cfad64589de13dde55b816c61ccf848","url":"./categories/index.html"},{"revision":"e87e5d9463eef83b4224fefc164921ee","url":"./css/index.css"},{"revision":"d703b31b6ef6c72e1c6a826e75d6675a","url":"./css/iyui.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0203ad03b7f38014715710b9ec6a4ad0","url":"./Gallery/index.html"},{"revision":"ea1029eba962c0fd0d6b13345680f675","url":"./Gallery/二次元/index.html"},{"revision":"cb10f868a660d3cb0b7f94f88bfb81f6","url":"./index.html"},{"revision":"0bab70268f475ebac4747176eb0b9343","url":"./js/iyui.js"},{"revision":"01f62452fd05335569c6341d3ac0f52b","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"f630a3beeea26199671b55b8e745003e","url":"./manifest.json"},{"revision":"0c89d63334a10363cde23b229e348ad8","url":"./service-worker.js"},{"revision":"c3194bd347ba0fb735f34b5ac1895cbe","url":"./tags/Gossip/index.html"},{"revision":"6ca24b9b529701f493640c769d156766","url":"./tags/Hexo/index.html"},{"revision":"ff696c684fe7fd335eb1895180bb218c","url":"./tags/index.html"},{"revision":"bd441d2f6fabda7e180357d63244be82","url":"./workbox-21410b98.js"}],{
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