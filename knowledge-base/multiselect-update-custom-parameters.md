---
title: How to pass custom parameters in MultiSelect with TabStrip selection
description: Learn how to dynamically pass custom parameters in MultiSelect based on the selection in TabStrip.
type: how-to
page_title: How to pass custom parameters in MultiSelect with TabStrip selection. | RadMultiSelect
slug: multiselect-update-custom-parameters
tags: radmultiselect, radtabstrip, customparameter, clientdatasource, oncustomparameter, asp.net, ajax
res_type: kb
category: knowledge-base
ticketid: 1651828
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms MultiSelect for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When using RadMultiSelect with a ClientDataSource, I need to update a custom parameter in the `OnCustomParameter` event based on the selection made in a RadTabStrip which acts as a filter. However, the `OnCustomParameter` event does not get triggered when the tab selection changes. How can I achieve this functionality?

This KB article also answers the following questions:

- How can I dynamically pass parameters to RadMultiSelect based on RadTabStrip selection?
- How do I trigger the `OnCustomParameter` event of RadClientDataSource on tab selection?
- How to use RadTabStrip selection to filter data in RadMultiSelect?

## Solution

To dynamically update custom parameters in RadMultiSelect based on RadTabStrip selection, follow these steps:

1. Declare a global JavaSript variable (**selectedTabValue**)
1. Define the [`OnClientTabSelected`]({%slug tabstrip/client-side-programming/onclienttabselected%}) event for your TabStrip.
1. Inside this event, update the global variable to store the selected tab value.
1. Call the `read()` method on the RadClientDataSource to trigger the [`OnCustomParameter`]({%slug clientdatasource/client-side-programming/events/oncustomparameter%}) event where you can use the updated tab value to set your custom parameter.

Here is a sample implementation:

````ASP.NET
<telerik:RadTabStrip ID="RadTabStrip1" runat="server" OnClientTabSelected="onClientTabSelected">
    <Tabs>
        <telerik:RadTab Text="ASP.NET 4.5 Unleashed" />
        <telerik:RadTab Text="Ultra-Fast ASP.NET 4.5" />
        <telerik:RadTab Text="Professional ASP.NET MVC 4" />
    </Tabs>
</telerik:RadTabStrip>

<telerik:RadMultiSelect runat="server" Filter="Contains" EnforceMinLength="false" AutoClose="false" WebServiceClientDataSource-AutoSync="true" DataValueField="ID"
    DataTextField="Title" Width="400px" ID="RadMultiSelect1">
    <WebServiceClientDataSource runat="server" ID="MultiSelectDataSource1">
        <WebServiceSettings>
            <Select Url="BookService.asmx/GetFilteredData" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
        </WebServiceSettings>
        <Schema DataName="d" />
        <ClientEvents OnCustomParameter="onCustomParameter" />
    </WebServiceClientDataSource>
</telerik:RadMultiSelect>
````

````JavaScript
var selectedTabValue = ""; // Global variable to hold the selected tab value

function onClientTabSelected(sender, args) {
    selectedTabValue = args.get_tab().get_text(); // Update the global variable with the selected tab's text

    var multisSelect = $find("<%= RadMultiSelect1.ClientID %>"); // Get the MultiSelect
    var clientDataSource = multisSelect._clientDataSource; // Get its data source
    var kendoDataSource = clientDataSource.get_kendoWidget(); // Get the Kendo widget

    kendoDataSource.read(); // Trigger read to fire OnCustomParameter
}

function onCustomParameter(sender, args) {
    if (selectedTabValue) {
        args.set_parameterFormat("{ 'title': '" + selectedTabValue + "' }");
    }
}
````

**WebService**

````C#
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class BookService : System.Web.Services.WebService
{

    public BookService()
    {
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public List<Book> GetFilteredData(string title)
    {
        List<Book> books = GetBooks();
        List<Book> result = books.Where(b => b.Title == title).ToList();

        return result;
    }

    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public static List<Book> GetBooks()
    {
        var books = new List<Book>
        {
            new Book
            {
                Title = "Professional ASP.NET 4.5 in C# and VB",
            },
            new Book
            {
                Title = "Pro ASP.NET 4.5 in C#",
            },
            new Book
            {
                Title = "Beginning ASP.NET 4.5 in C#",
            },
            new Book
            {
                Title = "Beginning ASP.NET 4.5.1: in C# and VB ",
            },
            new Book
            {
                Title = "Pro C# 5.0 and the .NET 4.5 Framework",
            },
            new Book
            {
                Title = "Ultra-Fast ASP.NET 4.5",
            },
            new Book
            {
                Title = "ASP.NET 4.5 Unleashed",
            },
            new Book
            {
                Title = "Pro ASP.NET MVC 4",
            },
            new Book
            {
                Title = "Professional C# 5.0 and .NET 4.5.1",
            }
        };

        return books;
    }

}

public class Book
{
    public string Title { get; set; }
    protected internal Book() { }
}
````

This approach allows you to dynamically update the custom parameter sent to the web method based on the currently selected tab. Ensure your web method is prepared to filter data based on this parameter.
