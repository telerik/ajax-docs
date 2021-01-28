---
title: Referencing Controls in Grid Row Edit Form
page_title: Referencing Controls in Grid Row Edit Form - RadGrid
description: Check our Web Forms article about Referencing Controls in Grid Row Edit Form.
slug: grid/how-to/common/referencing-controls-in-grid-row-edit-form
tags: referencing,controls,in,grid,row,edit,form
published: True
position: 4
---

# Referencing Controls in Grid Row Edit Form



##

There are numerous situations in which you may need to get reference to controls in grid row/edit form and modify their state depending on the option the user chooses for another control in the same row/edit form. Basically, you can reference the grid item which wraps the controls (either data item or edit form item), then locate the other control and modify its state as per your custom needs. In some cases (when there are additional containers in the rows), you may need to find the container first and then propagate the same steps (depicted above).

The upcoming code sample represents how to alter the color for the **City** column on checkbox state change and how to load different set of items for combo in par with the user selection in another combo. Please note that the items refresh action is not included:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Width="400px">
  <MasterTableView AutoGenerateColumns="false">
    <Columns>
      <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Check/UnCheck">
        <ItemTemplate>
          <asp:Panel ID="Panel1" runat="server">
            <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="true" OnCheckedChanged="CheckedChanged" />
          </asp:Panel>
        </ItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridDropDownColumn UniqueName="ddlContactName" ListTextField="ContactName"
        ListValueField="CustomerID" ListDataMember="Customers" DataField="CustomerID" HeaderText="Contact name" />
      <telerik:GridBoundColumn UniqueName="City" DataField="City" HeaderText="City" />
      <telerik:GridDropDownColumn UniqueName="ddlContactTitle" ListTextField="ContactTitle"
        ListValueField="CustomerID" ListDataMember="Customers" DataField="CustomerID" HeaderText="Contact title" />
      <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
    </Columns>
  </MasterTableView></telerik:RadGrid>
````
````C#
private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"));
    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
    MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT TOP 5 CustomerID, ContactName, ContactTitle, City FROM Customers", MyOleDbConnection);
    DataTable myDataTable = new DataTable();
    MyOleDbConnection.Open();
    try
    {
        MyOleDbDataAdapter.Fill(myDataTable);
    }
    finally
    {
        MyOleDbConnection.Close();
    }
    RadGrid1.DataSource = myDataTable.DefaultView;
}
private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        //the dropdown list will be the first control in the Controls collection of the corresponding cell  
        DropDownList list = (e.Item as GridEditableItem)["ddlContactName"].Controls[0] as DropDownList;
        //attach SelectedIndexChanged event for the drodown control
        list.AutoPostBack = true;
        list.SelectedIndexChanged += new System.EventHandler(this.list_SelectedIndexChanged);
    }
}
private void list_SelectedIndexChanged(object sender, System.EventArgs e)
{
    //first reference the edited grid item through the NamingContainer attribute
    GridEditableItem editedItem = (sender as DropDownList).NamingContainer as GridEditableItem;
    //the dropdown list will be the first control in the Controls collection of the corresponding cell  
    //for custom edit forms (WebUserControl/FormTemplate) you can find the column editor with the FindControl(controlId) method  
    DropDownList ddList = editedItem["ddlContactTitle"].Controls[0] as DropDownList;
    // change the data source for ContactTitle with custom code here   
    DataTable table = DataSourceHelperCS.GetDataTable("SELECT CustomerID, ContactTitle FROM Customers WHERE ContactName = '" + (editedItem["ddlContactName"].Controls[0] as DropDownList).SelectedItem.Text + "'");
    ddList.DataSource = table;
    ddList.DataBind();
    RadGrid1.Controls.Add(new LiteralControl("<b>the available options for Contact Title has been changed</b>"));
}
protected void CheckedChanged(object sender, System.EventArgs e)
{
    CheckBox chkBox = (sender as CheckBox);
    //find the City field in the row and change its color
    //first reference the panel which wraps the checkbox control through the Parent property   
    Panel myPanel = chkBox.Parent as Panel;
    //then fetch the grid data item through the NamingContainer attribute of the container control (panel in this case)  
    GridDataItem dataItem = myPanel.NamingContainer as GridDataItem;
    //finally modify the color for the City field according to the checkbox status  
    if (chkBox.Checked)
    {
        dataItem["City"].Style["color"] = "red";
    }
    else
    {
        dataItem["City"].Style["color"] = "black";
    }
}

````
````VB
Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim MyOleDbConnection As OleDbConnection = New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath
    ("~/Grid/Data/Access/Nwind.mdb"))
    Dim MyOleDbDataAdapter As OleDbDataAdapter = New OleDbDataAdapter
    MyOleDbDataAdapter.SelectCommand = New OleDbCommand("SELECT TOP 5 CustomerID, ContactName, ContactTitle, City FROM Customers",
    MyOleDbConnection)
    Dim myDataTable As DataTable = New DataTable
    MyOleDbConnection.Open()
    Try
        MyOleDbDataAdapter.Fill(myDataTable)
    Finally
        MyOleDbConnection.Close()
    End Try
    RadGrid1.DataSource = myDataTable.DefaultView
End Sub

Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then

        'the dropdown list will be the first control in the Controls collection of the corresponding cell
        Dim list As DropDownList = CType(CType(e.Item, GridEditableItem)("ddlContactName").Controls(0), DropDownList)

        'attach SelectedIndexChanged event for the drodown control
        list.AutoPostBack = True
        AddHandler list.SelectedIndexChanged, AddressOf Me.list_SelectedIndexChanged
    End If
End Sub

Private Sub list_SelectedIndexChanged(ByVal sender As Object, ByVal e As System.EventArgs)

    'first reference the edited grid item through the NamingContainer attribute
    Dim editedItem As GridEditableItem = CType(CType(sender, DropDownList).NamingContainer, GridEditableItem)

    'the dropdown list will be the first control in the Controls collection of the corresponding cell
    'for custom edit forms (WebUserControl/FormTemplate) you can find the column editor with the FindControl(controlId) method
    Dim ddList As DropDownList = CType(editedItem("ddlContactTitle").Controls(0), DropDownList)

    ' change the data source for ContactTitle with custom code here

    Dim table As DataTable = DataSourceHelperVB.GetDataTable(" SELECT CustomerID, ContactTitle FROM Customers WHERE ContactName = '" & CType(editedItem("ddlContactName").Controls(0), DropDownList).SelectedItem.Text & "'")
    ddList.ClearSelection()
    ddList.DataSource = table
    ddList.DataBind()
    RadGrid1.Controls.Add(New LiteralControl("<b>the available options for Contact Title has been changed</b>"))
End Sub

Protected Sub CheckedChanged(ByVal sender As Object, ByVal e As System.EventArgs)

    Dim chkBox As CheckBox = CType(sender, CheckBox)

    'find the City field in the row and change its color

    'first reference the panel which wraps the checkbox control through the Parent property
    Dim myPanel As Panel = CType(chkBox.Parent, Panel)

    'then fetch the grid data item through the NamingContainer attribute of the container control (panel in this case)
    Dim dataItem As GridDataItem = CType(myPanel.NamingContainer, GridDataItem)

    'finally modify the color for the City field according to the checkbox status
    If chkBox.Checked Then
        dataItem("City").Style("color") = "red"
    Else
        dataItem("City").Style("color") = "black"
    End If
End Sub
````


Live example is available [here](https://demos.telerik.com/aspnet-ajax/grid/examples/programming/accessingcellsandrows/defaultcs.aspx).
