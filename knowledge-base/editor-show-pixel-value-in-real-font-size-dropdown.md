---
title: Can we convert the font size into 'pt' instead of 'px'?
description: The default browser behavior of Chrome and Edge is to return the selection in pixels. The article shows how to change this and display point value in the real font sizes dropdown header - RadEditor for ASP.NET AJAX
type: troubleshooting
page_title: Convert the real font size value from pixels into points
slug: editor-show-pixel-value-in-real-font-size-dropdown
position: 
tags: editor, configuration, realfontsizes, dropdown
ticketid: 1585233
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The solution handles the following questions:
* Can we convert the font size into 'pt' instead of 'px'?
* How to configure the Real Font Size dropdown to show pt point values in its header?
* How to change Pixel to Point size in the RealFontSizes dropdown of RadEditor?
* Is there an event in the dropdown that calculates from px to pt? 
* How to change what's shown as default size in the dropdown list for sizes? Now, the default always shows in px, I would like it to show in pt.

## Solution
Basically, RadEditor does not make any behind the scene font size conversions, the value shown in the header is the original one returned by the browser. 
The value shown in the RealFontSize dropdown header is the value returned by the browser according to the selected text in the content area. 

The code solution below will help you switch from the default behavior of showing pixel values to points values in the dropdown header:

````ASPX
<style>
    .reDropdown.reRealFontSize {
        width: 60px;
    }
</style>
<telerik:RadEditor runat="server" ID="RadEditor1">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorDropDown Name="RealFontSize"></telerik:EditorDropDown>
        </telerik:EditorToolGroup>
    </Tools>
    <RealFontSizes>
        <telerik:EditorRealFontSize Value="6pt" />
        <telerik:EditorRealFontSize Value="8.5pt" />
        <telerik:EditorRealFontSize Value="10pt" />
        <telerik:EditorRealFontSize Value="12pt" />
        <telerik:EditorRealFontSize Value="15pt" />
        <telerik:EditorRealFontSize Value="18pt" />
        <telerik:EditorRealFontSize Value="22pt" />
    </RealFontSizes>
    <Content>We have some Sample text content without font size applied to it for the test<br/><span style="font-size: 18pt;">some content in points font size</span><br/> <span style="font-size: 12px;">another text in pixels</span></Content>
</telerik:RadEditor>
<script type="text/javascript">
    if (typeof (Telerik.Web.UI.Editor) != "undefined") {
        var originalGetValue = Telerik.Web.UI.Editor.RealFontSize.prototype.getValue;

        Telerik.Web.UI.Editor.RealFontSize.prototype.getValue = function (wnd, range) {
            var originalresult = originalGetValue.call(this, wnd, range);
            var resultInPoints = (parseFloat(originalresult) / 1.33).toFixed(2) + "pt";
            return resultInPoints;
        };
    }
</script>
````

For more information refer to the following forum thread: [Change Pixel to Point size in RadEditor](https://www.telerik.com/forums/change-pixel-to-point-size-in-radeditor?#3083512).
   
   