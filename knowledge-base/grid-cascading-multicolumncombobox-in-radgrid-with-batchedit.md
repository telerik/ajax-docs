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
 
