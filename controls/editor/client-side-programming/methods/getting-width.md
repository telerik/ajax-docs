---
title: getting width
page_title: getting width | UI for ASP.NET AJAX Documentation
description: getting width
slug: editor/client-side-programming/methods/getting-width
tags: getting,width
published: True
position: 4
---

# getting width



## 

To get the width of the editor, first get the editor's HTML element, then retrieve the style.width.

````JavaScript
	
	        function onClientLoad(editor, args)
	        {
	            alert('Editor width is: ' + editor.get_element().style.width); 
	        }
	
````


