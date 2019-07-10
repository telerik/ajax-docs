---
title: Implementing Custom Provider
page_title: Implementing Custom Provider | RadSpreadsheet for ASP.NET AJAX Documentation
description: Custom Database Provider
slug: spreadsheet/data-binding/providers/custom-database-provider
tags: custom,database,provider
published: True
position: 1
---

# Custom Provider

The following article demonstrates how to implement a custom provider for the RadSpreadsheet.

## Implementing the Provider

 In order to implement a custom provider for the **RadSpreadsheet** you would need to create a class that inherits the **SpreadsheetProviderBase** class. The custom class should implement the **SaveWorkbook** and **GetSheets** methods, which provide the end points for reading and writing data to the **Spreadsheet**. The following steps will help you to easily create and implement a custom provider for the RadSpreadsheet.


1. Create a class that inherits the **SpreadsheetProviderBase** class:

	**C#**

		using Telerik.Web.UI;
		using Telerik.Web.Spreadsheet;

		public class SpreadsheetDataBaseProvider : SpreadsheetProviderBase
		{
		
		}


	**VB**

		Imports Telerik.Web.UI
		Imports Telerik.Web.Spreadsheet

		Public Class SpreadsheetDataBaseProvider
		    Inherits SpreadsheetProviderBase
		
		End Class



1. In the custom class you should implement the **SaveWorkbook** and **GetSheets** methods:


	**C#**

		public override void SaveWorkbook(Workbook workbook)
		{
			...
		}
		
		public override List<Worksheet> GetSheets()
		{
			var result = new List<Worksheet>();
			....
			return result;
		}

	
	**VB**

		Public Overrides Sub SaveWorkbook(workbook As Workbook)
		    ...
		End Function
		
		Public Overrides Function GetSheets() As List(Of Worksheet)
		
			Dim result = New List(Of Worksheet)()
		    ....
			Return result
			
		End Function


JavaScript keeps the dates as interegers and in the save method, the dates would would be received as integers, not DateTime objects. To convert the integer to a date on the server, the following approach can be used: 

	**C#**

		public override void SaveWorkbook(Workbook workbook)
		{
			...
		    	var date = new DateTime(1900, 1, 1);
            		// dateValue is the Cell's string value parsed as an integer
            		var dateFromDateValue = date.AddDays(dateValue - 2);
			...
		}
			
	**VB**

		Public Overrides Sub SaveWorkbook(workbook As Workbook)
			...
		        Dim date = New DateTime(1900, 1, 1)
			' dateValue is the Cell's string value parsed as an integer
			Dim dateFromDateValue = date.AddDays(dateValue - 2)
			...
		End Function
		

1. Provide the RadSpreadsheet control with the newly created custom provider at the Page_Load in the following manner: 

	**C#**

		protected void Page_Load(object sender, EventArgs e)
		{
			SpreadsheetDataBaseProvider provider = new SpreadsheetDataBaseProvider();
			RadSpreadsheet1.Provider = provider;
		}


	**VB**

		 Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
		        Dim provider As SpreadsheetDataBaseProvider = New SpreadsheetDataBaseProvider()
		        RadSpreadsheet1.Provider = provider
		    End Sub


>note You can investigate the entire setup and test the behavior of the **RadSpreadsheet** with **Custom Database Provider** in this Code Library: [Custom Database Provider for RadSpreadsheet Code Library](http://www.telerik.com/support/code-library/spreadsheetdatabaseprovider).

# See Also

 * [How to iterate all cells and rows in Spreadsheet properly on the server-side](https://www.telerik.com/support/kb/aspnet-ajax/spreadsheet/details/how-to-iterate-all-cells-and-rows-in-spreadsheet-properly)


