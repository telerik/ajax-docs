---
title: Using the GetItems(itemType) Method
page_title: Using the GetItems(itemType) Method | UI for ASP.NET AJAX Documentation
description: Using the GetItems(itemType) Method
slug: treelist/items/using-the-getitems(itemtype)-method
tags: using,the,getitems(itemtype),method
published: True
position: 2
---

# Using the GetItems(itemType) Method



In some scenarios you may need to access the treelist items outside of the item events. This is easy to do using the __GetItems(itemType)__ method.

## Using GetItems(itemType)

The method accepts one parameter from the __TreeListItemType__ enumerator and returns an array of all items from the RadTreeList instance that match the item type. Below you can see all the values of the enumerator and what types they return


>caption  

| TreeListItemType value | Returned object |
| ------ | ------ |
| __AlternatingItem__ |A collection of all visible __TreeListDataItem__ instances which ItemType value is __AlternatingItem__ |
| __DetailTemplateItem__ |A collection of all __TreeListDetailTemplateItem__ objects|
| __EditFormItem__ |A collection of all __TreeListEditForm__ objects|
| __EditItem__ |A collection of all __TreeListDataItem__ objects that are currently edited|
| __FooterItem__ |A collection of all __TreeListFooterItem__ objects|
| __HeaderItem__ |A collection of all __TreeListHeaderItem__ objects|
| __Item__ |A collection of all visible __TreeListDataItem__ instances which ItemType value is __Item__ |
| __NoRecordsTemplateItem__ |A collection of all __TreeListNoRecordsItem__ objects|
| __PagerItem__ |A collection of all __TreeListPagerItem__ objects|
| __SelectedItem__ |A collection of all selected __TreeListDataItem__ objects on the current page|

Following is a sample of how you can use the method to access different treelist items:



````C#
	    protected void RadTreeList1_PreRender(object sender, EventArgs e)
	    {
	        //the detail item of the first data item in the RadTreeList control
	        TreeListDetailTemplateItem detailItems = RadTreeList1.GetItems(TreeListItemType.DetailTemplateItem)[0] as TreeListDetailTemplateItem;  
	
	        //the header item
	        TreeListHeaderItem header = RadTreeList1.GetItems(TreeListItemType.HeaderItem)[0] as TreeListHeaderItem;
	       
	       //the first alternating data item
	        TreeListDataItem altItem = RadTreeList1_NeedDataSource.GetItems(TreeListItemType.AlternatingItem)[0] as TreeListDataItem;
	    }
````
````VB.NET
	    Protected Sub RadTreeList1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	        'the detail item of the first data item in the RadTreeList control
	        Dim detailItems As TreeListDetailTemplateItem = TryCast(RadTreeList1.GetItems(TreeListItemType.DetailTemplateItem)(0), TreeListDetailTemplateItem)
	
	        'the header item
	        Dim header As TreeListHeaderItem = TryCast(RadTreeList1.GetItems(TreeListItemType.HeaderItem)(0), TreeListHeaderItem)
	
	        'the first alternating data item
	        Dim altItem As TreeListDataItem = TryCast(RadTreeList1_NeedDataSource.GetItems(TreeListItemType.AlternatingItem)(0), TreeListDataItem)
	    End Sub
````


# See Also

 * [Overview]({%slug treelist/items/overview%})

 * [Accessing Cells and Items]({%slug treelist/items/accessing-cells-and-items%})
