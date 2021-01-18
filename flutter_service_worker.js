'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e1780201aef8b5225fc9a537d93b41b1",
".git/config": "9a6d1e92e12edbca4c961f020cd25ead",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0dc22a86a258086761e50f6c0c73e56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2dfffcb8e94e6ff0bbb1af065189d1e",
".git/logs/refs/heads/master": "a2dfffcb8e94e6ff0bbb1af065189d1e",
".git/logs/refs/remotes/origin/master": "830743ed1f9e55b4c17cff2c57f41e7d",
".git/objects/01/c9eba4cf65c37f77d15a0d86768556dcdfdd7b": "757aae47dd9a353a4936c78a66928bac",
".git/objects/02/981dcb3937214a8232ef71324dffb800b855d7": "edcf930aaed7429b04504601cd0f797f",
".git/objects/07/c0af1ebeea2fc64a0bfc39da533fbb83b56900": "28e3cd1dda0302cdf0501375d3546672",
".git/objects/17/12c941c4fbd68c296d8aef812ace1b31931cb7": "bfb3cb3f751a69d15158c1dae7bee962",
".git/objects/17/81019d0f1f68845ba82b62e8805f0f0a2ba9fd": "7307bfdc2c304d98879fe34bf60a716a",
".git/objects/1a/dedd3e399c4a461017209d63261ac8b52bdedc": "cc86a3f553e1a28477d2649abe775465",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/200d5d291b05d8b4ea9819f1150b18c592d20d": "fbe00dc6cc29c5572ba50eeedcd97c94",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/40/9082a3533bb41f266ebbfa1f9c50c45093fb16": "22da6ce83a0ec3fa24630c9b41213212",
".git/objects/46/279a105a3bf24bc4254267e3da1268b2654ca5": "713da176956dcd04cf92720235fe4a3c",
".git/objects/47/83c5cdb3ee76c7375d7214688594b5c7dd95f4": "aa9d931f2e643b541f3fe9ba39435ac7",
".git/objects/4d/c252478a4fafc0855b45b99088400af5cd8f24": "ad561d9f3fd8d83d6163572171f70886",
".git/objects/57/7b991f5ae1e64d5e632f3bb657af998c358f3d": "79e68289fe9e7445087c820e47a4f831",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/6a/43554a3ffe3914b8fb8c0807bc4f1f2d5e98b2": "b986758af6c12d38c9e760da6c0398d5",
".git/objects/6e/f5232bc35d70e956abe003283e37b35b254f25": "b02dc99ac04a027e5e15d5da76c2e6d7",
".git/objects/75/bd3bb100ab4be8c193039821fc2eda55d9f269": "91b93bb92355d3a13ab43a6f13fdde8e",
".git/objects/76/d7f1b6efda398f7269642b93c3288c1207dc8b": "392bdcb73271e2295ea9d21794f6f291",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/94/ad71df6fd412ba55915fa125abdd9f8fc28b12": "74425107ccbea4f380da53392dc0d0f6",
".git/objects/96/330bf0f0b2db1ea77fa1bb601f13acfa347765": "72e33a3563bd32422e44a37f2c3d5914",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a9/ad1988fa90b26382c14ec9acfe4dc80d7d8254": "0171d4db1964c8fee1014f9205230988",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/71b6bc8a0ab6a2633fcd38cf41a60b2c6388f9": "2294b9ee045c4faf4e45b35a247b5ff5",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/c1/a5592827334d26699661ba2804aa3ab5779ac5": "f3238efe0a2058b096bfca00896ace10",
".git/objects/c8/08a88890cf503db60d008fbc8f1245338e7ae6": "e0d676bf7084752390c5af954f1bce31",
".git/objects/c8/91d4920fbf7d0241c680537fe644703e2cc35d": "cab62db77677588e34762b24ac737b64",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d4/27e4094b40485d101c4a41f19a33a45996760e": "7f3e83bde4dec1a0def37f005ec16e8b",
".git/objects/d6/3b41c4a9f89d474993ab74bbe0737e0e805ef0": "d4327b698e007840759de863dfe78584",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/9f31715cb4e0ee910ddfaf34819ac3369abd49": "2f82fb7733cdd94d973441cc598c5712",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fa/6a547cdca569b2ed4ffbcc8f7eff3e58574ebc": "aa9ac612034459880e2e132394cde9b6",
".git/objects/fc/7f845540e57583377062fb08d0920f595bcd9d": "af104dde7dbfbbba34000c0202691c21",
".git/refs/heads/master": "de042a24bf9da270905dbaaea9dfda9e",
".git/refs/remotes/origin/master": "de042a24bf9da270905dbaaea9dfda9e",
"assets/AssetManifest.json": "d1120817c16b0512979731a9eaed8b25",
"assets/assets/fonts/Cabin-Regular.ttf": "548e005a375c047eb8bd9485508eb58a",
"assets/assets/images/bg.jpg": "bbd2c5aa647a69f26ab19589e2bf66fa",
"assets/assets/images/bgEnd.png": "c9dbc987018611a3a83e158708fa1bda",
"assets/assets/images/bitcoin.png": "68f9dfcf284f4b334f85460502dff05d",
"assets/assets/images/clima.png": "29dad25ba9b05a631d091109f46bfb40",
"assets/assets/images/coverbackground.png": "fc207dab54cb9a43f53281c625cce017",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/flashchat.png": "837c4288713dbe56af119bf799ccedee",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Mobilecoverbackground.png": "b64081f86159270be73b0ad9c58a3b8f",
"assets/assets/images/profile.jpg": "3fbde8629f925c0fc746cb041169bcb5",
"assets/assets/images/todo.png": "592a3c89299e2de04b6f1d8c0aa1c6a2",
"assets/FontManifest.json": "12bf886b1a2e281ffee36fd682bbf141",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "64c4dcb1a0695a1d9aa0e053871540b1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "669dc5b95b3dbf777eaa806ad9ab97df",
"/": "669dc5b95b3dbf777eaa806ad9ab97df",
"main.dart.js": "255f8bde53cf7c31988171b28abea4d8",
"manifest.json": "66ee7ea6c8676a873c4b72a541de39bf",
"version.json": "aaafa928a4f8616604eca12d830fe765"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
