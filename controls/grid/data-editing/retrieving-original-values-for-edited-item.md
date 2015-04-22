---
title: Retrieving Original Values for Edited Item
page_title: Retrieving Original Values for Edited Item | RadGrid for ASP.NET AJAX Documentation
description: Retrieving Original Values for Edited Item
slug: grid/data-editing/retrieving-original-values-for-edited-item
tags: retrieving,original,values,for,edited,item
published: True
position: 3
---

# Retrieving Original Values for Edited Item



## 

You can retrieve the old values for the edited item through the **SavedOldValues** property of the **GridEditableItem**(*which is **IDictionary** collection of key -> value pairs). The keys in this collection are the **UniqueNames** of the editable columns and the values are the cell content for the edited row before the edit operation. The new values which the user entered before triggering the Update command can be fetched calling the **ExtractValuesFromItem** method.

Here is a sample code (note that this approach is applicable for auto-generated grid column editors):



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" AllowSorting="True"
	    runat="server" OnItemCommand="RadGrid1_ItemCommand" AutoGenerateColumns="true">
	    <MasterTableView DataSourceID="SqlDataSource1">
	      <Columns>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      SelectCommand="SELECT TOP 10 [ContactName], [ContactTitle], [Address], [CustomerID] FROM [Customers]">
	  </asp:SqlDataSource>
````
````C#
	
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.UpdateCommandName)
	        {
	            if (e.Item is GridEditableItem)
	            {
	                GridEditableItem editedItem = e.Item as GridEditableItem;
	                //here editedItem.SavedOldValues will be the dictionary which holds the
	                //predefined values
	
	                //Prepare new dictionary object
	                Hashtable newValues = new Hashtable();
	                e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem);
	                //the newValues instance is the new collection of key -> value pairs
	                //with the updated ny the user data
	
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
	        If (e.CommandName = RadGrid.UpdateCommandName) Then
	            If (e.Item = GridEditableItem) Then
	                Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	                'here editedItem.SavedOldValues will be the dictionary which holds the
	                'predefined values
	                'Prepare new dictionary object
	                Dim newValues As Hashtable = New Hashtable
	                e.Item.OwnerTableView.ExtractValuesFromItem(newValues, editedItem)
	                'the newValues instance is the new collection of key -> value pairs
	                'with the updated ny the user data
	            End If
	        End If
	    End Sub
````


If you have **GridTemplateColumn** inside the grid and want to obtain its original values on update command, you will need to store the old value on **ItemDataBound** when the grid item is in edit mode and then reference it on update. The code snippet below uses a Session variable for this purpose:



````ASPNET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" Skin="WinXP" runat="server"
	    Width="150px">
	    <MasterTableView AutoGenerateColumns="false">
	      <Columns>
	        <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="City">
	          <ItemTemplate>
	            <%# Eval("City") %>
	          </ItemTemplate>
	          <EditItemTemplate>
	            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("City") %>' />
	          </EditItemTemplate>
	        </telerik:GridTemplateColumn>
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <br />
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	      SelectCommand="SELECT [City] FROM [Customers]">
	  </asp:SqlDataSource>
````
````C#
	
	
	    protected void RadGrid1_UpdateCommand(object source,
	    Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        RadGrid1.Controls.Add(new LiteralControl("Saved old value for the City editor is: " + (string)Session["savedOldValue"]));
	    }
	
	    protected void RadGrid1_ItemDataBound(object sender,
	    Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item isGridEditableItem && e.Item.IsInEditMode)
	        {
	            TextBox txtBox = e.Item.FindControl("TextBox1") as TextBox;
	            Session["savedOldValue"] = txtBox.Text;
	        }
	    }
	
	
````
````VB.NET
	    Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.UpdateCommand
	        RadGrid1.Controls.Add(New LiteralControl("Saved old value for the City editor is: " & CType(Session("savedOldValue"), String)))
	    End Sub
	    Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
	            Dim txtBox As TextBox = CType(e.Item.FindControl("TextBox1"), TextBox)
	            Session("savedOldValue") = txtBox.Text
	        End If
	    End Sub
````

