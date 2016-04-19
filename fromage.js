function objectify(url) {
    // extract QS from given URL
    url = url.substr(url.lastIndexOf('/') + 1);
    // if there is a hash, let's remove it
    url = url.split('#')[0];
    var obj = {};
    var splitQueries = url.split('?')[1].split('&');
    splitQueries.forEach(function (qs) {
        var splitUp = qs.split('=');
        obj[splitUp[0]] = splitUp[1];
    });
    return obj;
}

module.exports = {
    objectify = objectify
}