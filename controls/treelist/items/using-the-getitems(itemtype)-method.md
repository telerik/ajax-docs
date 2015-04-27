---
title: Using the GetItems(itemType) Method
page_title: Using the GetItems(itemType) Method | RadTreeList for ASP.NET AJAX Documentation
description: Using the GetItems(itemType) Method
slug: treelist/items/using-the-getitems(itemtype)-method
tags: using,the,getitems(itemtype),method
published: True
position: 2
---

# Using the GetItems(itemType) Method



In some scenarios you may need to access the treelist items outside of the item events. This is easy to do using the **GetItems(itemType)** method.

## Using GetItems(itemType)

The method accepts one parameter from the **TreeListItemType** enumerator and returns an array of all items from the RadTreeList instance that match the item type. Below you can see all the values of the enumerator and what types they return


>caption  

| TreeListItemType value | Returned object |
| ------ | ------ |
| **AlternatingItem** |A collection of all visible **TreeListDataItem** instances which ItemType value is **AlternatingItem** |
| **DetailTemplateItem** |A collection of all **TreeListDetailTemplateItem** objects|
| **EditFormItem** |A collection of all **TreeListEditForm** objects|
| **EditItem** |A collection of all **TreeListDataItem** objects that are currently edited|
| **FooterItem** |A collection of all **TreeListFooterItem** objects|
| **HeaderItem** |A collection of all **TreeListHeaderItem** objects|
| **Item** |A collection of all visible **TreeListDataItem** instances which ItemType value is **Item** |
| **NoRecordsTemplateItem** |A collection of all **TreeListNoRecordsItem** objects|
| **PagerItem** |A collection of all **TreeListPagerItem** objects|
| **SelectedItem** |A collection of all selected **TreeListDataItem** objects on the current page|

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
