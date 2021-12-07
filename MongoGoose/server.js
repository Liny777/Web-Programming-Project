
/**
* ECLT5830 Network and Web Programming
*
* I declare that the assignment here submitted is original
* except for source material explicitly acknowledged,
* and that the same or closely related material has not been
* previously submitted for another course.
* I also acknowledge that I am aware of University policy and
* regulations on honesty in academic work, and of the disciplinary
* guidelines and procedures applicable to breaches of such
* policy and regulations, as contained in the website.
*
* University Guideline on Academic Honesty:
* http://www.cuhk.edu.hk/policy/academichonesty/
*
* Student Name : Lin Youguang
* Student ID : 1155169171
* Date : 2021/11/27
*/
const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.json());

const uri = "mongodb+srv://s1155169171:1qaz2wsx@cluster0asg3.n4uwa.mongodb.net/my_asg3_db?retryWrites=true&w=majority"
// mongoose.connect(uri);
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;
// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  contents:String
  // The schema is incomplete...
});
const SomeModel = mongoose.model('posts', postSchema);
function handleError(err){
  
}
app.get("/posts", async function (req, res) {
  await mongoose.connect(uri);
  if (!req.query || Object.keys(req.query).length === 0) {
    var query = SomeModel.find()
    // query.select('title description contents')
    // console.log(query)
    query.exec(function(err, results) {
      if (err){
        mongoose.disconnect()
        return handleError(err);
      }
      else{
        if(results.length===0){
          res.send([{}])
        }else{
          res.send(results)
        }

        mongoose.disconnect()
      }
      // Process results here ...
      });
      // SomeModel.db.close()
    // TODO: a) Return all posts
  } else {
    var query = SomeModel.find(req.query)
    query.exec(function(err, results) {
      if (err){
        mongoose.disconnect()
        return handleError(err);
      }
      
      else{
        mongoose.disconnect()
        res.send(results)
      }
      
      // Process results here ...
      });
    // TODO: b) Find posts based on matched key/value, return an array of them
    // console.log(pathData); // you can remove this line
  }
  // mongoose.disconnect();
});

app.get("/posts/:post_id", async function (req, res) {
  await mongoose.connect(uri);
  console.log(req.params)
  // var _id = ObjectId(req.params.post_id)
  var query = SomeModel.find({_id: req.params.post_id})
  query.exec(function(err, results) {
    if (err){
      mongoose.disconnect()
      return handleError(err);
    }
   
    else{
      if(results.length===0){
        return res.json({})
      }else{
        return res.send(results)
      }
      mongoose.disconnect()
      
    }
   
    // Process results here ...
    });
    // mongoose.disconnect();
});

app.post("/posts", async function (req, res) {
  // TODO: d) Insert a new post into collection
  await mongoose.connect(uri);
  SomeModel.create({
    title: req.body.title,
    description:req.body.description,
    contents:req.body.contents
    }, function (err, results) {
    if (err){
      mongoose.disconnect()
      return handleError(err);
    }
    else{
      mongoose.disconnect()
      res.send(results._id)
    }
    
    // mongoose.disconnect();
    // db.disconnect();
    // Here "user" is an instance of the created document
    });
});
// !! This line must be at the bottom
const port = 3001;
app.listen(port, () =>
  console.log(`API server listening at http://localhost:${port}`)
);
