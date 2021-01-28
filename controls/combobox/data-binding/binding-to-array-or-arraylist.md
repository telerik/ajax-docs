---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList - RadComboBox
description: Check our Web Forms article about Binding to Array or ArrayList.
slug: combobox/data-binding/binding-to-array-or-arraylist
tags: binding,to,array,or,arraylist
published: True
position: 1
---

# Binding to Array or ArrayList



## 

**RadComboBox** can be bound either to **Array** or **ArrayList**. The following example shows how to bind **RadComboBox** objects to both Array and ArrayList, at runtime.

The declaration of RadComboBox objects includes no **DataSourceID** property or **`<items>`** section:

````ASPNET
<telerik:radcombobox id="RadComboBox1" runat="server" />
<telerik:radcombobox id="RadComboBox2" runat="server" />
````



In the **Page_Load** event handler, create the Array and ArrayList, and bind them to the RadComboBox objects. The **DataBind** method must be called after setting the **DataSource** property.



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		BindToArrayList(RadComboBox1);
		BindToArray(RadComboBox2);
	}
}

private void BindToArray(RadComboBox combo)
{
	string[] itemsList = { "One", "Two", "Three" };
	combo.DataSource = itemsList;
	combo.DataBind();
}

private void BindToArrayList(RadComboBox combo)
{
	ArrayList itemsList = new ArrayList();
	itemsList.Add("One");
	itemsList.Add("Two");
	itemsList.Add("Three");
	combo.DataSource = itemsList;
	combo.DataBind();
}
	
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		BindToArrayList(RadComboBox1)
		BindToArray(RadComboBox2)
	End If
End Sub 'Page_Load

Private Sub BindToArray(ByVal combo As RadComboBox)
	Dim itemsList As String() = {"One", "Two", "Three"}
	combo.DataSource = itemsList
	combo.DataBind()
End Sub 'BindToArray

Private Sub BindToArrayList(ByVal combo As RadComboBox)
	Dim itemsList As New ArrayList()
	itemsList.Add("One")
	itemsList.Add("Two")
	itemsList.Add("Three")
	combo.DataSource = itemsList
	combo.DataBind()
End Sub 'BindToArrayList
	
````

