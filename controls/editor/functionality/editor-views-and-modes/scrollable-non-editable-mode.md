---
title: Scrollable Non Editable Mode
page_title: Scrollable Non Editable Mode | RadEditor for ASP.NET AJAX Documentation
description: Scrollable Non Editable Mode
slug: editor/functionality/editor-views-and-modes/scrollable-non-editable-mode
tags: scrollable,non,editable,mode
published: True
position: 5
---

# Scrollable Non Editable Mode

When RadEditor is set in non-editable mode (**Enabled**="**false**") it is displayed as a simple DIV element and contains the value of its **Content** property. To prevent the resizing of the content and display scrollbars around the DIV element, set the **Style** property of RadEditor to **overflow: scroll** or **overflow: auto**.

````ASP.NET
<style type="text/css">
	.MyEditor {
		overflow: scroll;
		border: 1px solid red;
	}
</style>

<telerik:RadEditor runat="server" ID="RadEditor1" Enabled="false" CssClass="MyEditor" Width="75px" Height="100px">
   <Content>
   <strong>Line 1</strong><br />
   <strong>Line 2</strong><br />
   <strong>Line 3</strong><br />
   <strong>Line 4</strong><br />
   <strong>Line 5</strong><br />
   <strong>Line 6</strong><br />
   <strong>Line 7</strong>
   </Content>
</telerik:RadEditor> 
````


The rendered output for the ASP.NET markup above is:

````XML
<!-- The overflow:scroll and the border rules can be found via the browser's HTML inspector as they do not exist as inline styles -->
<div id="RadEditor1" class="MyEditor" style="border: 1px solid red; height: 100px; width: 75px;">
   <strong>Line 1</strong>
   <br />
   <strong>Line 2</strong>
   <br />
   <strong>Line 3</strong>
   <br />
   <strong>Line 4</strong>
   <br />
   <strong>Line 5</strong>
   <br />
   <strong>Line 6</strong>
   <br />
   <strong>Line 7</strong>
</div> 
````


