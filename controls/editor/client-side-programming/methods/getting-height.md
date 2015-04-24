---
title: getting height
page_title: getting height | RadEditor for ASP.NET AJAX Documentation
description: getting height
slug: editor/client-side-programming/methods/getting-height
tags: getting,height
published: True
position: 5
---

# getting height



## 

To get the height of the editor, first get the editor's HTML element, then retrieve the style.height.

````JavaScript
	
	        function onClientLoad(editor, args)
	        {
	            alert('Editor height is: ' + editor.get_element().style.height); 
	        }
	
````


