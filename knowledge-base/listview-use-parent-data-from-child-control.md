---
title: Use Parent Data from Child Control
description: Use Parent Data from Child Control. Check it now!
type: how-to
page_title: Use Parent Data from Child Control
slug: listview-use-parent-data-from-child-control
res_type: kb
---


## HOW TO

Use data from the RadListView item in a nested control event.

## DESCRIPTION

In some cases you will have complex templates in a **RadListView** and you will need to use their data for operations of their child controls. For example, to perform further data binding based on the current item of the parent listview.

## SOLUTION

The easiest way to do that is to add the field to the DataKeyNames collection of the main ListView and access it from the child control's event by casting its NamingContainer to a listview item.

````ASP.NET
<telerik:RadListView runat="server" ID="rlv1" DataKeyNames="ID" OnNeedDataSource="rlv1_NeedDataSource" ItemPlaceholderID="thePlaceholder">
    <LayoutTemplate>
        <div style="border: 1px solid red;">
            <asp:Panel ID="thePlaceholder" runat="server"></asp:Panel>
        </div>
    </LayoutTemplate>
    <ItemTemplate>
        <%#Eval("ID") %>
        <br />
        <%# Eval("currDate") %>
        <telerik:RadListView runat="server" ID="rlvNested" OnNeedDataSource="rlvNested_NeedDataSource" ItemPlaceholderID="innerPlaceholder">
            <LayoutTemplate>
                <div style="border: 1px solid green;">
                    <asp:Panel runat="server" ID="innerPlaceholder"></asp:Panel>
                </div>
            </LayoutTemplate>
            <ItemTemplate>
                <%#Eval("ID") %>
                <br />
                <%# Eval("currTime") %>
            </ItemTemplate>
        </telerik:RadListView>
    </ItemTemplate>
</telerik:RadListView>
<asp:Button Text="rebind parent" ID="Button1" OnClick="Button1_Click" runat="server" />
````

````C#
protected void rlvNested_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
{
 
    RadListView currListView = sender as RadListView;
    decimal val = (decimal)(currListView.NamingContainer as RadListViewDataItem).GetDataKeyValue("ID");
 
    DataTable tbl = new DataTable();
    tbl.Columns.Add(new DataColumn("ID", typeof(decimal)));
    tbl.Columns.Add(new DataColumn("currTime", typeof(DateTime)));
    for (int i = 0; i < 5; i++)
    {
        tbl.Rows.Add(new object[] { val, DateTime.Now });
    }
 
    currListView.DataSource = tbl;
}
 
protected DataTable GetMainDs()
{
    DataTable tbl = new DataTable();
    tbl.Columns.Add(new DataColumn("ID", typeof(decimal)));
    tbl.Columns.Add(new DataColumn("someField", typeof(string)));
    tbl.Columns.Add(new DataColumn("currDate", typeof(DateTime)));
    tbl.Columns.Add(new DataColumn("moreData", typeof(decimal)));
    tbl.Columns.Add(new DataColumn("someColumn", typeof(string)));
    tbl.Rows.Add(new object[] { 1, "one", DateTime.Now, 2, "5" });
    tbl.Rows.Add(new object[] { 2, "two", DateTime.Now, 3, null/*SIMULATE EMPTY VALUE*/ });
    tbl.Rows.Add(new object[] { 3, "three", DateTime.Now, 4, "5" });
    tbl.Rows.Add(new object[] { 4, "four", DateTime.Now, 5, "5" });
 
    return tbl;
}
 
protected void rlv1_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
{
    (sender as RadListView).DataSource = GetMainDs();
}
 
 
protected void Button1_Click(object sender, EventArgs e)
{
    rlv1.Rebind();
}
````
````VB
Protected Sub rlvNested_NeedDataSource(ByVal sender As Object, ByVal e As RadListViewNeedDataSourceEventArgs)
    Dim currListView As RadListView = TryCast(sender, RadListView)
    Dim val As Decimal = CDec((TryCast(currListView.NamingContainer, RadListViewDataItem)).GetDataKeyValue("ID"))
    Dim tbl As DataTable = New DataTable()
    tbl.Columns.Add(New DataColumn("ID", GetType(Decimal)))
    tbl.Columns.Add(New DataColumn("currTime", GetType(DateTime)))

    For i As Integer = 0 To 5 - 1
        tbl.Rows.Add(New Object() {val, DateTime.Now})
    Next

    currListView.DataSource = tbl
End Sub

Protected Function GetMainDs() As DataTable
    Dim tbl As DataTable = New DataTable()
    tbl.Columns.Add(New DataColumn("ID", GetType(Decimal)))
    tbl.Columns.Add(New DataColumn("someField", GetType(String)))
    tbl.Columns.Add(New DataColumn("currDate", GetType(DateTime)))
    tbl.Columns.Add(New DataColumn("moreData", GetType(Decimal)))
    tbl.Columns.Add(New DataColumn("someColumn", GetType(String)))
    tbl.Rows.Add(New Object() {1, "one", DateTime.Now, 2, "5"})
    tbl.Rows.Add(New Object() {2, "two", DateTime.Now, 3, Nothing})
    tbl.Rows.Add(New Object() {3, "three", DateTime.Now, 4, "5"})
    tbl.Rows.Add(New Object() {4, "four", DateTime.Now, 5, "5"})
    Return tbl
End Function

Protected Sub rlv1_NeedDataSource(ByVal sender As Object, ByVal e As RadListViewNeedDataSourceEventArgs)
    (TryCast(sender, RadListView)).DataSource = GetMainDs()
End Sub

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    rlv1.Rebind()
End Sub
````

