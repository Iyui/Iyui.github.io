const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Iyui"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e9d58ec549d0e2bab5753be7bc93d4d7","url":"./2021/07/28/hello-world - 副本/index.html"},{"revision":"0560d988d41c86cd46612d166b7ee71e","url":"./2021/07/28/hello-world/index.html"},{"revision":"239725ea895f5eb82c6608f32e5bd570","url":"./about/index.html"},{"revision":"3738352493dec54c38bd7223d3a4d152","url":"./archives/2021/07/index.html"},{"revision":"ff3236fe55248fded41c160a8bb9ae9e","url":"./archives/2021/index.html"},{"revision":"b26b55a9ac7a2d35cfe7b708a55dab21","url":"./archives/index.html"},{"revision":"babc7c41c7a3fb948ad949e6434f275a","url":"./categories/Butterfly/index.html"},{"revision":"24ed0bd662b870f8999923a567c1ad62","url":"./categories/Hexo/index.html"},{"revision":"dbeb68db0932ea6fd9a3dc910b1a909d","url":"./categories/index.html"},{"revision":"e87e5d9463eef83b4224fefc164921ee","url":"./css/index.css"},{"revision":"37057f54c5dec28f415c202552e8fb2e","url":"./css/iyui.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"17dfe3bdc61e505a2f87482bfc733915","url":"./Gallery/index.html"},{"revision":"78fd9a9924f1c857a91beaf8e7350d57","url":"./Gallery/二次元/index.html"},{"revision":"e064cb77240ed6bf3ec5ff71c2d0bbd8","url":"./index.html"},{"revision":"0bab70268f475ebac4747176eb0b9343","url":"./js/iyui.js"},{"revision":"01f62452fd05335569c6341d3ac0f52b","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"b9b2b455a3c4a36b4527e5d913a5fcdf","url":"./manifest.json"},{"revision":"995299f24d290d8425fe60622206f63c","url":"./tags/Gossip/index.html"},{"revision":"938f51b0646274aa1d4705fdd7bfb11c","url":"./tags/Hexo/index.html"},{"revision":"3f7eaac1f95dd7217d0fc865efb46644","url":"./tags/index.html"}],{
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