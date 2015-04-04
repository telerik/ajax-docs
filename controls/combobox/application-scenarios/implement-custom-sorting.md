---
title: Implement Custom Sorting
page_title: Implement Custom Sorting | UI for ASP.NET AJAX Documentation
description: Implement Custom Sorting
slug: combobox/application-scenarios/implement-custom-sorting
tags: implement,custom,sorting
published: True
position: 3
---

# Implement Custom Sorting



## 

By default, __RadComboBox__ sorts items by their __Text__ property. This article will show you how to implement custom sorting - the items will be sorted by their __Value__ property.

For this purpose, we will use the __IComparer__ interface which exposes a method that compares two objects.

Here are the two steps that you need to perform:

1. Create a class that implements __IComparer__ for your custom sorting:



````C#
	     
	
	public class SortComboItemsByValue : IComparer
	{
	   public int Compare(object x, object y)
	   {
	       RadComboBoxItem p1 = new RadComboBoxItem();
	       RadComboBoxItem p2 = new RadComboBoxItem();
	       if (x is RadComboBoxItem)
	           p1 = x as RadComboBoxItem;
	       else
	           throw new ArgumentException("Object is not of type RadComboBoxItem.");
	       if (y is RadComboBoxItem)
	           p2 = y as RadComboBoxItem;
	       else
	           throw new ArgumentException("Object is not of type RadComboBoxItem.");
	       int cmp = 0;
	       if (p1.ComboBoxParent.Sort == RadComboBoxSort.Ascending)
	       {
	           //here we compare the Values of the items
	           cmp = String.Compare(p1.Value, p2.Value, !p1.ComboBoxParent.SortCaseSensitive);
	       }
	       if (p1.ComboBoxParent.Sort == RadComboBoxSort.Descending)
	       {
	           //here we compare the Values of the items
	           cmp = String.Compare(p1.Value, p2.Value, !p1.ComboBoxParent.SortCaseSensitive) * -1;
	       }
	       return cmp;
	   }
	} 			
````
````VB.NET
	
	
	    Public Class SortComboItemsByValue
	        Implements IComparer
	        Public Function Compare(ByVal x As Object, ByVal y As Object) As Integer
	            Dim p1 As New RadComboBoxItem()
	            Dim p2 As New RadComboBoxItem()
	            If TypeOf x Is RadComboBoxItem Then
	                p1 = TryCast(x, RadComboBoxItem)
	            Else
	                Throw New ArgumentException("Object is not of type RadComboBoxItem.")
	            End If
	            If TypeOf y Is RadComboBoxItem Then
	                p2 = TryCast(y, RadComboBoxItem)
	            Else
	                Throw New ArgumentException("Object is not of type RadComboBoxItem.")
	            End If
	            Dim cmp As Integer = 0
	            If p1.ComboBoxParent.Sort = RadComboBoxSort.Ascending Then
	                'here we compare the Values of the items
	                cmp = [String].Compare(p1.Value, p2.Value, Not p1.ComboBoxParent.SortCaseSensitive)
	            End If
	            If p1.ComboBoxParent.Sort = RadComboBoxSort.Descending Then
	                'here we compare the Values of the items
	                cmp = [String].Compare(p1.Value, p2.Value, Not p1.ComboBoxParent.SortCaseSensitive) * -1
	            End If
	            Return cmp
	        End Function
	    End Class
	
````


2. Call the overloaded __SortItems__ or __Items.Sort__ methods passing your IComparer as a parameter:



````C#
	     
	    RadComboBox2.Sort = RadComboBoxSort.Ascending;
	    RadComboBox2.SortItems(new SortComboItemsByValue());
				
````
````VB.NET
	
		RadComboBox2.Sort = RadComboBoxSort.Ascending
	    RadComboBox2.SortItems(New SortComboItemsByValue())
	
````


That's it. Now the combobox items will be sorted by their __Values__ instead of Text.

# See Also

 * [Sorting]({%slug combobox/functionality/sorting%})
