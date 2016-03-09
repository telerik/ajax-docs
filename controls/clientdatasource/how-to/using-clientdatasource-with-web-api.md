---
title: Using ClientDataSource With Web API
page_title: Using ClientDataSource With Web API | RadClientDataSource for ASP.NET AJAX Documentation
description: Using ClientDataSource With Web API
slug: clientdatasource/how-to/using-clientdatasource-with-web-api
tags: using,clientdatasource,with,web,api
published: True
position: 0
---

# Using ClientDataSource With Web API


This article will illustrate how you can use the **RadClientDataSource** control with Web API. 


You can download a fully runnable sample from [here](link).


## Retrieving data


````ASP.NET
<telerik:RadNumericTextBox runat="server" ID="RadNumericTextBox1" Label="Filter by ID: " LabelWidth="65px" NumberFormat-DecimalDigits="0"></telerik:RadNumericTextBox>
<telerik:RadButton AutoPostBack="false" runat="server" ID="RadButton1" Text="Filter" OnClientClicked="btnClick"></telerik:RadButton>

<telerik:RadGrid AllowFilteringByColumn="true" AllowSorting="true" AllowPaging="true" runat="server" ID="RadGrid1" AutoGenerateColumns="false"
    ClientDataSourceID="RadClientDataSource1">
    <MasterTableView EditMode="Batch" CommandItemDisplay="Top" ClientDataKeyNames="ID">
        <Columns>
            <telerik:GridBoundColumn UniqueName="ID" DataField="ID" HeaderText="ID" ReadOnly="true" />
            <telerik:GridBoundColumn UniqueName="Name" DataField="Name" HeaderText="Name" />
            <telerik:GridTemplateColumn UniqueName="Category" HeaderText="Category" DataField="Category">
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

<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" EnableServerPaging="true">
    <ClientEvents OnCommand="dataSourceCommand" OnRequestStart="requestStart" />
    <DataSource>
        <WebServiceDataSourceSettings>
            <Select Url="api/products" RequestType="Get"  />
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



## Passing data to the server 


Additional information can be passed to the server. The sample below uses the URL to pass additional data. 


````JavaScript
<telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
    <script>

        var updatedIDs = [], deletedIDs = [];

        function requestStart(sender, args) {
            var type = args.get_type();
            var transport = sender.get_dataSourceObject().options.transport;
            debugger
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

    </script>
</telerik:RadCodeBlock>
````



## CRUD operations

In the first code snippet you will notice that **Insert**, **Select** and **Delete** are defined in the **WebServiceDataSourceSettings**. This allows the user to edit the data. The code below shows the code in the controller that performs each operation:


````C#
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
````



The repository is using dummy data. In a real world scenario you will likely retrieve the data from a database.



````C#
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
````



## See also 

* [GettiGetting Started with ASP.NET Web API 2](http://www.asp.net/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api)

