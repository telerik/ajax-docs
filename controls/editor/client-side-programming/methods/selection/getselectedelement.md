---
title: getSelectedElement
page_title: getSelectedElement | UI for ASP.NET AJAX Documentation
description: getSelectedElement
slug: editor/client-side-programming/methods/selection/getselectedelement
tags: getselectedelement
published: True
position: 6
---

# getSelectedElement



## 

Returns a reference to the currently selected HTML element in the RadEditor for ASP.NET AJAX content area.

The editor.getSelectedElement() method is useful in scenarios when the selected element in the content area should be examined and modified. The code fragment below is taken from the [Custom Dialogs](http://demos.telerik.com/aspnet-ajax/editor/examples/customdialogs/defaultcs.aspx) live example and demonstrates how to check whether the selected element is a LINK / ANCHOR tag and sets is as an argument for the showExternalDialog function:

````XML
	    <script type="text/javascript">    
	        Telerik.Web.UI.Editor.CommandList["InsertSpecialLink"] = function(commandName, editor, args)    
	        {       
	            var elem = editor.getSelectedElement(); //returns the selected element.                     
	            if (elem.tagName == "A") //if the selected element is link / anchor       
	            {            
	                editor.selectElement(elem); //selects the element            
	                argument = elem;        
	            }       
	            else       
	            {          
	                //....       
	            }       
	            
	            editor.showExternalDialog(            
	                'InsertLink.aspx',            
	                argument,            
	                //...            
	            );    
	        };
	    </script>
````




