---
title: Custom DropZone for each row in a RadGrid
description: Create a separate DropZone for each row in a RadGrid or a Repeater
type: how-to
page_title: Custom DropZone for each row in a RadGrid
slug: asyncupload-dropzone-for-each-grid-row
position: 
tags: 
ticketid: 1511640
res_type: kb
---


## Description

The [DropZones]({%slug asyncupload/functionality/drag-and-drop-upload %}#dropzones-property) property of the AsyncUpload receives a CSS selector so in regular cases adding the ID of the dropzone element works perfectly. 

In case you want to use the AsyncUpload in a TemplateColumn of the RadGrid and create a custom dropzone for each row, then using a plain ID for the dropzone would not work. This is because on the page, you will have many dropzones with the same ID.


## Solution

The solution is to generate the ID of the DropZone based on the clientID of the row or the AsyncUpload itself. Here is a sample solution using Markup only. The same could be achieved in the code behind as well:

````ASP.NET
<ItemTemplate>
	<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" DropZones='<%# new string[] { ".drop-zone-" + Container.ClientID }%>'></telerik:RadAsyncUpload>

	<div id="DropZone1" class='<%# "DropZone1 drop-zone-" + Container.ClientID %>' runat="server">
		Custom drop zone per row
	</div>
</ItemTemplate>
````


## See Also

* [AsyncUpload Drag and Drop upload - DropZones]({%slug asyncupload/functionality/drag-and-drop-upload %}#dropzones-property)
* [GridTemplateColumn]({%slug grid/columns/column-types %}#gridtemplatecolumn)
* [Customizing with GridTemplateColumn]({%slug grid/appearance-and-styling/customizing-with-gridtemplatecolumn %})


