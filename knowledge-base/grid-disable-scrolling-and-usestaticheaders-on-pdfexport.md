---
title: Disable Scrolling/UseStaticHeaders on PDFExport
description: Find out how to fix blank pages when exporting a grid to pdf.
type: how-to
page_title: How to Disable Scrolling/UseStaticHeaders on PDFExport
slug: grid-disable-scrolling-and-usestaticheaders-on-pdfexport
position: 
tags: pdfexport
ticketid: 1455303
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

As noted in the [PDF Export Q&A](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/exporting/export-formats/pdf-export#pdf-export-q--a), when the PDF Export produces a blank page, this is because of the [ClientSettings for Scrolling and UseStaticHeaders](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/scrolling/scroll-with-static-headers). These need to be disabled. See the below solution.

## Solution

Use the ItemCommand Grid Event to temporarily disable these features. After the command executes the settings will revert back to those set on the grid.


````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToPdfCommandName)
    {
        RadGrid1.ClientSettings.Scrolling.AllowScroll = false;
        RadGrid1.ClientSettings.Scrolling.UseStaticHeaders = false;
        RadGrid1.Rebind();
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(sender As Object, e As GridCommandEventArgs)
    If e.CommandName = RadGrid.ExportToPdfCommandName Then
        RadGrid1.ClientSettings.Scrolling.AllowScroll = False
        RadGrid1.ClientSettings.Scrolling.UseStaticHeaders = False
        RadGrid1.Rebind()
    End If
End Sub
````


## See Also

*    [PDF Export Q&A](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/exporting/export-formats/pdf-export#pdf-export-q--a)
*    [ClientSettings for Scrolling and UseStaticHeaders](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/scrolling/scroll-with-static-headers)