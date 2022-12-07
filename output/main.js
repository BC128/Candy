var htmlTags_fulltag_noargs;
(function (htmlTags_fulltag_noargs) {
    htmlTags_fulltag_noargs["h1"] = "<h1>";
    htmlTags_fulltag_noargs["_h1"] = "</h1>";
    htmlTags_fulltag_noargs["h2"] = "<h2>";
    htmlTags_fulltag_noargs["_h2"] = "</h2>";
    htmlTags_fulltag_noargs["h3"] = "<h3>";
    htmlTags_fulltag_noargs["_h3"] = "</h3>";
    htmlTags_fulltag_noargs["h4"] = "<h4>";
    htmlTags_fulltag_noargs["_h4"] = "</h4>";
    htmlTags_fulltag_noargs["h5"] = "<h5>";
    htmlTags_fulltag_noargs["_h5"] = "</h5>";
    htmlTags_fulltag_noargs["h6"] = "<h6>";
    htmlTags_fulltag_noargs["_h6"] = "</h6>";
})(htmlTags_fulltag_noargs || (htmlTags_fulltag_noargs = {}));
var htmlTag_spec;
(function (htmlTag_spec) {
    htmlTag_spec["DOCTYPE"] = "<!DOCTYPE html>";
    htmlTag_spec["html"] = "<html>";
    htmlTag_spec["_html"] = "</html>";
    htmlTag_spec["body"] = "<body>";
    htmlTag_spec["_body"] = "</body>";
})(htmlTag_spec || (htmlTag_spec = {}));
var htmlTag_head;
(function (htmlTag_head) {
    htmlTag_head["title"] = "<title>";
    htmlTag_head["_title"] = "</title";
    htmlTag_head["char"] = "<meta charset='UTF-8'>";
})(htmlTag_head || (htmlTag_head = {}));
var htmlTag_head_meta;
(function (htmlTag_head_meta) {
    htmlTag_head_meta["meta_f"] = "<meta>";
    htmlTag_head_meta["meta_e"] = "</meta>";
    htmlTag_head_meta["meta_author"] = "name=\"description\"";
    htmlTag_head_meta["mete_keyword"] = "name=\"keywords\"";
    htmlTag_head_meta["meta_desc"] = "name=\"keywords\"";
    htmlTag_head_meta["meta_keyword"] = "meta";
    htmlTag_head_meta["meta_keyword_1"] = "<meta";
    htmlTag_head_meta["meta_keyword_2"] = ">";
    htmlTag_head_meta["meta_content_key"] = " \"content=\" ";
    htmlTag_head_meta["meta_content_key_1"] = "\"";
})(htmlTag_head_meta || (htmlTag_head_meta = {}));
function genHeadtitle(title) {
    return htmlTag_head.title + title + htmlTag_head._title;
}
function GenViewPort(inp) {
    let desc_ = inp.desc;
    let keyword_ = inp.keyword;
    let author_ = inp.author;
    return htmlTag_head.title + "" + htmlTag_head._title;
}
console.log(genHeadtitle("haha"));
export {};
//# sourceMappingURL=main.js.map