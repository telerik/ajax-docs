---
title: Drag and Drop to HTML Elements That Have No ID
page_title: Drag and Drop to HTML Elements That Have No ID | UI for ASP.NET AJAX Documentation
description: Drag and Drop to HTML Elements That Have No ID
slug: treeview/application-scenarios/client-side-programming/drag-and-drop-to-html-elements-that-have-no-id
tags: drag,and,drop,to,html,elements,that,have,no,id
published: True
position: 7
---

# Drag and Drop to HTML Elements That Have No ID



## 

If you need to drop a TreeNode onto an HTML element that has no ID, then a postback will not occur upon dropping. Hence, the __NodeDrop__ event will not be executed, either.



To solve the problem you need to hook on the __OnClientNodeDropping__ event and set an ID to the target HTML element, like:

````JavaScript
	    function onNodeDropping(sender, args){ 
	        args.get_htmlElement().id="IdValue"; 
	        }
````



You can get the ID of the HTML element in the __NodeDrop__ event handler by using the event arguments:

>tabbedCode

````C#
	     
		protected void RadTreeView1_NodeDrop(object sender, Telerik.Web.UI.RadTreeNodeDragDropEventArgs e)
	    {    
	        String id = e.HtmlElementID;
	    }
				
````
````VB.NET
	     
	    Protected Sub RadTreeView1_NodeDrop(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeDragDropEventArgs)
	        Dim id As String = e.HtmlElementID
	    End Sub
	
````
>end
