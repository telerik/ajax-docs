---
title: Working with Items at Server-Side
page_title: Working with Items at Server-Side | RadComboBox for ASP.NET AJAX Documentation
description: Working with Items at Server-Side
slug: combobox/radcombobox-items/working-with-items-at-server-side
tags: working,with,items,at,server-side
published: True
position: 3
---

# Working with Items at Server-Side



Using the server-side API, you can programmatically add, remove, disable, or select items in **RadComboBox**.

## Adding items

Use the **Add** method of the **RadComboBoxItemCollection** object to add items programmatically:



````C#
	     
protected void Page_Load(object sender, EventArgs e)
{  
	if (!Page.IsPostBack)  
	{    
		RadComboBoxItem item1 = new RadComboBoxItem();    
		item1.Text = "Item1";   
		item1.Value = "1";    
		RadComboBox1.Items.Add(item1);    
		RadComboBoxItem item2 = new RadComboBoxItem();   
		item2.Text = "Item2";    
		item2.Value = "2";   
		RadComboBox1.Items.Add(item2);    
		RadComboBoxItem item3 = new RadComboBoxItem();    
		item3.Text = "Item3";   
		item3.Value = "3";   
		RadComboBox1.Items.Add(item3);  
	}
}
				
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load

	If Not Page.IsPostBack Then
		Dim item1 As New RadComboBoxItem()
		item1.Text = "Item1"
		item1.Value = "1"
		RadComboBox1.Items.Add(item1)
		Dim item2 As New RadComboBoxItem()
		item2.Text = "Item2"
		item2.Value = "2"
		RadComboBox1.Items.Add(item2)
		Dim item3 As New RadComboBoxItem()
		item3.Text = "Item3"
		item3.Value = "3"
		RadComboBox1.Items.Add(item3)
	End If
End Sub 'Page_Load
	
````


## Removing items

Use the **Remove** method of the **RadComboBoxItemCollection** object to remove items:



````C#
	     
//Find the desired item and remove it.
RadComboBoxItem item = RadComboBox1.FindItemByText("Item1");
item.Remove();

//Remove an item from the Items collection. The code line below removes the first item. Its index is 0.
RadComboBox1.Items.Remove(0);
				
````
````VB.NET
	
	
'Find the desired item and remove it.
Dim item As RadComboBoxItem = RadComboBox1.FindItemByText("Item1")
item.Remove()

'Remove an item from the Items collection. The code line below removes the first item. Its index is 0.
RadComboBox1.Items.Remove(0)
	
````


## Disabling items

Use the **Enable** property of the **RadComboBoxItem** object to enable or disable an item:



````C#
	     
//Find the desired item and disable it.
RadComboBoxItem item = RadComboBox1.FindItemByText("Item1");
item.Enabled = false;
				
````
````VB.NET
	
'Find the item and disable it.
Dim item As RadComboBoxItem = RadComboBox1.FindItemByText("Item1")
item.Enabled = False
	
````


## Selecting Items

Use the **Selected** property of an item to select it, or use the **SelectedIndex** property of RadComboBox:



````C#
	     
	
//Use RadComboBoxItem.Selected
RadComboBoxItem item = RadComboBox1.FindItemByText("Item 2");
item.Selected = true;

//Use RadComboBox.SelectedIndex
int index = RadComboBox1.FindItemIndexByValue("2");
RadComboBox1.SelectedIndex = index;

//You can also use the SelectedValue property.
RadComboBox1.SelectedValue = value;
				
````
````VB.NET
	
	
'Use RadComboBoxItem.Selected
Dim item As RadComboBoxItem = RadComboBox1.FindItemByText("Item 2")
item.Selected = True

'Use RadComboBox.SelectedIndex
Dim index As Integer = RadComboBox1.FindItemIndexByValue("2")
RadComboBox1.SelectedIndex = index

'You can also use the SelectedValue property.
RadComboBox1.SelectedValue = value
	
````


## Finding Items

You can locate by searching on the **Text** or **Value** properties. You can retrieve either the index of the item or a reference to the item itself. Use the RadComboBox methods:

* FindItemByText

* FindItemByValue

* FindItemIndexByText

* FindItemIndexByValue



````C#
	     
	
using System;
using Telerik.Web.UI;

namespace RadWindow
{    
	public partial class _Default : System.Web.UI.Page    
	{        
		protected void Page_Load(object sender, EventArgs e)        
		{            
			RadComboBox1.Items.Add(new RadComboBoxItem("One", "1"));            
			RadComboBox1.Items.Add(new RadComboBoxItem("Two", "2"));           
			RadComboBox1.Items.Add(new RadComboBoxItem("Three", "3"));        
		}
		protected void Button1_Click(object sender, EventArgs e)        
		{            RadComboBoxItem item = null;            
			int index = -1;
			//Get a reference to a RadComboBoxItem with Text property = "Two".            
			item = RadComboBox1.FindItemByText("Two");

			//Get a reference to a RadComboBoxItem with Value property = "2".            
			item = RadComboBox1.FindItemByValue("2");

			//Get the index of a RadComboBoxItem with Text property = "Two".            
			index = RadComboBox1.FindItemIndexByText("Two");            
			item = RadComboBox1.Items[index];

			//Get the index of a RadComboBoxItem with Value property = "2".            
			index = RadComboBox1.FindItemIndexByValue("2");            
			item = RadComboBox1.Items[index];        
		}    
	}
}
				
````
````VB.NET
	
	
Imports System
Imports Telerik.Web.UI

namespace RadWindow 

	Public Partial Class _Default  Inherits System.Web.UI.Page  
		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			RadComboBox1.Items.Add(New RadComboBoxItem("One", "1"))
			RadComboBox1.Items.Add(New RadComboBoxItem("Two", "2"))
			RadComboBox1.Items.Add(New RadComboBoxItem("Three", "3"))
		End Sub
		Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
			Dim item As RadComboBoxItem = Nothing
			Dim index As Integer = -1
			'Get a reference to a RadComboBoxItem with Text property = "Two".   
			item = RadComboBox1.FindItemByText("Two")

			'Get a reference to a RadComboBoxItem with Value property = "2".   
			item = RadComboBox1.FindItemByValue("2")

			'Get the index of a RadComboBoxItem with Text property = "Two".  
			index = RadComboBox1.FindItemIndexByText("Two")
			item = RadComboBox1.Items(index)

			'Get the index of a RadComboBoxItem with Value property = "2".   
			index = RadComboBox1.FindItemIndexByValue("2")
			item = RadComboBox1.Items(index)
		End Sub
	End Class
End Namespace
	
````


For a live example, see: [Add/Remove/Disable Items](http://demos.telerik.com/aspnet-ajax/combobox/examples/programming/addremovedisable/defaultcs.aspx)

# See Also

 * [Working with Items in Client-Side]({%slug combobox/radcombobox-items/working-with-items-in-client-side%})
