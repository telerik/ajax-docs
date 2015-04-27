---
title: Binding to Array or ArrayList 
page_title: Binding to Array or ArrayList  | RadToolBar for ASP.NET AJAX Documentation
description: Binding to Array or ArrayList 
slug: toolbar/data-binding/binding-to-array-or-arraylist-
tags: binding,to,array,or,arraylist,
published: True
position: 1
---

# Binding to Array or ArrayList 



You can bind **RadToolBar** to an object-based data source such as **ObjectDataSource** or any class that implements the **IEnumerable** interface.

## Binding to an object that supports IEnumerable

Instead of going through an **ObjectDataSource**, you can bind **RadToolBar** directly to any collection that implements the **ICollection** or **IEnumerable** interface.Mapping properties of the objects in the collection to properties of the buttons works exactly the same way as when using **ObjectDataSource**.

To bind directly to a collection, you must bind the toolbar at runtime, using the following steps:

1. Create the collection.

1. Add items to the collection. Depending on the type of the collection, these can be strings, or more complex objects with properties that correspond to **RadToolBarButton** properties.

1. Set the **DataSource** property of **RadToolBar** to the instance of the collection.

1. Call the **DataBind** method.

The following example shows a toolbar bound to an **ArrayList**. The items in the list are simple strings, so the buttons map their **Text** property automatically to the strings in the list:



````C#
	    
	    private ArrayList GenerateArrayList()
	    {
	        ArrayList itemsList = new ArrayList();
	        itemsList.Add("One");
	        itemsList.Add("Two");
	        itemsList.Add("Three");
	        return itemsList;
	    }
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadToolBar1.DataSource = GenerateArrayList();
	            RadToolBar1.DataBind();
	        }
	    }
	
````
````VB.NET
	
	    Private Function GenerateArrayList() As ArrayList
	
	        Dim itemsList As New ArrayList()
	        itemsList.Add("One")
	        itemsList.Add("Two")
	        itemsList.Add("Three")
	        Return itemsList
	
	    End Function 'GenerateArrayList
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	
	        If Not IsPostBack Then
	            RadToolBar1.DataSource = GenerateArrayList()
	            RadToolBar1.DataBind()
	        End If
	
	    End Sub
	
	#End Region
	End Class
````



# See Also

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Binding to DataTable]({%slug toolbar/data-binding/binding-to-datatable%})

 * [Binding to ASP DataSource Components]({%slug toolbar/data-binding/binding-to-asp-datasource-components%})
