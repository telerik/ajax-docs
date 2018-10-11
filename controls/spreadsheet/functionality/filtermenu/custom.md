---
title: Custom
page_title: RadSpreadsheet Filter Menu| UI for ASP.NET AJAX Documentation
description: Custom ContextMenu 
slug: spreadsheet/functionality/filtermenu/custom
tags: custom
published: True
position: 1
---

#  Custom Filter Menu

The **RadSpreadsheet** control allows you to create your own custom **Filter Menu** Dialog, where you can define the criteria and behavior for invalid data that suits best your scenario. You can achieve this, using the **FilterMenuTemplate** tag of the **RadSpreadsheet** control. The following steps will guide you trough the custom Data Validation dialog implementation:

1. Create a WebUserControl, which will contain the layot and behavior of the custom **Filter Menu**. In the WebUserControl you can define a set of **Conditions**, which will be displayed in the **Filter by condition** section and will fit best your business case. 

2. Create JavaScript file that will be the actual connection to the Spreadsheet.FilterMenuView. In this javascript file, you will need to create the interface for the **FilterMenuView** object of the **RadSpreadsheet** and the markup of the newly created filter menu.

3. Create the **RadSpreadsheet** on your page, referencing the custom WebUserControl that contains the new Fitler Menu in the **FilterMenuTemplate** tag and provide a reference to the javascript file that serve as interface for the **FilterMenuView** object of the **RadSpreadsheet** and the custom Filter Menu. At the end, the layout of the aspx page where the **RadSpreadsheet** is defined should look as simple as the below implementation:

````ASP.NET

<%@ Register Src="~/SpreadsheetFilterMenu.ascx" TagPrefix="uc1" TagName="SpreadsheetFilterMenu" %>
....
....
<form id="form1" runat="server">
	<telerik:RadScriptManager runat="server" />
	
	<script src="Scripts/FilterMenuView.js"></script>

	<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1">
		<FilterMenuTemplate>
			<uc1:SpreadsheetFilterMenu runat="server" ID="SpreadsheetFilterMenu" />
		</FilterMenuTemplate>
	</telerik:RadSpreadsheet>

</form>

````

>tip You can investigate the entire setup and test the behavior of the **RadSpreadsheet** with Custom **Filter Menu** in this Code Library: [Filter Menu Template for RadSpreadsheet Code Library](http://www.telerik.com/support/code-library/filter-menu-template).
