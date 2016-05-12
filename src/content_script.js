walk(document.body);
setTimeout(function () {
  walk(document.body);
}, 1000);

function walk(node)
{
  // Source: http://is.gd/mwZp7E

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\Michel Miguel Elias Temer Lulia\b/g, "Francis J. Underwood");
  v = v.replace(/\Michel Temer\b/g, "Frank Underwood");
  v = v.replace(/\MichelTemer\b/g, "FrankUnderwood");
  v = v.replace(/\Temer\b/g, "Frank Underwood");

  textNode.nodeValue = v;
}
