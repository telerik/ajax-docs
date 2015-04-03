---
title: Working at Server-side
page_title: Working at Server-side | UI for ASP.NET AJAX Documentation
description: Working at Server-side
slug: listbox/radlistbox-items/working-at-server-side
tags: working,at,server-side
published: True
position: 3
---

# Working at Server-side



Using the server-side API, you can programmatically find, add, remove, disable, or select items in __RadListBox.__

## Adding items

Use the __Add__ method of the __RadListBoxItemCollection__ object to add items programmatically:

>tabbedCode

````C#
	     
	protected void Page_Load(object sender, EventArgs e)
	{
	   if (!IsPostBack)
	   {
	       RadListBoxItem item = new RadListBoxItem("Item 1", "1");
	       RadListBox1.Items.Add(item);
	       //copy the first item
	       RadListBoxItem item2 = item.Clone();
	       RadListBox1.Items.Add(item2);
	       //make the third item disabled
	       RadListBoxItem item3 = new RadListBoxItem();
	       item3.Text = "Item 3";
	       item3.Value = "3";
	       item3.Enabled = false;
	       RadListBox1.Items.Add(item3);
	   }
	} 		
````



````VB.NET
	     
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            Dim item As New RadListBoxItem("Item 1", "1")
	            RadListBox1.Items.Add(item)
	            'copy the first item
	            Dim item2 As RadListBoxItem = item.Clone()
	            RadListBox1.Items.Add(item2)
	            'make the third item disabled
	            Dim item3 As New RadListBoxItem()
	            item3.Text = "Item 3"
	            item3.Value = "3"
	            item3.Enabled = False
	            RadListBox1.Items.Add(item3)
	        End If
	    End Sub
````


>end

## Removing items

Use the __Remove__ method of the __RadListBoxItemCollection__ object to remove items:

>tabbedCode

````C#
	     
	
	RadListBoxItem itemToRemove = RadListBox1.FindItemByText("Item 3");
	RadListBox1.Items.Remove(itemToRemove);		
````



````VB.NET
	
	    Dim itemToRemove As RadListBoxItem = RadListBox1.FindItemByText("Item 3")
	    RadListBox1.Items.Remove(itemToRemove) 
	
````


>end

## Sorting items

Use the __SortItems__ method of __RadListBox__ object to sort items:

>tabbedCode

````C#
	     
	RadListBox1.Sort = RadListBoxSort.Ascending;
	RadListBox1.SortItems();
	
````



````VB.NET
	
	    RadListBox1.Sort = RadListBoxSort.Ascending
	    RadListBox1.SortItems()
	
````


>end

You can also use the __Sort__ method of the __RadListBoxItemCollection__ object to sort items:

>tabbedCode

````C#
	     
	RadListBox1.Items.Sort();
				
````



````VB.NET
	
	    RadListBox1.Items.Sort()
	
````


>end

You can pass an object of type IComparer as an argument of the function:

>tabbedCode

````C#
	
	protected void Button1_Click(object sender, EventArgs e)
	{
	    RadListBox1.Items.Sort(new CustomComparer());
	}
	
	public class CustomComparer : System.Collections.IComparer
	{
	    public CustomComparer() { }
	
	    public int Compare(object x, object y)
	    {
	        RadListBoxItem ItemX = (RadListBoxItem)x;
	        RadListBoxItem ItemY = (RadListBoxItem)y;
	
	        return ItemX.Text.CompareTo(ItemY.Text);
	    }
	}
	
````



````VB.NET
	
	    Protected Sub Button1_Click(sender As Object, e As EventArgs)
	        RadListBox1.Items.Sort(New CustomComparer())
	    End Sub
	
	    Public Class CustomComparer
	        Implements System.Collections.IComparer
	        Public Sub New()
	        End Sub
	
	        Public Function Compare(x As Object, y As Object) As Integer
	            Dim ItemX As RadListBoxItem = DirectCast(x, RadListBoxItem)
	            Dim ItemY As RadListBoxItem = DirectCast(y, RadListBoxItem)
	
	            Return ItemX.Text.CompareTo(ItemY.Text)
	        End Function
	    End Class
	
````


>end

You can also use a lambda expression as an argument:

>tabbedCode

````C#
	
	RadListBox1.Items.Sort(item => item.Text);
	
````



````VB.NET
	
	    RadListBox1.Items.Sort(Function(item) item.Text)
	
````


>end

## Disabling items

Use the __Enable__ property of the __RadListBoxItem__ object to enable or disable an item:

>tabbedCode

````C#
	     
	RadListBoxItem itemToDisable = RadListBox1.FindItemByText("Item 3");
	itemToDisable.Enabled = false;
	RadListBox1.Items[0].Enabled = false;
	
````



````VB.NET
	
	
	    Dim itemToDisable As RadListBoxItem = RadListBox1.FindItemByText("Item 3")
	    itemToDisable.Enabled = False
	    RadListBox1.Items(0).Enabled = False 
	
````


>end

## Selecting items

Use the __Selected__ property of an item to select it, or use the __SelectedIndex__ property of RadListBox. Note that to select multiple items you need to set the __SelectionMode="Multiple"__ property.

>tabbedCode

````C#
	     
	RadListBoxItem itemToSelect = RadListBox1.FindItemByText("Item 3");
	itemToSelect.Selected = true;
	RadListBox1.Items[0].Selected = true;
				
````



````VB.NET
	
	    Dim itemToSelect As RadListBoxItem = RadListBox1.FindItemByText("Item 3")
	    itemToSelect.Selected = True
	    RadListBox1.Items(0).Selected = True 
	
````


>end

## Finding items

You can locate an item by searching on the __Text__ or __Value__ properties. You can retrieve either the index of the item or a reference to the item itself. Use the following RadListBox methods:

* __FindItemByText__

* __FindItemByValue__

* __FindItemIndexByValue__



## Collections of items

You can use the following collections of RadListBoxItem objects:

* __Items__ - retrieves a list of all items

* __SelectedItems__ - retrieves a list of all selected items

* __CheckedItems__ - retrieves a list of all checked items (when the __CheckBoxes__ property is True)





# See Also

 * [Overview]({%slug listbox/radlistbox-items/overview%})

 * [Declaring the Items Inline]({%slug listbox/radlistbox-items/declaring-the-items-inline%})

 * [Loading Items from XML]({%slug listbox/radlistbox-items/loading-items-from-xml%})

 * [Working at Client-side]({%slug listbox/radlistbox-items/working-at-client-side%})

 * [Add/Remove/Disable Items Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/serverside/addremovedisable/defaultcs.aspx)
