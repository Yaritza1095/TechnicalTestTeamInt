In the pre-request scripts sharef, I am using Postman variables and functions to generate random data for the request payloads. You'll need to define these variables in your Postman environment or collection. For example, {{$randomFullName}} and {{$randomSchedule}} could be defined as follows:
Copy code{{$randomFullName}}: {{$randomFirstName}} {{$randomLastName}}
{{$randomSchedule}}: ["24/7", "All days", "Week days"]
Additionally, you'll need to replace the placeholders (e.g., departmentId, address) with actual values from your application.
