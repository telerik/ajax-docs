---
title: Customize the Insertion Form Display Position
page_title: Customize the Insertion Form Display Position | RadGrid for ASP.NET AJAX Documentation
description: Customize the Insertion Form Display Position
slug: grid/data-editing/how-to/customize-the-insertion-form-display-position
tags: customize,the,insertion,form,display,position
published: True
position: 13
---

# Customize the Insertion Form Display Position



## 

There are cases when you may prefer to display the insertion form above/below the active grid page or visualizethe form on the current/first grid page instead on the last page (which is the default behavior on init insert). Furthermore, it would be convenient for the end user to keep the current page index when pressing the [Cancel] button from the insertion form.This is a pretty straight-forward task using the **InsertItemDisplay**and **InsertItemPageIndexAction** properties of the **GridTableView**object. here are the possible values for these properties:**InsertItemDisplay**: Top (default value) or Bottom**InsertItemPageIndexAction**: ShowItemOnCurrentPage, ShowItemOnLastPage (default value) or ShowItemOnFirstPageThe usage of these properties is illustrated in [this example](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/CommandItem/DefaultCS.aspx).If you prefer to retain the the active page on insert action with coding, subscribe to the **ItemCommand** event of RadGrid. The steps you have to undertake are:

1. Cancel the default action on init insert and store the current page index

1. Process the insert invoking the *InsertItem*() method, after that recover the page index and rebind the grid

1. Intercept the cancel command when the insert form is visible and keep the active page displayed

The code snippets below represent a sample implementation:



````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True"
	    Skin="Silk" runat="server" GridLines="None" Width="95%" AllowPaging="true">
	    <MasterTableView Width="100%" CommandItemDisplay="TopAndBottom" />
	    <PagerStyle Mode="NextPrevAndNumeric" />
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````VB
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            e.Canceled = True
	            Session("curPageIndex") = e.Item.OwnerTableView.CurrentPageIndex
	            e.Item.OwnerTableView.InsertItem()
	
	            e.Item.OwnerTableView.CurrentPageIndex = Integer.Parse(Session("curPageIndex"))
	            e.Item.OwnerTableView.Rebind()
	        ElseIf (e.CommandName = RadGrid.CancelCommandName AndAlso e.Item.OwnerTableView.IsItemInserted) Then
	            e.Item.OwnerTableView.CurrentPageIndex = Integer.Parse(Session("curPageIndex"))
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            e.Canceled = true;
	            Session["curPageIndex"] = e.Item.OwnerTableView.CurrentPageIndex;
	            e.Item.OwnerTableView.InsertItem();
	
	            e.Item.OwnerTableView.CurrentPageIndex = int.Parse(Session["curPageIndex"]);
	            e.Item.OwnerTableView.Rebind();
	        }
	        else if (e.CommandName == RadGrid.CancelCommandName && e.Item.OwnerTableView.IsItemInserted)
	        {
	            e.Item.OwnerTableView.CurrentPageIndex = int.Parse(Session["curPageIndex"]);
	        }
	    }
````

