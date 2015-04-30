---
title: Include Additional Action Button
page_title: Include Additional Action Button | RadGrid for ASP.NET AJAX Documentation
description: Include Additional Action Button
slug: grid/data-editing/how-to/include-additional-action-button
tags: include,additional,action,button
published: True
position: 4
---

# Include Additional Action Button



## 

There are scenarios in which you may want to include additional button right after your edit form Update/Cancel buttons. To do that, you can wire the ItemDataBound event of the grid and add a custom button to the **GridEditCommandColumn** for the respective table.In addition, you can attach a confirmation dialog to its onclick attribute to display notification for the user when he clicks that button.Here are two example which illustrate that (note that you should add code to delete the item manually or use automatic deletes feature).

**InPlace** edit mode:



````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <MasterTableView EditMode="InPlace">
	      <Columns>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````
````VB.NET
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If (TypeOf e.Item Is Telerik.Web.UI.GridDataItem AndAlso e.Item.IsInEditMode) Then
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	            Dim linkButton As LinkButton = New LinkButton
	            'adding delete button as third
	            linkButton.Text = "Delete"
	            linkButton.Attributes("onclick") =
	            "javascript:return confirm('Do you want to delete this item?')"
	            linkButton.CommandName = "Delete"
	
	            dataItem("EditCommandColumn").Controls.Add(New LiteralControl(" "))
	            dataItem("EditCommandColumn").Controls.Add(linkButton)
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (((e.Item is Telerik.Web.UI.GridDataItem) && e.Item.IsInEditMode))
	        {
	            GridDataItem dataItem = ((GridDataItem)(e.Item));
	            LinkButton linkButton = new LinkButton();
	            // adding delete button as third
	            linkButton.Text = "Delete";
	            linkButton.Attributes["onclick"] = "javascript:return confirm(\'Do you want to delete this item?\')";
	            linkButton.CommandName = "Delete";
	            dataItem["EditCommandColumn"].Controls.Add(new LiteralControl(" "));
	            dataItem["EditCommandColumn"].Controls.Add(linkButton);
	        }
	    }
````


**Auto-generated edit forms (MasterTableView EditMode="EditForms"):**



````VB.NET
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        If TypeOf e.Item Is Telerik.Web.UI.GridEditFormItem AndAlso e.Item.IsInEditMode Then
	            Dim linkButton As New LinkButton()
	            linkButton.Text = "Delete"
	            linkButton.CommandName = "Delete"
	            linkButton.Attributes("onclick") = "javascript:return confirm('Do you want to delete this item?')"
	            Dim cancel As LinkButton = TryCast(e.Item.FindControl("CancelButton"), LinkButton)
	            cancel.Parent.Controls.Add(New LiteralControl(" "))
	            cancel.Parent.Controls.Add(linkButton)
	        End If
	    End Sub
````
````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is Telerik.Web.UI.GridEditFormItem && e.Item.IsInEditMode)
	        {
	            LinkButton linkButton = new LinkButton();
	            linkButton.Text = "Delete";
	            linkButton.CommandName = "Delete";
	            linkButton.Attributes["onclick"] = "javascript:return confirm('Do you want to delete this item?')";
	            LinkButton cancel = e.Item.FindControl("CancelButton") as LinkButton;
	            cancel.Parent.Controls.Add(new LiteralControl(" "));
	            cancel.Parent.Controls.Add(linkButton);
	        }
	    }
````

