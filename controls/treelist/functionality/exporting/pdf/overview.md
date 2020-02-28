---
title: PDF Overview
page_title: Overview | RadTreeList for ASP.NET AJAX Documentation
description: Overview
slug: treelist/functionality/exporting/pdf/overview
tags: overview
published: True
position: 0
---

# PDF Overview



>note Note that the *RadTreeList* will render as an *XHTML* table and will convert that table to a *PDF* document. This requires that the rendered treelist output is valid *XHTML* . If it is not,you will receive an exception that the export cannot be completed.
>The most common cause for bad *XHTML* are symbols like **<** , **>** , **&** that need to be replaced by the correct *XHTML* entity: **& l t ;** , **& g t ;** , **& a m p ;** respectively. Another frequent problem are unclosed tags.
>


## PDF specific settings and events


| Name | Description |
| ------ | ------ |
|AllowAdd / AllowCopy / AllowModify / AllowPrinting|Boolean properties that determines whether the corresponding action is allowed for the generated *PDF* file|
|Author / Creator / Keywords / Producer / Subject / Title| *PDF* document specific information|
|DefaultFontFamily|Specifies the default font|
|PageTitle|Sets the page title (appears on the top of the page)|
|PaperSize / PageWidth / PageHeight|These properties are related to the size of the generated page. You can either use the *PaperSize* to supply a predefined value( *A4* , *Letter* , *JIS B5* , etc) or define the size manually using *PageWidth* / *PageHeight* . Please note that the values set to the *PageWidth* / *PageHeight* properties have a higher priority than the *PaperSize* |
|PageBottomMargin / PageTopMargin / PageLeftMargin / PageRightMargin / PageFooterMargin / PageHeaderMargin|All the page margins could be controlled via these settings|
|RotatePaper|You can switch the orientation of the page through this property|
|UserPassword|Used to set a password and enable password protection for the exported file|

````ASPNET
<ExportSettings>
	<Pdf PageTitle="My Page" PaperSize="A4" RotatePaper="true"  />
</ExportSettings>
````



## OnPdfExporting event

The reason for having separate **OnPdfExporting** event is that by the time the **OnExporting** event is raised, the *Pdf* output is already generated and ready for adding to the response. Some cases where the **OnPdfExporting** event is helpful, is when you want to modify the output - for example, you can add HTML to the *e.RawHTML*. However, please note that will be part of your custom logic and we do not support it.

## Fonts / Unicode support

*RadTreeList*'s *PDF* exporting engine supports all languages that use **left-to-right**orientation when the appropriate *Unicode* font is set. The most common international font is [Arial Unicode MS](http://support.microsoft.com/kb/287247) because it covers all *Unicode* characters. Of course, you can use other language-specific fonts as [Batang](http://www.ascenderfonts.com/font/batang-korean.aspx) for *Korean*, [SimSun](http://www.ascenderfonts.com/font/simsun-simplified-chinese.aspx) for *Chinese*, [MS Mincho](http://www.ascenderfonts.com/font/ms-mincho-japanese.aspx) for *Japanese* and etc.

The default font of the generated pages is specified by the **DefaultFontFamily** property:

````ASPNET
<ExportSettings>
	<Pdf DefaultFontFamily="Arial Unicode MS" />
</ExportSettings>  
````



Also, you can dynamically set fonts to the row elements in the same manner used to set background-colors:



````C#
item["OriginalName"].Style["font-family"] = "Arial Unicode MS";
````
````VB.NET
item("OriginalName").Style("font-family") = "Arial Unicode MS"
````


## Exporting HTML tables

There are a few rules that should be followed when exporting *HTML* tables to *PDF*:

* The table should define **<colgroup>** and **<col>** elements

* The number of **col** elements should be equal to the number of the columns in the table body

* Width in **pixels** (or another *absolute* units) should be set to the table

````XML
 <table width="300px">
  <colgroup>
	<col />
	<col />
  </colgroup>
  <tr>
	<td>
	  Cell1
	</td>
	<td>
	  Cell2
	</td>
  </tr>
</table>
````



## Unsupported features / scenarios

Although we are striving to constantly improve our products, there are some limitations in the current implementation of our *PDF* engine

* Image transparency

* Right-to-left fonts

* Nested DIV elements with absolute position

* Nested DIV elements with specified width or height

* Automatic text clipping

* Client-side binding

* Medium trust

## Exceptions

* **At least one of minimum, optimum, or maximum IPD must be specified on table**

Reason: Nested tables should have width in pixels

* **The '*' character, hexadecimal value 0x2A, cannot be included in a name**

The default pager's *RadComboBox* uses special *CSS* approach that is unsupported by the*PDF* parser

* **Telerik.Web.Apoc.ApocException: fo:block must be child of fo:basic-link, fo:block, fo:block-container, fo:float, fo:flow,fo:footnote-body, fo:inline, fo:inline-container, fo:list-item-body, fo:list-item-label, fo:marker, fo:multi-case, fo:static-content, fo:table-caption,fo:table-cell or fo:wrapper not fo:table-header**

This exception is probably result of a **hard pagebreak**, inserted in a wrong place - for example directlyafter the starting tag of a table

* **System.IndexOutOfRangeException: Index was outside the bounds of the array. at Telerik.Web.Apoc.Render.Pdf.Fonts.Type2CIDSubsetFont.GetWidth(Int32 charIndex)**

You are either using *RTL* fonts or mixing *Korean* characters with another language in thesame element (rare scenario)

* **Unable to cast object of type 'Telerik.Web.Apoc.Layout.BlockArea' to type 'Telerik.Web.Apoc.Layout.AreaContainer'**

Most probably you have *DIV* element with specified dimensions or absolute positioning. Remove the relevantwidth/height/position attributes to avoid this exception.

* **System.Security.SecurityException: Request for the permission of type 'System.Security.Permissions.FileIOPermission**

*RadTreeList's PDF* export engine doesn't work in **medium trust**.

* **Telerik.Web.Apoc.ApocException: internal-destination or external-destination must be specified in basic-link**

*PDF* engine is trying to resolve *empty anchor**URL*. Please note, that the anchor links are supported only when valid *URL* is supplied. Example:

````ASPNET
<a href="#">text</a>
<%--ERROR--%>

<a href="https://www.w3.org/TR/REC-html40/struct/links.html#h-12.2">W3.ORG</a>
<%--VALID--%>
````

## See Also

 * [Command Item for built in export buttons]({%slug treelist/items/command-item%})

