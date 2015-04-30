---
title: Localizing the Grid Headers
page_title: Localizing the Grid Headers | RadGrid for ASP.NET AJAX Documentation
description: Localizing the Grid Headers
slug: grid/accessibility-and-internationalization/localizing-the-grid-headers
tags: localizing,the,grid,headers
published: True
position: 1
---

# Localizing the Grid Headers



If you develop a multilingual application, you might want to show grid headers text as per the current culture settings. This functionality is can be attained with Telerik RadGrid in the same way as with MS GridView (both controls will behave similarly when you switch the culture for the page which holds it).

The first option to localize the header text is dynamically through resource files as shown [here]({%slug grid/accessibility-and-internationalization/localization-through-resource-files%}). Another possible solution is illustrated below (note that the first example is for auto-generated columns and the second example is for declarative columns):

## Example 1



````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True"
	    runat="server" OnColumnCreated="RadGrid1_ColumnCreated">
	    <MasterTableView Width="100%" AutoGenerateColumns="True" />
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	     SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````C#
	    protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
	    {
	        GridColumn boundColumn = e.Column as GridColumn;
	        switch (boundColumn.UniqueName)
	        {
	            case "ContactName":
	                boundColumn.HeaderText = "My customized contact name";
	                break;
	            case "ContactTitle":
	                boundColumn.HeaderText = "My customized contact title";
	                break;
	            case "Address":
	                boundColumn.HeaderText = "My customized address";
	                break;
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
	        Dim boundColumn As GridColumn = CType(e.Column, GridColumn)
	
	        Select Case boundColumn.UniqueName
	            Case "ContactName"
	                boundColumn.HeaderText = "My customized contact name"
	            Case "ContactTitle"
	                boundColumn.HeaderText = "My customized contact title"
	            Case "Address"
	                boundColumn.HeaderText = "My customized address"
	        End Select
	    End Sub
````


## Example 2



````ASP.NET
	  <telerik:RadGrid ID="RadGrid2" DataSourceID="SqlDataSource2" AllowSorting="True"
	    runat="server" HorizontalAlign="NotSet">
	    <MasterTableView Width="100%" AutoGenerateColumns="False" DataSourceID="AccessDataSource2">
	      <Columns>
	        <telerik:GridBoundColumn DataField="ContactName" HeaderText="" UniqueName="ContactName" />
	        <telerik:GridBoundColumn DataField="ContactTitle" HeaderText="" UniqueName="ContactTitle" />
	        <telerik:GridBoundColumn DataField="Address" HeaderText="" UniqueName="Address" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	    SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````
````VB.NET
	    Protected Sub RadGrid2_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid2.ItemCreated
	        If TypeOf e.Item Is GridHeaderItem Then
	            Dim headerItem As GridHeaderItem = CType(e.Item, GridHeaderItem)
	            Dim button As LinkButton = CType(headerItem("ContactName").Controls(0), LinkButton)
	            button.Text = "My customized contact name"
	
	            button = CType(headerItem("ContactTitle").Controls(0), LinkButton)
	            button.Text = "My customized contact title"
	
	            button = CType(headerItem("Address").Controls(0), LinkButton)
	            button.Text = "My customized address"
	        End If
	    End Sub
````
````C#
	    protected void RadGrid2_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridHeaderItem)
	        {
	            GridHeaderItem headerItem = e.Item as GridHeaderItem;
	
	            LinkButton button = headerItem["ContactName"].Controls[0] as LinkButton;
	            button.Text = "My customized contact name";
	
	            button = headerItem["ContactTitle"].Controls[0] as LinkButton;
	            button.Text = "My customized contact title";
	
	            button = headerItem["Address"].Controls[0] as LinkButton;
	            button.Text = "My customized address";
	        }
	    }
````

