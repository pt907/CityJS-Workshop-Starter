// src_function/test.js
exports.handler = function(event, context, callback) {
    console.log('hello world')
    callback(null, {
    statusCode: 200,
    body: "Hello, World :)"
    });
}



// src_function/test.js
//exports.handler = function(event, context, callback) {
//    console.log('hello world')
//    callback(null, {
//    statusCode: 200,
//    body: "Hello, World"
//    });
//}