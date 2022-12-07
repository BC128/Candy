
enum htmlTags_fulltag_noargs {
    h1 = "<h1>",
    _h1 = "</h1>",
    h2 = "<h2>",
    _h2 = "</h2>",
    h3 = "<h3>",
    _h3 = "</h3>",
    h4 = "<h4>",
    _h4 = "</h4>",
    h5 = "<h5>",
    _h5 = "</h5>",
    h6 = "<h6>",
    _h6 = "</h6>",
}
enum htmlTag_spec {
    DOCTYPE = "<!DOCTYPE html>",
    html = "<html>",
    _html = "</html>",
    body = "<body>",
    _body = "</body>"
}
enum htmlTag_head {
    title = "<title>",
    _title = "</title>",
    char = "<meta charset='UTF-8'>"
}
enum htmlTag_head_meta {
    meta_f = "<meta>",
    meta_e = "</meta>",
    meta_author = 'name="description"',
    mete_keyword = 'name="keywords"',
    meta_desc = 'name="keywords"',
    meta_keyword = "meta",
    meta_keyword_1 = "<meta",
    meta_keyword_2 = ">",
    meta_content_key = ' "content=" ',
    meta_content_key_1 = '"',
}
function genHeadtitle(title:string):string{
    return htmlTag_head.title +title+ htmlTag_head._title
}
function genHeadAuthormeta(author:string){
    htmlTag_head_meta.meta_keyword_1 + " " + htmlTag_head_meta.meta_author + " " + htmlTag_head_meta.meta_content_key+author+htmlTag_head_meta.
}
function GenViewPort(inp:{desc:string,keyword:string,author:string}){
    let desc_ = inp.desc
    let keyword_ = inp.keyword
    let author_ = inp.author
    return 
}
console.log(genHeadtitle("haha"))

