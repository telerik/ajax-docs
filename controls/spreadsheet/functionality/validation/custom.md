---
title: Custom
page_title: RadSpreadsheet Custom Validation
description: Check our Web Forms article about Custom ContextMenu.
slug: spreadsheet/functionality/validation/custom
tags: custom
published: True
position: 1
---

#  Custom Validation

The **RadSpreadsheet** control allows you to create your own custom **Validation** Dialog, where you can define the criteria and behavior for invalid data that suits best your scenario. You can achieve this, using the **ValidationTemplate** tag of the **RadSpreadsheet** control. The following steps will guide you trough the custom Data Validation dialog implementation:

1. Create a WebUserControl, which will contain the layot and behavior of the custom Validation dialog. In the WebUserControl you can define preferable **Criteria** for data types and implement any further configuration for those types. Also, you can configure the behavior for handling the invalid data and Hint Message. 

2. Create JavaScript file that will be the actual connection to the Spreadsheet.ValidationView. In this javascript file, you will need to create the interface for the **ValidationView** object of the **RadSpreadsheet** and the markup of the newly created custom dialog. Manipulating the prototypes of the **ValidationView** you will have a full access and ability to implement or modify the behavior of the default controls in the view and apply your custom one.

3. Create the **RadSpreadsheet** on your page, referencing the custom WebUserControl that contains the new Validation view (dialog) in the **ValidationTemplate** tag and provide a reference to the javascript file that serve as interface for **ValidationView** object of the **RadSpreadsheet** and the custom Validation dialog. At the end, the layout of the aspx page where the **RadSpreadsheet** is defined should look as simple as the below implementation:

````ASP.NET

<%@ Register Src="~/SpreadsheetValidation.ascx" TagPrefix="uc1" TagName="SpreadsheetValidation" %>
....
....
<form id="form1" runat="server">
	<telerik:RadScriptManager runat="server" />
	
	<script src="Scripts/ValidationView.js"></script>
	
	<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1">
		<ValidationTemplate>
			<uc1:SpreadsheetValidation runat="server" ID="SpreadsheetValidation" />
		</ValidationTemplate>
	</telerik:RadSpreadsheet>

</form>

````

>note You can investigate the entire setup and test the behavior of the **RadSpreadsheet** with Custom **Validation** dialog in this Code Library: [Validation Template for RadSpreadsheet Code Library](https://www.telerik.com/support/code-library/validation-template).
