---
title: Client-Side CRUD with ASP.NET WebService (ASMX)
description: 
type: how-to
page_title: Client-Side CRUD with ASP.NET WebService (ASMX) - RadGrid | UI for ASP.NET AJAX
slug: grid-client-side-crud-aspnet-webservice
res_type: kb
---

## Description

RadGrid with Client-Side CRUD (Create, Read, Update, Delete) operations using RadClientDataSource that is connected to an ASP.NET WebService (ASMX)

## Solution

### Default.aspx

````ASP.NET
<script type="text/javascript">
    function ParameterMap(sender, args) {
        if (args.get_type() != "read" && args.get_data()) {
            args.set_parameterFormat(kendo.stringify({ customersObject: args.get_data().models}));
        }
    }

    function Parse(sender, args) {
        var response = args.get_response().d;

        if (response) {
            args.set_parsedData(response.Data);
        }
    }
</script>

<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" ClientDataSourceID="RadClientDataSource1" AllowPaging="true">
    <MasterTableView ClientDataKeyNames="CustomerID" EditMode="Batch" CommandItemDisplay="Top" BatchEditingSettings-HighlightDeletedRows="true">
        <Columns>
            <telerik:GridBoundColumn DataField="CustomerID" HeaderText="Customer ID" ReadOnly="true">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CompanyName" HeaderText="Company Name" ColumnEditorID="GridTextBoxEditor">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactName" HeaderText="Contact Name" ColumnEditorID="GridTextBoxEditor">
            </telerik:GridBoundColumn>
            <telerik:GridClientDeleteColumn HeaderText="Delete">
                <HeaderStyle Width="70px" />
            </telerik:GridClientDeleteColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>


<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server" AllowBatchOperations="true">
    <ClientEvents OnCustomParameter="ParameterMap" OnDataParse="Parse" />
    <DataSource>
        <WebServiceDataSourceSettings BaseUrl="GridCRUD.asmx/">
            <Select Url="GetCustomers"  DataType="JSON" ContentType="application/json" />
            <Update Url="UpdateCustomers"  DataType="JSON" ContentType="application/json" />
            <Insert Url="InsertCustomers"  DataType="JSON" ContentType="application/json" />
            <Delete Url="DeleteCustomers"  DataType="JSON" ContentType="application/json" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Schema>
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

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
        Session["MySessionKey"] = null;
}
````

### GridCRUD.asmx

````ASP.NET
<%@ WebService Language="C#" CodeBehind="~/App_Code/GridCRUD.cs" Class="GridCRUD" %>
````

### ~/App_Code/GridCRUD.cs

````C#
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

/// <summary>
/// Summary description for GridCRUD
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class GridCRUD : System.Web.Services.WebService
{
    #region RadGrid Client-Side CRUD
    #region DataSource
    private string _sessionKey = "MySessionKey";
    public List<Customer> SessionDataSource
    {
        get
        {
            if (HttpContext.Current.Session[_sessionKey] == null)
            {
                HttpContext.Current.Session[_sessionKey] = Enumerable.Range(1, 100).Select(
                cu => new Customer
                {
                    CustomerID = cu,
                    Address = "Address " + cu,
                    CompanyName = "CompanyName " + cu,
                    ContactName = "ContactName " + cu,
                    ContactTitle = "ContactTitle " + cu
                }
                ).ToList();
            }
            return (List<Customer>)HttpContext.Current.Session[_sessionKey];
        }
    }
    #endregion

    #region CRUD methods
    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public CustomersResult GetCustomers()
    {
        return new CustomersResult
        {
            Data = SessionDataSource,
            Count = SessionDataSource.Count()
        };
    }

    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public CustomersResult UpdateCustomers(object[] customersObject)
    {
        List<Customer> updatedCustomers = customersObject.Select(x => Customer.ParseFromObject(x)).ToList();

        foreach (Customer source in updatedCustomers)
        {
            Customer dbCustomer = SessionDataSource.FirstOrDefault(c => c.CustomerID == source.CustomerID);

            dbCustomer.CompanyName = source.CompanyName;
            dbCustomer.ContactName = source.ContactName;
            dbCustomer.ContactTitle = source.ContactTitle;
            dbCustomer.Address = source.Address;
        }

        return new CustomersResult()
        {
            Data = updatedCustomers,
            Count = updatedCustomers.Count
        };
    }

    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public CustomersResult InsertCustomers(object[] customersObject)
    {
        List<Customer> insertedCustomers = customersObject.Select(x => Customer.ParseFromObject(x)).ToList();

        foreach (Customer source in insertedCustomers)
        {
            int newID = SessionDataSource.Count > 0 ? (SessionDataSource.Max(cu => cu.CustomerID) + 1) : 1;

            Customer newCustomer = new Customer()
            {
                CustomerID = newID,
                CompanyName = source.CompanyName,
                ContactName = source.ContactName,
                ContactTitle = source.ContactTitle,
                Address = source.Address
            };

            source.CustomerID = newID;

            SessionDataSource.Add(newCustomer);
        }

        return new CustomersResult
        {
            Data = insertedCustomers,
            Count = insertedCustomers.Count
        };
    }

    [WebMethod(EnableSession = true)]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public CustomersResult DeleteCustomers(object[] customersObject)
    {
        List<Customer> removedCustomers = customersObject.Select(x => Customer.ParseFromObject(x)).ToList();

        foreach (Customer source in removedCustomers)
        {
            Customer customerToRemove = SessionDataSource.Find(c => c.CustomerID == source.CustomerID);
            SessionDataSource.Remove(customerToRemove);
        }

        return new CustomersResult()
        {
            Data = removedCustomers,
            Count = removedCustomers.Count
        };
    }
    #endregion
    #endregion
}
````

### ~/App_Code/Customer.cs

````C#
using System.Collections.Generic;
using System.Runtime.Serialization;

/// <summary>
/// Summary description for Customer
/// </summary>
#region Customer Model
[DataContract]
public class Customer
{
    [DataMember]
    public int CustomerID { get; set; }
    [DataMember]
    public string CompanyName { get; set; }
    [DataMember]
    public string ContactName { get; set; }
    [DataMember]
    public string ContactTitle { get; set; }
    [DataMember]
    public string Address { get; set; }
    [DataMember]
    public string __type { get; set; }

    public static Customer ParseFromObject(object source)
    {
        var item = source as Dictionary<string, object>;

        if (item == null)
            return null;

        var dbCustomer = new Customer();
        
        if(item.ContainsKey("CustomerID"))
            dbCustomer.CustomerID = (int)item["CustomerID"];

        if (item.ContainsKey("CompanyName"))
            dbCustomer.CompanyName = item["CompanyName"].ToString();

        if (item.ContainsKey("ContactName"))
            dbCustomer.ContactName = item["ContactName"].ToString();

        if (item.ContainsKey("ContactTitle"))
            dbCustomer.ContactTitle = item["ContactTitle"].ToString();

        if (item.ContainsKey("Address"))
            dbCustomer.Address = item["Address"].ToString();

        return dbCustomer;
    }
}
[DataContract]
public class CustomersResult
{
    [DataMember]
    public List<Customer> Data { get; set; }
    [DataMember]
    public int Count { get; set; }
    [DataMember]
    public string Action { get; set; }
    [DataMember]
    public string __type { get; set; }
}
#endregion
````

### web.config

````XML
<?xml version="1.0"?>
<configuration>
  <system.web>
	  <!-- START ASMX related settings -->
	  <webServices>
		  <protocols>
			  <add name="HttpPost"/>
		  </protocols>
	  </webServices>
	  <!-- End ASMX settings -->
  </system.web>
</configuration>
````
  
