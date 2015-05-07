---
title: RadComboBox in RadGrid
page_title: RadComboBox in RadGrid | RadGrid for ASP.NET AJAX Documentation
description: RadComboBox in RadGrid
slug: grid/application-scenarios/radcombobox-in-radgrid
tags: radcombobox,in,radgrid
published: True
position: 12
---

# RadComboBox in RadGrid



## 

The [Combo in Grid](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/comboingrid/defaultcs.aspx?product=grid) online example demonstrates how to load the ComboBox Items on demand in the RadGrid edit form. There are two options to pre-select a value in a RadComboBox when it is nested in a RadGrid EditTemplate:

* If you populate RadComboBox with data using ASP.NET 2.0 or 3.5 DataSource types, you can simply set the SelectedValue :SelectedValue='<%#Bind("CompanyName") %>'

* When you use Load On Demand or Automatic Load On Demand - you can add the previously selected Item by in the RadGrid OnItemDataBound event when in Edit Mode.

When you delete the text initially displayed in the RadComboBox - Load-On-Demand will fire and will populate the control with Items.
![](images/grdComboInGrid_thumb.png)

Below are the code snippets from the demo referred above:



````ASP.NET
<telerik:RadGrid ID="RadGrid1" GridLines="None" AutoGenerateColumns="false" PageSize="10"
  AllowPaging="true" AllowSorting="true" runat="server" OnItemDataBound="OnItemDataBoundHandler"
  DataSourceID="ProductsDataSource" AllowAutomaticUpdates="true" AllowAutomaticInserts="True"
  ShowStatusBar="true">
  <MasterTableView ShowFooter="false" DataKeyNames="ProductID" EditMode="InPlace" CommandItemDisplay="TopAndBottom">
    <Columns>
      <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" HeaderStyle-Width="300px"
        ItemStyle-Width="300px">
      </telerik:GridBoundColumn>
      <telerik:GridTemplateColumn UniqueName="Supplier" HeaderText="Supplier" SortExpression="CompanyName"
        ItemStyle-Width="400px">
        <FooterTemplate>
          Template footer</FooterTemplate>
        <FooterStyle VerticalAlign="Middle" HorizontalAlign="Center" />
        <ItemTemplate>
          <%#DataBinder.Eval(Container.DataItem, "CompanyName")%>
        </ItemTemplate>
        <EditItemTemplate>
          <telerik:RadComboBox runat="server" ID="RadComboBox1" EnableLoadOnDemand="True" DataTextField="CompanyName"
            OnItemsRequested="RadComboBox1_ItemsRequested" DataValueField="SupplierID" AutoPostBack="true"
            HighlightTemplatedItems="true" Height="140px" Width="220px" DropDownWidth="420px"
            OnSelectedIndexChanged="OnSelectedIndexChangedHandler">
            <HeaderTemplate>
              <ul>
                <li class="col1">Company</li>
                <li class="col2">ContactName</li>
              </ul>
            </HeaderTemplate>
            <ItemTemplate>
              <ul>
                <li class="col1">
                  <%# DataBinder.Eval(Container, "Text")%>
                </li>
                <li class="col2">
                  <%# DataBinder.Eval(Container, "Attributes['ContactName']")%></li>
              </ul>
            </ItemTemplate>
          </telerik:RadComboBox>
        </EditItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridTemplateColumn HeaderText="Category" ItemStyle-Width="240px">
        <ItemTemplate>
          <%#DataBinder.Eval(Container.DataItem, "CategoryName")%>
        </ItemTemplate>
        <EditItemTemplate>
          <telerik:RadComboBox runat="server" ID="RadComboBox2" DataTextField="CategoryName"
            DataValueField="CategoryID" DataSourceID="CategoriesDataSource" SelectedValue='<%#Bind("CategoryID") %>'>
          </telerik:RadComboBox>
        </EditItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridEditCommandColumn FooterText="EditCommand footer" UniqueName="EditCommandColumn"
        HeaderText="Edit" HeaderStyle-Width="100px" UpdateText="Update">
      </telerik:GridEditCommandColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="ProductsDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString35 %>"
  SelectCommand="SELECT products.[ProductID], products.[ProductName], products.[SupplierID], products.[CategoryID],                              suppliers.[CompanyName], suppliers.[ContactName],                               categories.[CategoryName]                              FROM [Products] AS products                              INNER JOIN Suppliers AS suppliers                              ON products.SupplierID = suppliers.SupplierID                              INNER JOIN Categories AS categories                              ON products.CategoryID = categories.CategoryID"
  InsertCommand="INSERT INTO [Products] ([ProductName], [SupplierID], [CategoryID]) VALUES (@ProductName, @SupplierID, @CategoryID)"
  UpdateCommand="UPDATE [Products] SET [ProductName] = @ProductName, [SupplierID] = @SupplierID, [CategoryID] = @CategoryID WHERE [ProductID] = @ProductID">
  <InsertParameters>
    <asp:Parameter Name="ProductName" Type="String" />
    <asp:SessionParameter SessionField="SupplierID" Name="SupplierID" Type="Int32" />
    <asp:Parameter Name="CategoryID" Type="Int32" />
  </InsertParameters>
  <UpdateParameters>
    <asp:Parameter Name="ProductID" Type="Int32" />
    <asp:Parameter Name="ProductName" Type="String" />
    <asp:SessionParameter SessionField="SupplierID" Name="SupplierID" Type="Int32" />
    <asp:Parameter Name="CategoryID" Type="Int32" />
  </UpdateParameters>
</asp:SqlDataSource>
<asp:SqlDataSource ID="CategoriesDataSource" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString35 %>"
  SelectCommand="SELECT [CategoryID], [CategoryName] FROM [Categories]"></asp:SqlDataSource>
````
````C#
protected void OnItemDataBoundHandler(object sender, GridItemEventArgs e)
{
    if (e.Item.IsInEditMode)
    {
        GridEditableItem item = (GridEditableItem)e.Item;
        if (!(e.Item is IGridInsertItem))
        {
            RadComboBox combo = (RadComboBox)item.FindControl("RadComboBox1");
            RadComboBoxItem selectedItem = new RadComboBoxItem();
            selectedItem.Text = ((DataRowView)e.Item.DataItem)["CompanyName"].ToString();
            selectedItem.Value = ((DataRowView)e.Item.DataItem)["SupplierID"].ToString();
            selectedItem.Attributes.Add("ContactName", ((DataRowView)e.Item.DataItem)["ContactName"].ToString());
            combo.Items.Add(selectedItem);
            selectedItem.DataBind();
            Session["SupplierID"] = selectedItem.Value;
        }
    }
}
protected void RadComboBox1_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    string sql = "SELECT [SupplierID], [CompanyName], [ContactName], [City] FROM [Suppliers] WHERE CompanyName LIKE @CompanyName + '%'";
    SqlDataAdapter adapter = new SqlDataAdapter(sql, ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
    adapter.SelectCommand.Parameters.AddWithValue("@CompanyName", e.Text);
    DataTable dt = new DataTable();
    adapter.Fill(dt);
    RadComboBox comboBox = (RadComboBox)sender;    // Clear the default Item that has been re-created from ViewState at this point.    comboBox.Items.Clear();
    foreach (DataRow row in dt.Rows)
    {
        RadComboBoxItem item = new RadComboBoxItem();
        item.Text = row["CompanyName"].ToString();
        item.Value = row["SupplierID"].ToString();
        item.Attributes.Add("ContactName", row["ContactName"].ToString());
        comboBox.Items.Add(item);
        item.DataBind();
    }
}
protected void OnSelectedIndexChangedHandler(object sender, RadComboBoxSelectedIndexChangedEventArgs e)
{
    Session["SupplierID"] = e.Value;
}
````
````VB
Protected Sub OnItemDataBoundHandler(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If e.Item.IsInEditMode Then
        Dim item As GridEditableItem = DirectCast(e.Item, GridEditableItem)
        If Not (TypeOf e.Item Is IGridInsertItem) Then
            Dim combo As RadComboBox = DirectCast(item.FindControl("RadComboBox1"), RadComboBox)
            Dim selectedItem As New RadComboBoxItem()
            selectedItem.Text = DirectCast(e.Item.DataItem, DataRowView)("CompanyName").ToString()
            selectedItem.Value = DirectCast(e.Item.DataItem, DataRowView)("SupplierID").ToString()
            selectedItem.Attributes.Add("ContactName", DirectCast(e.Item.DataItem, DataRowView)("ContactName").ToString())
            combo.Items.Add(selectedItem)
            selectedItem.DataBind()
            Session("SupplierID") = selectedItem.Value
        End If
    End If
End Sub
Protected Sub RadComboBox1_ItemsRequested(ByVal sender As Object, ByVal e As RadComboBoxItemsRequestedEventArgs)
    Dim sql As String = "SELECT [SupplierID], [CompanyName], [ContactName], [City] FROM [Suppliers] WHERE CompanyName LIKE @CompanyName + '%'"
    Dim adapter As New SqlDataAdapter(sql, ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
    adapter.SelectCommand.Parameters.AddWithValue("@CompanyName", e.Text)
    Dim dt As New DataTable()
    adapter.Fill(dt)
    Dim comboBox As RadComboBox = DirectCast(sender, RadComboBox)
    ' Clear the default Item that has been re-created from ViewState at this point.
    comboBox.Items.Clear()
    For Each row As DataRow In dt.Rows
        Dim item As New RadComboBoxItem()
        item.Text = row("CompanyName").ToString()
        item.Value = row("SupplierID").ToString()
        item.Attributes.Add("ContactName", row("ContactName").ToString())
        comboBox.Items.Add(item)
        item.DataBind()
    Next
End Sub
Protected Sub OnSelectedIndexChangedHandler(ByVal sender As Object, ByVal e As RadComboBoxSelectedIndexChangedEventArgs)
    Session("SupplierID") = e.Value
End Sub
````


For additional information you can review [ this code library ](http://www.telerik.com/community/code-library/aspnet-ajax/combobox/load-on-demand-radcombobox-inside-an-edititemtemplate-of-radgrid.aspx).
