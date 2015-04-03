---
title: Binding to an ArrayList
page_title: Binding to an ArrayList | UI for ASP.NET AJAX Documentation
description: Binding to an ArrayList
slug: grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-an-arraylist
tags: binding,to,an,arraylist
published: True
position: 2
---

# Binding to an ArrayList



## 

You can use a wide variety of custom objects as data sources for __RadGrid__. The only requirement is that the custom objects must implement the __ITypedList__, __IEnumarable__, or __ICustomTypeDescriptor__ interface. The example below demonstrates how to use one of these (__ArrayList__) to provide the structure of a __RadGrid__ control:

>tabbedCode

````C#
	    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
	        GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource1" PageSize="10">
	        <MasterTableView AutoGenerateColumns="true">
	        </MasterTableView>
	    </telerik:RadGrid>
````



````VB.NET
	    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
	        GridLines="None" PageSize="10">
	        <MasterTableView AutoGenerateColumns="true">
	        </MasterTableView>
	    </telerik:RadGrid>
````


>end

Code-behind:

>tabbedCode

````C#
	
	    protected void RadGrid1_NeedDataSource1(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
	    {
	        ArrayList list = new ArrayList();
	        list.Add("string1");
	        list.Add("string2");
	        list.Add("string3");
	        RadGrid1.DataSource = list;
	    }
````



````VB.NET
	    Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As GridNeedDataSourceEventArgs)
	        Dim list As New ArrayList
	        list.Add("string1")
	        list.Add("string2")
	        list.Add("string3")
	        RadGrid1.DataSource = list
	    End Sub
````


>end
