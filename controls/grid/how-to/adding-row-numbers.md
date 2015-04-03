---
title: Adding Row Numbers
page_title: Adding Row Numbers | UI for ASP.NET AJAX Documentation
description: Adding Row Numbers
slug: grid/how-to/adding-row-numbers
tags: adding,row,numbers
published: True
position: 8
---

# Adding Row Numbers



## 

In some occasions you may want to display row numbers in Telerik RadGrid- for example to correlate the grid items when exporting the control's structure to Excel or just for easier navigation/access. The functionality is not built-in in the product, however such layout is achievable with a few lines of code:

1. Subscribe to the __ItemDataBound__ event of the grid

1. Check whether the currently bound item is __GridDataItem__

1. Extract the __ItemIndex__ of the __e.Item__ instance and display its value in a control residing in GridTemplateColumn's __ItemTemplate__.

In the example code below the item index is presented in MS Label control which is wrapped in template column:

>tabbedCode

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True"
	    Skin="Vista" runat="server" Width="95%" OnItemDataBound="RadGrid1_ItemDataBound">
	    <MasterTableView>
	      <Columns>
	        <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Row number">
	          <ItemTemplate>
	            <asp:Label ID="numberLabel" runat="server" Width="30px" />
	          </ItemTemplate>
	          <HeaderStyle Width="30px" />
	        </telerik:GridTemplateColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode] FROM [Customers]">
	  </asp:SqlDataSource>
````



````C#
	
	    protected void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem && e.Item.OwnerTableView.DataSourceID == "AccessDataSource1")
	        {
	            Label lbl = e.Item.FindControl("numberLabel") as Label;
	            lbl.Text = (e.Item.ItemIndex + 1).ToString();
	        }
	    }
	
````



````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If (TypeOf e.Item Is GridDataItem AndAlso e.Item.OwnerTableView.DataSourceID = "AccessDataSource1") Then
	            Dim lbl As Label = CType(e.Item.FindControl("numberLabel"), Label)
	            lbl.Text = (e.Item.ItemIndex + 1).ToString
	        End If
	    End Sub
````


>end
