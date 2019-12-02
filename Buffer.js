let buf  = Buffer.alloc(5,"Hello");
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
buf.write('we')
console.log(buf.toString());
console.log(buf[2]);