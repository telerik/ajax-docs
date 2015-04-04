---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList | UI for ASP.NET AJAX Documentation
description: Binding to Array or ArrayList
slug: listbox/data-binding/binding-to-array-or-arraylist
tags: binding,to,array,or,arraylist
published: True
position: 2
---

# Binding to Array or ArrayList



## 

__RadListBox__ can be bound to an __Array__ or __ArrayList__. This example shows how to bind __RadListBox__ objects to an Array and an ArrayList at runtime.

The declaration of the RadListBox objects includes no __DataSourceID__ property or <items> section:

````ASPNET
	    <telerik:radlistbox id="RadListBox1" runat="server"></telerik:radlistbox>
	    <telerik:radlistbox id="RadListBox2" runat="server"></telerik:radlistbox>
````



In the __Page_Load__ event handler, create the Array and the ArrayList, and bind them to the RadListBox objects. You must call the __DataBind__ method after setting the __DataSource__ property.



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            BindToArray(RadListBox1);
	            BindToArray(RadListBox2);
	        }
	    }
	    private void BindToArray(RadListBox listBox)
	    {
	        string[] itemsList = { "RadMenu", "RadListBox", "RadListBox" };
	        listBox.DataSource = itemsList;
	        listBox.DataBind();
	    }
	    private void BindToArrayList(RadListBox listBox)
	    {
	        ArrayList itemsList = new ArrayList();
	        itemsList.Add("RadMenu");
	        itemsList.Add("RadListBox");
	        itemsList.Add("RadListBox");
	        listBox.DataSource = itemsList;
	        listBox.DataBind();
	    } 
````
````VB.NET
	     
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            BindToArray(RadListBox1)
	            BindToArray(RadListBox2)
	        End If
	    End Sub
	    Private Sub BindToArray(ByVal listBox As RadListBox)
	        Dim itemsList As String() = {"RadMenu", "RadListBox", "RadListBox"}
	        listBox.DataSource = itemsList
	        listBox.DataBind()
	    End Sub
	    Private Sub BindToArrayList(ByVal listBox As RadListBox)
	        Dim itemsList As New ArrayList()
	        itemsList.Add("RadMenu")
	        itemsList.Add("RadListBox")
	        itemsList.Add("RadListBox")
	        listBox.DataSource = itemsList
	        listBox.DataBind()
	    End Sub
````


# See Also

 * [Overview]({%slug listbox/data-binding/overview%})

 * [Binding to DataTable, DataSet or DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})
