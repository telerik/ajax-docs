---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList | UI for ASP.NET AJAX Documentation
description: Binding to Array or ArrayList
slug: searchbox/data-binding/binding-to-array-or-arraylist
tags: binding,to,array,or,arraylist
published: True
position: 1
---

# Binding to Array or ArrayList



Both __Array__ and __ArrayList__ could be used as a Data Source by RadSearchBox. The following example demonstrates a valid use of both Data Sources, defining them at runtime.

## Binding to Array and ArrayList at runtime

The declarations of the RadSearchBox objects does not include DataSourceID property:

````ASPNET
		 <telerik:RadSearchBox runat="server" ID="RadSearchBox1" >
	            <DropDownSettings Height="400" Width="300" />
	        </telerik:RadSearchBox>
	      <telerik:RadSearchBox runat="server" ID="RadSearchBox2" >
	            <DropDownSettings Height="400" Width="300" />
	        </telerik:RadSearchBox>
````



One can use the __Page_Load__ event handler to create the Array and ArrayList by setting the __DataSource__ property of RadSearchBox accordingly.



````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        BindToArrayList(RadSearchBox1);
	        BindToArray(RadSearchBox2);
	    }
	
	    private void BindToArray(RadSearchBox searchBox)
	    {
	        string[] itemsList = { "One", "Two", "Three" };
	        searchBox.DataSource = itemsList;
	    }
	
	    private void BindToArrayList(RadSearchBox searchBox)
	    {
	        ArrayList itemsList = new ArrayList();
	        itemsList.Add("One");
	        itemsList.Add("Two");
	        itemsList.Add("Three");
	        searchBox.DataSource = itemsList;
	    }
	
````
````VB.NET
	
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	
	        BindToArrayList(RadSearchBox1)
	        BindToArray(RadSearchBox2)
	    End Sub
	
	    Private Sub BindToArray(searchBox As RadSearchBox)
	        Dim itemsList As String() = {"One", "Two", "Three"}
	        searchBox.DataSource = itemsList
	    End Sub
	
	    Private Sub BindToArrayList(searchBox As RadSearchBox)
	        Dim itemsList As New ArrayList()
	        itemsList.Add("One")
	        itemsList.Add("Two")
	        itemsList.Add("Three")
	        searchBox.DataSource = itemsList
	    End Sub
	
````

