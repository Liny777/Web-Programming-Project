// // Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
var mongoose = require('mongoose');
// var Model = require('./Schema.js');
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
    email:String,
    text:String,
    time:String
})
Model = mongoose.model('posts',itemSchema)
//     console.log(event)
//     console.log("JSON1: "+event.body)
//     // console.log("Header: "+event.headers.x-datadog-parent-id)
//     // var jsonObject = {}
//     // var mytime=myDate.toLocaleTimeString();
//     // jsonObject = JSON.parse(event.body)
//     // jsonObject['_id'] = event.headers.x-datadog-parent-id
//     // jsonObject['datetime'] = mytime
//     // jsonObject['_id'] = "1" 
//     // console.log(JSON.stringify(jsonObject))
const uri = "mongodb+srv://s1155169171:1qaz2wsx@cluster0asg3.n4uwa.mongodb.net/asg4_base"
async function getData() {      
  
    try {      
      await mongoose.connect(uri);
      const result = await Model.find();
      return result;
    } catch (err) {
      console.log(err); // output to netlify function log
    } finally {
      await mongoose.disconnect();
    }
  }

  exports.handler = async function(event, context) {
    if (event.httpMethod === "GET") {
    try {
      const data = await getData();
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    } catch (err) {
      console.log(err); // output to netlify function log
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: err.message }) 
      };
    }}
    if (event.httpMethod === "POST"){
      const bodyJson =eval('(' + (event.body) + ')');
      const model = new Model({
        email : bodyJson.email,
        text : bodyJson.message,
        time : bodyJson.time,         
      })
      try {      
        await mongoose.connect(uri);
        await model.save();
        const result = await Model.find();
        return {
          statusCode :200,
          body : JSON.stringify(result),
        }
      } catch (err) {
        console.log(err); // output to netlify function log
      } finally {
        await mongoose.disconnect();
      }
//     if (event.httpMethod === "POST") {
//         const bodyJson =eval('(' + (event.body) + ')');
        
//         return {
//             statusCode: 200,
//             body: JSON.stringify(event.body)
//         };
//     }
//     else {
//         return {
//             statue: 405,
//             body: "Method not supported"
//         }
//     }
    }
  };
