self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('blocks-cache').then(cache => {
            return cache.addAll([
                '/',
                'index.html',
                'LICENSE',
                'assets/**/*',
                'images/**/*',
                'locale/**/*',
                'songs/**/*',
                'views/**/*',
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});