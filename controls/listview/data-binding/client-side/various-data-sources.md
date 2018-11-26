---
title: Various Data Sources
page_title: Various Data Sources | RadListView for ASP.NET AJAX Documentation
description: Various Data Sources
slug: listview/data-binding/client-side/various-data-sources
tags: various,data,sources
published: True
position: 2
---

# Various Data Sources



This article will introduce you to the capabilities of RadListView to bind to various sources of data, and to the specifics related to these bindings.

* **Binding to Javascript Arrays
http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section0_self**

* **Binding to ASMX Web Services
http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section1_self**

* **Binding to WCF Services
http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section2_self**

* **Binding to OData Services
http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section3_self**

* **Web Service Default Parameters
http://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section4_self**

## Binding to Javascript Arrays

To bind RadListView to a javascript array, use the **set_dataSource()** and **dataBind()** APIs in a point after the client-side AJAX framework (and RadListView) has loaded:



````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" VirtualItemCount="17" Skin="Default"
    AllowPaging="true" AllowMultiItemSelection="true" AllowMultiFieldSorting="true"
    AllowNaturalSort="true">
    <ClientSettings>
        <DataBinding ItemPlaceHolderID="itemPlaceHolder">
            <LayoutTemplate>
                <div class="RadListView RadListView_Default" style="width:800px;">
                    <table style="width: 100%" cellspacing="0">
                        <thead>
                            <tr class="rlvHeader">
                                <th style="width: 20px">
                                    selected?
                                </th>
                                <th style="width: 20px">
                                    ID
                                </th>
                                <th>
                                    Name
                                </th>
                                <th style="width: 20px">
                                    CategoryID
                                </th>
                                <th style="width: 200px">
                                    Date
                                </th>
                                <th style="width: 120px">
                                    Price
                                </th>
                                <th style="width: 20px">
                                    Available
                                </th>
                            </tr>
                        </thead>
                        <tbody id="itemPlaceHolder">
                        </tbody>
                    </table>
                </div>
            </LayoutTemplate>
            <ItemTemplate>
                <tr class="rlvI #= isSelected ? 'rlvSel' : '' #"
                    onclick="$find('#= owner.get_id() #').toggleSelection(#= index #)"
                    style="cursor:default">
                    <td>
                        <input type="checkbox" #= isSelected ? 'checked="checked"' : '' # />
                    </td>
                    <td>
                        #= ID #
                    </td>
                    <td>
                        #= Name #
                    </td>
                    <td>
                        #= CategoryID #
                    </td>
                    <td>
                        #= format(Date, "{0:D}") #
                    </td>
                    <td>
                        #= format(Price, "{0:C}") #
                    </td>
                    <td>
                        <input type="checkbox" disabled="disabled" #= Available ? "checked='checked'" : ""#></input>
                    </td>
                </tr>
            </ItemTemplate>
        </DataBinding>
    </ClientSettings>
</telerik:RadListView>
````
````JavaScript
<script type="text/javascript">
    function pageLoad() {
        var listView = $find("<%= RadListView1.ClientID %>");
        listView.set_dataSource(pageData);
        listView.dataBind();
    }
</script>
````
````C#
protected override void OnPreLoad(EventArgs e)
{
    var serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
    MyData.BusinessDataStorage.GetData().ForEach(item =>
    {
        ScriptManager.RegisterArrayDeclaration(Page, "pageData", serializer.Serialize(item));
    });

    base.OnPreLoad(e);
}
````
````VB
Protected Overrides Sub OnPreLoad(e As EventArgs)
Dim serializer = New System.Web.Script.Serialization.JavaScriptSerializer()
    MyData.BusinessDataStorage.GetData().ForEach(Function(item)
                                                     ScriptManager.RegisterArrayDeclaration(Page, "pageData", serializer.Serialize(item))
                                                 End Function)

    MyBase.OnPreLoad(e)
End Sub
````


## Binding to ASMX Web Services

To bind RadListView to an ASMX Web Service, you need to set the following properties:

* **Location**: service base location

* **DataPath**: Data method name

* **CountPath**: Count method name, if required

* **SortParameterType**: Sort expression format, if supported

* **FilterParameterType**: Filter expression format, if supported



````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" Skin="Default"
    AllowPaging="true" AllowMultiItemSelection="true" PageSize="8"
    AllowMultiFieldSorting="true" AllowNaturalSort="true">
    <ClientSettings>
        <DataBinding ItemPlaceHolderID="itemPlaceHolder">
            <LayoutTemplate>
                <div class="RadListView RadListView_Default" style="width:800px;">
                    <table style="width: 100%" cellspacing="0">
                        <thead>
                            <tr class="rlvHeader">
                                <th style="width: 20px">
                                    <input type='checkbox'
                                        id="headerCheckBox"
                                        onclick="toggleAllItems(this, $find('#= owner.get_id() #'));"
                                        #= owner.get_dataSource().length === owner.get_selectedIndexes().length ? "checked='checked'" : "" #></input>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);" title="#= owner.get_sortExpressions().getSortOrder('ID') #" onclick="$find('#= owner.get_id() #').sort('ID');">Id</a>
                                </th>
                                <th>
                                    <a href="javascript:void(0);" title="#= owner.get_sortExpressions().getSortOrder('Name') #" onclick="$find('#= owner.get_id() #').sort('Name');">Name</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);" title="#= owner.get_sortExpressions().getSortOrder('UnitPrice') #" onclick="$find('#= owner.get_id() #').sort('UnitPrice');">UnitPrice</a>
                                </th>
                                <th style="width: 200px">
                                    <a href="javascript:void(0);" title="#= owner.get_sortExpressions().getSortOrder('Date') #" onclick="$find('#= owner.get_id() #').sort('Date');">Date</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);" title="#= owner.get_sortExpressions().getSortOrder('Discontinued') #" onclick="$find('#= owner.get_id() #').sort('Discontinued');">Discontinued</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="itemPlaceHolder">
                        </tbody>
                    </table>
                    <div id="pager" class="RadDataPager RadDataPager_Default" style="border:none">
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageFirst" onclick="$find('#=owner.get_id()#').page('First')"></input>
                            <input type="button" class="rdpPagePrev" onclick="$find('#=owner.get_id()#').page('Prev')"></input>
                        </div>
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageNext" onclick="$find('#=owner.get_id()#').page('Next')"></input>
                            <input type="button" class="rdpPageLast" onclick="$find('#=owner.get_id()#').page('Last')"></input>
                        </div>
                    </div>
                </div>
            </LayoutTemplate>
            <ItemTemplate>
                <tr class="rlvI #= isSelected ? 'rlvISel' : '' #"
                    onclick="$find('#= owner.get_id() #').toggleSelection(#= index #)"
                    style="cursor:default">
                    <td>
                        <input type="checkbox" #= isSelected ? 'checked="checked"' : '' # />
                    </td>
                    <td>
                        #= ID #
                    </td>
                    <td>
                        #= Name #
                    </td>
                    <td>
                        #= format(UnitPrice, "{0:C}") #
                    </td>
                    <td>
                        #= format(Date, "{0:d}") #
                    </td>
                    <td>
                        <input type="checkbox" disabled="disabled" #= Discontinued ? "checked='checked'" : ""#></input>
                    </td>
                </tr>
            </ItemTemplate>

            <DataService Location="~/Services/WebServiceLinq.asmx" DataPath="GetData" CountPath="GetCount"
                         SortParameterType="Linq"
                         FilterParameterType="Linq" />
        </DataBinding>
        <ClientEvents OnTemplateDataBound="templateDataBound" />
    </ClientSettings>
</telerik:RadListView>

<%--We add a hidden data pager to have its styles applied on the page--%>
<telerik:RadDataPager RenderMode="Lightweight" runat="server" style="display:none"></telerik:RadDataPager>
````
````JavaScript
<script type="text/javascript">
    function toggleAllItems(checkbox, listView) {
        if (checkbox.checked) {
            listView.selectAllItems();
        }
        else {
            listView.clearSelectedItems();
        }
    }

    function templateDataBound(sender, args)
    {
        var headerCheckBox = document.getElementById("headerCheckBox");
        if (headerCheckBox)
        {
            headerCheckBox.checked = sender.get_selectedIndexes().length === sender.get_dataSource().length;
        }
    }
</script>
````


If data and total row count is returned in one and the same service call, the **CountPath** setting is omitted. In this case, RadListView searches for fields with name **Data** and **Count** in the web service JSON response, respectively. To modify the names of the response fields RadListView looks for, set the **DataPropertyName** and **CountPropertyName** settings.

## Binding to WCF Services

For automatic databinding to WCF services, RadListView is configured in an identical way as ASMX Web Services. In this example, RadListView is bound to a WCF Service that returns data and count in a single request:



````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" Skin="Default"
    AllowPaging="false" AllowMultiItemSelection="true" PageSize="8"
    AllowMultiFieldSorting="true" AllowNaturalSort="true">
    <ClientSettings>
        <DataBinding ItemPlaceHolderID="itemPlaceHolder">
            <LayoutTemplate>
                <div class="RadListView RadListView_Default" style="width:800px;">
                    <table style="width: 100%" cellspacing="0">
                        <thead>
                            <tr class="rlvHeader">
                                <th style="width: 20px">
                                    <input type='checkbox'
                                        id="headerCheckBox"
                                        onclick="toggleAllItems(this, $find('#= owner.get_id() #'));"
                                        #= owner.get_dataSource().length === owner.get_selectedIndexes().length ? "checked='checked'" : "" #></input>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('ProductID') #"
                                        onclick="$find('#= owner.get_id() #').sort('ProductID');">ProductID</a>
                                </th>
                                <th style="width:350px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('ProductName') #"
                                        onclick="$find('#= owner.get_id() #').sort('ProductName');">ProductName</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('UnitPrice') #"
                                        onclick="$find('#= owner.get_id() #').sort('UnitPrice');">UnitPrice</a>
                                </th>
                                <th style="width: 200px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('CategoryID') #"
                                        onclick="$find('#= owner.get_id() #').sort('CategoryID');">CategoryID</a>
                                </th>
                                <th style="width: 200px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('ReorderLevel') #"
                                        onclick="$find('#= owner.get_id() #').sort('ReorderLevel');">ReorderLevel</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('Discontinued') #"
                                        onclick="$find('#= owner.get_id() #').sort('Discontinued');">Discontinued</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="itemPlaceHolder">
                        </tbody>
                    </table>
                    <div id="pager" class="RadDataPager RadDataPager_Default" style="border:none">
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageFirst" onclick="$find('#=owner.get_id()#').page('First')"></input>
                            <input type="button" class="rdpPagePrev" onclick="$find('#=owner.get_id()#').page('Prev')"></input>
                        </div>
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageNext" onclick="$find('#=owner.get_id()#').page('Next')"></input>
                            <input type="button" class="rdpPageLast" onclick="$find('#=owner.get_id()#').page('Last')"></input>
                        </div>
                    </div>
                </div>
            </LayoutTemplate>
            <ItemTemplate>
                <tr class="rlvI #= isSelected ? 'rlvISel' : '' #"
                    onclick="$find('#= owner.get_id() #').toggleSelection(#= index #)"
                    style="cursor:default">
                    <td>
                        <input type="checkbox" #= isSelected ? 'checked="checked"' : '' # />
                    </td>
                    <td>
                        #= ProductID #
                    </td>
                    <td>
                        #= ProductName #
                    </td>
                    <td>
                        #= format(UnitPrice, "{0:C}") #
                    </td>
                    <td>
                        #= CategoryID #
                    </td>
                    <td>
                        #= ReorderLevel #
                    </td>
                    <td>
                        <input type="checkbox" disabled="disabled" #= Discontinued ? "checked='checked'" : ""#></input>
                    </td>
                </tr>
            </ItemTemplate>
            <DataService Location="~/Services/GridWcfService.svc"
                         DataPath="GetDataAndCount"
                         SortParameterType="Linq"
                         FilterParameterType="Linq" />
        </DataBinding>
        <ClientEvents OnTemplateDataBound="templateDataBound" />
    </ClientSettings>
</telerik:RadListView>

<%--We add a hidden data pager to have its styles applied on the page--%>
<telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" style="display:none"></telerik:RadDataPager>
````
````JavaScript
<script type="text/javascript">
    function toggleAllItems(checkbox, listView) {
        if (checkbox.checked) {
            listView.selectAllItems();
        }
        else {
            listView.clearSelectedItems();
        }
    }

    function templateDataBound(sender, args)
    {
        var headerCheckBox = document.getElementById("headerCheckBox");
        if (headerCheckBox)
        {
            headerCheckBox.checked = sender.get_selectedIndexes().length === sender.get_dataSource().length;
        }
    }
</script>
````


## Binding to OData Services

Binding RadListView to OData service is quite straightforward. The only two required parameters are **Location** and **HttpMethod="Get"**. OData services require GET requests in RadListView. Additionally, if a remote OData request is accessed (and it supports JSONP), **ResponseType="JSONP"** is also added to ensure RadListView can make a remote service request:



````ASP.NET
<telerik:RadListView ID="RadListView1" runat="server" Skin="Default"
    AllowPaging="true" AllowMultiItemSelection="true" PageSize="8"
    AllowMultiFieldSorting="true" AllowNaturalSort="false">
    <ClientSettings>
        <DataBinding ItemPlaceHolderID="itemPlaceHolder">
            <LayoutTemplate>
                <div class="RadListView RadListView_Default" style="width:800px;">
                    <table style="width: 100%" cellspacing="0">
                        <thead>
                            <tr class="rlvHeader">
                                <th style="width: 20px">
                                    <input type='checkbox'
                                        id="headerCheckBox"
                                        onclick="toggleAllItems(this, $find('#= owner.get_id() #'));"
                                        #= owner.get_dataSource().length === owner.get_selectedIndexes().length ? "checked='checked'" : "" #></input>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('ProductID') #"
                                        onclick="lv.sort('ProductID');">ProductID</a>
                                </th>
                                <th style="width:350px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('ProductName') #"
                                        onclick="lv.sort('ProductName');">ProductName</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('UnitPrice') #"
                                        onclick="lv.sort('UnitPrice');">UnitPrice</a>
                                </th>
                                <th style="width: 200px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('CategoryID') #"
                                        onclick="lv.sort('CategoryID');">CategoryID</a>
                                </th>
                                <th style="width: 200px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('UnitsInStock') #"
                                        onclick="lv.sort('UnitsInStock');">UnitsInStock</a>
                                </th>
                                <th style="width: 20px">
                                    <a href="javascript:void(0);"
                                        title="#= owner.get_sortExpressions().getSortOrder('Discontinued') #"
                                        onclick="lv.sort('Discontinued');">Discontinued</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="itemPlaceHolder">
                        </tbody>
                    </table>
                    <div id="pager" class="RadDataPager RadDataPager_Default" style="border:none">
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageFirst" onclick="$find('#=owner.get_id()#').page('First')"></input>
                            <input type="button" class="rdpPagePrev" onclick="$find('#=owner.get_id()#').page('Prev')"></input>
                        </div>
                        <div class="rdpWrap rdpNumPart">
                            #= renderNumericPager(owner) #
                        </div>
                        <div class="rdpWrap">
                            <input type="button" class="rdpPageNext" onclick="$find('#=owner.get_id()#').page('Next')"></input>
                            <input type="button" class="rdpPageLast" onclick="$find('#=owner.get_id()#').page('Last')"></input>
                        </div>
                    </div>
                </div>
            </LayoutTemplate>
            <ItemTemplate>
                <tr class="rlvI #= isSelected ? 'rlvISel' : '' #"
                    onclick="$find('#= owner.get_id() #').toggleSelection(#= index #)"
                    style="cursor:default">
                    <td>
                        <input type="checkbox" #= isSelected ? 'checked="checked"' : '' # />
                    </td>
                    <td>
                        #= ProductID #
                    </td>
                    <td>
                        #= ProductName #
                    </td>
                    <td>
                        #= format(UnitPrice, "{0:C}") #
                    </td>
                    <td>
                        #= CategoryID #
                    </td>
                    <td>
                        #= UnitsInStock #
                    </td>
                    <td>
                        <input type="checkbox" disabled="disabled" #= Discontinued ? "checked='checked'" : ""#></input>
                    </td>
                </tr>
            </ItemTemplate>

            <DataService Location="http://services.odata.org/Northwind/Northwind.svc/Products"
                         HttpMethod="Get"
                         ResponseType="JSONP" />
        </DataBinding>
        <ClientEvents OnTemplateDataBound="templateDataBound" />
    </ClientSettings>
</telerik:RadListView>

<%--We add a hidden data pager to have its styles applied on the page--%>
<telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" style="display:none"></telerik:RadDataPager>
````
````JavaScript
<script type="text/javascript">
    function toggleAllItems(checkbox, listView) {
        if (checkbox.checked) {
            listView.selectAllItems();
        }
        else {
            listView.clearSelectedItems();
        }
    }

    function templateDataBound(sender, args)
    {
        var headerCheckBox = document.getElementById("headerCheckBox");
        if (headerCheckBox)
        {
            headerCheckBox.checked = sender.get_selectedIndexes().length === sender.get_dataSource().length;
        }
    }

    function renderNumericPager(listView)
    {
        var index = listView.get_currentPageIndex();
        var pageCount = listView.get_pageCount();
        var buttons = [];

        for (var i = 0; i < pageCount; i++)
        {
            buttons.push(String.format("<a href='javascript:void(0);' {0} onclick='$find(\"{1}\").page({2});'><span>{2}</span></a>",
                i === index ? "class='rdpCurrentPage'" : "",
                listView.get_id(),
                i + 1));
        }

        return buttons.join("\r\n");
    }
</script>
````


## Web Service Default Parameters

When automatically binding to web services, RadListView uses a set of default values for various databinding settings. These default values depend on the **HttpMethod** setting. Defaults for a **POST** request differ from defaults for a **GET** request. All default values can be replaced by their respective properties in the **RadListView.ClientSettings.DataBinding.DataService** server settings. The following table describes default values and settings for the two HTTP methods:


>caption  

|  ** *Setting* **  |  ** *Value when POST* **  |  ** *Value when GET* **  |
| ------ | ------ | ------ |
| **DataPropertyName** |"Data"|"results"|
| **CountPropertyName** |"Count"|"**count"|
| **FilterParameterName** |"filterExpression"|"$filter"|
| **FilterParameterType** |"List|"OData"|
| **SortParameterName** |"sortExpression"|"$orderby"|
| **SortParameterType** |"List"|"OData"|
| **StartRowIndexParameterName** |"startRowIndex"|"$skip"|
| **MaximumRowsParameterName** |"maximumRows"|"$top"|

>tip The **DataPropertyName** and **CountPropertyName** settings specify names of fields in the JSON response that RadListView will look for when retrieving data and row count. The rest of the settings specify parameter names that RadListView adds when making HTTP requests to a service. In a **POST** request, parameters are sent as a JSON-encoded object with the specified fields, while using **GET** requests, RadListView sends a query string with the specified parameters appended to the service URL.
>


# See Also

 * [Overview]({%slug listview/data-binding/client-side/overview%})

 * [Defining Client-Side HTML Templates]({%slug listview/data-binding/client-side/defining-client-side-html-templates%})
