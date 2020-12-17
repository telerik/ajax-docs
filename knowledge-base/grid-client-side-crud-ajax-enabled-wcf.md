---
title: Client-Side CRUD with AJAX-enabled WCF
description: 
type: how-to
page_title: Client-Side CRUD with AJAX-enabled WCF - RadGrid | UI for ASP.NET AJAX
slug: grid-client-side-crud-ajax-enabled-wcf
res_type: kb
---

## Description

RadGrid with Client-Side CRUD (Create, Read, Update, Delete) operations using RadClientDataSource that is connected to an Ajax-Enabled WCF Service.

## Solution

### Default.aspx

````ASP.NET
<script type="text/javascript">
    function ParameterMap(sender, args) {
        if (args.get_type() != "read" && args.get_data()) {
            args.set_parameterFormat({ customersJSON: kendo.stringify(args.get_data().models) });
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
            <WebServiceDataSourceSettings BaseUrl="GridCrud.svc/">
            <Select Url="GetCustomers" DataType="JSON" />
            <Update Url="UpdateCustomers" DataType="JSON" />
            <Insert Url="InsertCustomers" DataType="JSON" />
            <Delete Url="DeleteCustomers" DataType="JSON" />
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

### GridCrud.svc

````ASP.NET
<%@ ServiceHost Language="C#" Debug="true" Service="GridCrud" CodeBehind="~/App_Code/GridCrud.cs" %>
````

### ~/App_Code/GridCrud.cs

````C#
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Web;
using System.Web.Script.Serialization;

[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class GridCrud
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
    [WebGet]
    public CustomersResult GetCustomers()
    {
        System.Threading.Thread.Sleep(3000);
        return new CustomersResult
        {
            Data = SessionDataSource,
            Count = SessionDataSource.Count(),
            Action = "Read"
        };
    }

    [WebGet]
    public CustomersResult UpdateCustomers(string customersJSON)
    {
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        List<Customer> updatedCustomers = (List<Customer>)serializer.Deserialize(customersJSON, typeof(List<Customer>));

        foreach (Customer updatedCustomer in updatedCustomers)
        {
            Customer dbCustomer = SessionDataSource.FirstOrDefault(c => c.CustomerID == updatedCustomer.CustomerID);
            dbCustomer.CompanyName = updatedCustomer.CompanyName;
            dbCustomer.ContactName = updatedCustomer.ContactName;
            dbCustomer.ContactTitle = updatedCustomer.ContactTitle;
            dbCustomer.Address = updatedCustomer.Address;
        }

        return new CustomersResult()
        {
            Data = updatedCustomers,
            Count = updatedCustomers.Count,
            Action = "Update"
        };
    }

    [WebGet]
    public CustomersResult InsertCustomers(string customersJSON)
    {
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        List<Customer> insertedCustomers = (List<Customer>)serializer.Deserialize(customersJSON, typeof(List<Customer>));

        var lastId = SessionDataSource.Count > 0 ? SessionDataSource.Max(cu => cu.CustomerID) : 0;

        foreach (Customer insertedCustomer in insertedCustomers)
        {
            Customer newCustomer = new Customer()
            {
                CustomerID = lastId + 1,
                CompanyName = insertedCustomer.CompanyName,
                ContactName = insertedCustomer.ContactName,
                ContactTitle = insertedCustomer.ContactTitle,
                Address = insertedCustomer.Address
            };
            insertedCustomer.CustomerID = newCustomer.CustomerID;

            SessionDataSource.Add(newCustomer);
        }

        return new CustomersResult
        {
            Data = insertedCustomers,
            Count = insertedCustomers.Count,
            Action = "Create"
        };
    }

    [WebGet]
    public CustomersResult DeleteCustomers(string customersJSON)
    {
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        List<Customer> customers = (List<Customer>)serializer.Deserialize(customersJSON, typeof(List<Customer>));

        foreach (Customer removedCustomer in customers)
        {
            Customer customer = SessionDataSource.Find(c => c.CustomerID == removedCustomer.CustomerID);
            SessionDataSource.Remove(customer);
        }

        return new CustomersResult()
        {
            Data = customers,
            Count = customers.Count,
            Action = "Delete"
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
<configuration>
	<!--Other Settings here-->
	
	<!--WebService related Settings-->
	<system.serviceModel>
		<behaviors>
			<serviceBehaviors>
				<behavior name="debug">
					<serviceDebug includeExceptionDetailInFaults="true" />
				</behavior>
			</serviceBehaviors>

			<endpointBehaviors>
				<behavior name="GridCrudAspNetAjaxBehavior">
					<enableWebScript />
				</behavior>
			</endpointBehaviors>
		</behaviors>
		<serviceHostingEnvironment aspNetCompatibilityEnabled="true"
			multipleSiteBindingsEnabled="true" />
		<services>
			<service name="GridCrud" behaviorConfiguration="debug">
				<endpoint address="" behaviorConfiguration="GridCrudAspNetAjaxBehavior" binding="webHttpBinding"  contract="GridCrud" />
			</service>
		</services>
	</system.serviceModel>
</configuration>
````
  
