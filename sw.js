/* COMMENT: The install event is the right place to cache all files
            we want to store. Once the install is complete all files
            are added to the cache. */

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-reviews-v2').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/restaurant.html',
				'/css/styles.css',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
				'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
				'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiZXN0ZXZlNTUiLCJhIjoiY2pxMDR2YmhmMGhpcjQycWoyZXh3dHJkMiJ9.DDMvxEi18OOAa4J4LbgMUA',
				'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiZXN0ZXZlNTUiLCJhIjoiY2pxMDR2YmhmMGhpcjQycWoyZXh3dHJkMiJ9.DDMvxEi18OOAa4J4LbgMUA',
				'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiZXN0ZXZlNTUiLCJhIjoiY2pxMDR2YmhmMGhpcjQycWoyZXh3dHJkMiJ9.DDMvxEi18OOAa4J4LbgMUA',
				'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiZXN0ZXZlNTUiLCJhIjoiY2pxMDR2YmhmMGhpcjQycWoyZXh3dHJkMiJ9.DDMvxEi18OOAa4J4LbgMUA',
				'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
				'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
				'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
			]);
		})
	);
});

/* COMMENT: The fetch event is the right place to respond with a file
			from the cache, if that file exists in there. Otherwise,
			we will have to obtain it online. In addition, if we
			obtain it online, we will add it to the cache. */

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) {
				console.log(`Url ${event.request.url} found in cache)`);
				return response;
			} else {
				console.log(`Url ${event.request.url} not found in cache)`);
				return fetch(event.request.url)
						.then(function(response){
							console.log(`Url ${event.request.url} fetched from the network`);
							caches.open('restaurant-reviews-v2').then(function(cache) {
      							cache.add(event.request.url, response).catch(function(error) {
      								console.log(`Addition to cache for url ${event.request.url} unsuccessful due to error ${error}`);
      							});
    						});
    						return response;
						}).catch(function(error) {
							console.log(`Fetch for url ${event.request.url} unsuccessful due to error ${error}`);
						});
			}
		})
	);
});
