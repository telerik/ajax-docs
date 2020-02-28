---
title: attachEventHandler
page_title: attachEventHandler | RadEditor for ASP.NET AJAX Documentation
description: attachEventHandler
slug: editor/client-side-programming/methods/attacheventhandler
tags: attacheventhandler
published: True
position: 0
---

# attachEventHandler

Attaches an event to its handler.


|  **function attachEventHandler (event, eventHandler)**  |  |  |
| ------ | ------ | ------ |
| **event** | **string** |Specifies a standard [DHTML](https://msdn2.microsoft.com/en-us/library/ms533051.aspx) event.|
| **eventHandler** | **function** |Specifies the function to call when the event fires.|

Depending on the browser, some events should be attached either to the editor document or to the body of the editor document.

You can attach to the browser event such as:
* mouseover,
* onkeyup,
* onkeydown

...using the **attachEventHandler** method of RadEditor, e.g.

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{
		editor.attachEventHandler("onkeydown", function (e)
		{
			alert("Content area key down " + e.keyCode);
		});
	}
</script>
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
</telerik:RadEditor>
````

To attach to events such as **click** and **blur** for a given DHTML element use the RadEditor **addExternalHandler** function with the following syntax:

>caption  

|  **$telerik.addExternalHandler(element, event, eventHandler)**  |  |  |
| ------ | ------ | ------ |
| **element** | **object** |Specifies the element to which will be attached the event|
| **event** | **string** |Specifies the onclick, onfocus and onblur event.|
| **eventHandler** | **function** |Specifies the function to call when the event fires.|

Here is an example, which works for both ContentAreaMode="div" and ContentAreaMode="iframe" modes:

````ASP.NET
<telerik:RadEditor runat="server" ContentAreaMode="div" ID="someEditor" OnClientLoad="initiEditor"></telerik:RadEditor>
<script>
    function initiEditor(ed) {
        var element = ed.get_contentArea();

        $telerik.addExternalHandler(element, "click", function (e) {
            ClickFunction(ed);
        });

        $telerik.addExternalHandler(element, "blur", function (e) {
            BlurFunction(ed);
        });
    }

    function ClickFunction(ed) {
        console.log('You just clicked in the editor');
    }

    function BlurFunction() {
        console.log('You just blurred the editor');
    }
</script>
````



>note In earlier versions, **addExternalHandler()** was referred to through the **Telerik.Web.DomElement** object.Since then has undergone significant optimization of core scripts (script size was reduced by over 100K, and the controls now load even faster). One of the optimizations was to group all core functionality into a single javascript class/object referred to as **$telerik** .
>
>So, the correct way to refer to a "system" method is:
>`$telerik.addExternalHandler()`


