---
title: Various Data Sources
page_title: Various Data Sources | UI for ASP.NET AJAX Documentation
description: Various Data Sources
slug: listview/data-binding/client-side/various-data-sources
tags: various,data,sources
published: True
position: 2
---

# Various Data Sources



This article will introduce you to the capabilities of RadListView to bind to various sources of data, and to the specifics related to these bindings.

* __Binding to Javascript Arrayshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section0_self__

* __Binding to ASMX Web Serviceshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section1_self__

* __Binding to WCF Serviceshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section2_self__

* __Binding to OData Serviceshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section3_self__

* __Web Service Default Parametershttp://www.telerik.com/help/aspnet-ajax/listview-clientside-various-datasources.html#Section4_self__

## Binding to Javascript Arrays

To bind RadListView to a javascript array, use the __set_dataSource()__ and __dataBind()__ APIs in a point after the client-side AJAX framework (and RadListView) has loaded:



````JavaScript
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

* __Location__: service base location

* __DataPath__: Data method name

* __CountPath__: Count method name, if required

* __SortParameterType__: Sort expression format, if supported

* __FilterParameterType__: Filter expression format, if supported



````JavaScript
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
	        <telerik:RadDataPager runat="server" style="display:none"></telerik:RadDataPager>
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


If data and total row count is returned in one and the same service call, the __CountPath__ setting is omitted. In this case, RadListView searches for fields with name __Data__ and __Count__ in the web service JSON response, respectively. To modify the names of the response fields RadListView looks for, set the __DataPropertyName__ and __CountPropertyName__ settings.

## Binding to WCF Services

For automatic databinding to WCF services, RadListView is configured in an identical way as ASMX Web Services. In this example, RadListView is bound to a WCF Service that returns data and count in a single request:



````JavaScript
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
	        <telerik:RadDataPager ID="RadDataPager1" runat="server" style="display:none"></telerik:RadDataPager>
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

Binding RadListView to OData service is quite straightforward. The only two required parameters are __Location__ and __HttpMethod="Get"__. OData services require GET requests in RadListView. Additionally, if a remote OData request is accessed (and it supports JSONP), __ResponseType="JSONP"__ is also added to ensure RadListView can make a remote service request:



````JavaScript
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
	        <telerik:RadDataPager ID="RadDataPager1" runat="server" style="display:none"></telerik:RadDataPager>
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

When automatically binding to web services, RadListView uses a set of default values for various databinding settings. These default values depend on the __HttpMethod__ setting. Defaults for a __POST__ request differ from defaults for a __GET__ request. All default values can be replaced by their respective properties in the __RadListView.ClientSettings.DataBinding.DataService__ server settings. The following table describes default values and settings for the two HTTP methods:


>caption  

|  __ *Setting* __  |  __ *Value when POST* __  |  __ *Value when GET* __  |
| ------ | ------ | ------ |
| __DataPropertyName__ |"Data"|"results"|
| __CountPropertyName__ |"Count"|"__count"|
| __FilterParameterName__ |"filterExpression"|"$filter"|
| __FilterParameterType__ |"List|"OData"|
| __SortParameterName__ |"sortExpression"|"$orderby"|
| __SortParameterType__ |"List"|"OData"|
| __StartRowIndexParameterName__ |"startRowIndex"|"$skip"|
| __MaximumRowsParameterName__ |"maximumRows"|"$top"|

>note The __DataPropertyName__ and __CountPropertyName__ settings specify names of fields in the JSON response that RadListView will look for when retrieving data and row count. The rest of the settings specify parameter names that RadListView adds when making HTTP requests to a service. In a __POST__ request, parameters are sent as a JSON-encoded object with the specified fields, while using __GET__ requests, RadListView sends a query string with the specified parameters appended to the service URL.
>


# See Also

 * [Overview]({%slug listview/data-binding/client-side/overview%})

 * [Defining Client-Side HTML Templates]({%slug listview/data-binding/client-side/defining-client-side-html-templates%})
