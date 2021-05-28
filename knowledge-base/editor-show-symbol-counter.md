---
title: ReadEditor Word Count is not shown when EditModes is set to Design
description: See how to show the Symbol Counter module of RadEditor when EditModes="Design".
type: troubleshooting
page_title: ReadEditor Word Count is not displayed when EditModes is set to Design
slug: editor-show-symbol-counter
position: 
tags: 
ticketid: 1521642
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2017.2.503</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
ReadEditor Word and Symbol Count is not shown when EditModes is set to Design when the EditModes property is set to Design.

## Solution
When the EditModes property is set to Design mode, the whole bottom area gets hidden along the Design, HTML and Preview buttons along with the Statistics Module. To show it once again, define it explicitly as shown below:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" MaxTextLength="10" runat="server" EditModes="Design" Height="200">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="Bold" />
            <telerik:EditorTool Name="Italic" />
            <telerik:EditorTool Name="Underline" />
        </telerik:EditorToolGroup>
    </Tools>
    <Modules>
        <telerik:EditorModule Name="RadEditorStatistics" />
    </Modules>
</telerik:RadEditor>
````

You can find more information in this article: [Disable or Hide Modules](http://www.telerik.com/help/aspnet-ajax/editor_disablehidemodules.html).
