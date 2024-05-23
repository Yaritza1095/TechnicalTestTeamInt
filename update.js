// Pre-request Script
const updatedFullName = pm.variables.replaceIn('{{$randomFullName}}');
const updatedSchedule = pm.variables.replaceIn('{{$randomSchedule}}');
const updatedAvailability = (updatedSchedule === '24/7') ? null : {
    from: pm.variables.replaceIn('{{$randomHour}}:{{$randomMinute}}'),
    until: pm.variables.replaceIn('{{$randomHour}}:{{$randomMinute}}')
};

pm.request.body.update({
    mode: 'raw',
    raw: JSON.stringify({
        fullName: updatedFullName,
        schedule: updatedSchedule,
        availability: updatedAvailability
    })
});

// Request
pm.sendRequest(pm.request.url, function (err, res) {
    pm.test("Status code is 200 OK", function () {
        pm.expect(res.code).to.equal(200);
    });
});
