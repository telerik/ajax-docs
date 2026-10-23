---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList - RadDropDownList
description: Check our Web Forms article about Binding to Array or ArrayList.
slug: dropdownlist/databinding/server-side-binding-/binding-to-array-or-arraylist
components: ["dropdownlist"]
tags: binding,to,array,or,arraylist
published: True
position: 0
---

# Binding to Array or ArrayList



## 

**RadDropDownList** can be bound either to **Array** or **ArrayList**. The following example shows how to bind **RadDropDownList** objects to both Array and ArrayList, at runtime.

The declaration of RadDropDownList objects includes no **DataSourceID** property or **`<items>`** section:

````ASP.NET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" EmptySelectionMessage="sadasd" runat="server">
</telerik:RadDropDownList>
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList2" EmptySelectionMessage="sadasd" runat="server">
</telerik:RadDropDownList>
````



In the **Page_Load** event handler, create the Array and ArrayList, and bind them to the RadDropDownList objects. The **DataBind** method must be called after setting the **DataSource** property.



> caption Example: Bind RadDropDownList to an Array and an ArrayList

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		// Bind each control once when the page is first loaded.
		BindToArrayList(RadDropDownList1);
		BindToArray(RadDropDownList2);
	}
}

private void BindToArrayList(Telerik.Web.UI.RadDropDownList dropDownList)
{
	// Create a collection of values for the first drop-down list.
	ArrayList itemsList = new ArrayList();
	itemsList.Add("One");
	itemsList.Add("Two");
	itemsList.Add("Three");
	dropDownList.DataSource = itemsList;
	dropDownList.DataBind();
}

private void BindToArray(Telerik.Web.UI.RadDropDownList dropDownList)
{
	// Bind the second drop-down list to a string array.
	string[] itemsList = { "One", "Two", "Three" };
	dropDownList.DataSource = itemsList;
	dropDownList.DataBind();
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		' Bind each control once when the page is first loaded.
		BindToArrayList(RadDropDownList1)
		BindToArray(RadDropDownList2)
	End If
End Sub

Private Sub BindToArrayList(dropDownList As Telerik.Web.UI.RadDropDownList)
	' Create a collection of values for the first drop-down list.
	Dim itemsList As New ArrayList()
	itemsList.Add("One")
	itemsList.Add("Two")
	itemsList.Add("Three")
	dropDownList.DataSource = itemsList
	dropDownList.DataBind()
End Sub

Private Sub BindToArray(dropDownList As Telerik.Web.UI.RadDropDownList)
	' Bind the second drop-down list to a string array.
	Dim itemsList As String() = {"One", "Two", "Three"}
	dropDownList.DataSource = itemsList
	dropDownList.DataBind()
End Sub
````

