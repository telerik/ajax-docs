---
title: Automatic CRUD Operations
page_title: Automatic CRUD Operations | RadDataForm for ASP.NET AJAX 
description: Automatic CRUD Operations
slug: dataform/data-editing/automatic-crud-operations
tags: automatic,crud,operations
published: True
position: 0
---

# Automatic CRUD Operations



## 

**RadDataForm** provides built-in support for automatic CRUD operations thus allowing you toinsert/update/delete records using very little code. In order to take advantage of this functionalityyou should configure the control as follows:

1. Bind it to a **DataSource** control that supports automatic data source operations.

1. Add the primary key field from the database table as a **DataKeyName**.

1. Define the respective edit and insert templates and assign appropriate commands for the buttons.

````ASPNET
<telerik:RadDataForm ID="RadDataForm1"  DataSourceID="SqlDataSource1" DataKeyNames="ProductID" runat="server">
    <ItemTemplate>
        ProductName:   '<%# Eval("ProductName") %>'
		<br />
        UnitPrice: <%# Eval("UnitPrice") %>
		<br />
        UnitsInStock: <%# Eval("UnitsInStock") %>
        <telerik:RadButton ID="InitInsertButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="InitInsert" Text="Insert" ToolTip="Insert" />
        <br />
        <telerik:RadButton ID="EditButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Edit" Text="Edit" ToolTip="Edit" />
        <br />
        <telerik:RadButton ID="DeleteButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Delete" Text="Delete" ToolTip="Delete" />
    </ItemTemplate>
    <EditItemTemplate>
        Edit product with ID: '<%# Eval("ProductID") %>'
        <br />
        ProductName:
		<asp:TextBox ID="ProductNameTextBox" Text='<%# Bind("ProductName") %>' runat="server" />
        <br />
        UnitPrice:
		<telerik:RadNumericTextBox ID="UnitPriceTextBox" DbValue='<%# Bind("UnitPrice") %>' runat="server" />
        <br />
        UnitsInStock:
		<telerik:RadNumericTextBox ID="UnitsInStockTextBox" DbValue='<%# Bind("UnitsInStock") %>' runat="server" />
        <telerik:RadButton ID="UpdateButton" runat="server" ButtonType="SkinnedButton" CommandName="Update" Text="Update" ToolTip="Update" />
        <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
    </EditItemTemplate>
    <InsertItemTemplate>
        Add New Record :
		<br />
        ProductName:
		<asp:TextBox ID="ProductNameTextBox" Text='<%# Bind("ProductName") %>' runat="server" />
        <br />
        UnitPrice:
		<telerik:RadNumericTextBox ID="UnitPriceTextBox" Value='<%# Bind("UnitPrice") %>' runat="server" />
        <br />
        UnitsInStock:
		<telerik:RadNumericTextBox ID="UnitsInStockTextBox" Value='<%# Bind("UnitsInStock") %>' runat="server" />
        <telerik:RadButton ID="PerformInsertButton" runat="server" ButtonType="SkinnedButton" CommandName="PerformInsert" Text="Insert" ToolTip="Insert" />
        <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
    </InsertItemTemplate>
</telerik:RadDataForm>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    DeleteCommand="DELETE FROM [Products] WHERE [ProductID] = @ProductID"
    InsertCommand="INSERT INTO [Products] ([ProductName], [UnitPrice], [UnitsInStock]) VALUES (@ProductName, @UnitPrice, @UnitsInStock)"
    SelectCommand="SELECT * FROM [Products]"
    UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName,  [UnitPrice] = @UnitPrice, [UnitsInStock] = @UnitsInStock WHERE [ProductID] = @ProductID">
    <DeleteParameters>
        <asp:Parameter Name="ProductID" Type="Int32"></asp:Parameter>
    </DeleteParameters>
    <UpdateParameters>
        <asp:Parameter Name="ProductName" Type="String"></asp:Parameter>
        <asp:Parameter Name="UnitPrice" Type="Decimal"></asp:Parameter>
        <asp:Parameter Name="UnitsInStock" Type="Int16"></asp:Parameter>
        <asp:Parameter Name="ProductID" Type="Int32"></asp:Parameter>
    </UpdateParameters>
    <InsertParameters>
        <asp:Parameter Name="ProductName" Type="String"></asp:Parameter>
        <asp:Parameter Name="UnitPrice" Type="Decimal"></asp:Parameter>
        <asp:Parameter Name="UnitsInStock" Type="Int16"></asp:Parameter>
    </InsertParameters>
</asp:SqlDataSource>
````


