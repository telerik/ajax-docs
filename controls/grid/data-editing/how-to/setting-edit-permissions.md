---
title: Setting Edit Permissions
page_title: Setting Edit Permissions | RadGrid for ASP.NET AJAX Documentation
description: Setting Edit Permissions
slug: grid/data-editing/how-to/setting-edit-permissions
tags: setting,edit,permissions
published: True
position: 14
---

# Setting Edit Permissions



## 

When a user log in you may want to set permissions for editing grid items depending on the security settings for the corresponding account. For this purpose you can create an extra boolean column in the grid data source which reflects the permission status for the logged user (we can call it **permission column**). Then in the **ItemDataBound** event of Telerik RadGrid you can traverse all **GridDataItems**, check the value of the permission column (**true** or **false**) and **enable/disable** the [Edit] button for the currently bound grid item to allow/prevent the edit operation for it.

In the example below we assume that the **Bool** column in the grid data source is our permission column. Note that you can hide the column if you wish by setting its **Display** property to **false**:



````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <MasterTableView AutoGenerateColumns="False">
	      <Columns>
	        <telerik:GridBoundColumn HeaderText="Contact name" DataField="ContactName" UniqueName="Contact name">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="Contact title" DataField="ContactTitle" UniqueName="ContactTitle">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn HeaderText="City" DataField="City" UniqueName="City">
	        </telerik:GridBoundColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	        <telerik:GridCheckBoxColumn DataField="Bool" ReadOnly="True" UniqueName="CheckBoxColumn"
	          Display="True">
	        </telerik:GridCheckBoxColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````
````C#
	
	    private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem)
	        {
	            GridDataItem dataItem = e.Item as GridDataItem;
	            if (!(dataItem["CheckBoxColumn"].Controls[0] as CheckBox).Checked)
	            {
	                (dataItem["EditCommandColumn"].Controls[0] as LinkButton).Enabled = false;
	            }
	        }
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If TypeOf e.Item Is GridDataItem Then
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	            If Not CType(dataItem("CheckBoxColumn").Controls(0), CheckBox).Checked Then
	                CType(dataItem("EditCommandColumn").Controls(0), LinkButton).Enabled = False
	            End If
	        End If
	    End Sub
````

