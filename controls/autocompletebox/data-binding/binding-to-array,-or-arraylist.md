---
title: Binding to Array, or ArrayList
page_title: Binding to Array, or ArrayList | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Binding to Array, or ArrayList
slug: autocompletebox/data-binding/binding-to-array,-or-arraylist
tags: binding,to,array,,or,arraylist
published: True
position: 1
---

# Binding to Array, or ArrayList



Both **Array** and **ArrayList** could make an excelent data source for RadAutoCompleteBox. The following example demonstrates a valid usage of both data sourses, defining them at runtime.

## Binding to Array and ArrayList at runtime

The declarations of RadAutoCompleteBox objects include no DataSourceID property or Items section:

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server">
</telerik:RadAutoCompleteBox>

<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox2" runat="server">
</telerik:RadAutoCompleteBox>
````



In the **Page_Load** event handler create the Array and ArrayList and bind them to the RadAutoCompleteBox objects. The **DataBind** method must be called after setting the **DataSource** property.



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	BindToArrayList(RadAutoCompleteBox1);
	BindToArray(RadAutoCompleteBox2);
}

private void BindToArray(RadAutoCompleteBox autoCompleteBox)
{
	string[] itemsList = { "One", "Two", "Three" };
	autoCompleteBox.DataSource = itemsList;
}

private void BindToArrayList(RadAutoCompleteBox autoCompleteBox)
{
	ArrayList itemsList = new ArrayList();
	itemsList.Add("One");
	itemsList.Add("Two");
	itemsList.Add("Three");
	autoCompleteBox.DataSource = itemsList;
}
	
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	BindToArrayList(RadAutoCompleteBox1)
	BindToArray(RadAutoCompleteBox2)
End Sub 'Page_Load

Private Sub BindToArray(ByVal autoCompleteBox As RadAutoCompleteBox)
	Dim itemsList As String() = {"One", "Two", "Three"}
	autoCompleteBox.DataSource = itemsList
End Sub 'BindToArray

Private Sub BindToArrayList(ByVal autoCompleteBox As RadAutoCompleteBox)
	Dim itemsList As New ArrayList()
	itemsList.Add("One")
	itemsList.Add("Two")
	itemsList.Add("Three")
	autoCompleteBox.DataSource = itemsList
End Sub 'BindToArrayList
	
````


# See Also

 * [Overview]({%slug autocompletebox/server-side-programming/overview%})
