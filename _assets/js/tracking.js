var trackItemFromCurrentPage = function (category, action) {
    trackItem(category, action, window.location.href);
};

var trackItem = function (category, action, label) {
    var dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'virtualEvent',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label,
    });
};
