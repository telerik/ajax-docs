---
title: Cascading MultiColumnComboBox in Grid with BatchEdit
description: Cascade MultiColumnComomboBox Controls in Grid with BatchEdit.
type: how-to
page_title: Cascading MultiColumnComboBox in Grid with BatchEdit
slug: grid-cascading-multicolumncombobox-in-radgrid-with-batchedit
position: 
tags: multicolumncombobox, radgrid, grid, gridtemplatecolumn, editing, batchediting, Batch Edit, WebService, ASMX, Client-Side
ticketid: 1504749
res_type: kb
---

## Environment
<table>
    <thead>
        <tr>
            <th>Product</th>
        </tr>
    </thead>
	<tbody>
		<tr>
			<td>RadGrid</td>
		</tr>
        <tr>
			<td>RadMultiColumnComboBox</td>
		</tr>
	</tbody>
</table>

## Description

Example for using the [BatchEditing Client-Side APIs]({% slug grid/data-editing/edit-mode/batch-editing/client-side-api %}) to integrate [RadMultiColumnComboBox]({%slug multicolumncombobox/overview %}) with [RadGrid BatchEditing]({%slug grid/data-editing/edit-mode/batch-editing/overview%}) functionality.

This example is compatible with both [Batch Editing Configuration]({%slug grid/data-editing/edit-mode/batch-editing/configuration%}), the `EdiType="Row"` & `EditType="Cell"`.

## Solution

### Default.aspx

Create the Grid structure with two GridTemplateColumns, each of which containing one MultiColumnComboBox.

Create a RadClientDataSource Control that will call use the WebService.asmx for WebService requests.

````XML
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnPreRender="RadGrid1_PreRender">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" EditMode="Batch">
        <Columns>
            <telerik:GridTemplateColumn DataField="Continent" HeaderText="Continent" SortExpression="Continent" UniqueName="Continent">
                <ItemTemplate>
                    <%# Eval("Continent")%>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadMultiColumnComboBox runat="server" ID="MCCBContinent"
                        DataValueField="ContinentID"
                        DataTextField="ContinentName">
                        <ClientEvents OnSelect="ContinentSelect" />
                        <ColumnsCollection>
                            <telerik:MultiColumnComboBoxColumn Field="ContinentID" Title="ID" Width="50px" />
                            <telerik:MultiColumnComboBoxColumn Field="ContinentName" Title="Continent Name" Width="200px" />
                        </ColumnsCollection>
                    </telerik:RadMultiColumnComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>

            <telerik:GridTemplateColumn DataField="Country" HeaderText="Country" SortExpression="Country" UniqueName="Country">
                <ItemTemplate>
                    <%# Eval("Country")%>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadMultiColumnComboBox runat="server" ID="MCCBCountry" ClientDataSourceID="RadClientDataSource1"
                        DataValueField="CountryID"
                        DataTextField="CountryName">
                        <ClientEvents OnOpen="CountryOpen" />
                        <ColumnsCollection>
                            <telerik:MultiColumnComboBoxColumn Field="CountryID" Title="ID" Width="50px" />
                            <telerik:MultiColumnComboBoxColumn Field="CountryName" Title="Country Name" Width="200px" />
                            <telerik:MultiColumnComboBoxColumn Field="ContinentName" Title="Country Name" Width="200px" />
                        </ColumnsCollection>
                    </telerik:RadMultiColumnComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
        <BatchEditingSettings EditType="Row" />
    </MasterTableView>
    <ClientSettings>
        <ClientEvents
            OnBatchEditGetCellValue="GetCellValue"
            OnBatchEditGetEditorValue="GetEditorValue"
            OnBatchEditSetCellValue="SetCellValue"
            OnBatchEditSetEditorValue="SetEditorValue" />
    </ClientSettings>
</telerik:RadGrid>

<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server" AllowBatchOperations="true">
    <ClientEvents OnDataParse="Parse" />
    <DataSource>
        <WebServiceDataSourceSettings BaseUrl="WebService.asmx/">
            <Select Url="GetCountries" RequestType="Post" DataType="JSON" ContentType="application/json" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Schema DataName="Data">
        <Model ID="CustomerID">
            <telerik:ClientDataSourceModelField FieldName="CustomerID" DataType="Number" />
            <telerik:ClientDataSourceModelField FieldName="CompanyName" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="ContactName" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="ContactTitle" DataType="String" />
        </Model>
    </Schema>
</telerik:RadClientDataSource>
````

The JavaScript code logic written based on the instructions from the [Working with Templates]({%slug grid/data-editing/edit-mode/batch-editing/working-with-templates%}) article.

````JavaScript
<script>
    // Logic to handle the Cascading Functionality 
    
    // When Selecting a Continent
    function ContinentSelect(sender, args) {
        var gridElement = $telerik.$(sender.get_element()).closest('.RadGrid')[0];

        if (gridElement && gridElement.control) {
            var grid = gridElement.control,
                batMan = grid.get_batchEditingManager(),
                dataItem,
                countryCell,
                editRow = batMan.get_currentlyEditedRow();
                    
            // Instantiate the GridDataItems collection
            grid.get_masterTableView().get_dataItems();

            if (!editRow) {
                var editCell = batMan.get_currentlyEditedCell();
                editRow = $telerik.$(editCell).closest('tr')[0];

                // cast the Row (TR element) to GridDataItem object
                dataItem = editRow.control;
                countryCell = dataItem.get_cell("Country");

                // Timeout is needed to let the current cell close before another opens.
                setTimeout(function () {
                    batMan.changeCellValue(countryCell, "");
                    batMan.openCellForEdit(countryCell);
                }, 30)
                batMan.changeCellValue(countryCell, "")
            } else {
                dataItem = editRow.control;
                countryCell = dataItem.get_cell("Country");
                var mccb = $telerik.findControl(countryCell, "MCCBCountry");
                mccb.set_text("");
            }
        }
    }

    // When the Country MultiColumnComboBox DropDown is opening
    function CountryDropDownOpening(sender, args) {
        if (sender.get_id().indexOf("MCCBCountry") > -1) {
            var gridElement = $(sender.get_element()).closest('.RadGrid')[0];

            if (gridElement && gridElement.control) {
                var grid = gridElement.control,
                    batMan = grid.get_batchEditingManager(),
                    editRow = batMan.get_currentlyEditedRow(),
                    dataItem,
                    continentCell,
                    continentName;

                // Instantiate the GridDataItems collection
                grid.get_masterTableView().get_dataItems();

                if (editRow && editRow.control)
                    dataItem = editRow.control;

                if (!editRow) {
                    var editCell = batMan.get_currentlyEditedCell();
                    editRow = $telerik.$(editCell).closest('tr')[0];

                    // cast the Row (TR element) to GridDataItem object
                    dataItem = editRow.control;

                    continentName = batMan.getCellValue(dataItem.get_cell("Continent"));
                } else {
                    var mccbContinent = $telerik.findControl(dataItem.get_cell("Continent"), "MCCBContinent");
                    continentName = mccbContinent.get_text();
                }

                // Change the DataSource of the Country MultiColumnComboBox
                var dataSource = sender.get_kendoWidget().dataSource;
                var clientDataSource = $telerik.findControl(document, "RadClientDataSource1")
                var query = new kendo.data.Query(clientDataSource.get_kendoWidget().data());
                var data = query.filter({ field: "ContinentName", operator: "eq", value: continentName }).data;
                sender.set_dataSource(data);
            }
        }
    }

    // Events to handle custom Controls in BatchEdit Mode
    // https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/working-with-templates
    function GetCellValue(sender, args) {
        var container = args.get_container();
        var text = $(container).text().trim();

        if (args.get_columnUniqueName() === "Continent" ||
            args.get_columnUniqueName() === "Country") {

            args.set_cancel(true);

            args.set_value(text);
        }
    }

    function SetCellValue(sender, args) {
        var container = args.get_container();

        if (args.get_columnUniqueName() === "Continent" ||
            args.get_columnUniqueName() === "Country") {

            args.set_cancel(true);

            var mccbId = args.get_columnUniqueName() === "Continent" ? "MCCBContinent" : args.get_columnUniqueName() === "Country" ? "MCCBCountry" : null;

            if (!mccbId) return;

            var mccb = $telerik.findControl(args.get_cell(), mccbId);

            container.innerHTML = mccb.get_text();
        }
    }

    function GetEditorValue(sender, args) {
        var container = args.get_container();

        if (args.get_columnUniqueName() === "Continent" ||
            args.get_columnUniqueName() === "Country") {

            args.set_cancel(true);

            var mccbId = args.get_columnUniqueName() === "Continent" ? "MCCBContinent" : args.get_columnUniqueName() === "Country" ? "MCCBCountry" : null;

            if (!mccbId) return;

            var mccb = $telerik.findControl(container, mccbId);
            args.set_value(mccb.get_text());
        }

    }

    function SetEditorValue(sender, args) {
        var cellValue = args.get_value();
        var container = args.get_container();

        if (args.get_columnUniqueName() === "Continent" ||
            args.get_columnUniqueName() === "Country") {

            args.set_cancel(true);

            var mccbId = args.get_columnUniqueName() === "Continent" ? "MCCBContinent" : args.get_columnUniqueName() === "Country" ? "MCCBCountry" : null;

            if (!mccbId) return;

            var mccb = $telerik.findControl(container, mccbId);

            mccb.set_text(cellValue);
        }
    }

    // The following function is there to fix the Closing issues of RadMultiColumnComboBox/RadMultiSelect in the Grid
    // https://feedback.telerik.com/aspnet-ajax/1399575-built-in-integration-for-multicolumncombobox-with-grid-in-batch-edit-mode
    // https://feedback.telerik.com/aspnet-ajax/1494217-built-in-integration-for-multiselect-with-grid-in-batch-edit-mode
    $('body').on('mousedown', '.k-list-scroller', function (ev) {
        $telerik.cancelRawEvent(ev);
        ev.stopPropagation();
        ev.stopImmediatePropagation();
    });

    // Parsing the JSON object for the Grid
    // https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/client-data-source-binding/defaultcs.aspx
    function Parse(sender, args) {
        var response = args.get_response().d;

        if (response) {
            args.set_parsedData(response);
        }
    }
</script>
````

### Default.aspx.cs

Bind data to RadGrid and to one of the ComboBoxes. The ComboBox which will change its datasource based on the selection of the other, can only be bound on the client-side.

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;

    var continentCombo = (grid.MasterTableView.GetBatchEditorContainer("cbCICColumn").FindControl("cbCIC") as RadMultiColumnComboBox);
    continentCombo.DataSource = GetContinents();
    continentCombo.DataBind();
}
private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
    dt.Columns.Add(new DataColumn("Continent", typeof(string)));

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

        if (index % 3 == 0)
        {
            row["Continent"] = "America";
        }
        else if (index % 2 == 0)
        {
            row["Continent"] = "Europe";
        }
        else
        {
            row["Continent"] = "Asia";
        }

        dt.Rows.Add(row);
    }

    return dt;
}
protected DataTable GetContinents()
{
    var dt = new DataTable();

    dt.Columns.Add("ContinentID", typeof(Int32));
    dt.Columns.Add("ContinentName", typeof(string));

    var row = dt.NewRow();
    row["ContinentID"] = 1;
    row["ContinentName"] = "America";
    dt.Rows.Add(row);

    row = dt.NewRow();
    row["ContinentID"] = 2;
    row["ContinentName"] = "Europe";
    dt.Rows.Add(row);

    row = dt.NewRow();
    row["ContinentID"] = 3;
    row["ContinentName"] = "Asia";
    dt.Rows.Add(row);

    return dt;
}
````

### WebService.asmx

WebService for ClientDataSource

````XML
<%@ WebService Language="C#" CodeBehind="~/App_Code/WebService.cs" Class="WebService" %>
````

### WebService.cs

Create a WebMethod that will terurn an object.

````C#
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{

    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public Countries GetCountries()
    {

        var countryList = new List<Country>();

        // America
        countryList.Add(new Country() { CountryID = 1, CountryName = "USA", ContinentName = "America" });
        countryList.Add(new Country() { CountryID = 2, CountryName = "Canda", ContinentName = "America" });
        countryList.Add(new Country() { CountryID = 3, CountryName = "Brazil", ContinentName = "America" });

        // Europe
        countryList.Add(new Country() { CountryID = 4, CountryName = "Kuwait", ContinentName = "Europe" });
        countryList.Add(new Country() { CountryID = 5, CountryName = "Bulgaria", ContinentName = "Europe" });
        countryList.Add(new Country() { CountryID = 6, CountryName = "Germany", ContinentName = "Europe" });

        // Asia
        countryList.Add(new Country() { CountryID = 7, CountryName = "China", ContinentName = "Asia" });
        countryList.Add(new Country() { CountryID = 8, CountryName = "Japan", ContinentName = "Asia" });
        countryList.Add(new Country() { CountryID = 9, CountryName = "South Korea", ContinentName = "Asia" });

        return new Countries
        {
            Count = countryList.Count,
            Data = countryList
        };
    }

    [DataContract]
    public class Country
    {
        [DataMember]
        public int CountryID { get; set; }
        [DataMember]
        public string CountryName { get; set; }
        [DataMember]
        public string ContinentName { get; set; }
    }

    [DataContract]
    public class Countries
    {
        [DataMember]
        public List<Country> Data { get; set; }
        [DataMember]
        public int Count { get; set; }
        [DataMember]
        public string __type { get; set; }
    }
}
````


### web.config

Add the following WebSerice setting to the system.web element to enable POST request towards the server.

````XML
<configuration>
	<system.web>
		<!-- START ASMX settings -->
		<webServices>
			<protocols>
				<add name="HttpPost"/>
			</protocols>
		</webServices>
		<!-- End ASMX settings -->
	</system.web>
</configuration>
````
 
