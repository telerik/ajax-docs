---
title: Accessing the Elements of Advanced Type Pager
page_title: Accessing the Elements of Advanced Type Pager | UI for ASP.NET AJAX Documentation
description: Accessing the Elements of Advanced Type Pager
slug: grid/functionality/paging/changing-the-default-pager/accessing-the-elements-of-advanced-type-pager
tags: accessing,the,elements,of,advanced,type,pager
published: True
position: 3
---

# Accessing the Elements of Advanced Type Pager



## 

When using the advanced grid pager/slider, you can customize the properties of the buttons or labels inside the pager or the slider pager itself. The following steps describe how to access these controls:

1. Create a handler for the grid's __ItemCreated__ event.

1. In the event handler, check if __e.Item__ is an instance of __GridPagerItem__.

1. Use the __FindControl__ method of __e.Item__ to locate the controls inside the pager. The following table lists the ID's of the controls in the pager when __Mode__ is "NextPrevAndNumeric":


|  __Control__  |  __Type__  |  __ID__  |
| ------ | ------ | ------ |
|"Page Size:" text|Label|ChangePageSizeLabel|
|"Page Size" combo box|RadComboBox|PageSizeComboBox|__Example__:

>tabbedCode

````C#
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridPagerItem)
	        {
	            Label lblPageSize = (Label)e.Item.FindControl("ChangePageSizeLabel");
	            lblPageSize.Text = "Number of items:";
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs) Handles RadGrid1.ItemDataBound()
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim lblPageSize As Label = DirectCast(e.Item.FindControl("ChangePageSizeLabel"), Label)
	            lblPageSize.Text = "Number of items:"
	        End If
	    End Sub
````
>end

1. The following table lists the ID's of the controls in the pager when __Mode__ is "Advanced" or "Slider":


>caption  

| Control | Type | ID |
| ------ | ------ | ------ |
|"Go to page" text|Label|GoToPageLabel|
|"Go to page" input|RadNumericTextBox|GoToPageTextBox|
|"Go to page" " __of__ " text|Label|PageOfLabel|
|"Go to page" link button|Button|GoToPageLinkButton|
|"Change page size" text|Label|ChangePageSizeLabel|
|"Change page size" input|RadNumericTextBox|ChangePageSizeTextBox|
|"Change page size" link button|Button|ChangePageSizeLinkButton|
|Slider pager|RadSlider|GridSliderPager|

>tabbedCode

````ASPNET
	<telerik:RadGrid
	    ID="RadGrid1"
	    runat="server"
	    Width="95%"
	    Skin="Vista"
	    AllowSorting="True"
	    DataSourceID="SqlDataSource1"
	    AllowPaging="True" PageSize="5"
	    OnItemCreated="RadGrid1_ItemCreated">
	    <PagerStyle Mode="Advanced" />
	    <MasterTableView Width="100%" DataSourceID="AccessDataSource1" />
	</telerik:RadGrid>		
````
````C#
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridPagerItem)
	        {
	            RadNumericTextBox goToPageText = (RadNumericTextBox)e.Item.FindControl("GoToPageTextBox");
	            goToPageText.Width = Unit.Pixel(80);
	            goToPageText.ShowSpinButtons = true;
	            goToPageText.Style.Add("color", "gray");
	            Label changePageLabel = (Label)e.Item.FindControl("GoToPageLabel");
	            changePageLabel.Visible = false;
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim goToPageText As RadNumericTextBox = CType(e.Item.FindControl("GoToPageTextBox"), RadNumericTextBox)
	            goToPageText.Width = Unit.Pixel(80)
	            goToPageText.ShowSpinButtons = True
	            goToPageText.Style.Add("color", "gray")
	            Dim changePageLabel As Label = CType(e.Item.FindControl("GoToPageLabel"), Label)
	            changePageLabel.Visible = False
	        End If
	    End Sub
````
>end

![](images/grd_AccessingPagerButtons.png)

>note When setting the __PageOfLabel,__ in order to to display the page count number, you would need to append it to the label text as demonstrated below:
>


>tabbedCode

````C#
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridPagerItem)
	        {
	            GridPagerItem item = e.Item as GridPagerItem;
	            Label pageOfLabel = e.Item.FindControl("PageOfLabel") as Label;
	            pageOfLabel.Text = "OF " + item.Paging.PageCount.ToString();
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If TypeOf e.Item Is GridPagerItem Then
	            Dim item As GridPagerItem = TryCast(e.Item, GridPagerItem)
	            Dim pageOfLabel As Label = TryCast(e.Item.FindControl("PageOfLabel"), Label)
	            pageOfLabel.Text = "OF " + item.Paging.PageCount.ToString
	        End If
	    End Sub
````
>end

# See Also

 * [Pager Item]({%slug grid/functionality/paging/pager-item%})
