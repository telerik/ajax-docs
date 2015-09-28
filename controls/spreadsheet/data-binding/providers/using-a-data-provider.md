---
title: Using a Data Provider
page_title: Using a Data Provider | RadSpreadsheet for ASP.NET AJAX Documentation
description: Using a Data Provider
slug: spreadsheet/data-binding/providers/using-a-data-provider
tags: using,a,data,provider
published: True
position: 0
---

# Using a Data Provider



**RadSpreadsheet** follows the Provider Design Pattern to allow for easy integration into existing applications. On the Microsoft Web site, the article [Introduction To the Provider Model](http://msdn2.microsoft.com/en-us/library/aa479030.aspx) provides a detailed introduction to understanding this pattern.

You can use one of the providers supplied in the Telerik.Web.UI assembly, or you can [implement your own]({%slug spreadsheet/data-binding/providers/implementing-a-provider%}).

The Telerik.Web.UI assembly defines the **Telerik.Web.UI.SpreadsheetDocumentProvider** provider, which can be used to bind the **RadSpreadsheet** to the most common excell file formats. The provider uses the [RadSpreadProcessing library](http://docs.telerik.com/devtools/aspnet-ajax/controls/spreadprocessing/overview) internally.

To bind **RadSpreadsheet** to a provider, you can either set its **Provider** property at runtime, or set the **ProviderName** property declaratively.

## Binding to a provider declaratively

The following steps show how to declaratively bind **RadSpreadsheet** to the **Telerik.Web.UI.SpreadsheetDocumentProvider**, using the **ProviderName** property.

1. Using the Solution Explorer, double click on the Web.config file. Locate the `<configSections>` tag at the very top. **RadSpreadsheet** is designed to be used with providers configured in a custom section of the web.config file. The custom section requires a handler that is included in the Telerik.Web.UI assembly. Add a `<section>` for this handler to the `<configSections>` of your Web.config file:

	**XML**
	
		<configSections>
			<sectionGroup name="telerik.web.ui">
				<section name="radSpreadsheet"
					type="Telerik.Web.UI.RadSpreadsheetConfigurationSection,
							Telerik.Web.UI, PublicKeyToken=121fae78165ba3d4"
					allowDefinition="MachineToApplication" />
			</sectionGroup>
		</configSections>


1. Now that you have declared a handler, add the `<telerik.web.ui>` section to your Web.config file (if it is not already there), and in the <telerik.web.ui> section, declare the provider:

	**XML**
			
		<radSpreadsheet defaultProvider="Integrated">
			<providers>
				<add name="SpreadsheetDocumentProvider1"
					type="Telerik.Web.UI.SpreadsheetDocumentProvider"
					fileName="~/App_Data/Spreadsheet.xlsx" />
			</providers>
		</radSpreadsheet>     


1. Now that the provider will be loaded into your application, set the **ProviderName** property of the **RadSpreadsheet** to "SpreadsheetDocumentProvider1".

	**ASP.NET**
			
		<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1"
			ProviderName="SpreadsheetDocumentProvider1">
		</telerik:RadSpreadsheet>

1. Create an Excell file called "Spreadsheet.xlsx", and copy it to the App_Data folder of your project.


You have now bound your **RadSpreadsheet** using the **ProviderName** property.

>note The PublicKeyToken in step 1. varies in different versions on RadControls. You can use [JustDecompile](http://www.telerik.com/products/decompiler.aspx), to see the PublicKeyToken for your version. Additionally, if the assembly is added to your GAC, you can see its Public Key Token there as well.
>

## Binding to a provider at runtime

Binding the **RadSpreadsheet** to a provider at runtime requires only one step:

1. Set the **Provider** property in the code behind, assigning it an instance of the **Telerik.Web.UI.SpreadsheetDocumentProvider** class, with the path to the excell file as a parameter.   

	**ASP.NET**
			
		<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1">
		</telerik:RadSpreadsheet>

	**C#**
			
		protected void Page_Init(object sender, EventArgs e)
		{
			RadSpreadSheet1.Provider = new SpreadsheetDocumentProvider(Server.MapPath("~/App_Data/Spreadsheet.xlsx"));
		}
		
	**VB.NET**
	
		Protected Sub Page_Init(sender As Object, e As EventArgs)
			RadSpreadSheet1.Provider = New SpreadsheetDocumentProvider(Server.MapPath("~/App_Data/Spreadsheet.xlsx"))
		End Sub

You have now bound your **RadSpreadsheet** using the **Provider** property at runtime.

# See Also

 * [Implementing a Provider]({%slug spreadsheet/data-binding/providers/implementing-a-provider%})
