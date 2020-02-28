---
title: Automatic CRUD Operations
page_title: Automatic CRUD Operations | RadListView for ASP.NET AJAX Documentation
description: Automatic CRUD Operations
slug: listview/data-editing/automatic-crud-operations
tags: automatic,crud,operations
published: True
position: 0
---

# Automatic CRUD Operations



**RadListView** provides an API for inserting new data, updating existing data and deleting data from the specified data source. You can use these features while writing very little code.

**Controlling the automatic data source operations under .NET2**

The automatic data source operations only work when binding the grid to a declarative data source using the **DataSourceID** property of the grid. You must configure the data source so that it supports the automatic operations. Other than this, the functionality is automatically handled, without the need to write any custom code.

````C#
<telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
    ItemPlaceholderID="ProductItemContainer" DataKeyNames="ProductID" AllowPaging="True">
    <LayoutTemplate>
        <fieldset style="width: 770px;">
            <legend>RadListView bound to SqlDataSouce</legend>
            <table cellpadding="0" cellspacing="0" style="width: 770px;">
                <tr>
                    <td>
                        <asp:Button ID="Button1" runat="server" CommandName="InitInsert" Visible="<%#Container.InsertItemPosition == RadListViewInsertItemPosition.None %>"
                            Text="Add new product" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Panel ID="ProductItemContainer" runat="server" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PagedControlID="RadListView1"
                            PageSize="3">
                            <Fields>
                                <telerik:RadDataPagerButtonField FieldType="FirstPrev" />
                                <telerik:RadDataPagerButtonField FieldType="Numeric" />
                                <telerik:RadDataPagerButtonField FieldType="NextLast" />
                            </Fields>
                        </telerik:RadDataPager>
                    </td>
                </tr>
            </table>
        </fieldset>
    </LayoutTemplate>
    <ItemTemplate>
        <fieldset style="float: left; width: 226px; height: 140px;">
            <table cellpadding="2" cellspacing="0" style="height: 100%;">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("ProductName") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("QuantityPerUnit") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# DataBinder.Eval(Container.DataItem, "UnitPrice", "{0:C}") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <%# Eval("UnitsInStock") %>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Eval("Discontinued") %>'
                            Enabled="false" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:ImageButton ID="Button1" runat="server" CommandName="Edit" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Edit.gif" />&nbsp;
                        <asp:ImageButton ID="Button2" runat="server" CommandName="Delete" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Delete.gif" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </ItemTemplate>
    <EditItemTemplate>
        <fieldset style="float: left; width: 226px; height: 140px;">
            <table cellpadding="0" cellspacing="2" style="height: 100%">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="120px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("QuantityPerUnit") %>' Width="120px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:ImageButton ID="Button1" runat="server" CommandName="Update" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif" />
                        <asp:ImageButton ID="Button2" runat="server" CommandName="Cancel" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </EditItemTemplate>
    <InsertItemTemplate>
        <fieldset style="float: left; width: 226px; height: 140px;">
            <table cellpadding="0" cellspacing="2" style="height: 100%">
                <tr>
                    <td style="width: 20%;">
                        Name:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("ProductName") %>' Width="120px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Quantity:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("QuantityPerUnit") %>' Width="120px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Price:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("UnitPrice") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Units:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("UnitsInStock") %>' Width="65px"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td>
                        Discontinued:
                    </td>
                    <td style="width: 80%; padding-left: 5px;">
                        <asp:CheckBox ID="CheckBox1" runat="server" Checked='<%# Bind("Discontinued") %>' />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <asp:ImageButton ID="Button1" runat="server" CommandName="PerformInsert" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Update.gif" />
                        <asp:ImageButton ID="Button2" runat="server" CommandName="Cancel" ImageUrl="~/ListView/Examples/DefiningStructure/DeclarativeDefinition/Img/Cancel.gif" />
                    </td>
                </tr>
            </table>
        </fieldset>
    </InsertItemTemplate>
</telerik:RadListView>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID" InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], [UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued]) VALUES (@ProductName, @SupplierID, @CategoryID, @QuantityPerUnit, @UnitPrice, @UnitsInStock, @UnitsOnOrder, @ReorderLevel, @Discontinued)"
    SelectCommand="SELECT * FROM [Products]" UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID, [QuantityPerUnit] = @QuantityPerUnit, [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock, [UnitsOnOrder] = @UnitsOnOrder, [ReorderLevel] = @ReorderLevel, [Discontinued] = @Discontinued WHERE [ProductID] = @ProductID">
    <DeleteParameters>
        <asp:Parameter Name="ProductID" Type="Int32" />
    </DeleteParameters>
    <UpdateParameters>
        <asp:Parameter Name="ProductName" Type="String" />
        <asp:Parameter Name="SupplierID" Type="Int32" />
        <asp:Parameter Name="CategoryID" Type="Int32" />
        <asp:Parameter Name="QuantityPerUnit" Type="String" />
        <asp:Parameter Name="UnitPrice" Type="Decimal" />
        <asp:Parameter Name="UnitsInStock" Type="Int16" />
        <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
        <asp:Parameter Name="ReorderLevel" Type="Int16" />
        <asp:Parameter Name="Discontinued" Type="Boolean" />
        <asp:Parameter Name="ProductID" Type="Int32" />
    </UpdateParameters>
    <InsertParameters>
        <asp:Parameter Name="ProductName" Type="String" />
        <asp:Parameter Name="SupplierID" Type="Int32" />
        <asp:Parameter Name="CategoryID" Type="Int32" />
        <asp:Parameter Name="QuantityPerUnit" Type="String" />
        <asp:Parameter Name="UnitPrice" Type="Decimal" />
        <asp:Parameter Name="UnitsInStock" Type="Int16" />
        <asp:Parameter Name="UnitsOnOrder" Type="Int16" />
        <asp:Parameter Name="ReorderLevel" Type="Int16" />
        <asp:Parameter Name="Discontinued" Type="Boolean" />
    </InsertParameters>
</asp:SqlDataSource>
````



## Additional resources

* **AccessDataSource:**[https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.accessdatasource.aspx)

* **SqlDataSource:**[https://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx](https://msdn2.microsoft.com/en-us/library/dz12d98w(vs.80).aspx)

* **ObjectDataSource:**[https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)
