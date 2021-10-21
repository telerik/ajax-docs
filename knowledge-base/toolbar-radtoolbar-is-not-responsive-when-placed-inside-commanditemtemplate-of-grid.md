---
title: RadToolbar is not responsive when placed inside CommandItemTemplate of Grid 
description: RadToolbar is not responsive when placed inside CommandItemTemplate of Grid . Check it now!
type: how-to
page_title: RadToolbar is not responsive when placed inside CommandItemTemplate of Grid 
slug: toolbar-radtoolbar-is-not-responsive-when-placed-inside-commanditemtemplate-of-grid
res_type: kb
---


## PROBLEM

Toolbar responsiveness breaks when placed inside the CommandItemTemplate of a responsive RadGrid.

## DESCRIPTION

When the TableLayout of the MasterTableView is not set explicitly to "fixed", the responsiveness of the Toolbar is working when the container of the Toolbar has a width that is narrower than the current width of the Toolbar itself. On the other hand, the width of the Grid cannot be narrower than the minimum width of its child elements.   
  
 With this two conditions at hand, we have a situation where the child element needs to be wider than its parent while the parent element is not allowed to be narrower of its child element. With that said, this is the expected behavior of the Toolbar in this scenario and custom implementations are required to achieve responsive Toolbar in responsive Grid.

## SOLUTION

***Solution 1:*** Set MasterTableView-TableLayout="Fixed"

***Solution 2:***Set the initial width of the Toolbar manually and then subscribe to the resize event of the window. In the event handler, we hide the Toolbar, so that the Grid can be resized properly, and when the resize stops, we show the Toolbar, which can then also resize properly based on its parent's new width.


````ASP.NET
<style>
    .RadGrid {
        min-width: fit-content;
    }
</style>
<script>
    var $ = $ || $telerik.$;
    function OnClientLoad(sender, args) {
        $(sender.get_element()).width($(sender.get_element().parentElement).width() - 5);
        sender.repaint();
        var timeout;
        $(window).on("resize", function () {
            clearTimeout(timeout);
            $(sender.get_element()).hide();
            timeout = setTimeout(function () {
                var parentWidth = $(sender.get_element().parentElement).width();
                $(sender.get_element()).show();
                $(sender.get_element()).width(parentWidth - 5);
                sender.repaint();
            }, 100)
        });
    }
</script>
<telerik:RadGrid ID="RadGrid1" RenderMode="Lightweight" runat="server"
    OnNeedDataSource="RadGrid1_NeedDataSource" AllowPaging="true">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" CommandItemDisplay="Top">
        <CommandItemTemplate>
            <div>
                <telerik:RadToolBar OnClientLoad="OnClientLoad" OnLoad="RadToolBar1_Load"
                    Width="100px" ID="RadToolBar1" runat="server">
                </telerik:RadToolBar>
            </div>
        </CommandItemTemplate>
        <Columns>
            <telerik:GridEditCommandColumn></telerik:GridEditCommandColumn>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" HeaderText="OrderID"
                ReadOnly="True" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                HeaderText="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = GetGridSource();
}
 
private DataTable GetGridSource()
{
    DataTable dataTable = new DataTable();
 
    dataTable.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dataTable.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dataTable.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
 
    dataTable.PrimaryKey = new DataColumn[] { dataTable.Columns["OrderID"] };
 
    for (int i = 0; i < 70; i++)
    {
        DataRow row = dataTable.NewRow();
        row["OrderID"] = i + 1;
        row["OrderDate"] = DateTime.Now;
        row["ShipCountry"] = "Country " + (i + 1);
 
        dataTable.Rows.Add(row);
    }
 
    return dataTable;
}
 
protected void RadToolBar1_Load(object sender, EventArgs e)
{
    var toolbar = sender as RadToolBar;
    for (int i = 1; i <= 15; i++)
    {
        toolbar.Items.Add(new RadToolBarButton("Button " + i));
    }
}
````








