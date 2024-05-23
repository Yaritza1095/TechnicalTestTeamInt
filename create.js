// Pre-request Script
const fullName = pm.variables.replaceIn('{{$randomFullName}}');
const departmentId = 1; // Replace with a valid department ID
const schedule = pm.variables.replaceIn('{{$randomSchedule}}');
const availability = (schedule === '24/7') ? null : {
    from: pm.variables.replaceIn('{{$randomHour}}:{{$randomMinute}}'),
    until: pm.variables.replaceIn('{{$randomHour}}:{{$randomMinute}}')
};
const phoneNumbers = [
    { type: 'Office', number: pm.variables.replaceIn('{{$randomPhoneNumber}}') },
    { type: 'Home', number: pm.variables.replaceIn('{{$randomPhoneNumber}}') },
    { type: 'Mobile', number: pm.variables.replaceIn('{{$randomPhoneNumber}}') }
];

pm.request.body.update({
    mode: 'raw',
    raw: JSON.stringify({
        fullName,
        departmentId,
        address: { /* Prefilled with carrier's address */ },
        schedule,
        availability,
        phoneNumbers
    })
});

// Request
pm.sendRequest(pm.request.url, function (err, res) {
    pm.test("Status code is 201 Created", function () {
        pm.expect(res.code).to.equal(201);
    });
});
