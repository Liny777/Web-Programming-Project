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
 * Student Name : Youguang Lin
 * Student ID : 1155169171
 * Date : 2021/10/11
 */
var net = require('net');
var textChunk = '';
var jsonObj = {"total_likes": 0};
var count_like = 0
var server = net.createServer(function(socket) {
	socket.on('data', function(data){  
        textChunk = data.toString('utf8');
       if(textChunk==="like"){
           jsonObj.total_likes += 1
           console.log("like")
           socket.write(JSON.stringify(jsonObj))
       }
       if(textChunk==="unlike"){
        console.log("unlike")
            jsonObj.total_likes -= 1
            if(jsonObj.total_likes<0){
                jsonObj.total_likes = 0
            }
        socket.write(JSON.stringify(jsonObj))
       }
	});
});
server.listen(52275,"127.0.0.1",function(){
    console.log("opened server on: ",server.address())
})