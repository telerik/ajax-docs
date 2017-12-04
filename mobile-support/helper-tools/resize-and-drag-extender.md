---
title: Resize and Drag Extender
page_title: Resize and Drag Extender | UI for ASP.NET AJAX Documentation
description: Resize and Drag Extender
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/helper-tools/resize-and-drag-extender
tags: resize,and,drag,extender
published: True
position: 1
---

# Resize and Drag Extender

## Resize and Drag extender

The ResizeExtender is a small client-side only control that enables resize and drag functionality on an HTML element in all browsers regardless if they are desktop or mobile (except the browsers that lack the needed desktop or touch events - Mobile Operas and IEs). It depends on Core.js and the built-in jQuery in Telerik® UI for ASP.NET AJAX.

Since Q1 2008 the ResizeExtender automatically enables resizing and dragging in all browsers for the following controls: **RadColorPicker**, **RadDock**, **RadEditor**, **RadSlider**, **RadSplitBar** and **RadWindow** and as of Q1 2011, the control supports mobile browsers as well.

## Initialization

In order to use the ResizeExtender separately, follow these steps:

1. Reference its external script libraries:

	**ASP.NET**
	
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
			<scripts>
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Popup.PopupScripts.js" />
			</scripts>
		</telerik:RadScriptManager>

1. Initialize a new instance of the ResizeExtender class, using the following arguments:

	**JavaScript**

		var resizeExtender = new Telerik.Web.UI.ResizeExtender(jsOwner, element, handles, tableElement, document, moveCursorType, autoScrollEnabled, moveToMouseLocation);

The arguments that the constructor of the ResizeExtender class accepts are:

| Argument name | Description |
| ------ | ------ |
| **jsOwner [Optional]** |JavaScript object, which should [optionally] implement onResizeStart/onDragStart, onResizing/onDrag, onResizeEnd/onDragEnd methods. Use these methods to correct the location or size values before they are applied to the element, according to some constraints, if any. For example, a restriction zone for the move functionality or minimum/maximum size for the resize functionality. The methods should accept one argument – an object that holds the new values for the location and(or) size of the element. Change the **width** , **height** , **x** and **y** properties of the object according to your requirements, if any.|
| **elementToMoveAndResize** |The HTML element for which you want to enable move and resize|
| **handles [hash table]** |A hash table with the HTML elements (the handles) that the user uses to resize and move the specified elementToMoveAndResize element.|
| **tableElement[Optional]** |The inner TABLE element of the specified elementToMoveAndResize element, if any.|
| **document[Optional]** |The document, to which the specified elementToMoveAndResize element belongs. In case this parameter is not specified, the extender uses the current document.|
| **moveCursorType[Optional]** |The CSS cursor style, applied to the move handle. By default, the extender uses “move” cursor type.|
| **autoScrollEnabled[Optional]** |A Boolean property that specifies whether the extender will change the scrollTop and(or) ScrollLeft of the browser window, when the user tries to move the specified elementToMoveAndResize element outside of the visible viewport. Note that this feature does not work in Mobile browsers.|
| **moveToMouseLocation[Optional]** |A Boolean property that specifies whether the element will move to the click location, before the user starts dragging it. This is useful, in case the move handle is larger than the element to move. A simple example that demonstrates this case is the handle element in the [HSB/HSV palettes of RadColorPicker](http://demos.telerik.com/aspnet-ajax/colorpicker/examples/default/defaultcs.aspx).|

Here is an example demonstrating how to drag and resize a DIV element:

````ASP.NET
<%@ Page Language="C#" AutoEventWireup="true" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <style type="text/css">
        .ResizableElement
        {
            width: 200px;
            height: 200px;
            border: 1px solid black;
            position: absolute;
        }
        
        .ResizableElement td
        {
            border: solid 1px black;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
        <scripts>
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Popup.PopupScripts.js" />
        </scripts>
    </telerik:RadScriptManager>
    <script type="text/javascript">
        function pageLoad()
        {

            var elementToMoveAndResize = $get("resizableElement");
            var handles = {
                n: $get("upperCenterResizeHandle"),
                ne: $get("upperRightResizeHandle"),
                e: $get("middleRightResizeHandle"),
                se: $get("bottomRightResizeHandle"),
                s: $get("bottomCenterResizeHandle"),
                sw: $get("bottomLeftResizeHandle"),
                w: $get("middleLeftResizeHandle"),
                nw: $get("upperLeftResizeHandle"), //[elem8, elem9, elem10],
                move: $get("dragHandle")
            };
            var innerTable = $get("innerTable");

            var resizeExtender = new Telerik.Web.UI.ResizeExtender(null, elementToMoveAndResize, handles, innerTable, null, "move", true);
        }
    </script>
    <div id="resizableElement" class="ResizableElement" style="top: 0px; left: 0px;">
        <table id="innerTable" style="width: 100%; height: 100%;">
            <tr style="height: 20px;">
                <td id="upperLeftResizeHandle" style="width: 20px;">
                    <!-- -->
                </td>
                <td id="upperCenterResizeHandle">
                    <!-- -->
                </td>
                <td id="upperRightResizeHandle" style="width: 20px;">
                    <!-- -->
                </td>
            </tr>
            <tr>
                <td id="middleLeftResizeHandle">
                    <!-- -->
                </td>
                <td id="dragHandle" style="cursor: move;">
                    <div>
                        Drag handle</div>
                </td>
                <td id="middleRightResizeHandle">
                    <!-- -->
                </td>
            </tr>
            <tr style="height: 20px;">
                <td id="bottomLeftResizeHandle">
                    <!-- -->
                </td>
                <td id="bottomCenterResizeHandle">
                    <!-- -->
                </td>
                <td id="bottomRightResizeHandle">
                    <!-- -->
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
````


