if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/01/pipline/index.html",revision:"e20f6df3dd1f3c0b5888bab6eb7d1f65"},{url:"2021/08/15/CUDA_RayTracer_1/index.html",revision:"7e51356469e167947891316c5735f185"},{url:"2021/09/15/Vulkan_1/index.html",revision:"9758a065a877a279b4c6b3c9e63679ce"},{url:"2021/09/17/DirectX11_1/index.html",revision:"e9a46d08009fce6ca0f69b975e9c01d1"},{url:"2021/09/18/DirectX11_2/index.html",revision:"4009f5c2b867c505737baadd983eb62a"},{url:"2021/09/19/DirectX11_3/index.html",revision:"df3edc8cdff8702a1a4a2d8937d1f152"},{url:"2021/09/21/cpp_1_pointer/index.html",revision:"3c4380eba1f816cb64f8e78bc8472822"},{url:"2021/09/21/cpp_2_reference/index.html",revision:"ba4a496cb458a89c20b768879ac094dd"},{url:"2021/09/21/cpp_3_overload/index.html",revision:"9402dc9fab9fd50d866f684315963e56"},{url:"2021/09/22/cpp_4_inheritance/index.html",revision:"08177603de747f750d3a0a221fcd2453"},{url:"2021/09/23/Camera/index.html",revision:"52bf560ebfeed785fb1695f46c1dd36c"},{url:"about/index.html",revision:"29a68fe9e960d582090677f83244166e"},{url:"archives/2021/08/index.html",revision:"946ea87b29b7a6c0237c40dcb3c92ac8"},{url:"archives/2021/09/index.html",revision:"c744fa400efac9596842e23395ec33b0"},{url:"archives/2021/index.html",revision:"623fc6cdfc4378024f9a7d3fc6da5d0f"},{url:"archives/2021/page/2/index.html",revision:"d35d49a58fd476a78a880b8a6c5bf690"},{url:"archives/index.html",revision:"1e0048364d18e1ff1aabc6bca5ad022b"},{url:"archives/page/2/index.html",revision:"fc36a689fc5501b869a3d94733022c5a"},{url:"categories/c/index.html",revision:"de7c6136c8f041b59b5bfad3cc812d62"},{url:"categories/index.html",revision:"f0adf466caff1b1b0796a604c5b87df3"},{url:"categories/RayTracing/index.html",revision:"8a39b3ba33c6b6f5477fa5cb89af8e63"},{url:"categories/Render/index.html",revision:"48cf76ddc97b4ba76bee718c085383b2"},{url:"css/index.css",revision:"d10c6c219a7438b71aa020b4d68f5419"},{url:"css/iyui.css",revision:"e276cbeef56e4f0bb8e97cce085adb33"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/OzCaramel_nano.woff2",revision:"802ce51b7fa465dda9c0ee60c69ff3ca"},{url:"Gallery/index.html",revision:"099c8fb5dce59d11cc11e5e0064a3812"},{url:"Gallery/二次元/1.jpg",revision:"eccbf80c2d75a9845555f31b8a82f77f"},{url:"Gallery/二次元/2.jpg",revision:"b9e77fc501bf60739d7b212f854588b8"},{url:"Gallery/二次元/3.jpg",revision:"c6003916f54b368eef774ef50a01f191"},{url:"Gallery/二次元/4.jpg",revision:"d4e8d0c6ebc42a134c072a353e022165"},{url:"Gallery/二次元/5.jpg",revision:"a61618b0ca4ce6cd5dfd2e47f0ad2454"},{url:"Gallery/二次元/6.jpg",revision:"708494f6ee60dcc2b3abb67d2c805a25"},{url:"Gallery/二次元/7.jpg",revision:"95cddad1a37099e0223b798ee9f24c0e"},{url:"Gallery/二次元/8.jpg",revision:"0b9fef6d496c35051637c6afc28e0ea1"},{url:"Gallery/二次元/index.html",revision:"bb0a8c623c6a2ec3cda1712e4dbd319f"},{url:"Gallery/总有一天/1.jpg",revision:"c47f5d36040e1242b1c0fd1994507bc6"},{url:"Gallery/总有一天/index.html",revision:"d26c4a771d69ef4f38f8570d8f24fcb3"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/CUDA/CUDA_Raytracer_1.png",revision:"cd3029ce9bac5b724cc56cf4dc4e4c11"},{url:"img/favicon.png",revision:"8759b871100e934db5232ef229644871"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/github.png",revision:"5a637202a4a945502019acebf0261602"},{url:"img/pwa/144.png",revision:"af93c756fba151a1238f64d54b34ffd9"},{url:"img/pwa/192.png",revision:"98df55d4870e71137c45142bf22e6f1d"},{url:"img/pwa/36.png",revision:"28773dd526be7f87461afc4bf03b2c4f"},{url:"img/pwa/48.png",revision:"3fee5a33902ac2138fc59c3262d222f5"},{url:"img/pwa/512.png",revision:"b43341375697e7f42bd33bc9dfe14e76"},{url:"img/pwa/72.png",revision:"c420a5d4797abe81087c36500da95c0a"},{url:"img/pwa/96.png",revision:"42ccc3bae6b1059ac75cf76c750b6657"},{url:"img/pwa/safari-pinned-tab.svg",revision:"ea38500151275d4bf1a1174b4a618209"},{url:"img/render.jpg",revision:"0963aa2a7093395bd3596a3d027bcf60"},{url:"img/touxiang.jpg",revision:"300365cb1fb087e5b783adb03455098c"},{url:"index.html",revision:"0c10410575e4bc582070beeafbd802ab"},{url:"js/iyui.js",revision:"0bab70268f475ebac4747176eb0b9343"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"page/2/index.html",revision:"ff393ea3bede9cce37eb0fd2045a6490"},{url:"tags/c/index.html",revision:"3476ff271db902f5572d42d787e592ef"},{url:"tags/CUDA/index.html",revision:"0fbbd29dbbcc34b62c9ff8a4d8428e7b"},{url:"tags/index.html",revision:"ee3b9c417f645f66cd1f4b7f871f406b"},{url:"tags/RayTracing/index.html",revision:"c668d40fd1d012865996d1f1e78d9054"},{url:"tags/Render/index.html",revision:"4c14b0a56b6e6d98cc003533aae05ed8"},{url:"tags/vulkan/index.html",revision:"5202500da1ac3fc8e952eca11ba43ddd"},{url:"tags/随笔/index.html",revision:"402875c0e932e9ada4a3b55b8db1a8d3"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));