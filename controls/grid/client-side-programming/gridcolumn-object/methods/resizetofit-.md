---
title: resizeToFit 
page_title: resizeToFit  | UI for ASP.NET AJAX Documentation
description: resizeToFit 
slug: grid/client-side-programming/gridcolumn-object/methods/resizetofit-
tags: resizetofit,
published: True
position: 1
---

# resizeToFit 



This method resizes the column to fit the widest cell's content without wrapping. It also provides two __optional__ parameters which can be used for further alteration:

* __skipHeaderCell__: Determines whether the Headers should be ignored in the calculation for the column's new width.By default - __false__.

* __includeAllHeaderRows__: This parameter has effect only if the __skipHeaderCell__is set to __false__. It determines whether the cells of the filter item should be considered in the calculation for the column's new width.By default - __false__, except when the __RadGrid__ has structure with Multi-column headers configured.

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	        function pageLoad() {
	            var grid = $find("<%= RadGrid1.ClientID %>");
	            var columns = grid.get_masterTableView().get_columns();
	            for (var i = 0; i < columns.length; i++) {
	                columns[i].resizeToFit(false, true);
	            }
	        }
	     </script>
	    </telerik:RadCodeBlock>    
	    <telerik:RadGrid id="RadGrid1" runat="server">
	        <ClientSettings>
	            <Resizing AllowColumnResize="true" ResizeGridOnColumnResize="true" AllowResizeToFit="true" />
	        </ClientSettings>
	    </telerik:RadGrid> 
````



# See Also

 * [Overview]({%slug grid/overview%})

 * [Multi-Column Headers Live Demo](http://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/columns/multi-column-headers/defaultcs.aspx)

 * [Column Resize/Reorder Live Demo](http://demos.telerik.com/aspnet-ajax/grid/examples/columns-rows/columns/column-row-resize-reorder/defaultcs.aspx)
