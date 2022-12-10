const bytenode = require('bytenode');
let compiledFilename = bytenode.compileFile({
    filename: './target.js',
    output: './target.jsc' // if omitted, it defaults to '/path/to/your/file.jsc'
});
