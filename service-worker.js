if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-21410b98"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/01/pipline/index.html",revision:"44f84d0f69e8ce92841f6e78d38979f3"},{url:"2021/08/15/CUDA_RayTracer_1/index.html",revision:"e40a3f155512b2dc0f041f785fa9e088"},{url:"2021/09/15/Vulkan_1/index.html",revision:"5a10ebf5bd90d11ca9b498b4ec39decc"},{url:"2021/09/17/DirectX11_1/index.html",revision:"97f26fab23c912ef781956b07538f523"},{url:"2021/09/18/DirectX11_2/index.html",revision:"d17ac90d34b6d1461972a2b5effd28be"},{url:"2021/09/19/DirectX11_3/index.html",revision:"d2173b61daf3a97b35aab04dde917faa"},{url:"2021/09/21/cpp_1_pointer/index.html",revision:"7bcd3797b1e601f292e6130af3ef62ed"},{url:"2021/09/21/cpp_2_reference/index.html",revision:"91b9d0dc6a3d2dae94707c55afc4c3ff"},{url:"2021/09/21/cpp_3_overload/index.html",revision:"d5c3d2195af0c3c2edac8f07ec5ffd63"},{url:"2021/09/22/cpp_4_inheritance/index.html",revision:"918aa8b63b918ce2c2c2fd79b46412b5"},{url:"2021/09/23/Camera/index.html",revision:"0e8637c832ffb390de45279e6bfe3f50"},{url:"about/index.html",revision:"c7205b9a0e097f18e85a8076b0f5ee53"},{url:"archives/2021/08/index.html",revision:"ceff0a69b870e9bde6791d1c054caa84"},{url:"archives/2021/09/index.html",revision:"ed0aa96517feee152ff22d5e9f2214a5"},{url:"archives/2021/index.html",revision:"edf436c9fbe550bf8235bb14ae1b8399"},{url:"archives/2021/page/2/index.html",revision:"1f12a7c43d0b0258520ada56edcf446a"},{url:"archives/index.html",revision:"07a8f1d9bffe7ea3bc2170e38d74d6a3"},{url:"archives/page/2/index.html",revision:"f8bd9e7ddd39a50c7762740a1252894a"},{url:"categories/c/index.html",revision:"d2b410e427b578ebb70c93529a20f893"},{url:"categories/index.html",revision:"f0b6f9a658af4b81373088273e45b6cb"},{url:"categories/RayTracing/index.html",revision:"2dc915f677e1bdad7d19e473c4acdfa0"},{url:"categories/Render/index.html",revision:"fbfc05b62b5c5f99eeaadfb4cb1f32f4"},{url:"css/index.css",revision:"846a24e8730534239075e70913cf6e2d"},{url:"css/iyui.css",revision:"230516f6c5c21633919bad24a3aa837e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/OzCaramel_nano.woff2",revision:"802ce51b7fa465dda9c0ee60c69ff3ca"},{url:"Gallery/index.html",revision:"dbe08996c31aee1ae935900e9d808373"},{url:"Gallery/二次元/1.jpg",revision:"eccbf80c2d75a9845555f31b8a82f77f"},{url:"Gallery/二次元/2.jpg",revision:"b9e77fc501bf60739d7b212f854588b8"},{url:"Gallery/二次元/3.jpg",revision:"c6003916f54b368eef774ef50a01f191"},{url:"Gallery/二次元/4.jpg",revision:"d4e8d0c6ebc42a134c072a353e022165"},{url:"Gallery/二次元/5.jpg",revision:"a61618b0ca4ce6cd5dfd2e47f0ad2454"},{url:"Gallery/二次元/6.jpg",revision:"708494f6ee60dcc2b3abb67d2c805a25"},{url:"Gallery/二次元/7.jpg",revision:"95cddad1a37099e0223b798ee9f24c0e"},{url:"Gallery/二次元/8.jpg",revision:"0b9fef6d496c35051637c6afc28e0ea1"},{url:"Gallery/二次元/index.html",revision:"60096da21114749a4103cc0fae6bbd71"},{url:"Gallery/总有一天/1.jpg",revision:"c47f5d36040e1242b1c0fd1994507bc6"},{url:"Gallery/总有一天/index.html",revision:"b952c673c504c85bb72879c63212b6de"},{url:"img/404.jpg",revision:"326bcbae2e21007fa73b906975a1c3d0"},{url:"img/algolia.svg",revision:"f36be37cfbfc4be962c64f77a88f4b9c"},{url:"img/CUDA/CUDA_Raytracer_1.png",revision:"0a598dbf6091e73d442e06d139641ba4"},{url:"img/favicon.png",revision:"ec7c69d810e6926a0750d0d80d3009a9"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/github.png",revision:"5a637202a4a945502019acebf0261602"},{url:"img/pwa/144.png",revision:"fa9331c60de24d4c1b84fcb85b2e2947"},{url:"img/pwa/192.png",revision:"ad65240926c1a43a726a7c3cedbd383e"},{url:"img/pwa/36.png",revision:"253c3f2e8d696c8603ea963f4539611f"},{url:"img/pwa/48.png",revision:"7b37ee303fd0937b73f5a5ccf40ad579"},{url:"img/pwa/512.png",revision:"1603698549516cc077bc964ed2fa8bc6"},{url:"img/pwa/72.png",revision:"c0e32ef15fd3821e0b96371022d48413"},{url:"img/pwa/96.png",revision:"c89a62892a8a085d4137e1685b1888b2"},{url:"img/pwa/safari-pinned-tab.svg",revision:"511bd8001bf538264fdd641c9660b478"},{url:"img/render.jpg",revision:"8568735c798aadbf9e45fcfa3323a0b9"},{url:"img/touxiang.jpg",revision:"0852eb028cb7edf11e3fda980b91fefa"},{url:"index.html",revision:"223208af1b9e6607ca7a939c3ad4d9ec"},{url:"js/iyui.js",revision:"0bab70268f475ebac4747176eb0b9343"},{url:"js/main.js",revision:"17c8ea64d45ca629271b498727ce49a1"},{url:"js/search/algolia.js",revision:"d4ca891c702c547a356f6edbbfdc1e0f"},{url:"js/search/local-search.js",revision:"de25bf0fd67bcc6c161201f99c8f7f29"},{url:"js/tw_cn.js",revision:"4b84207e490168db8faf5b25d98027e9"},{url:"js/utils.js",revision:"1f561798a01f1115abc793c5666fda82"},{url:"page/2/index.html",revision:"c74489be2e9d8ba6dd74694dc958c3fa"},{url:"tags/c/index.html",revision:"2213705b8c7179d39e63be12766e22d3"},{url:"tags/CUDA/index.html",revision:"69c7dfd0eacd9f3aa0e9289599d50146"},{url:"tags/index.html",revision:"64af0d282aa9df73f1cb34e3fd03d559"},{url:"tags/RayTracing/index.html",revision:"f3a06eddaccdb7b0a10f56b63a07aae5"},{url:"tags/Render/index.html",revision:"881eb024bbef44187100036d1e4bf4bb"},{url:"tags/vulkan/index.html",revision:"872da551afd3013a200dd51414abcb7b"},{url:"tags/随笔/index.html",revision:"98b12a9570879570e80ac670dc3eb35a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
