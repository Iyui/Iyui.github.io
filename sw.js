const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Iyui"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e9d58ec549d0e2bab5753be7bc93d4d7","url":"./2021/07/28/hello-world - 副本/index.html"},{"revision":"0560d988d41c86cd46612d166b7ee71e","url":"./2021/07/28/hello-world/index.html"},{"revision":"239725ea895f5eb82c6608f32e5bd570","url":"./about/index.html"},{"revision":"f1e9b5a644233b82202cccfa41f0bf81","url":"./archives/2021/07/index.html"},{"revision":"e6358f4632caca308f75432cf10cac48","url":"./archives/2021/index.html"},{"revision":"3679270dc852c8f7d39336490c499583","url":"./archives/index.html"},{"revision":"25fb52102809faa12a7f46a3ebce6c51","url":"./categories/Butterfly/index.html"},{"revision":"46d8151698534e6b771f6de356e425eb","url":"./categories/Hexo/index.html"},{"revision":"dbeb68db0932ea6fd9a3dc910b1a909d","url":"./categories/index.html"},{"revision":"e87e5d9463eef83b4224fefc164921ee","url":"./css/index.css"},{"revision":"37057f54c5dec28f415c202552e8fb2e","url":"./css/iyui.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"17dfe3bdc61e505a2f87482bfc733915","url":"./Gallery/index.html"},{"revision":"78fd9a9924f1c857a91beaf8e7350d57","url":"./Gallery/二次元/index.html"},{"revision":"675279c47adb8f52fa7efc48c735a0fd","url":"./index.html"},{"revision":"0bab70268f475ebac4747176eb0b9343","url":"./js/iyui.js"},{"revision":"01f62452fd05335569c6341d3ac0f52b","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"8f3117365dd3fcb3b4516c7964bef886","url":"./service-worker.js"},{"revision":"4a1a61a67dd21a62c6c5d9f30f1a8e6c","url":"./tags/Gossip/index.html"},{"revision":"c46d97f81dbb7427b5aac5328c30dd4c","url":"./tags/Hexo/index.html"},{"revision":"508f03dd012bd8e9f56f3ce78d8c3e66","url":"./tags/index.html"},{"revision":"bd441d2f6fabda7e180357d63244be82","url":"./workbox-21410b98.js"}],{
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