---
title: AJAX-enabled Context Menu
page_title: AJAX-enabled Context Menu | UI for ASP.NET AJAX Documentation
description: AJAX-enabled Context Menu
slug: grid/application-scenarios/ajax-enabled-context-menu
tags: ajax-enabled,context,menu
published: True
position: 4
---

# AJAX-enabled Context Menu



## 

In numerous cases you may want to display a context menu when right-clicking an arbitrary row in RadGrid. Through a command from that context menu you may want to change the state for the grid row (for example edit/delete/add record). Furthermore, you may prefer the operation with asynchronous request instead of postback.

The seamless integration between __RadContextMenu__, __RadAjax__ and __RadGrid__ makes this task very easy to be accomplished. Our grid control exposes __OnRowContextMenu__ client event which can be handled to select the right-clicked record in the grid to mark it as active for the current action. In order to determine the index of the clicked row on the server, use a hidden field on the page to store its value client side and then operate with it on form submit (in the __ItemClick__ event handler of RadMenu). Inside the handler perform the corresponding task chosen by the user to modify the item state.

To associate the context menu with the grid instance, attach the __OnRowContextMenu__ client event of RadGrid, get reference to the context menu object client-side and invoke its __show__ method (passing the browser's event argument as parameter).

Finally, configure the ajax manager settings in order to refresh the grid and the menu in a codeless manner.



>tabbedCode

````ASPNET
	        <telerik:RadScriptManager ID="ScriptManager1" runat="server" />
	        <telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
	
	            <script type="text/javascript">
	                function RowContextMenu(sender, eventArgs) {
	                    var menu = $find("<%=RadMenu1.ClientID %>");
	                    var evt = eventArgs.get_domEvent();
	
	                    if (evt.target.tagName == "INPUT" || evt.target.tagName == "A") {
	                        return;
	                    }
	
	                    var index = eventArgs.get_itemIndexHierarchical();
	                    document.getElementById("radGridClickedRowIndex").value = index;
	
	                    sender.get_masterTableView().selectItem(sender.get_masterTableView().get_dataItems()[index].get_element(), true);
	
	                    menu.show(evt);
	
	                    evt.cancelBubble = true;
	                    evt.returnValue = false;
	
	                    if (evt.stopPropagation) {
	                        evt.stopPropagation();
	                        evt.preventDefault();
	                    }
	                }
	            </script>
	
	        </telerik:RadCodeBlock>
	        <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	            <AjaxSettings>
	                <telerik:AjaxSetting AjaxControlID="RadGrid1">
	                    <UpdatedControls>
	                        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                        <telerik:AjaxUpdatedControl ControlID="RadMenu1" />
	                    </UpdatedControls>
	                </telerik:AjaxSetting>
	                <telerik:AjaxSetting AjaxControlID="RadMenu1">
	                    <UpdatedControls>
	                        <telerik:AjaxUpdatedControl ControlID="RadGrid1" LoadingPanelID="RadAjaxLoadingPanel1" />
	                        <telerik:AjaxUpdatedControl ControlID="RadMenu1" />
	                    </UpdatedControls>
	                </telerik:AjaxSetting>
	            </AjaxSettings>
	        </telerik:RadAjaxManager>
	       <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
	
	       <input type="hidden" id="radGridClickedRowIndex" name="radGridClickedRowIndex" />
	            <telerik:RadGrid ID="RadGrid1" runat="server" Width="100%"
	                DataSourceID="SqlDataSource1" AllowAutomaticDeletes="true" AllowAutomaticInserts="true"
	                AllowAutomaticUpdates="true" OnPreRender="RadGrid1_PreRender">
	                <MasterTableView AllowSorting="False" PageSize="10" AllowPaging="True" Width="100%"
	                    DataKeyNames="ProductID" DataSourceID="SqlDataSource1" EditMode="InPlace">
	                    <Columns>
	                        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" Visible="false" />
	                    </Columns>
	                </MasterTableView>
	                <ClientSettings>
	                    <ClientEvents OnRowContextMenu="RowContextMenu"></ClientEvents>
	                    <Selecting AllowRowSelect="true" />
	                </ClientSettings>
	                <PagerStyle Mode="NextPrevAndNumeric" />
	            </telerik:RadGrid>
	        <br />
	        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            SelectCommand="SELECT ProductID, ProductName,UnitPrice, UnitsInStock FROM [Products]"
	            DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = ?" InsertCommand="INSERT INTO Products(ProductName, SupplierID, CategoryID, UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
	            UpdateCommand="UPDATE [Products] SET [ProductName] = ?,[QuantityPerUnit] = ?, [UnitPrice] = ?, [UnitsInStock] = ? WHERE [ProductID] = ? AND [ProductName] = ? AND [UnitPrice] = ? AND [UnitsInStock] = ?">
	            <DeleteParameters>
	                <asp:Parameter Name="original_ProductID" Type="Int32" />
	            </DeleteParameters>
	            <UpdateParameters>
	                <asp:Parameter Name="ProductName" Type="String" />
	                <asp:Parameter Name="UnitPrice" Type="Decimal" />
	                <asp:Parameter Name="UnitsInStock" Type="Int16" />
	                <asp:Parameter Name="original_ProductID" Type="Int32" />
	                <asp:Parameter Name="original_ProductName" Type="String" />
	                <asp:Parameter Name="original_QuantityPerUnit" Type="String" />
	                <asp:Parameter Name="original_UnitPrice" Type="Decimal" />
	                <asp:Parameter Name="original_UnitsInStock" Type="Int16" />
	            </UpdateParameters>
	            <InsertParameters>
	                <asp:Parameter Name="ProductName" Type="String" />
	                <asp:Parameter Name="SupplierID" Type="Int32" />
	                <asp:Parameter Name="CategoryID" Type="Int32" />
	                <asp:Parameter Name="UnitPrice" Type="Decimal" />
	                <asp:Parameter Name="UnitsInStock" Type="Int16" />
	                <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
	                <asp:Parameter Name="ReorderLevel" Type="Int16" />
	                <asp:Parameter Name="Discontinued" Type="Boolean" />
	            </InsertParameters>
	        </asp:SqlDataSource>
	        <telerik:RadContextMenu ID="RadMenu1" runat="server" OnItemClick="RadMenu1_ItemClick"
	            EnableRoundedCorners="true" EnableShadows="true">
	            <Items>
	                <telerik:RadMenuItem Text="Add" />
	                <telerik:RadMenuItem Text="Edit" />
	                <telerik:RadMenuItem Text="Delete" />
	            </Items>
	        </telerik:RadContextMenu>
````
````C#
	
	
	    protected void RadGrid1_PreRender(object sender, EventArgs e)
	    {
	        if (RadGrid1.EditIndexes.Count > 0 || RadGrid1.MasterTableView.IsItemInserted)
	        {
	            GridColumn col1 = RadGrid1.MasterTableView.GetColumn("EditCommandColumn") as GridColumn;
	            col1.Visible = true;
	        }
	        else
	        {
	            GridColumn col2 = RadGrid1.MasterTableView.GetColumn("EditCommandColumn") as GridColumn;
	            col2.Visible = false;
	        }
	    }
	    protected void RadMenu1_ItemClick(object sender, RadMenuEventArgs e)
	    {
	        int radGridClickedRowIndex;
	
	        radGridClickedRowIndex = Convert.ToInt32(Request.Form["radGridClickedRowIndex"]);
	
	        switch (e.Item.Text)
	        {
	            case "Edit":
	                RadGrid1.Items[radGridClickedRowIndex].Edit = true;
	                RadGrid1.Rebind();
	                break;
	            case "Add":
	                RadGrid1.MasterTableView.IsItemInserted = true;
	                RadGrid1.Rebind();
	                break;
	            case "Delete":
	                RadGrid1.MasterTableView.PerformDelete(RadGrid1.Items[radGridClickedRowIndex]);
	                break;
	        }
	    }
	
````
````VB.NET
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
	        If RadGrid1.EditIndexes.Count > 0 OrElse RadGrid1.MasterTableView.IsItemInserted Then
	            Dim col1 As GridColumn = TryCast(RadGrid1.MasterTableView.GetColumn("EditCommandColumn"), GridColumn)
	            col1.Visible = True
	        Else
	            Dim col2 As GridColumn = TryCast(RadGrid1.MasterTableView.GetColumn("EditCommandColumn"), GridColumn)
	            col2.Visible = False
	        End If
	    End Sub
	    Protected Sub RadMenu1_ItemClick(ByVal sender As Object, ByVal e As RadMenuEventArgs)
	        Dim radGridClickedRowIndex As Integer
	        radGridClickedRowIndex = Convert.ToInt32(Request.Form("radGridClickedRowIndex"))
	        Select Case e.Item.Text
	            Case "Edit"
	                RadGrid1.Items(radGridClickedRowIndex).Edit = True
	                RadGrid1.Rebind()
	                Exit Select
	            Case "Add"
	                RadGrid1.MasterTableView.IsItemInserted = True
	                RadGrid1.Rebind()
	                Exit Select
	            Case "Delete"
	                RadGrid1.MasterTableView.PerformDelete(RadGrid1.Items(radGridClickedRowIndex))
	                Exit Select
	        End Select
	    End Sub
````
>end

You can see this example online [here](http://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridAndMenu/DefaultCS.aspx?product=grid).
