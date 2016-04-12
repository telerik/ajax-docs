---
title: Deleting Grid Items Depending on CheckBox State
page_title: Deleting Grid Items Depending on CheckBox State | RadGrid for ASP.NET AJAX Documentation
description: Deleting Grid Items Depending on CheckBox State
slug: grid/data-editing/delete-records/deleting-grid-items-depending-on-checkbox-state
tags: deleting,grid,items,depending,on,checkbox,state
published: True
position: 5
---

# Deleting Grid Items Depending on CheckBox State



## 

The example below represents how to delete grid items depending on **GridCheckBoxColumn** state and **GridTemplateColumn** with checkbox as **ItemTemplate**. There are two separate buttons on the page which do the job.For the first case, you need to traverse the grid items and delete them from the grid source if the checkbox in the **GridCheckBoxColumn** cell is checked. This is done when the user presses the **Remove default-checked rows** button and will be propagated for the current page only.For the second case the main idea is to use **CustomersChecked** ViewState property in which to save the current checkbox state for the **GridTemplateColumn**. You will also need to subscribe to the **CheckedChanged** event of the checkbox and update **CustomersChecked.** Actually changes are made if the corresponding checkbox has been checked by the user (otherwise this property is not modified for ViewState optimization). When the user hits the **Remove user-checked rows** button each checked entry in **CustomersChecked** is deleted from the grid datas ource and the **CurrentPageIndex** is reset. Note that in this case the checked state is persisted on paging and checked items are deleted in all available pages.

The default delete functionality for each row through **DeleteColumn** button is also supported in this example.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" Style="z-index: 101; left: 48px; position: absolute;
  top: 32px" runat="server" AutoGenerateColumns="False" AllowSorting="True" PageSize="13"
  AllowPaging="True">
  <MasterTableView>
    <Columns>
      <telerik:GridBoundColumn Display="False" UniqueName="CustomerID" ReadOnly="True"
        HeaderText="CustomerID" DataField="CustomerID" />
      <telerik:GridCheckBoxColumn UniqueName="CheckBoxColumn" ReadOnly="True" HeaderText="CheckBox Column"
        DataField="Bool" />
      <telerik:GridBoundColumn UniqueName="ContactName" SortExpression="ContactName" HeaderText="ContactName"
        DataField="ContactName" />
      <telerik:GridBoundColumn UniqueName="Address" SortExpression="Address" HeaderText="Address"
        DataField="Address" />
      <telerik:GridBoundColumn UniqueName="Country" SortExpression="Country" HeaderText="Country"
        DataField="Country" />
      <telerik:GridTemplateColumn UniqueName="TemplateColumn" HeaderText="Check/Uncheck box">
        <ItemTemplate>
          <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="True" OnCheckedChanged="CheckChanged">
          </asp:CheckBox>
        </ItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridButtonColumn UniqueName="DeleteColumn" Text="Delete" CommandName="Delete">
      </telerik:GridButtonColumn>
    </Columns>
  </MasterTableView>
  <PagerStyle Mode="NumericPages"></PagerStyle>
</telerik:RadGrid>
<asp:Button ID="chkboxColumnButton" Style="z-index: 103; left: 776px; position: absolute;
  top: 112px" runat="server" Text="Remove default-checked rows"></asp:Button>
<asp:Button ID="chkboxTemplateButton" Style="z-index: 104; left: 776px; position: absolute;
  top: 160px" runat="server" Text="Remove User-checked rows"></asp:Button>
````
````C#
protected System.Web.UI.WebControls.Button chkboxColumnButton;
protected System.Web.UI.WebControls.Button chkboxTemplateButton;
protected Telerik.Web.UI.RadGrid RadGrid1;

private Hashtable CustomersChecked
{
    get
    {
        object res = ViewState["_cc"];
        if (res == null)
        {
            res = new Hashtable();
            ViewState["_cc"] = res;
        }

        return (Hashtable)res;
    }
}

private void Page_Load(object sender, System.EventArgs e)
{

}

override protected void OnInit(EventArgs e)
{
    //
    // CODEGEN: This call is required by the ASP.NET Web Form Designer.
    //
    InitializeComponent();
    base.OnInit(e);
}

/// <summary>
/// Required method for Designer support - do not modify
/// the contents of this method with the code editor.
/// </summary>
private void InitializeComponent()
{
    this.chkboxColumnButton.Click += new System.EventHandler(this.chkboxColumnButton_Click);
    this.chkboxTemplateButton.Click += new System.EventHandler(this.chkboxTemplateButton_Click);
    this.RadGrid1.DeleteCommand += new Telerik.Web.UI.GridCommandEventHandler(this.RadGrid1_DeleteCommand);
    this.RadGrid1.NeedDataSource += new Telerik.Web.UI.GridNeedDataSourceEventHandler(this.RadGrid1_NeedDataSource);
    this.RadGrid1.ItemDataBound += new Telerik.Web.UI.GridItemEventHandler(this.RadGrid1_ItemDataBound);
    this.Load += new System.EventHandler(this.Page_Load);

}
protected void CheckChanged(object sender, System.EventArgs e)
{
    CheckBox box = (CheckBox)sender;
    GridDataItem item = (GridDataItem)box.NamingContainer;
    Hashtable target = null;

    target = CustomersChecked;

    if (box.Checked)
    {
        target[item["CustomerID"].Text] = true;
    }
    else
    {
        target[item["CustomerID"].Text] = null;
    }
}
private void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    OleDbConnection MyOleDbConnection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"));
    OleDbDataAdapter MyOleDbDataAdapter = new OleDbDataAdapter();
    MyOleDbDataAdapter.SelectCommand = new OleDbCommand("SELECT TOP 25 CustomerID, ContactName, Address, Country, Bool FROM Customers", MyOleDbConnection);

    DataTable myDataTable;
    if (Session["DataSource"] != null)
    {
        myDataTable = (DataTable)Session["DataSource"];
    }
    else
    {
        myDataTable = new DataTable();
        MyOleDbConnection.Open();
        try
        {
            MyOleDbDataAdapter.Fill(myDataTable);
        }
        finally
        {
            MyOleDbConnection.Close();
        }
        myDataTable.PrimaryKey = new DataColumn[] { myDataTable.Columns["CustomerID"] };
        Session["DataSource"] = myDataTable;
    }

    RadGrid1.DataSource = myDataTable.DefaultView;

}

private void RadGrid1_DeleteCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    string ID = (e.Item as GridDataItem)["CustomerID"].Text;
    DataTable table = (DataTable)Session["DataSource"];
    if (table.Rows.Find(ID) != null)
    {
        table.Rows.Find(ID).Delete();
        table.AcceptChanges();

    }
}

private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem item = e.Item as GridDataItem;

        CheckBox box = (CheckBox)item.FindControl("CheckBox1");
        object isChecked = null;

        isChecked = CustomersChecked[item["CustomerID"].Text];

        if (isChecked != null)
        {
            box.Checked = (bool)isChecked == true;
        }
    }
}

private void chkboxColumnButton_Click(object sender, System.EventArgs e)
{
    foreach (GridItem item in RadGrid1.MasterTableView.Items)
    {
        if (item is GridDataItem)
        {
            GridDataItem current = item as GridDataItem;
            CheckBox box = (CheckBox)current["CheckBoxColumn"].Controls[0];
            if (box.Checked)
            {
                string ID = current["CustomerID"].Text;
                DataTable table = (DataTable)Session["DataSource"];
                if (table.Rows.Find(ID) != null)
                {
                    table.Rows.Find(ID).Delete();
                    table.AcceptChanges();
                }
            }
        }

    }
    RadGrid1.MasterTableView.Rebind();
}

private void chkboxTemplateButton_Click(object sender, System.EventArgs e)
{
    DataTable table = (DataTable)Session["DataSource"];
    foreach (DictionaryEntry entry in this.CustomersChecked)
    {
        table.Rows.Find(entry.Key).Delete();
    }
    //refresh deleted list
    ViewState["_cc"] = null;
    table.AcceptChanges();
    //reset CurrentPageIndex when items count changes to avoid incorrect page index error
    RadGrid1.MasterTableView.CurrentPageIndex = 0;
    RadGrid1.Rebind();
}
````
````VB
Protected WithEvents RadGrid1 As Telerik.Web.UI.RadGrid
Protected WithEvents chkboxColumnButton As System.Web.UI.WebControls.Button
Protected WithEvents chkboxTemplateButton As System.Web.UI.WebControls.Button

Private Sub Page_Init(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Init
    'CODEGEN: This method call is required by the Web Form Designer
    'Do not modify it using the code editor.
    InitializeComponent()
End Sub

Private ReadOnly Property CustomersChecked() As Hashtable
    Get
        Dim res As Object = ViewState("_cc")
        If res Is Nothing Then
            res = New Hashtable
            ViewState("_cc") = res
        End If

        Return CType(res, Hashtable)
    End Get
End Property

Private Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

End Sub
Protected Sub CheckChanged(ByVal sender As Object, ByVal e As System.EventArgs)
    Dim box As CheckBox = CType(sender, CheckBox)
    Dim item As GridDataItem = CType(box.NamingContainer, GridDataItem)
    Dim target As Hashtable = Nothing

    target = CustomersChecked

    If box.Checked Then
        target(item("CustomerID").Text) = True
    Else
        target(item("CustomerID").Text) = Nothing
    End If
End Sub 'CheckChanged

Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim MyOleDbConnection As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + Server.MapPath("~/Grid/Data/Access/Nwind.mdb"))
    Dim MyOleDbDataAdapter As New OleDbDataAdapter
    MyOleDbDataAdapter.SelectCommand = New OleDbCommand("SELECT TOP 25 CustomerID, ContactName, Address, Country, Bool FROM Customers", MyOleDbConnection)

    Dim myDataTable As DataTable
    If Not (Session("DataSource") Is Nothing) Then
        myDataTable = CType(Session("DataSource"), DataTable)
    Else
        myDataTable = New DataTable
        MyOleDbConnection.Open()
        Try
            MyOleDbDataAdapter.Fill(myDataTable)
        Finally
            MyOleDbConnection.Close()
        End Try
        myDataTable.PrimaryKey = New DataColumn() {myDataTable.Columns("CustomerID")}
        Session("DataSource") = myDataTable
    End If

    RadGrid1.DataSource = myDataTable.DefaultView
End Sub 'RadGrid1_NeedDataSource

Private Sub RadGrid1_DeleteCommand(ByVal [source] As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.DeleteCommand
    Dim item As GridDataItem = e.Item
    Dim ID As String = item("CustomerID").Text
    Dim table As DataTable = CType(Session("DataSource"), DataTable)
    If Not (table.Rows.Find(ID) Is Nothing) Then
        table.Rows.Find(ID).Delete()
        table.AcceptChanges()
    End If
End Sub 'RadGrid1_DeleteCommand

Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridDataItem Then
        Dim item As GridDataItem = e.Item

        Dim box As CheckBox = CType(item.FindControl("CheckBox1"), CheckBox)
        Dim isChecked As Object = Nothing

        isChecked = CustomersChecked(item("CustomerID").Text)

        If Not (isChecked Is Nothing) Then
            box.Checked = CBool(isChecked) = True
        End If
    End If
End Sub 'RadGrid1_ItemDataBound
Private Sub chkboxColumnButton_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles chkboxColumnButton.Click
    Dim item As GridItem
    For Each item In RadGrid1.MasterTableView.Items
        If TypeOf item Is GridDataItem Then
            Dim current As GridDataItem = item
            Dim box As CheckBox = CType(current("CheckBoxColumn").Controls(0), CheckBox)
            If box.Checked Then
                Dim ID As String = current("CustomerID").Text
                Dim table As DataTable = CType(Session("DataSource"), DataTable)
                If Not (table.Rows.Find(ID) Is Nothing) Then
                    table.Rows.Find(ID).Delete()
                    table.AcceptChanges()
                End If
            End If
        End If
    Next item
    RadGrid1.MasterTableView.Rebind()
End Sub chkboxColumnButton_Click
Private Sub chkboxTemplateButton_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles chkboxTemplateButton.Click
    Dim table As DataTable = CType(Session("DataSource"), DataTable)
    Dim entry As DictionaryEntry
    For Each entry In Me.CustomersChecked
        table.Rows.Find(entry.Key).Delete()
    Next entry
    'refresh deleted list
    ViewState("_cc") = Nothing
    table.AcceptChanges()
    'reset CurrentPageIndex when items count changes to avoid incorrect page index error
    RadGrid1.MasterTableView.CurrentPageIndex = 0
    RadGrid1.Rebind()
End Sub chkboxTemplateButton_Click
````

