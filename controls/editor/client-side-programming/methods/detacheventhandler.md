---
title: detachEventHandler
page_title: detachEventHandler | RadEditor for ASP.NET AJAX Documentation
description: detachEventHandler
slug: editor/client-side-programming/methods/detacheventhandler
tags: detacheventhandler
published: True
position: 1
---

# detachEventHandler


This function detaches an event handler.
  

|  **function**  **detachEventHandler (event, eventHandler)**  |  |  |
| ------ | ------ | ------ |
| **event** | **string** |Specifies a standard [DHTML](http://msdn2.microsoft.com/en-us/library/ms533051.aspx) event.|
| **eventHandler** | **function** |Specifies the function that will no longer be called when the event fires|

## Example

The example below attaches a "onkeydown" event handler during the RadEditor OnClientLoad event. The HTML button click runs a "detach()" function where a reference to the editor is retrieved and the detachEventHandler() function is called.

````ASP.NET
<script type="text/javascript">
	var myKeydownHandler;
	function OnClientLoad(editor, args)    
	{        
		myKeydownHandler = function(e)        
		{            
			alert("Content area key down " + e.keyCode);        
		};                     
		editor.attachEventHandler("onkeydown", myKeydownHandler);     
	}
	function detach()    
	{
		// get a reference to RadEditor1 client object        
		var editor = $find("<%=RadEditor1.ClientID%>");
		editor.detachEventHandler("onkeydown", myKeydownHandler);
	}       
</script>
<telerik:RadEditor RenderMode="Lightweight" runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
</telerik:RadEditor>
<input id="Button1" type="button" value="button" onclick="detach()" />
````

To detach to external events such as **click** and **blur** use the RadEditor **removeExternalHandler** function with the following syntax:

|  **$Telerik.removeExternalHandler(element, event, eventHandler)**  |  |  |
| ------ | ------ | ------ |
| **element** | **object** |Specifies the element to which will be detached from the event|
| **event** | **string** |Specifies the external (i.e. onclick, onfocus and onblur) event.|
| **eventHandler** | **function** |Specifies the function that will be detached|

## Example

The example below demonstrates an external event being attached to a handler during the RadEditor OnClientLoad event. In this case the external "click" event for the RadEditor document fires a "myClick()" handler function. When you run the example, clicking in the content area of RadEditor displays an alert. A standard HTML button calls a "detach()" function that gets a reference to the editor, gets a reference to the document from the editor and finally calls removeExternalHandler, passing the document element, the name of the event "click" and the name of the function to be detached.

````ASP.NET
<script type="text/javascript">    
	function OnClientLoad(editor, args)    
	{        
		// get a reference to the document body if IE, otherwise get the document object        
		var element = document.all ? editor.get_document().body : editor.get_document();         
		// add the "myClick()" handler for the document "click" event          
		$telerik.addExternalHandler(element, "click", myClick)    
	}
	function myClick()    
	{         
		alert('You just clicked in the editor');    
	}
	function detach()    
	{        
		// get a reference to RadEditor1 client object        
		var editor = $find("<%=RadEditor1.ClientID%>");        
		// get a reference to the document body if IE, otherwise get the document object        
		var element = document.all ? editor.get_document().body : editor.get_document();
		// remove the "myClick()" handler for the document "click" event            
		$telerik.removeExternalHandler(element, "click", myClick);
	}
</script>
<telerik:RadEditor RenderMode="Lightweight" runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
</telerik:RadEditor>
<input id="Button1" type="button" value="button" onclick="detach()" />
````



>tip In earlier versions, **removeExternalHandler()** was referred to through the **Telerik.Web.DomElement** object.Since then has undergone significant optimization of core scripts (script size was reduced by over 100K, and the controls now load even faster). One of the optimizations was to group all core functionality into a single JavaScript class/object referred to as **$telerik** .
>
>So, the correct way to refer to a "system" method is:
>`$telerik.removeExternalHandler()`


