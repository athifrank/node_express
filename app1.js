var dns=require('dns');
process.stdin.on('data',function(chunk){
 dns.lookup('${chunk}',function(err,address,family){
    console.log('Address and family:',address,family);
});   
});
