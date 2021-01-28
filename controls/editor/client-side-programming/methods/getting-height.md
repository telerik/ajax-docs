---
title: getting height
page_title: getting height - RadEditor
description: Check our Web Forms article about getting height.
slug: editor/client-side-programming/methods/getting-height
tags: getting,height
published: True
position: 5
---

# getting height

To get the height of the editor, first get the editor's HTML element, then retrieve the style.height.

````JavaScript	
function onClientLoad(editor, args)
{
	alert('Editor height is: ' + editor.get_element().style.height); 
}	
````


