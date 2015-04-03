---
title: CommandItem Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/data-editing/commanditem/overview
tags: overview
published: True
position: 0
---

# CommandItem Overview



## 

The __CommandItem__ is a placeholder for commands that can perform some action on the selected/all items. See the [Command reference]( http://www.telerik.com/help/aspnet-ajax/grid-command-reference.html ) topic for details about the available commands.

![](images/grd_DefaultCommandItem.PNG)

The [Add new record] and [Refresh] buttons will be automatically placed in a command item (__GridCommandItem__). If you need to access them server-side you have to know their IDs:

* __AddNewRecordButton -__Add new record image button

* __InitInsertButton -__Add new record____link button

* __RefreshButton -__Refresh image button

* __RebindGridButton -__ Refresh link button

Additionally, you have the option of exposing buttons for exporting RadGrid data to the four supported export types: Word, Excel, PDF and CSV. This functionality is available through the

__ShowExportTo[Excel/Word/Pdf/Csv]Button__ properties in the __CommandItemSettings__.

![](images/grd_CommandItemExportButtons.PNG)

The four export buttons have the following server-side IDs:

* __ExportToExcelButton__

* __ExportToWordButton__

* __ExportToPdfButton__

* __ExportToCsvButton__



You need to know the IDs of the export buttons if you are exporting through an AJAX-ified RadGrid, as described in the [following help topic]({%slug grid/ajaxified-radgrid/what-you-should-have-in-mind/export-from-ajaxified-grid%}).

The [*__Save Changes__*] and [*__Cancel Changes__*] buttons must be used only with __Batch Editing__:

* __SaveChanges -__Initiates saving for the changes made on a __RadGrid__ in __Batch__ edit mode

* __CancelChanges -__Cancels the changes made on a __RadGrid__ in __Batch__ edit mode

The __CommandItem__ is availableas a property (__CommandItemDisplay__) ofthe MasterTableView tag of RadGrid.

To enable the __CommandItem__, you need to use the __CommandItemDisplay__ property of the __MasterTableView__ of RadGrid, choosing an appropriate position for the command item-(__Top__ / __Bottom__ / __TopAndBottom__ / __None__).

Basically, there are two groups of properties, pertaining to the Command Item. One of them is set in the tag of the __MasterTableView__, and the other one, as properties for the __RadGrid__ control. Additionally, there is a group of style settings, which can be set through the __CommandItemStyle__ tag of the RadGrid control (and which are also available as properties of __RadGrid__, and the __MasterTableView__). This is demonstrated in the code snippet below:

````ASPNET
	<CommandItemStyleBackColor="#FFC0C0" BorderColor="#FFE0C0" BorderStyle="Dotted"
	BorderWidth="1px"Font-Bold="True" Font-Italic="True" Font-Names="Arial Black"
	Font-Overline="True"Font-Size="Small" Font-Strikeout="True" Font-Underline="True"
	ForeColor="#404040"Height="40px" HorizontalAlign="Left" VerticalAlign="Middle"
	Width="800px"Wrap="True" />			
````



The same settings are available as properties of the grid control:

````ASPNET
	<telerik:RadGrid
	 CommandItemStyle-BackColor="lightblue"
	 CommandItemStyle-Font-Bold="true"	
	 ...		
````



The style settings can also be set through the __MasterTableView__ declaration:

````ASPNET
	<telerik:RadGrid        
	   ID="RadGrid1" runat="server" AllowSorting="True" DataSourceID="SqlDataSource1" GridLines="None">        
	      <MasterTableView CommandItemDisplay="Top" CommandItemStyle-BackColor="lightblue"  CommandItemStyle-Font-Bold="true">...			
````



There is one additional tag, the __CommandItemSettings__, which includes settings for the commandItem’s image paths, button text and the options to show or hide the default command buttons (Add New Record, Refresh and the four export buttons).

````ASPNET
	<MasterTableView
	  CommandItemDisplay="Top"           
	  AutoGenerateColumns="False"
	  DataKeyNames="CustomerID"  
	  DataSourceID="AccessDataSource1">                             
	  <CommandItemSettings
	    AddNewRecordImageUrl="Image1.jpg"
	    AddNewRecordText="AddNewRecordCustomText"
	    RefreshImageUrl="Image2.jpg"
	    RefreshText="RefreshCustomtext"
	    ShowExportToExcelButton="true"
	    ShowExportToCsvButton="true" />               
	</MasterTableView>  			
````



These settings can also be included directly as settings of the __MasterTableView__ declaration of __RadGrid__:

````ASPNET
	<MasterTableView
	  CommandItemSettings-AddNewRecordImageUrl="Image1.jpg"
	  CommandItemSettings-AddNewRecordText="AddNewRecordCustomText"
	  CommandItemSettings-RefreshImageUrl="Image2.jpg"
	  CommandItemSettings-RefreshText="RefreshCustomtext"
	  CommandItemSettings-ShowExportToPdfButton="true"
	  CommandItemDisplay="Top"              
	  AutoGenerateColumns="False"
	  DataKeyNames="CustomerID"
	  DataSourceID="AccessDataSource1">
	</MasterTableView>
````



The __RadGrid.ItemCommand__ event will be fired when a custom command bubbles from the __CommandItem__, which lets you define any functionality you can think of. A great benefit is that all the buttons residing in the __CommandItem__, will automatically take advantage of the RadGrid AJAX mechanism, without writing any extra code.

# See Also

 * [Command Reference ]({%slug grid/control-lifecycle/command-reference-%})

 * [Command Item Template]({%slug grid/data-editing/commanditem/command-item-template%})

 * [Styling the CommandItem]({%slug grid/appearance-and-styling/styling-the-commanditem%})
