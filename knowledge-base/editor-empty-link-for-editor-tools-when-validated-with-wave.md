---
title: Empty Link error for Editor tools when validated with Wave
description: WAVE gives an "Empty Link" error for the tools in the Editor's toolbar. 
type: troubleshooting
page_title: Empty Link error for Editor tools when validated with Wave
slug: editor-empty-link-for-editor-tools-when-validated-with-wave
position: 
tags: wave, editor, accessibility
ticketid:
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.917+</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
By default, the tools in the Lightweight RenderMode are rendered as <a> tags with no text but with font-icons or images. 

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" EnableAriaSupport="true"
    runat="server" ID="RadEditor1" AccessKey="1" >
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold"  />
            <telerik:EditorTool Name="Italic"  />
            <telerik:EditorTool Name="CustomTool" />
        </telerik:EditorToolGroup>
    </Tools>
</telerik:RadEditor>
````

## Solutions

Solution 1: Set the ShowText property of the tools to True 

````ASP.NET
<telerik:RadEditor  RenderMode="Lightweight" EnableAriaSupport="true"
    runat="server" ID="RadEditor1" AccessKey="1" >
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold" ShowText="true" />
            <telerik:EditorTool Name="Italic" ShowText="true" />
            <telerik:EditorTool Name="CustomTool" ShowText="true" />
        </telerik:EditorToolGroup>
    </Tools>
</telerik:RadEditor>
````

This solution will show the name of the Tools: <img src="data:image/png;base64,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">

In order to persist the previous appearance, you can use the second solution: 

Solution 2: To Use the OnClientLoad event to add the title of the tool as a text of the <a> element:

````ASP.NET
<script>
    function OnClientLoad(sender, args) {
        $telerik.$(sender.get_element()).find(".reToolBarWrapper a.reTool").each(function (ind, item) {
            if (!item.text) {
                $telerik.$(item).append("<span style='display:none'>" + item.title + " </span>");
            }
        })
    }
</script>
<telerik:RadEditor OnClientLoad="OnClientLoad" RenderMode="Lightweight" EnableAriaSupport="true"
    runat="server" ID="RadEditor1" AccessKey="1" >
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold" />
            <telerik:EditorTool Name="Italic"  />
            <telerik:EditorTool Name="CustomTool"  />
        </telerik:EditorToolGroup>
    </Tools>
</telerik:RadEditor>
````


