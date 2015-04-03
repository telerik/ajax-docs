---
title: Format Numbers
page_title: Format Numbers | UI for ASP.NET AJAX Documentation
description: Format Numbers
slug: htmlchart/appearance-and-styling/format-numbers
tags: format,numbers
published: True
position: 5
---

# Format Numbers



## Using DataFormatString

Numbers can be formatted through the __DataFormatString property__ which is exposed by[XAxis/YAxis Labels]({%slug htmlchart/server-side-programming/axes-configuration%}),[Series Labels and ToolTips]({%slug htmlchart/server-side-programming/series-configuration%}).

The number format can be set:

* directly (e.g. DataFormatString = "N")

* or in combination with additional text(e.g DataFormatString = "Sales: {0:N}"), where the {0} placeholder will translate into the item's value.

The number of zeros after the decimal mark can be indicated next to thenumber format itself e.g. DataFormatString = "{0:C3}" will produce a currency symbol with three decimal places for the value.


>caption List of Number Formats

| Format | Description |
| ------ | ------ |
|N|Number (e.g. the number 10500 will be formated as 10,500.00)|
|C|Currency (e.g. the number 10500 will be formated as $10,500.00)|
|P|Percentage (e.g. the number 10500 will be formated as 1,050,000.00% because 1 is equal to 100%)|
|E|Exponential (e.g. the number 10500 will be formated as 1.05e+4)|

>note The above numbers are formatted in the default "en-US" culture. More information on how to localize	text elements is available in the[Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})article.
>


>note Since __Q2 2013__ the __RadHtmlChart__ can be databound	to __DateTime objects__ , so that[XAxis Labels]({%slug htmlchart/server-side-programming/axes-configuration%}),[Series Labels and ToolTips]({%slug htmlchart/server-side-programming/series-configuration%})can be formatted to the desired date format. More information on formatting dates is available in[Date Axis]({%slug htmlchart/functionality/axes/date-axis%})article.
>


## Formatting Labels and Tooltips by using their Client Templates

KendoUI number and date formats can be used inside the Client Templates. In order to set a certain format oneshould follow the examples that KendoUI offers in [this](http://docs.kendoui.com/api/framework/kendo#methods-format) help article.


>caption KendoUI format functions

| Format | Description |
| ------ | ------ |
|format|

* Formats the corresponding values from the indicated column to the specified format.	(e.g. ClientTemplate="#= kendo.format(\'{0:C2}\', dataItem.myColumn)#").

* The numeric format strings listed above	are applicable parameters for the format() function.|
|parseFloat|Parses a string to a floating point number (e.g. ClientTemplate="#= kendo.parseFloat(dataItem.FloatColumn)#")|
|parseInt|Parses a string to an integer (e.g. ClientTemplate="#= kendo.parseInt(dataItem.IntColumn)#")|

>note 
* These formats are essentially JavaScript functions and are evaluated during runtime. This means that the strings that are	passed to the ClientTemplate property must be properly escaped to allow JavaScript to work with them.
* If these properties	are set in the code-behind the strings must be additionally escaped for the code-behind language according to its specifics	so that they are valid. More information on the matter is available in the[Handling Special Symbols help article]({%slug htmlchart/troubleshooting/handle-special-symbols%}).>


# See Also

 * [Axes Configuration]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Series Configuration]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Date Axis]({%slug htmlchart/functionality/axes/date-axis%})

 * [Format Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [Handle Special Symbols]({%slug htmlchart/troubleshooting/handle-special-symbols%})

 * [Localization]({%slug htmlchart/accessibility-and-internationalization/localization%})
