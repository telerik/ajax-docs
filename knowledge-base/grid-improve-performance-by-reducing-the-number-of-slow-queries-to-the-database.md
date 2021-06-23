---
title: Improve performance by reducing the number of slow queries to the database 
description: Improve performance by reducing the number of slow queries to the database
type: how-to
page_title: Improve performance by reducing the number of slow queries to the database - RadGrid
slug: grid-improve-performance-by-reducing-the-number-of-slow-queries-to-the-database
res_type: kb
---

## DESCRIPTION

In some cases requesting data could take long due to large databases or complex queries and this process is repeated by RadGrid at certain commands, such as Paging, sorting, filtering, etc..

The apparent slow performance of RadGrid is due to the multiple queries it makes to the database. Certain commands will make the grid rebind (request data from the database). Here is a list of [commands that invoke Rebind Implicitly.](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/control-lifecycle/commands-that-invoke-rebind-implicitly)

![](images/grid-improve-performance-by-reducing-slow-queries.gif)

## SOLUTION

Unnecessary queries to the database could be avoided by saving the data into a Session/Cookie variable and reuse the Session/Cookie data instead of sending queries to database as shown in the demo below.

````XML
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
    </Scripts>
</telerik:RadScriptManager>
 
 
<telerik:RadCodeBlock runat="server">
    <script type="text/javascript">
        function pageLoad(sender, eventArgs) {
            if (!eventArgs.get_isPartialLoad()) {
                $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("InitialPageLoad");
            }
        }
    </script>
</telerik:RadCodeBlock>
 
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
        <telerik:AjaxSetting AjaxControlID="Panel1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
         <telerik:AjaxSetting AjaxControlID="RadButton1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
         <telerik:AjaxSetting AjaxControlID="RadButton2">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Panel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
 
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="DimGray" Transparency="50" MinDisplayTime="300">
</telerik:RadAjaxLoadingPanel>
 
<telerik:RadButton ID="RadButton1" runat="server" Text="Rebind the RadGrid" OnClick="RadButton1_Click"></telerik:RadButton>
<telerik:RadButton ID="RadButton2" runat="server" Text="Post Back"></telerik:RadButton>
<telerik:RadButton ID="RadButton3" runat="server" Text="Clear Session" OnClick="RadButton3_Click"></telerik:RadButton>
<br />
<br />
 
<asp:Panel ID="Panel1" runat="server">
    <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" Visible="false">
        <MasterTableView AutoGenerateColumns="true" DataKeyNames="OrderID" CommandItemDisplay="Top">
        </MasterTableView>
    </telerik:RadGrid>
</asp:Panel>
````


````C#
private string sessionKey = "MyKey";
public DataTable SessionDataSource
{
    get
    {
        if (Session[sessionKey] == null)
            Session[sessionKey] = QueryFromDataBase();
 
        return (DataTable)Session[sessionKey];
    }
    set
    {
        Session[sessionKey] = value;
    }
}
 
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
        Session[sessionKey] = null;
}
 
protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
    if (e.Argument == "InitialPageLoad")
    {
        RadGrid1.Visible = true;
        RadGrid1.Rebind();
    }
}
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = SessionDataSource;
}
 
private DataTable QueryFromDataBase()
{
    DataTable dt = new DataTable();
 
    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
 
    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };
 
    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;
 
        DataRow row = dt.NewRow();
 
        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;
 
        dt.Rows.Add(row);
    }
    System.Threading.Thread.Sleep(4000); // simulate slow database query
 
    return dt;
}
protected void RadButton1_Click(object sender, EventArgs e)
{
    RadGrid1.Visible = true;
    RadGrid1.Rebind();
}
protected void RadButton3_Click(object sender, EventArgs e)
{
    Session[sessionKey] = null;
    Response.Redirect(Request.RawUrl);
}
````
````VB
Private sessionKey As String = "MyKey"
Public Property SessionDataSource() As DataTable
    Get
        If Session(sessionKey) Is Nothing Then
            Session(sessionKey) = QueryFromDataBase()
        End If
 
        Return DirectCast(Session(sessionKey), DataTable)
    End Get
    Set(ByVal value As DataTable)
        Session(sessionKey) = value
    End Set
End Property
 
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        Session(sessionKey) = Nothing
    End If
 
End Sub
 
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
    If e.Argument = "InitialPageLoad" Then
        RadGrid1.Visible = True
        RadGrid1.Rebind()
    End If
End Sub
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = SessionDataSource()
End Sub
 
Private Function QueryFromDataBase() As DataTable
    Dim dt As New DataTable()
 
    dt.Columns.Add(New DataColumn("OrderID", Type.GetType("System.Int32")))
    dt.Columns.Add(New DataColumn("OrderDate", Type.GetType("System.DateTime")))
    dt.Columns.Add(New DataColumn("Freight", Type.GetType("System.Decimal")))
    dt.Columns.Add(New DataColumn("ShipName", Type.GetType("System.String")))
    dt.Columns.Add(New DataColumn("ShipCountry", Type.GetType("System.String")))
 
    Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
    PrimaryKeyColumns(0) = dt.Columns("OrderID")
    dt.PrimaryKey = PrimaryKeyColumns
 
    For i As Integer = 0 To 70 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()
 
        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index
 
        dt.Rows.Add(row)
    Next
 
    System.Threading.Thread.Sleep(4000) 'simulate slow database query
 
    Return dt
 
End Function
 
Protected Sub RadButton1_Click(sender As Object, e As EventArgs)
    RadGrid1.Visible = True
    RadGrid1.Rebind()
End Sub
Protected Sub RadButton3_Click(sender As Object, e As EventArgs)
    Session(sessionKey) = Nothing
    Response.Redirect(Request.RawUrl)
End Sub
````

Other ways to improve performance are the following:

1. Use [Batch editing](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx). It works mainly on the client and does not trigger a postback on every change. 
   
   - Batch Editing Overview article:[https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/overview);
   - Accessing Controls in Batch Edit Mode: [https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-controls-in-batch-edit-mode](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-controls-in-batch-edit-mode)

  
1. Implement your own caching on the database level or try the built-in caching of the SqlDataSource:
   
   - [Caching Data with the SqlDataSource Control](https://docs.microsoft.com/en-us/previous-versions/z56y8ksb%28v=vs.140%29)

1. Consider using a Kendo Grid - it operates entirely on the client and does not request the data source when entering edit mode. It relies on services for its CRUD operations so you can use them instead of an ObjectDataSource to page, filter, sort the data and to update the single record that was altered by the user: [https://demos.telerik.com/kendo-ui/grid/editing-inline](https://demos.telerik.com/kendo-ui/grid/editing-inline).

 
