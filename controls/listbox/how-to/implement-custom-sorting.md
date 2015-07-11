---
title: Implement Custom Sorting
page_title: Implement Custom Sorting | RadListBox for ASP.NET AJAX Documentation
description: Implement Custom Sorting
slug: listbox/how-to/implement-custom-sorting
tags: implement,custom,sorting
published: True
position: 3
---

# Implement Custom Sorting



## 

By default, **RadListBox** sorts items by their **Text** property. This article will show you how to implement custom sorting - the items will be sorted by their **Value** property.

For this purpose, we will use the **IComparer** interface which exposes a method that compares two objects.

Here are the two steps that you need to perform:

* Create a class that implements **IComparer** for your custom sorting:



````C#
	     
public class SortListBoxItemsByValue : IComparer
{
    public int Compare(object x, object y)
    {
        RadListBoxItem p1 = new RadListBoxItem();
        RadListBoxItem p2 = new RadListBoxItem();
        if (x is RadListBoxItem)
            p1 = x as RadListBoxItem;
        else
            throw new ArgumentException("Object is not of type RadListBoxItem.");
        if (y is RadListBoxItem)
            p2 = y as RadListBoxItem;
        else
            throw new ArgumentException("Object is not of type RadListBoxItem.");
        int cmp = 0;
        if (p1.ListBox.Sort == RadListBoxSort.Ascending)
        {
            //here we compare the Values of the items
            cmp = String.Compare(p1.Value, p2.Value, !p1.ListBox.SortCaseSensitive);
        }
        if (p1.ListBox.Sort == RadListBoxSort.Descending)
        {
            //here we compare the Values of the items
            cmp = String.Compare(p1.Value, p2.Value, !p1.ListBox.SortCaseSensitive) * -1;
        }
        return cmp;
    }
}

````
````VB.NET
		
Public Class SortListBoxItemsByValue
	Implements IComparer
	Public Function Compare(ByVal x As Object, ByVal y As Object) As Integer
		Dim p1 As New RadListBoxItem()
		Dim p2 As New RadListBoxItem()
		If TypeOf x Is RadListBoxItem Then
			p1 = TryCast(x, RadListBoxItem)
		Else
			Throw New ArgumentException("Object is not of type RadListBoxItem.")
		End If
		If TypeOf y Is RadListBoxItem Then
			p2 = TryCast(y, RadListBoxItem)
		Else
			Throw New ArgumentException("Object is not of type RadListBoxItem.")
		End If
		Dim cmp As Integer = 0
		If p1.ListBox.Sort = RadListBoxSort.Ascending Then
			'here we compare the Values of the items
			cmp = [String].Compare(p1.Value, p2.Value, Not p1.ListBox.SortCaseSensitive)
		End If
		If p1.ListBox.Sort = RadListBoxSort.Descending Then
			'here we compare the Values of the items
			cmp = [String].Compare(p1.Value, p2.Value, Not p1.ListBox.SortCaseSensitive) * -1
		End If
		Return cmp
	End Function
End Class
	
````


* Call the overloaded **Items.Sort** methods passing your IComparer as a parameter:



````C#
	     
RadListBox1.Sort = RadListBoxSort.Ascending;
RadListBox1.Items.Sort(new SortListBoxItemsByValue());
				
````
````VB.NET
	
RadListBox1.Sort = RadListBoxSort.Ascending
RadListBox1.Items.Sort(New SortListBoxItemsByValue())
	
````


That's it. Now the ListBox items will be sorted by their **Value** instead of **Text** property.

