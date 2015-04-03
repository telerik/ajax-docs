---
title: Binding to Array or ArrayList
page_title: Binding to Array or ArrayList | UI for ASP.NET AJAX Documentation
description: Binding to Array or ArrayList
slug: tagcloud/data-binding/binding-to-array-or-arraylist
tags: binding,to,array,or,arraylist
published: True
position: 2
---

# Binding to Array or ArrayList



## 

__RadTagCloud__can be bound to an __Array__ or __ArrayList__. This example shows how to bind __RadTagCloud__ to an __Array__ and __ArrayList__ at runtime

The declaration of the __RadTagCloud__ objects includes no __DataSourceID__property or <Items> section:

````ASPNET
	    <telerik:RadTagCloud ID="RadTagCloud1" runat="server" Width="400px">
	    </telerik:RadTagCloud>
	    <telerik:RadTagCloud ID="RadTagCloud2" runat="server" Width="400px">
	    </telerik:RadTagCloud>
````



In the __Page_Load__ event handler, create the __Array__ and the __ArrayList__, and bind them to the __RadTagCloud__ objects. You must call the __DataBind__ method after setting the __DataSource__ property.

>tabbedCode

````C#
	
	
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				BindToArrayList(RadTagCloud1);
				BindToArray(RadTagCloud2);
			}
		}
	
		private void BindToArray(RadTagCloud cloud)
		{
			string[] itemsList = { "Energy", "Oil", "Technology" };
			cloud.DataSource = itemsList; cloud.DataBind();
		}
	
		private void BindToArrayList(RadTagCloud cloud)
		{
			ArrayList itemsList = new ArrayList();
			itemsList.Add("One");
			itemsList.Add("Two");
			itemsList.Add("Three");
			cloud.DataSource = itemsList;
			cloud.DataBind();
		}
	
````



````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        If Not Page.IsPostBack Then
	            BindToArrayList(RadTagCloud1)
	            BindToArray(RadTagCloud2)
	        End If
	    End Sub 'Page_Load
	
	    Private Sub BindToArray(ByVal cloud As RadTagCloud)
	        Dim itemsList As String() = {"Energy", "Oil", "Technology"}
	        cloud.DataSource = itemsList
	        cloud.DataBind()
	    End Sub 'BindToArray
	
	    Private Sub BindToArrayList(ByVal cloud As RadTagCloud)
	        Dim itemsList As New ArrayList()
	        itemsList.Add("One")
	        itemsList.Add("Two")
	        itemsList.Add("Three")
	        cloud.DataSource = itemsList
	        cloud.DataBind()
	    End Sub 'BindToArrayList
	
````


>end
