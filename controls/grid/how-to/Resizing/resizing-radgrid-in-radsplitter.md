---
title: Resizing RadGrid in RadSplitter
page_title: Resizing RadGrid in RadSplitter - RadGrid
description: Check our Web Forms article about Resizing RadGrid in RadSplitter.
slug: grid/how-to/resizing/resizing-radgrid-in-radsplitter
tags: resizing,radgrid,in,radsplitter
published: True
position: 6
---

# Resizing RadGrid in RadSplitter



##

[This example](https://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridAndSplitterResizing/DefaultCS.aspx?product=grid) shows how you can resize RadGrid when resizing its splitter container. The RadSplitter control exposes **OnClientPaneResized** client event which can be handled to initiate an AJAX request and then all you need to do is calculate and set the new value of the **PageSize** property on the server.

Additionally, to make the grid stretch inside the corresponding pane on horizontal resize, simply set the Width property of RadGrid to 100%.

![Resize grid in splitter](images/grdResizeGridInSplitter.PNG)

Below is the code logic used in the example:



````JavaScript
function ClientResized(sender, eventArgs) {
  $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest('ChangePageSize');
}
````
````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadSplitter RenderMode="Lightweight" ID="RadSplitter1" Width="700px" runat="server" Orientation="Horizontal">
  <telerik:RadPane ID="gridPane" runat="server" Height="200px" OnClientResized="ClientResized"
    Scrolling="None">
    <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="true" Width="700px" Skin="Telerik">
      <MasterTableView AllowPaging="true" />
      <PagerStyle Mode="NumericPages" />
    </telerik:RadGrid>
  </telerik:RadPane>
  <telerik:RadSplitBar ID="RadSplitBar2" runat="server" EnableResize="True">
  </telerik:RadSplitBar>
  <telerik:RadPane ID="listBoxPane" runat="server" CssClass="TextStyle">
    RadSplitter Prometheus enables you to build desktop-like application interfaces
    with resizable areas and sliding, dockable panels just like in Visual Studio .Net.
    Each layout can be indefinitely nested with splitters, whose state is automatically
    persisted on the server and can be saved/loaded through the extensive API.
  </telerik:RadPane>
</telerik:RadSplitter>
````
````C#
private void Page_Load(object sender, System.EventArgs e)
{
    if (!Page.IsPostBack)
    {
        //Set initial value of the PageSize property.                
        RadGrid1.PageSize = 6;
    }
}
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
    switch (e.Argument.ToString())
    {
        case "ChangePageSize":
            /*
            * Calculate the number of rows that fit in the RadPane.                 
            * In this case 23 is the sum of the height of a single row and its upper border width.   
            * Depending on the paticular scenario this value may vary.       
            */
            int rows = (Int32.Parse(this.gridPane.Height.Value.ToString()) - 60) / 23;
            if (rows >= 1)
            {
                RadGrid1.PageSize = rows;
                // Check whether the CurrentPageIndex is correct.                    
                if (Session["itemsCount"] != null)
                {
                    int itemsCount = (int)Session["itemsCount"];
                    int pageCount = (int)Math.Ceiling(((double)itemsCount / rows));
                    if (RadGrid1.MasterTableView.CurrentPageIndex > pageCount - 1)
                    {
                        RadGrid1.MasterTableView.CurrentPageIndex = pageCount - 1;
                    }
                }
                RadGrid1.Rebind();
            }
            break;
    }
}
private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle FROM Customers", conn);
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
    Session["itemsCount"] = myDataTable.DefaultView.Count;
    RadGrid1.DataSource = myDataTable;
}

````
````VB
Private Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles MyBase.Load
    If Not Page.IsPostBack Then
        RadGrid1.PageSize = 6
    End If
End Sub
Private Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As SqlConnection = New SqlConnection(ConnString)
    Dim adapter As SqlDataAdapter = New SqlDataAdapter
    adapter.SelectCommand = New SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle FROM Customers", conn)
    Dim table1 As New DataTable
    conn.Open()
    Try
        adapter.Fill(table1)
    Finally
        conn.Close()
    End Try
    RadGrid1.DataSource = table1
End Sub
Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
    InitializeComponent()
    MyBase.OnInit(e)
End Sub
Private Sub InitializeComponent()
End Sub
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As UI.AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
    Select Case e.Argument.ToString()
        Case "ChangePageSize"
            Dim rows As Integer = (Int32.Parse(Me.gridPane.Height.Value.ToString()) - 60) / 23
            If rows >= 1 Then
                RadGrid1.PageSize = rows
                RadGrid1.Rebind()
            End If
            Exit Select
    End Select
End Sub
````



