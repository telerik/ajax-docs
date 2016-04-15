---
title: Operations with MS DropDownList in EditItemTemplate of GridTemplateColumn
page_title: Operations with MS DropDownList in EditItemTemplate of GridTemplateColumn | RadGrid for ASP.NET AJAX Documentation
description: Operations with MS DropDownList in EditItemTemplate of GridTemplateColumn
slug: grid/how-to/data-editing/insert-in-grid-with-tooltip
previous_url: grid/how-to/operations-with-ms-dropdownlist-in-edititemtemplate-of-gridtemplatecolumn
tags: operations,with,ms,dropdownlist,in,edititemtemplate,of,gridtemplatecolumn
published: True
position: 3
---

# Operations with MS DropDownList in EditItemTemplate of GridTemplateColumn



##

This article discusses how to bind a dropdown control in **EditItemTemplate** with custom values and update the **ItemTemplate** field after editing. The functionality can be used in cases in which the developer may want to provide different list of choices than the ones present by default in **GridDropDownColumn**. You should locate the dropdown control in the **ItemDataBound** handler of the grid for each item which is in edit mode and bind it to the data source of your choice. Furthermore, when update is performed you can save the selected by the user value in **Session** variable and then set that value for the template column cell in regular mode.The same Session variable can be used to select the default item in the dropdown control on subsequent editing.

In the code below we assign array of ListItem objects as data source for the dropdown editor. To visualize clearly the functionality depicted above we generate only one grid item. For more complex scenarios you should adjust the provided logic to suit your case.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AutoGenerateColumns="False">
    <MasterTableView>
        <Columns>
            <telerik:GridBoundColumn UniqueName="ContactName" ReadOnly="True" HeaderText="ContactName"
                DataField="ContactName" />
            <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Country">
                <ItemTemplate>
                    <asp:Label ID="Label1" runat="server"
                        Text='<%# DataBinder.Eval(Container.DataItem, "Country") %>'>
                    </asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <asp:DropDownList ID="List1" runat="server" />
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" />
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
object[] Country_values = { new ListItem("Germany", "German"), new ListItem("England", "English"), new ListItem("Spain", "Spanish"), new ListItem("United States", "American") };

private void Page_Load(object sender, System.EventArgs e)
{
}

private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    OleDbConnection MyOleDbConnection = new OleDbConnection(("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb")));
    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
    MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT TOP 1 ContactName, Country FROM Customers", MyOleDbConnection);
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

private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        GridEditableItem item = e.Item as GridEditableItem;
        // access/modify the edit item template settings here
        DropDownList list = item.FindControl("List1") as DropDownList;
        list.DataSource = Country_values;
        list.DataBind();

        if (Session["updatedValue"] != null)
        {
            list.SelectedValue = Session["updatedValue"];
        }
    }
    else if (e.Item is GridDataItem && !e.Item.IsInEditMode && Page.IsPostBack)
    {
        GridDataItem item = e.Item as GridDataItem;
        Label label = item.FindControl("Label1") as Label;
        // update the label value
        label.Text = Session["updatedValue"];
    }
}

private void RadGrid1_UpdateCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;
    DropDownList list = editedItem.FindControl("List1") as DropDownList;
    Session["updatedValue"] = list.SelectedValue;
}
````
````VB
Protected Country_values As Object() = {New ListItem("Germany", "German"), New ListItem("England", "English"), New ListItem("Spain", "Spanish"), New ListItem("United States", "American")}

Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

End Sub

Private Sub RadGrid1_NeedDataSource(ByVal source As System.Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim MyOleDbConnection As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"))
    Dim MyOleDbDataAdapter As New OleDbDataAdapter
    MyOleDbDataAdapter.SelectCommand = New OleDbCommand("SELECT TOP 1 ContactName,Country FROM Customers", MyOleDbConnection)

    Dim myDataTable As New DataTable

    MyOleDbConnection.Open()
    Try
        MyOleDbDataAdapter.Fill(myDataTable)
    Finally
        MyOleDbConnection.Close()
    End Try

    RadGrid1.DataSource = myDataTable.DefaultView

End Sub

Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
        Dim item As GridEditableItem = e.Item
        'access/modify the edit item template settings here
        Dim list As DropDownList = item.FindControl("List1")
        list.DataSource = Country_values
        list.DataBind()
        If (Not Session("updatedValue") Is Nothing) Then
            list.SelectedValue = Session("updatedValue")
        End If
    ElseIf (TypeOf e.Item Is GridDataItem AndAlso Not e.Item.IsInEditMode AndAlso Page.IsPostBack) Then
        Dim item As GridDataItem = e.Item
        Dim label As Label = item.FindControl("Label1")

        'update the label value

        label.Text = Session("updatedValue")
    End If
End Sub

Private Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Dim editedItem As GridEditableItem = e.Item
    Dim list As DropDownList = editedItem.FindControl("List1")
    Session("updatedValue") = list.SelectedValue
End Sub
````


