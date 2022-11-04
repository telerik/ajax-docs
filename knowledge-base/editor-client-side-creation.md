---
title: How to create RadEditor control from JavaScript
description: RadEditor is a server ASP.NET control and as such its creation with JavaScript on the client-side is not supported due to multiple configuration dependencies with the server. Nevertheless, you can find out a way to create multiple instances of the control on the server dynamically which do not slow down the performance of the page.
type: troubleshooting
page_title: Client-side creation of Telerik RadEditor for ASP.NET AJAX
slug: editor-client-side-creation
position: 
tags: 
ticketid: 1585731
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
Q1: We need to create RAD Editor control from JavaScript, Is there any provision in the client side programming model to create such control from the client side.

In our requirement, we have to create multiple RAD editor controls based on configuration at client side (JavaScript) , I have researched Telerik documentation but we have only found server side way to create RadEditor control.

Q2: Is there any other way we can create r.a.d.editor control dynamically. What will be page performance if many RadEditor controls created dynamically on page?

## Solution
A1: RadEditor is an ASP.NET AJAX server control and by its nature, it depends on server-side creation. It is not possible to programmatically create the control on the client, because it depends on a number of resources like links, colors, dialogs configuration, etc.

If this is a must, you can to evaluate the [KendoUI Editor](https://demos.telerik.com/kendo-ui/editor/index) which is entirely JavaScript, HTML5 and CSS3 based.

A2: You can create RadEditor from the code behind as well as use its [light inline editing mode](https://demos.telerik.com/aspnet-ajax/editor/examples/inline-editing/defaultcs.aspx), e.g.


````C#
using Telerik.Web.UI;

    protected void Page_Load(object sender, EventArgs e)
    {
        for (int i = 0; i < 50; i++)
        {
            RadEditor editor = new RadEditor();
            editor.EditType = EditorEditType.Inline;
            editor.ID = "RadEditor" + i;
            editor.Content = "<strong>RadEditor" + i + "</strong>";
            Form.Controls.Add(editor);
        }
    }
````
````VB
Imports Telerik.Web.UI

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    For i As Integer = 0 To 50 - 1
        Dim editor As RadEditor = New RadEditor()
        editor.EditType = EditorEditType.Inline
        editor.ID = "RadEditor" & i
        editor.Content = "<strong>RadEditor" & i & "</strong>"
        Form.Controls.Add(editor)
    Next
End Sub
````
   
As for the Performance optimizations tips you can apply, please review this article: [Optimizations]({%slug editor/performance/optimizations%}).


   