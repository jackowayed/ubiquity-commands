//start gh-code-search (Github code search) comand copyright Daniel Jackoway
  CmdUtils.makeSearchCommand({
  name: "gh-code-search",
  icon: "http://github.com/favicon.ico",
  homepage: "http://jackowayed.github.com/ubiquity-commands/",
  author: {name: "Daniel Jackoway", email: "jackowayed@gmail.com", twitter: "jackowayed"},
  license: "MIT",
  description: "Search code on Github. ",
  help: "type 'gh-code-search puts hello world' to search github for 'puts hello world'",
  url: "http://github.com/codesearch?q={QUERY}",
  takes: {"query": noun_arb_text},
  preview: function( pblock, directObject ) {
      //pblock.innerHTML = "loading...";
  if (directObject.text<1){
  pblock.innerHTML = "<p>Search <b>Github Code Search</b></p><div id='code_search_instructions'><table cellpadding='0' cellspacing='1em'><tbody><tr><th>Language</th><td>Choose a language in the dropdown to filter your results to that language, or add a 'language:' prefix to a search term</td><td nowrap='nowrap'><code>'hello world' language:perl</code><br><code>jsunit -language:java</code></td></tr><tr><th>Project</th><td>you can filter the results by project with a 'repo:' prefix</td><td nowrap='nowrap'><code>test repo:mojombo/grit</code><br></td></tr><tr><th>Developer</th><td>because the project names are of the format 'user/project', you can filter by developer by adding a 'repo:[developer]/*'</td><td nowrap='nowrap'><code>test repo:mojombo/*</code><br></td></tr><tr><th>File Path</th><td>you can filter bypath (file name) with a 'path:' prefix</td><td nowrap='nowrap'><code>submodule -path:lib*</code></td></tr></tbody></table></div>"; return;}
    pblock.innerHTML = "loading";
jQuery.get(this.url.replace("{QUERY}", directObject.text), function(doc){
      var tempElement = CmdUtils.getHiddenWindow().document.createElementNS("http://www.w3.org/1999/xhtml", "div");
tempElement.innerHTML = doc.replace(/href=\"\//g, "href=\"http:\/\/github.com\/");
  var results = jQuery("div.results:first", tempElement);
  results.attr("width", pblock.width)
    pblock.innerHTML = results.html();
});

  }
});
//end gh-code-search command