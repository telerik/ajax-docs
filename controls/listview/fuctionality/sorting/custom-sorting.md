---
title: Custom Sorting
page_title: Custom Sorting | RadListView for ASP.NET AJAX Documentation
description: Custom Sorting
slug: listview/fuctionality/sorting/custom-sorting
tags: custom,sorting
published: True
position: 1
---

# Custom Sorting



## 

**RadListView** provides the possibility to easily extend the default sorting capabilities. By setting the **AllowCustomSorting** property to true, the you notify the **RadListView** of his intentions to sidestep the integrated sorting.

**Custom sorting** functionality enables the use of non-standard sort order defined by the developer, depending on the corresponding scenario. For instance, you can sort **RadListView** by the character count of specific field as demonstrated on our online [Custom sorting demo](http://demos.telerik.com/aspnet-ajax-beta/listview/examples/sorting/customsorting/defaultcs.aspx).

In the aforementioned demo, we use a custom **CommandArgument**to distinguish the sorting method that should be applied:

````ASPNET
	<LayoutTemplate>
	  <table ...>
	     <tr>
	       <td ...>                
	         <asp:ImageButton ID="SortByName" runat="server" ImageUrl="~/ListView/Examples/Sorting/CustomSorting/Images/sortName.png" CommandName="Sort" CommandArgument="ByName" />                
	         <asp:ImageButton ID="SortByLength" runat="server" ImageUrl="~/ListView/Examples/Sorting/CustomSorting/Images/sortLength.png" CommandName="Sort" CommandArgument="ByLength" />                
	         <asp:ImageButton ID="ClearSortOrder" runat="server" ImageUrl="~/ListView/Examples/Sorting/CustomSorting/Images/sortClear.png" CommandName="Sort" CommandArgument="Clear" />            
	       </td>       
	     </tr>  ...			
````





````C#
	    protected void RadListView1_Sorting(object sender, RadListViewSortEventArgs e)
	    {
	        string selectQuery = "SELECT [CustomerID], [CompanyName], [ContactName], [Phone] FROM [Customers]";
	        string sortOrder = SortOrderRadioButtonList.Items[0].Selected ? "ASC" : "DESC";
	        switch (e.CommandArgument.ToString())
	        {
	            case "ByName":
	                RadListView1.DataSource = GetDataTable(selectQuery + " ORDER BY ContactName " + sortOrder);
	                break;
	            case "ByLength":
	                RadListView1.DataSource = GetDataTable(selectQuery + " ORDER BY LEN(ContactName) " + sortOrder);
	                break;
	            case "Clear":
	                RadListView1.DataSource = GetDataTable(selectQuery);
	                break;
	        }
	        RadListView1.Rebind();
	    }
````
````VB.NET
	    Protected Sub RadListView1_Sorting(ByVal sender As Object, ByVal e As RadListViewSortEventArgs)
	        Dim selectQuery As String = "SELECT [CustomerID], [CompanyName], [ContactName], [Phone] FROM [Customers]"
	        Dim sortOrder As String = If(SortOrderRadioButtonList.Items(0).Selected, "ASC", "DESC")
	        Select Case e.CommandArgument.ToString()
	            Case "ByName"
	                RadListView1.DataSource = GetDataTable(selectQuery & " ORDER BY ContactName " & sortOrder)
	                Exit Select
	            Case "ByLength"
	                RadListView1.DataSource = GetDataTable(selectQuery & " ORDER BY LEN(ContactName) " & sortOrder)
	                Exit Select
	            Case "Clear"
	                RadListView1.DataSource = GetDataTable(selectQuery)
	                Exit Select
	        End Select
	        RadListView1.Rebind()
	    End Sub
````

