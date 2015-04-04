---
title: Defining Client-Side HTML Templates
page_title: Defining Client-Side HTML Templates | UI for ASP.NET AJAX Documentation
description: Defining Client-Side HTML Templates
slug: listview/data-binding/client-side/defining-client-side-html-templates
tags: defining,client-side,html,templates
published: True
position: 1
---

# Defining Client-Side HTML Templates



## Introduction to client-side HTML templates

RadListView provides a number of client-side HTML templates that define the layout of the control when databinding on the client-side. The client-side templates are properties of type string and they are sent to the browser unmodified. Then, the client RadListView component passes them to __Telerik.Web.UI.Template.compile()__ for building functions that render the HTML template.

Here follows a list of all the client-side templates available for specifying in __RadListView.ClientSettings.DataBinding__:


>caption  

|  __ *Name* __  |  __ *Description* __  |
| ------ | ------ |
| __LayoutTemplate__ |HTML layout template. If this template is omitted, the server-side LayoutTemplate needs to be defined.|
| __ItemTemplate__ |HTML item template|
| __AlternatingItemTemplate__ |HTML alternating item template|
| __ItemSeparatorTemplate__ |HTML item separator template|
| __EmptyDataTemplate__ |HTML template rendered when RadListView contains no data.|
| __SelectedItemTemplate__ |HTML template rendered when an item is selected.|

>note Note that Visual Studio does not provide IntelliSense support inside string properties in the markup. Therefore, you get only code completion when typing HTML in a client-side RadListView template, but no IntelliSense.
>


## Expressions In HTML Templates

The client-side HTML templates support the following expressions for evaluating code:


>caption  

|  __ *Format* __  |  __ *Name* __  |  __ *Description* __  |
| ------ | ------ | ------ |
| __#= ... #__ |Data|Evaluates the Javascript code expression or a string property from the data item and outputs the result in the template.|
| __# ... #__ |Code|Evaluates the JavaScript code expression inside. Does not output value.|
| __#: ... #__ |HTML-encode|Same as the data expression, but HTML-encodes the result.|

## Binding Context

Every template is provided a binding context during rendering. The binding context is the __this__ object equivalent for javascript defined inside the HTML template. All RadListView templates are provided a context object with the following properties:


>caption  

|  __ *Field* __  |  __ *Description* __  |
| ------ | ------ |
| __owner__ | __The current RadListView instance.__ Can be used for calling methods of the component.|
| __format(value, format)__ |A formatting function that can format Date and Number values. This function is based on the MS AJAX __String.localeFormat(format, value)__ function.|

Along with these shared fields in the binding context of all templates, the __ItemTemplate__, __AlternatingItemTemplate__ and __SelectedItemTemplate__ (collectively referred to as "data templates") also get a number of additional fields in their binding contexts. Most importantly, when a data template is databinding to an item from RadListView's data source, all the fields in the data item are copied to the binding context. For example, a template bound to the JSON object {ID: 1, Name: "Item1"} will have the fields ID = 1 and Name = "Item1" in its binding context.

Additionally, each *data template* gets the following fields in its binding context:


>caption  

|  __ *Field* __  |  __ *Description* __  |
| ------ | ------ |
| __item__ |The original JSON data object that the template is binding to.|
| __index__ |The index of the currently databinding item in the current page.|
| __dataIndex__ |The index of the item in the set of all RadListView data. This field has a meaning only when paging is enabled. It indicates the page-invariant index of the item.|
| __isSelected__ |Indicates if the current item is selected.|

## Examples for HTML templates

Equipped with the data and functions in the context of the HTML templates, you can implement complex rendering scenarios. You can see a few examples below:

````ASPNET
	<ItemTemplate>
	    <tr class="rlvI #= isSelected ? 'rlvISel' : '' #">
	        <td>
	            #= ProductName #
	        </td>                       
	    </tr>
	</ItemTemplate>
````



````ASPNET
	<ItemTemplate>
	    <tr class="rlvI #= isSelected ? 'rlvISel' : '' #">
	        <td>
	            #= format(ShipDate, "d") #
	        </td>
	        <td>
	            #= format(Price, "C2") #
	        </td>
	    </tr>
	</ItemTemplate>
````



````ASPNET
	<LayoutTemplate>
	    <table>
	        <thead>
	            <tr>
	                <th>
	                    <a href="javascript:void(0);" 
	                    	title="#= owner.get_sortExpressions().getSortOrder('ProductID') #" 
	                    	onclick="$find('#= owner.get_id() #').sort('ProductID');">ProductID</a>
	                </th>					
	            </tr>
	        </thead>
	        <tbody id="itemPlaceHolder">
	        </tbody>
	    </table>
	</LayoutTemplate>
````



````ASPNET
	<LayoutTemplate>                  
	    <div id="pager">
	        <div>
	            <button onclick="$find('#=owner.get_id() #').page('First')" />
	            <button onclick="$find('#=owner.get_id() #').page('Prev')" />
	        </div>
	        <div>
	            <button onclick="$find('#=owner.get_id() #').page('Next')" />
	            <button onclick="$find('#=owner.get_id() #').page('Last')" />
	        </div>
	    </div>
	</LayoutTemplate>
````





````ASPNET
	<LayoutTemplate>
	    <div id="Div1" class="RadDataPager RadDataPager_Default" style="border:none">
	        ...
	        <div class="rdpWrap rdpNumPart">
	            #= renderNumericPager(owner) #
	        </div>
	        ...
	    </div>
	</LayoutTemplate>
````
````JavaScript
	<script type="text/javascript">
	    function renderNumericPager(listView) {
	        var index = listView.get_currentPageIndex();
	        var pageCount = listView.get_pageCount();
	        var buttons = [];
	
	        for (var i = 0; i < pageCount; i++) {
	            buttons.push(String.format("<a href='javascript:void(0);' {0} onclick='$find(\"{1}\").page({2});'><span>{2}</span></a>",
	                i === index ? "class='rdpCurrentPage'" : "",
	                listView.get_id(),
	                i + 1));
	        }
	
	        return buttons.join("\r\n");
	    }
	</script>
````

