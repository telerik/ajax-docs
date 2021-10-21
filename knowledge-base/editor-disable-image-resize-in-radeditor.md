---
title: Disable image resize in RadEditor
description: See how to disable image resize in RadEditor
type: how-to
page_title: Disable image resize in RadEditor
slug: editor-disabling-image-resize-in-radeditor
res_type: kb
---

## Description

Very often in CMS scenarios the size of the content area is limited and it is useful to prevent the image resize in the editor, so that the image does not exceeds the content boundaries. The solution shows how to completely disable the image resize in RadEditor.

## Solution

The image resizing in Chrome, Edge Cromium and Firefox is handled by RadEditor and you can disable it by overriding the _elementResizingSelectionChangeHandler function:

````JavaScript
	<telerik:RadEditor runat="server" ID="RadEditor1"><Content> <img src="../images/barcelona.jpg" /></Content></telerik:RadEditor>
	<script>
		Telerik.Web.UI.RadEditor.prototype._elementResizingSelectionChangeHandler = function () { }
	</script>
````

The image resizing in IE is handled by the broser itself and the solution there is to apply unselectable="on" to all images in the content area. This could happen in the OnClientLoad and/or OnClientSelectionChange event(s) of the editor:

````ASP.NET
<script type="text/javascript">
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"><Content> <img src="../images/barcelona.jpg" /></Content></telerik:RadEditor>
function OnClientLoad(editor, args)
{
    var elems = editor.get_document().getElementsByTagName("IMG");  
    for (var i=0; i < elems.length; i++)  
    {  
        var image = elems[i];
        image.setAttribute("unselectable","on");  
    }                   
}
</script>
````

