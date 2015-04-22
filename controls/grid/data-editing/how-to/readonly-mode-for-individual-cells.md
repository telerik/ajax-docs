---
title: ReadOnly Mode for Individual Cells
page_title: ReadOnly Mode for Individual Cells | RadGrid for ASP.NET AJAX Documentation
description: ReadOnly Mode for Individual Cells
slug: grid/data-editing/how-to/readonly-mode-for-individual-cells
tags: readonly,mode,for,individual,cells
published: True
position: 2
---

# ReadOnly Mode for Individual Cells



## 

Setting individual cells in read-only mode is not achievable in the current version of Telerik RadGrid.A possibleworkaround, however, is to disable the respective cell server-side to prevent the user from editing its content. This can be done by subscribing to the **ItemCreated** event of the grid:



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True"
	    runat="server" GridLines="None" Width="95%" AllowMultiRowEdit="True" HorizontalAlign="NotSet">
	    <MasterTableView Width="100%" DataSourceID="SqlDataSource1" EditMode="InPlace"
	      DataKeyNames="CustomerID">
	      <Columns>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      SelectCommand="SELECT * FROM [Customers]">
	  </asp:SqlDataSource>
````
````VB.NET
	
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        'this will make the textbox for customer with CustomerID ALFKI not editable
	        If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
	            If (CType(e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("CustomerID"), String) = "ALFKI") Then
	                CType(e.Item, GridEditableItem)("CustomerID").Enabled = False
	            End If
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        // this will make the textbox for customer with CustomerID ALFKI not editable
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	            if ((string)e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["CustomerID"] == "ALFKI")
	            {
	                (e.Item as GridEditableItem)["CustomerID"].Enabled = false;
	            }
	        }
	    }
````

