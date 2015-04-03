---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList | UI for ASP.NET AJAX Documentation
description: Binding to Array or ArrayList
slug: dropdownlist/databinding/server-side-binding-/binding-to-array-or-arraylist
tags: binding,to,array,or,arraylist
published: True
position: 0
---

# Binding to Array or ArrayList



## 

__RadDropDownList__ can be bound either to __Array__ or __ArrayList__. The following example shows how to bind __RadDropDownList__ objects to both Array and ArrayList, at runtime.

The declaration of RadDropDownList objects includes no __DataSourceID__ property or __<items>__ section:

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" EmptySelectionMessage="sadasd" runat="server">
	        </telerik:RadDropDownList>
	        <telerik:RadDropDownList ID="RadDropDownList2" EmptySelectionMessage="sadasd" runat="server">
	        </telerik:RadDropDownList>
````



In the __Page_Load__ event handler, create the Array and ArrayList, and bind them to the RadDropDownList objects. The __DataBind__ method must be called after setting the __DataSource__ property.

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            BindToArrayList(RadDropDownList1);
	            BindToArray(RadDropDownList2);
	        }
	    }
	
	    private void BindToArrayList(Telerik.Web.UI.RadDropDownList dropDownList)
	    {
	        ArrayList itemsList = new ArrayList();
	        itemsList.Add("One");
	        itemsList.Add("Two");
	        itemsList.Add("Three");
	        dropDownList.DataSource = itemsList;
	        dropDownList.DataBind();
	    }
	
	    private void BindToArray(Telerik.Web.UI.RadDropDownList dropDownList)
	    {
	        string[] itemsList = { "One", "Two", "Three" };
	        dropDownList.DataSource = itemsList;
	        dropDownList.DataBind();
	    }
````



````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            BindToArrayList(RadDropDownList1)
	            BindToArray(RadDropDownList2)
	        End If
	    End Sub
	
	    Private Sub BindToArrayList(dropDownList As Telerik.Web.UI.RadDropDownList)
	        Dim itemsList As New ArrayList()
	        itemsList.Add("One")
	        itemsList.Add("Two")
	        itemsList.Add("Three")
	        dropDownList.DataSource = itemsList
	        dropDownList.DataBind()
	    End Sub
	
	    Private Sub BindToArray(dropDownList As Telerik.Web.UI.RadDropDownList)
	        Dim itemsList As String() = {"One", "Two", "Three"}
	        dropDownList.DataSource = itemsList
	        dropDownList.DataBind()
	    End Sub
````


>end
