---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let iwsr_station = L.marker([50.7051893, -1.2167519], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train"></span> Isle of Wight Steam Railway',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
});
