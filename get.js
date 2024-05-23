// Pre-request Script
// No pre-request script needed

// Request
pm.sendRequest(pm.request.url, function (err, res) {
    pm.test("Status code is 200 OK", function () {
        pm.expect(res.code).to.equal(200);
    });
});
