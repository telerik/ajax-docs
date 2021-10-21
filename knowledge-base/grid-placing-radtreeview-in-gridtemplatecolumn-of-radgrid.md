---
title: Placing RadTreeView in GridTemplateColumn of RadGrid
description: Placing RadTreeView in GridTemplateColumn of RadGrid. Check it now!
type: how-to
page_title: Placing RadTreeView in GridTemplateColumn of RadGrid
slug: grid-placing-radtreeview-in-gridtemplatecolumn-of-radgrid
res_type: kb
---



## HOW-TO  
Place RadTreeView in GridTemplateColumn of RadGrid  
   
 ## DESCRIPTION  
There are cases in which you may want to show a treeview-like structure inside ItemTemplate of GridTemplateColumn  
   
## SOLUTIONs  
 This task is pretty much straight-forward. You just need to wrap RadTreeView instance inside the **ItemTemplate** of your **GridTemplateColumn** and configure it to display the data you would like to present for the end user.   
 The sample code below shows how to render **Locations** loaded from XML content file in TreeView object (embedded in RadGrid instance):  
   
 ````aspx
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js">
        </asp:ScriptReference>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js">
        </asp:ScriptReference>
    </Scripts>
</telerik:RadScriptManager>
<div>
    <telerik:RadGrid ID="RadGrid1" runat="server" OnItemDataBound="RadGrid1_ItemDataBound"
        CellSpacing="0" GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource">
        <MasterTableView AllowSorting="true" AutoGenerateColumns="false">
            <Columns>
                <telerik:GridBoundColumn HeaderText="CompanyName" DataField="CompanyName" UniqueName="CompanyName">
                </telerik:GridBoundColumn>
                <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Locations" ItemStyle-Width="350px"
                    ItemStyle-Height="70px" ItemStyle-VerticalAlign="Top">
                    <ItemTemplate>
                        <telerik:RadTreeView ID="RadTreeView1" runat="server">
                        </telerik:RadTreeView>
                    </ItemTemplate>
                </telerik:GridTemplateColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>
</div>
 ````

 ````C#
 protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        RadTreeView tree = (RadTreeView)e.Item.FindControl("RadTreeView1");
        tree.LoadContentFile("tree.xml");
    }
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDataTable("SELECT TOP 7 CompanyName FROM Customers");
}
 
public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);
 
    DataTable myDataTable = new DataTable();
 
    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }
 
    return myDataTable;
}
````

````VB              
Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf (e.Item) Is GridDataItem Then
        Dim tree As RadTreeView = CType(e.Item.FindControl("RadTreeView1"), RadTreeView)
        tree.LoadContentFile("tree.xml")
    End If
End Sub
 
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = GetDataTable("SELECT TOP 7 CompanyName FROM Customers")
End Sub
 
Public Function GetDataTable(ByVal query As String) As DataTable
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As SqlConnection = New SqlConnection(ConnString)
    Dim adapter As SqlDataAdapter = New SqlDataAdapter
    adapter.SelectCommand = New SqlCommand(query, conn)
    Dim table1 As New DataTable
    conn.Open()
    Try
        adapter.Fill(table1)
    Finally
        conn.Close()
    End Try
    Return table1
End Function
````

You can download the sample treeview-in-gridtemplatecolumn.zip project from [here](files/treeview-in-gridtemplatecolumn.zip).

    