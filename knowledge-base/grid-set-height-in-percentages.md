---
title: Set Grid height in percentages
description: Set Grid height in percentages. Check it now!
type: how-to
page_title: Set Grid height in percentages. | RadGrid
slug: grid-set-height-in-percentages
res_type: kb
---

## Description

The artcile consists of 5 different scenarios, each delving into a possible solution to setting the Grid's height in percententage.

## Solutution

### Grid in Splitter

In order to set an element’s height in percentage unit (in this case the Grid) it is required all ascendant elements to have an explicit height in percent until an element with height in pixels is met. 

In this case, only the RadPane needs to have an explicit height. If you want the whole Splitter to occupy 100% of the page, then set the Splitter’s height in percentage and follow the basic rule explained above. 

````ASP.NET
<telerik:RadSplitter ID="RadSplitter1" runat="server" Height="100%" Orientation="Horizontal" Width="100%">
    <telerik:RadPane ID="contentPane" Height="80%" runat="server" Scrolling="none">
        <telerik:RadSplitter ID="RadSplitter2" runat="server" Orientation="Vertical">
            <telerik:RadPane ID="topPane" Scrolling="None" runat="server">
                <telerik:RadTreeView runat="server" RenderMode="Lightweight" ID="RadTreeView1">
                    <Nodes>
                        <telerik:RadTreeNode Text="Root 1" Expanded="true">
                            <Nodes>
                                <telerik:RadTreeNode Text="Child 1.1"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 1.2"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 1.3"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 1.4"></telerik:RadTreeNode>
                            </Nodes>
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode Text="Root 2" Expanded="true">
                            <Nodes>
                                <telerik:RadTreeNode Text="Child 2.1"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 2.2"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 2.3"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 2.4"></telerik:RadTreeNode>
                            </Nodes>
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode Text="Root 3" Expanded="true">
                            <Nodes>
                                <telerik:RadTreeNode Text="Child 3.1"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 3.2"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 3.3"></telerik:RadTreeNode>
                                <telerik:RadTreeNode Text="Child 3.4"></telerik:RadTreeNode>
                            </Nodes>
                        </telerik:RadTreeNode>
                    </Nodes>
                </telerik:RadTreeView>
            </telerik:RadPane>
            <telerik:RadSplitBar ID="RadSplitbar2" runat="server" CollapseMode="Forward" />
            <telerik:RadPane ID="bottomPane" Scrolling="None" Height="100%" runat="server">
                <telerik:RadGrid ID="RadGrid1" Height="100%" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" AllowSorting="true">
                    <MasterTableView Width="100%" TableLayout="Fixed" AutoGenerateColumns="false">
                        <Columns>
                            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
                            </telerik:GridBoundColumn>
                            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                                SortExpression="OrderDate" UniqueName="OrderDate">
                            </telerik:GridDateTimeColumn>
                            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                                SortExpression="Freight" UniqueName="Freight">
                            </telerik:GridNumericColumn>
                            <telerik:GridBoundColumn DataField="ShipName"
                                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                                SortExpression="ShipName" UniqueName="ShipName">
                            </telerik:GridBoundColumn>
                            <telerik:GridBoundColumn DataField="ShipCountry"
                                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                                SortExpression="ShipCountry" UniqueName="ShipCountry">
                            </telerik:GridBoundColumn>
                        </Columns>
                    </MasterTableView>
                    <ClientSettings>
                        <Scrolling AllowScroll="true" UseStaticHeaders="true" />
                    </ClientSettings>
                </telerik:RadGrid>
            </telerik:RadPane>
        </telerik:RadSplitter>
    </telerik:RadPane>
</telerik:RadSplitter>
````

Additionally, make sure you have included this CSS rule in the page styles:

````CSS
<style>
    html,
    body,
    form {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
</style>
````

### Grid in TabStrip

The case is very similar to that with the Splitter, this time however the **PageView** that holds the Grid needs to have an explicit height too.

````ASP.NET
<telerik:RadTabStrip runat="server" ID="RadTabStrip" MultiPageID="RadMultiPage1" SelectedIndex="0">
    <Tabs>
        <telerik:RadTab Text="tab1" Selected="true"></telerik:RadTab>
        <telerik:RadTab Text="tab3"></telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage runat="server" ID="RadMultiPage1">
    <telerik:RadPageView runat="server" Height="700px" ID="RadPageView1" Selected="true" CssClass="PageView1">
        Switch to the next tab and see how the grid is expanded and takes all the available space in the page view >>>
    </telerik:RadPageView>
    <telerik:RadPageView runat="server" Height="700px" ID="RadPageView2" CssClass="PageView2">
        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" PageSize="50" Height="100%"
            AllowSorting="true" OnNeedDataSource="RadGrid1_NeedDataSource">
            <MasterTableView TableLayout="Fixed" Width="100%">
            </MasterTableView>
            <ClientSettings>
                <Scrolling AllowScroll="true" UseStaticHeaders="true" />
            </ClientSettings>
        </telerik:RadGrid>
    </telerik:RadPageView>
</telerik:RadMultiPage>
````

````CSS
<style>
    html,
    body,
    form {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }
</style>
````

### Grid in RadAjaxPanel: 

When the Grid is wrapped in a **RadAjaxPanel**, there are two wrapper div elemenets that are rendered around it. So, in order to set Grid’s height in percentage these two divs should also have heights in percentage. 

To do that set the Height property of RadAjaxPanel, like shown in the demo and include the following CSS rules in the page styles:

````ASP.NET
<telerik:RadAjaxPanel runat="server" ID="RadAjaxPanel1" Height="100%">
    <telerik:RadGrid ID="RadGrid1" Height="100%" runat="server"
        AllowSorting="true" OnNeedDataSource="RadGrid1_NeedDataSource">
        <MasterTableView Width="100%" TableLayout="Fixed">
        </MasterTableView>
        <ClientSettings>
            <Scrolling AllowScroll="true" UseStaticHeaders="true" />
        </ClientSettings>
    </telerik:RadGrid>
</telerik:RadAjaxPanel>
````

````CSS
<style>
    html,
    body,
    form {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    div.RadGrid {
        border: 0 none;
    }
</style>
````

### Grid and RadAjaxManager

The situation is analogical for **RadAjaxManager**. This time however the ***UpdatePanelHeight*** property needs to be set in the ajax settings.

````ASP.NET
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" UpdatePanelHeight="100%" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadGrid ID="RadGrid1" Height="100%" runat="server" AllowPaging="true" PageSize="50"
    AllowSorting="true" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView TableLayout="Fixed" Width="100%">
    </MasterTableView>
    <ClientSettings>
        <Scrolling AllowScroll="true" UseStaticHeaders="true" />
    </ClientSettings>
</telerik:RadGrid>
````

````CSS
<style>
    html,
    body,
    form {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    div.RadGrid {
        border: 0 none;
    }
</style>
````

### Grid on a page with header and footer.

It is very common scenario to have a header and footer on the page and you require the Grid to occupy the space between them. Also the Grid should resize correctly when the browser window is vertically expanded or shrank. 

To achieve this, the only thing that needs to be done is to subtract the header and footer heights (including padding, margin and border) from window’s height and pass the result as grid height. The grid client object should be repainted on window resize event so it can recalculate its metrics properly when resized vertically.

````ASP.NET
<div class="header">This is a header</div>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="true" PageSize="50"
    AllowSorting="true" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView Width="100%" TableLayout="Fixed">
    </MasterTableView>
    <ClientSettings>
        <Scrolling AllowScroll="true" UseStaticHeaders="true" />
    </ClientSettings>
</telerik:RadGrid>

<div class="footer">This is a footer</div>
````

````JavaScript
<script>
	var $ = $telerik.$; // Make jQuery available through $ alias

	function pageLoad() {
		setGridHeight(); // Set grid's height on page load
	}

	$(window).resize(function(){
		setGridHeight(); // Maintain grid's height on window resize
	});
		
	function setGridHeight() {
		var headerHeight = $('.header').outerHeight(),  // Header height including margin, padding and borders
			footerHeight = $('.footer').outerHeight(),  // Footer height including margin, padding and borders
			windowHeight = $(window).height(),          // Window height
			gridObj = $find('<%= RadGrid1.ClientID%>'), // Grid's client object

		gridHeight = windowHeight - (headerHeight + footerHeight + 2); // Calculate grid's height
		$('#' + gridObj.get_id()).height(gridHeight);                  // Set grid's height to the calculated
		gridObj.repaint();                                             // It is required to repaint the grid so it can recalculate its metrics after window resize
	}
</script>
````

````CSS
<style>
    html,
    body,
    form {
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    div.RadGrid {
        border: 0 none;
    }
</style>
````

All the databinding used for the Grids: 

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable(); 
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(double)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 100; i++)
    {
        int index = i + 1;
        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = DateTime.Now.Date.AddDays(index);
        row["Freight"] = index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;

        dt.Rows.Add(row);
    }

    return dt;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    CType(sender, RadGrid).DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As New DataTable()

    dt.Columns.Add(New DataColumn("OrderID", GetType(Int32)))
    dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dt.Columns.Add(New DataColumn("Freight", GetType(Double)))
    dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))

    Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}

    PrimaryKeyColumns(0) = dt.Columns("OrderID")

    dt.PrimaryKey = PrimaryKeyColumns

    For i As Integer = 0 To 100 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()

        row("OrderID") = index
        row("OrderDate") = DateTime.Now.Date.AddDays(i)
        row("Freight") = index * 0.1
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````


 
  
    
