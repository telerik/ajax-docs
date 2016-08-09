---
title: Server-side Data Binding
page_title: Server-side Data Binding | RadCheckBoxList for ASP.NET AJAX Documentation
description: Server-side Data Binding
slug: checkboxlist/data-binding/server-side-data-binding
tags: server,side,data,binding,sql,list,array,items
published: True
position: 0
---

# Server-side Data Binding Overview

The article shows how to set up **RadCheckBoxList** with data binding. 

**RadCheckBoxList** can use the standard data sources for binding an ASP.NET control:

* Declarative ASP.NET data sources (SqlDatasource, ObjectDataSource, LinqDataSource, etc.)
* Server-side collections that implement the IEnumerable interface.

## Server-side Data Binding Basics 

**RadCheckBoxList** exposes the `Databindings` composite property to configure the fields needed for data binding: 

* DataTextField binds the `Text` property of the items with the corresponding field.
* DataValueField binds the `Value` property of the items with the corresponding field.
* DataSelectedField binds the `Selected` property of the items with the corresponding field.
* DataEnabledField binds the `Enabled` property of the items with the corresponding field.

>caption Example 1: Data binding RadCheckBoxList with a collection in the code behind.

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
    <Databindings DataTextField="Text" DataValueField="Value" 
        DataSelectedField="Selected" DataEnabledField="Enabled" />
</telerik:RadCheckBoxList>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadCheckBoxList1.DataSource = GetData();
        RadCheckBoxList1.DataBind();
    }
}

private IEnumerable<object> GetData()
{
    List<object> result = new List<object>() {
        new { Text = "English", Value = "en",
                Selected = true, Enabled = true },
        new { Text = "German", Value = "de",
                Selected = false, Enabled = true },
        new { Text = "french", Value = "fr",
                Selected = false, Enabled = true }
    };

    return result;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	If Not Page.IsPostBack Then
		RadCheckBoxList1.DataSource = GetData()
		RadCheckBoxList1.DataBind()
	End If
End Sub

Private Function GetData() As IEnumerable(Of Object)
	Dim result As New List(Of Object)() From { _
		New With { _
			Key .Text = "English", _
			Key .Value = "en", _
			Key .Selected = True, _
			Key .Enabled = True _
		}, _
		New With { _
			Key .Text = "German", _
			Key .Value = "de", _
			Key .Selected = False, _
			Key .Enabled = True _
		}, _
		New With { _
			Key .Text = "french", _
			Key .Value = "fr", _
			Key .Selected = False, _
			Key .Enabled = True _
		} _
	}

	Return result
End Function
````

## See Also

 * [RadCheckBoxList Overview]({%slug checkboxlist/overview%})

 * [RadCheckBoxList Getting Started]({%slug checkboxlist/getting-started%})
 
 * [RadCheckBoxList Properties and Events]({%slug checkboxlist/server-side-programming/properties-and-events%})
