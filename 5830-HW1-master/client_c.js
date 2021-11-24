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
var client = new net.Socket();
client.connect(52275, '127.0.0.1', function() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      })
      readline.on("line", (input) => { 
        client.write(input)
     })
});
client.on('data', function(data) {
    const message = JSON.parse(data);
	console.log(message);
});
