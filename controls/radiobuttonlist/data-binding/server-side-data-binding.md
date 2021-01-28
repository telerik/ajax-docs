---
title: Server-side Data Binding
page_title: Server-side Data Binding - RadRadioButtonList
description: Check our Web Forms article about Server-side Data Binding.
slug: radiobuttonlist/data-binding/server-side-data-binding
tags: server,side,data,binding,sql,list,array,items
published: True
position: 0
---

# Server-side Data Binding Overview

The article shows how to set up **RadRadioButtonList** with data binding. 

**RadRadioButtonList** can use the standard data sources for binding an ASP.NET control:

* Declarative ASP.NET data sources (SqlDatasource, ObjectDataSource, LinqDataSource, etc.)
* Server-side collections that implement the IEnumerable interface.

## Server-side Data Binding Basics 

**RadRadioButtonList** exposes the `Databindings` composite property to configure the fields needed for data binding: 

* DataTextField binds the `Text` property of the items with the corresponding field.
* DataValueField binds the `Value` property of the items with the corresponding field.
* DataSelectedField binds the `Selected` property of the items with the corresponding field.
* DataEnabledField binds the `Enabled` property of the items with the corresponding field.

>caption Example 1: Data binding RadRadioButtonList with a collection in the code behind.

````ASP.NET
<telerik:RadRadioButtonList runat="server" ID="RadRadioButtonList1">
    <Databindings DataTextField="Text" DataValueField="Value" 
        DataSelectedField="Selected" DataEnabledField="Enabled" />
</telerik:RadRadioButtonList>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadRadioButtonList1.DataSource = GetData();
        RadRadioButtonList1.DataBind();
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
		RadRadioButtonList1.DataSource = GetData()
		RadRadioButtonList1.DataBind()
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

 * [RadRadioButtonList Overview]({%slug radiobuttonlist/overview%})

 * [RadRadioButtonList Getting Started]({%slug radiobuttonlist/getting-started%})
 
 * [RadRadioButtonList Properties and Events]({%slug radiobuttonlist/server-side-programming/properties-and-events%})
