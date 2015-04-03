---
title: attachEventHandler
page_title: attachEventHandler | UI for ASP.NET AJAX Documentation
description: attachEventHandler
slug: editor/client-side-programming/methods/attacheventhandler
tags: attacheventhandler
published: True
position: 0
---

# attachEventHandler



## 

Attaches an event to its handler.




>caption  

|  __function attachEventHandler (event, eventHandler)__  |  |  |
| ------ | ------ | ------ |
| __event__ | __string__ |Specifies a standard[DHTML](http://msdn2.microsoft.com/en-us/library/ms533051.aspx)event.|
| __eventHandler__ | __function__ |Specifies the function to call when the event fires.|

Depending on the browser, some events should be attached either to the editor document or to the body of the editor document.

You can attach to the browser event such as:

* mouseover,

* onkeyup,

* onkeydown

...using the __attachEventHandler__ method of RadEditor, e.g.

````ASPNET
	    <script type="text/javascript">
	        function OnClientLoad(editor, args)
	        {
	            editor.attachEventHandler("onkeydown", function (e)
	            {
	                alert("Content area key down " + e.keyCode);
	            });
	        }
	    </script>
	    <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
	    </telerik:RadEditor>
````



To attach to events such as __click__and __blur__ for a given DHTML element use the RadEditor __addExternalHandler__ function with the following syntax:


>caption  

|  __$telerik.addExternalHandler(element, event, eventHandler)__  |  |  |
| ------ | ------ | ------ |
| __element__ | __object__ |Specifies the element to which will be attached the event|
| __event__ | __string__ |Specifies the onclick, onfocus and onblur event.|
| __eventHandler__ | __function__ |Specifies the function to call when the event fires.|

Here is an example:

````ASPNET
	    <script type="text/javascript">
	        function OnClientLoad(editor, args)
	        {
	            var element = document.all ? editor.get_document().body : editor.get_document();
	            $telerik.addExternalHandler(element, "click", function (e)
	            {
	                alert('You just clicked in the editor');
	            });
	        }
	    </script>
	    <telerik:RadEditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
	    </telerik:RadEditor>
````



>note In earlier versions, __addExternalHandler()__ was referred to through the __Telerik.Web.DomElement__ object.Since then has undergone significant optimization of core scripts (script size was reduced by over 100K, and the controls now load even faster). One of the optimizations was to group all core functionality into a single javascript class/object referred to as __$telerik__ .
>So, the correct way to refer to a "system" method is:
> __$telerik.addExternalHandler()__ 
>

