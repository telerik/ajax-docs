---
title: DataPager Object
page_title: DataPager Object | UI for ASP.NET AJAX Documentation
description: DataPager Object
slug: datapager/client-side-programming/datapager-object
tags: datapager,object
published: True
position: 1
---

# DataPager Object



__RadDataPager__ provides the following client-side properties and methods:

## Public Properties


| Property | Parameters | Return type | Description |
| ------ | ------ | ------ | ------ |
| __get_uniqueID()__ |none|String|Returns the UniqueID of the RadDataPager.|
| __get_pageCount()__ |none|integer|Returns the page count for the pager control.|
| __get_startRowIndex()__ |none|integer|Returns the index of the first record that is displayed on a page of data.|
| __get_pageSize()__ |none|integer|Returns the page size for the pager control.|
| __set_pageSize()__ |integer|none|Sets the page size for the pager control.|
| __get_totalRowCount()__ |none|integer|Returns the total number of records that are displayed in the underlying data source.|
| __get_currentPageIndex()__ |none|integer|Returns the current page index for the pager control.|
| __set_currentPageIndex()__ |integer|none|Sets the current page index for the pager control.|

## Public Methods


| Method | Parameters | Return type | Description |
| ------ | ------ | ------ | ------ |
| __fireCommand(commandName, commandArgument)__ |string, string/integer|none|Method which triggers specific command for the RadDataPager when executed. The method is called for the RadDataPager client instance and its arguments depend on the command which will be processed. The method takes the following arguments:

1. string - command name which could be __Page__ or __PageSizeChange__ 

1. string/integer - command arguments "First", "Next", "Prev", "Last" or integer value for page size.|

Below is a sample illustrating how you can use the fireCommand() client-side method of __RadDataPager__:

````JavaScript
	    <telerik:RadDataPager ID="RadDataPager1" runat="server">
	    </telerik:RadDataPager>
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	
	            function FirePageSizeChangeCommand() {
	                var datapager = $find("<%= RadDataPager1.ClientID %>");
	                datapager.fireCommand("PageSizeChange", 10);
	            }
	
	            function FirePageCommand() {
	                var datapager = $find("<%= RadDataPager1.ClientID %>");
	                datapager.fireCommand("Page", "Next");
	            }
	
	        </script>
	    </telerik:RadCodeBlock>
````



# See Also

 * [Overview]({%slug datapager/client-side-programming/overview%})
