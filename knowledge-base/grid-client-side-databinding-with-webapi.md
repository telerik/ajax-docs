---
title: Client-side Databinding with WebAPI
description: Client-side Databinding with WebAPI. Check it out!
type: how-to
page_title: Client-side Databinding with WebAPI. | RadGrid
slug: grid-client-side-databinding-with-webapi
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Sometimes, one might want to bind the Grid using a Web API.

## Solution

The code below shows integration of theGrid and RadClientDataSource with Web API. It shows basic databinding and batch editing sending and receiving information through Web API.

````ASP.NET
<telerik:RadNumericTextBox runat="server" ID="RadNumericTextBox1" Label="Filter by ID: " LabelWidth="65px"></telerik:RadNumericTextBox>
<telerik:RadButton AutoPostBack="false" runat="server" ID="RadButton1" Text="Filter" OnClientClicked="btnClick"></telerik:RadButton>

<telerik:RadGrid AllowFilteringByColumn="true" AllowSorting="true" AllowPaging="true" runat="server" ID="RadGrid1" AutoGenerateColumns="false"
    ClientDataSourceID="RadClientDataSource1">
    <MasterTableView EditMode="Batch" CommandItemDisplay="Top" ClientDataKeyNames="ID">
        <Columns>
            <telerik:GridBoundColumn UniqueName="ID" DataField="ID" HeaderText="ID" ReadOnly="true" />
            <telerik:GridBoundColumn UniqueName="Name" DataField="Name" HeaderText="Name" />
            <telerik:GridTemplateColumn UniqueName="Category" HeaderText="Category">
                <ClientItemTemplate>
                    <span>#=Category #</span>
                </ClientItemTemplate>
                <EditItemTemplate>
                <telerik:RadDropDownList runat="server" ID="CategoryIDDropDown">
                    <Items>
                        <telerik:DropDownListItem Text="Category1" Value="Category1" />
                        <telerik:DropDownListItem Text="Category2" Value="Category2" />
                        <telerik:DropDownListItem Text="Category3" Value="Category3" />
                        <telerik:DropDownListItem Text="Category4" Value="Category4" />
                    </Items>
                </telerik:RadDropDownList>
            </EditItemTemplate>
            </telerik:GridTemplateColumn>
            <telerik:GridBoundColumn UniqueName="Price" DataField="Price" HeaderText="Price" />
            <telerik:GridClientDeleteColumn HeaderText="Delete" ButtonType="ImageButton" HeaderStyle-Width="70px">
            </telerik:GridClientDeleteColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>

<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
    <ClientEvents OnCommand="dataSourceCommand" OnRequestStart="requestStart" />
    <DataSource>
        <WebServiceDataSourceSettings>
            <Select Url="api/products" RequestType="Get" />
            <Insert Url="api/products" RequestType="Post" />
            <Update Url="api/products" RequestType="Put" />
            <Delete Url="api/products" RequestType="Delete" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <Schema>
        <Model ID="ID">
            <telerik:ClientDataSourceModelField FieldName="ID" DataType="Number" />
            <telerik:ClientDataSourceModelField FieldName="Name" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="Category" DataType="String" />
            <telerik:ClientDataSourceModelField FieldName="Price" DataType="Number" />
        </Model>
    </Schema>
</telerik:RadClientDataSource>
````

````JavaScript
var updatedIDs = [], deletedIDs = [];

function requestStart(sender, args) {
    var type = args.get_type();
    var transport = sender.get_dataSourceObject().options.transport;
    switch (type) {
        case "read":
            var textBox = $find('<%= RadNumericTextBox1.ClientID %>');
            var value = textBox.get_value();
            transport.read.url = "api/products/" + value;
            break;

        case "create":
            transport.create.url = "api/products/";
            break;

        case "update":
            transport.update.url = "api/products/" + updatedIDs.shift();
            break;

        case "destroy":
            transport.destroy.url = "api/products/" + deletedIDs.shift();
            break;

        default: break;
    }
}

function btnClick(sender, args) {
    var grid = $find('<%= RadGrid1.ClientID %>');
    grid.get_masterTableView().rebind();
}

function dataSourceCommand(sender, args) {
    var commandName = args.get_commandName();
    var id = args.get_commandArgument().id;
    switch (commandName) {
        case "update":
            updatedIDs.push(id);
            break;

        case "remove":
            deletedIDs.push(id);
            break;

        default: break;
    }
}
````

- **requestStart**: This function is triggered before each request made by the `RadClientDataSource`. It dynamically modifies the request URLs based on the type of operation being performed (read, create, update, destroy).
- **btnClick**: This function is bound to the filter button's client-side click event. It triggers a rebind of the grid's master table view, causing it to fetch data based on the entered filter ID.
- **dataSourceCommand**: This function is triggered after each command executed by the `RadClientDataSource`. It maintains arrays (`updatedIDs`, `deletedIDs`) to track the IDs of items that have been updated or deleted.

API Config:

````C#
using System.Web.Http;

namespace ProdcutsApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}

//  .asax page

public class WebApiApplication : System.Web.HttpApplication
{
    protected void Application_Start()
    {
        GlobalConfiguration.Configure(WebApiConfig.Register);
    }
}
````

Controller:

````C#
using ProdcutsApp.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;

namespace ProdcutsApp.Controllers
{
    public class ProductsController : ApiController
    {
        static readonly IProductRepository repository = new ProductRepository();

        public IEnumerable<Product> GetAllProducts()
        {
            return repository.GetAll();
        }

        public IHttpActionResult GetProduct(int id)
        {
            var item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return Ok(item);
        }

        public IHttpActionResult PostProduct(Product item)
        {
            item = repository.Add(item);
            string uri = Url.Link("DefaultApi", new { id = item.ID });
            return Created(new Uri(uri), item);
        }

        public void PutProduct(int id, Product product)
        {
            product.ID = id;
            if (!repository.Update(product))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        public void DeleteProduct(int id)
        {
            Product item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            repository.Remove(id);
        }

    }
}
````

Models:

````C#
// Interface
public interface IProductRepository
{
    IEnumerable<Product> GetAll();
    Product Get(int id);
    Product Add(Product item);
    void Remove(int id);
    bool Update(Product item);
}

// Class
public class Product
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
}


// Repository
public class ProductRepository : IProductRepository
{
    private List<Product> products;
    private int currentID = 12;

    public ProductRepository()
    {
        products = new List<Product>(new Product[] 
        { 
            new Product { ID = 1, Name = "Product1", Category = "Category1", Price = 1.05M }, 
            new Product { ID = 2, Name = "Product2", Category = "Category2", Price = 3.75M }, 
            new Product { ID = 3, Name = "Product3", Category = "Category2", Price = 2.34M }, 
            new Product { ID = 4, Name = "Product4", Category = "Category3", Price = 1.63M }, 
            new Product { ID = 5, Name = "Product5", Category = "Category4", Price = 5.62M }, 
            new Product { ID = 6, Name = "Product6", Category = "Category1", Price = 7.68M }, 
            new Product { ID = 7, Name = "Product7", Category = "Category1", Price = 8.23M }, 
            new Product { ID = 8, Name = "Product8", Category = "Category2", Price = 9.44M }, 
            new Product { ID = 9, Name = "Product9", Category = "Category2", Price = 0.43M }, 
            new Product { ID = 10, Name = "Product10", Category = "Category3", Price = 2.12M }, 
            new Product { ID = 11, Name = "Product11", Category = "Category4", Price = 1.79M }, 
            new Product { ID = 12, Name = "Product12", Category = "Category4", Price = 4.22M } 
        });
    }

    public IEnumerable<Product> GetAll()
    {
        return products;
    }

    public Product Get(int id)
    {
        return products.FirstOrDefault(p => p.ID == id);
    }

    public Product Add(Product item)
    {
        if (item == null)
        {
            throw new ArgumentNullException("item");
        }
        item.ID = ++currentID;
        products.Add(item);
        return item;
    }

    public void Remove(int id)
    {
        products.RemoveAll(p => p.ID == id);
    }

    public bool Update(Product item)
    {
        if (item == null)
        {
            throw new ArgumentNullException("item");
        }
        int index = products.FindIndex(p => p.ID == item.ID);
        if (index == -1)
        {
            return false;
        }
        products.RemoveAt(index);
        products.Add(item);
        return true;
    }
}
````

How it Works:

1. **Filtering**: Users input an ID, click the filter button, and the grid is filtered based on the entered ID.
1. **Batch Editing**: Users can edit multiple rows in the grid and then save the changes in batch. The changes are sent to the Web API.
1. **Integration with Web API**: The `RadClientDataSource` handles the communication with the Web API for CRUD operations. The `requestStart` function dynamically modifies URLs to reflect the current operation and data.
1. **Tracking Changes**: IDs of updated and deleted items are tracked in JavaScript arrays (`updatedIDs`, `deletedIDs`). This information is later used to construct the URLs for update and delete operations.

[Download the Sample](files/grid-client-side-databinding-with-webapi.zip) 

    