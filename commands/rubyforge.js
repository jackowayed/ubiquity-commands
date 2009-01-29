//rubyforge search command copyright Daniel Jackoway begin
    makeSearchCommand({
    name: "rubyforge",
    author: {name: "Daniel Jackoway", email: "jackowayed@gmail.com", twitter: "jackowayed"},
    homepage: "http://jackowayed.wordpress.com/",
    takes: {"Query": noun_arb_text},
    license: "MIT",
    url: "http://rubyforge.org/search/?type_of_search=soft&Search=Search&words={QUERY}",
    icon: "http://static.rubyforge.vm.bytemark.co.uk/themes/rubyforge/images/favicon.ico",
    description: "searches rubyforge.org, a rubygem hosting site",
    help: "Type 'rubyforge foo bar' to search rubyforge projects for 'foo bar'",
    preview: function(pblock, directObject){
    if (directObject.text.length<1){pblock.innerHTML = "Search <b>RubyForge</b>"; return;}
      jQuery.get(this.url.replace("{QUERY}", directObject.text), function(doc){
      var tempElement = CmdUtils.getHiddenWindow().document.createElementNS("http://www.w3.org/1999/xhtml", "div");
tempElement.innerHTML = doc.replace(/href=\"\//g, "href=\"http:\/\/rubyforge.org\/");
  var results = jQuery("table[cellspacing='2']:first", tempElement);
jQuery("tr", results).css("background-color", "#000");
pblock.innerHTML="<table style='background-color: #000'>"+results.html()+"</table>";

     })
        }
    //execute: function(directObject) {
    //Utils.openUrlInBrowser(this.url.replace("{QUERY}",directObject.text));

    //}
  })//rubyforge search command end