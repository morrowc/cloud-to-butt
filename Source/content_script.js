walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
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

	v = v.replace(/\bKeendy\b/g, "<redacted>");
	v = v.replace(/\bkennedy\b/g, "<redacted>");
	v = v.replace(/\bJFK\b/g, "<redacted>");
	v = v.replace(/\bjfk\b/g, "<redacted>");
	
	textNode.nodeValue = v;
}


