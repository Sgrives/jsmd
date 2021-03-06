(() => {
  a = [
    [/^(#{1,6})(.*)$/gm, (m,h,p) => {
      l = h.length;
      return "<h" + l + ">" + p + "</h" + l + ">"
    }],
    [/\*\*(.*)\*\*/gm, "<b>$1</b>"],
    [/__(.*)__/gm, "<b>$1</b>"],
    [/_(.*)_/gm, "<i>$1</i>"],
	[/```[a-z]*\n([\s\S]*?)\n```/g, "<pre><code>$1</code></pre>"],
    [/`(.*)`/gm, "<pre>$1</pre>"],
    [/\[(.*)\]\((.*)\)/gm, "<a href='$2'>$1</a>"],
    [/^---\s$/gm, "<hr/>"],
    [/(\n\*.*)+/gm, m => {
      s = "";
      m.substr(1).split("\n").forEach(z => s += "<li>" + z.substr(2) + "</li>");
      return "<ul>" + s + "</ul>"
    }],
    [/(\n\d\..*)+/gm, m => {
      s="";
      m.substr(1).split("\n").forEach(z => s += "<li>" + z.substr(2) + "</li>");
      return "<ol>" + s + "</ol>"
    }],
    [/\n\n/gm, "</p><p>"]
  ];
  window.jsmd = s => "<p>" + [a.forEach(b => s = s.replace(b[0], b[1])), s][1] + "</p>"
})();
