---
title: PDF Export
page_title: PDF Export | RadGrid for ASP.NET AJAX Documentation
description: PDF Export
slug: grid/functionality/exporting/export-formats/pdf-export
tags: pdf,export
published: True
position: 1
---

# PDF Export



This help article discuss different techniques which allow you to modify **RadGrid** when exporting to **PDF**.Following is a list with the content of this article.

* [PDF specific settings and events](#onpdfexporting-event)

* [Appearance](#appearance)

* [Hiding Columns](#hiding-columns)

* [Hiding items](#hiding-items)

* [Border support](#border-support)

* [Fonts / Unicode support](#fonts--unicode-support)

* [Exporting HTML tables](#exporting-html-tables)

* [Exporting images / using third-party image-processing tools](#exporting-images--using-third-party-image-processing-tools)

* [Resizing columns](#resizing-columns)

* [Text aligning](#text-aligning)

* [Page break](#page-break)

* [Header and Footer Support](#header-and-footer-support)

* [PDF Content Filters](#pdf-content-filters)

* [Content Encryption](#content-encryption)

* [PDF Export Q & A](#pdf-export-q--a)

* [Unsupported features / scenarios](#unsupported-features--scenarios)

* [Exceptions](#exceptions)

>note Note that *RadGrid* will render as an *XHTML* table and will convert that table to a *PDF* document. That requires that the rendered grid output is valid *XHTML*. If it is not, you will receive an exception that the export cannot be completed.
>The most common cause for bad *XHTML* are symbols like **<** , **>** , **&** that need to be replaced by the correct *XHTML* entity: **& l t ;** , **& g t ;** , **& a m p ;** respectively. Another frequent problem are unclosed tags.
>


## PDF specific settings and events


| Name | Description |
| ------ | ------ |
|AllowAdd / AllowCopy / AllowModify / AllowPrinting|Boolean properties that determines whether the corresponding action is allowed for the generated *PDF* file|
|Author / Creator / Keywords / Producer / Subject / Title| *PDF* document specific information|
|DefaultFontFamily|Specifies the default font|
|PageTitle|Sets the page title (appears on the top of the page)|
|PaperSize / PageWidth / PageHeight|These properties are related to the size of the generated page. You can either use the *PaperSize* to supply a predefined value ( *A4* , *Letter* , *JIS B5* , etc) or define the size manually using *PageWidth* / *PageHeight* .|
|PageBottomMargin / PageTopMargin / PageLeftMargin / PageRightMargin / PageFooterMargin / PageHeaderMargin|All the page margins could be controlled via these settings.|
|UserPassword|Used to set a password and enable password protection for the exported file (introduced in UI for ASP.NET AJAX Q1 2010 SP2)|

````ASP.NET
<ExportSettings>
  <Pdf PageTitle="My Page" PaperSize="A4" />
</ExportSettings>
````



>note The default page orientation for the *PDF* file is *Portrait.* You can easily switch to *Landscape* by modifying the *PageWidth* / *PageHeight* properties manually.
>
*  **A4 Portrait** : \<Pdf PageWidth="210mm" PageHeight="297mm" /\>
*  **A4 Landscape** : \<Pdf PageWidth="297mm" PageHeight="210mm" /\>
>


## OnPdfExporting event

The reason for having separate **OnPdfExporting** event is that by the time the **OnGridExporting** event is raised, the *Pdf* output is already generated and ready for adding to the response. Some cases where the **OnPdfExporting** event is helpful when you want to modify the output - as an alternative to the **OnGridExporting** event.

Although you can't modify the contents on **OnGridExporting**, you can use this event to achieve some other tasks. For example:

* to save the file on the server/send it via mail if needed.

* to show the *PDF* file in *RadWindow* - there is a [blog post](https://www.telerik.com/blogs/how-to-export-grid-to-pdf-file-and-show-the-result-using-the-window) that contains a [runnable project](https://demos.telerik.com/RadGridToPDFFile/RadGridToPDFFile.zip) that demonstrate this scenario

## Appearance

*RadGrid* does not export any external styles. That means that your skins will not appear in the generated file. Still, the inline styles are preserved and should be used instead. Different approaches could be used depending where *RadGrid* will rebind before export (when *IgnorePaging* is set to *true* or when you rebind manually).

>note Since UI for ASP.NET AJAX Q3 2015 we have implement a new property named **IsExporting** which can be used instead of the old approach with a boolean flag. The property is accessible only from the server.
>

````C#
bool isExport = false;

protected void Button1_Click(object sender, EventArgs e)
{
    isExport = true;
    RadGrid1.MasterTableView.ExportToPdf();
}

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem && isExport)
        e.Item.Style["background-color"] = "#888888";
}
````
````VB	
Private isExport As Boolean = False

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    isExport = True
    RadGrid1.MasterTableView.ExportToPdf()
End Sub

Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem AndAlso isExport Then
        e.Item.Style("background-color") = "#888888"
    End If
End Sub
````


In the cases, where *Rebind* won't be invoked you can apply the styles directly:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    foreach (GridDataItem item in RadGrid1.Items)
        item.Style["background-color"] = "#888888";
    RadGrid1.MasterTableView.ExportToPdf();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    For Each item As GridDataItem In RadGrid1.Items
        item.Style("background-color") = "#888888"
    Next
    RadGrid1.MasterTableView.ExportToPdf()
End Sub	
````


>note To center the text in the **GridHeaderItem**, you should set the appropriate style to each cell (*TH* element) instead of the whole row.
>


## Hiding Columns

You can use the **HideStructureColumns** property to hide *GridRowIndicatorColumn*, *GridExpandColumn* and *GridGroupSplitterColumn*. For the other columns types, you can use the following approach:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.GetColumn("C2").Visible = false;
    RadGrid1.MasterTableView.ExportToPdf();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click()
    RadGrid1.MasterTableView.GetColumn("C2").Visible = False
    RadGrid1.MasterTableView.ExportToPdf()
End Sub
````


>note From Q2 2013 we introduced a new property named **Exportable**. This property allows you to choose whether a certain column should be included in the exported file or not. By setting this property to **false** the related column will be excluded from the exported file. Its default value is true.
>


## Hiding items

There are two common ways to hide an item.

* **Directly** - in the button handler when exporting from a button or on **ItemCommand** when exporting from the built-in buttons

````C#
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToPdfCommandName)
        RadGrid1.MasterTableView.Items[2].Visible = false;
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = RadGrid.ExportToPdfCommandName Then
        RadGrid1.MasterTableView.Items(2).Visible = False
    End If
End Sub
````




````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.MasterTableView.Items[2].Visible = false;
    RadGrid1.MasterTableView.ExportToPdf();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
    RadGrid1.MasterTableView.Items(2).Visible = False
    RadGrid1.MasterTableView.ExportToPdf()
End Sub
````


* **On ItemCreated / ItemDataBound** - this approach should be used when **IgnorePaging="true"** or when you call RadGrid.Rebind before exporting.



````C#
bool isPdfExport = false;

protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.ExportToPdfCommandName)
        isPdfExport = true;
}

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (isPdfExport && e.Item.ItemIndex == 2)
        e.Item.Visible = false;
}
````

````VB
Private isPdfExport As Boolean = False

Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = RadGrid.ExportToPdfCommandName Then
        isPdfExport = True
    End If
End Sub

Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If isPdfExport AndAlso e.Item.ItemIndex = 2 Then
        e.Item.Visible = False
    End If
End Sub
````


## Border support

By setting **BorderType, BorderStyle and BorderColor** properties you could customize the look of the grid's border into the exported file. They could be set to ExportSettings-Pdf.

**BorderType** determines the border type that will be applied to the exported PDF file. The supported values are: *Separate, NoBorder, OuterBorders, AllBorders*. The selected border type will be applied for both flat and hierarchical RadGrids. Note that the *Separate* value is left to avoid breaking changes and also because of the fact that this functionality has a minor performance impact. When the **BorderType** is set to *Separate*, the **BorderColor**, and the **BorderStyle** properties will have no effect.

**BorderStyle** determines the style of the borders that will be applied to the exported PDF file.The supported values: *Medium, Thick, Thin*. Its default value is *Medium*.

And the last property **BorderColor** determines the color of the borders that will be applied to the exported PDF file. It supports all color from **Drawing.Color** collection. *Black* is the default color.

Additionally when *Separate* border type is used the following statements are applicable.

You can disable the *RadGrid* borders by settings the *BorderStyle* or *GridLines* properties - either in code-behind or in the markup.



````C#
RadGrid1.BorderStyle = BorderStyle.None;
````
````VB
RadGrid1.BorderStyle = BorderStyle.None
````


If you apply the same approach to the *MasterTableView* (or other *GridTableView*) you will remove the outer table border only - when combined with the above mentioned approach you can hide all borders in *RadGrid*.



````C#
RadGrid1.MasterTableView.BorderStyle = BorderStyle.None;
````
````VB
RadGrid1.MasterTableView.BorderStyle = BorderStyle.None
````


## Fonts / Unicode support

*RadGrid*'s *PDF* exporting engine supports all languages that use **left-to-right** orientation when the appropriate *Unicode* font is set. Live demo that exports *Japanese* characters is [available online](https://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/pdfexport/defaultcs.aspx). The most common international font is [Arial Unicode MS](http://support.microsoft.com/kb/287247) because it covers all *Unicode* characters. Of course, you can use other language-specific fonts as [Batang](http://www.ascenderfonts.com/font/batang-korean.aspx) for *Korean*, [SimSun](http://www.ascenderfonts.com/font/simsun-simplified-chinese.aspx) for *Chinese*, [MS Mincho](http://www.ascenderfonts.com/font/ms-mincho-japanese.aspx) for *Japanese* and etc.

The default font of the generated pages is specified by the **DefaultFontFamily** property:

````ASP.NET
<ExportSettings>
    <Pdf DefaultFontFamily="Arial Unicode MS" />
</ExportSettings>
````



Also, you can dynamically set fonts to the row elements in the same manner used to set background-colors:



````C#
item["OriginalName"].Style["font-family"] = "Arial Unicode MS";
````
````VB
item("OriginalName").Style("font-family") = "Arial Unicode MS"
````


## Exporting HTML tables

There are a few rules that should be followed when exporting *HTML* tables to *PDF*:

* The table should define `<colgroup>` and `<col>` elements

* The number of **col** elements should be equal to the number of the columns in the table body

* Width in **pixels** (or another *absolute* units) should be set to the table

````ASP.NET
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



## Exporting images / using third-party image-processing tools

Our *PDF* engine can export all images nevertheless whether they use an **absolute** or **relative** path. The image can be stored on the local server or remotely. When using third-party image-processing tools like [ImageResizer.dll](http://nathanaeljones.com/products/asp-net-image-resizer/) or similar modules that use *HttpHandlers* and accept parameters via query strings, you should provide an **absolute** path to the resized image, otherwise *RadGrid* won't be able to find the image and will throw an error. Transparency is not supported.

You can use the following approach if you need to set a background image to your *GridTableViews*:

<MasterTableView style="background-image: url(yourimage)" />

>note In order to export images that are spanned over multiple columns you should invoke **PrepareItemStyle** on the corresponding grid item. Our[PDF export](https://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/pdfexport/defaultcs.aspx)demo uses the depicted approach.
>


## Resizing columns

There are two ways to resize the columns - declarative (in the markup) and programmatic (in code-behind). The first one involves the *HeaderStyle* property:

````ASP.NET
<telerik:GridBoundColumn DataField="ID">
  <HeaderStyle width="20px" />
</telerik:GridBoundColumn>
````

It is also possible to set the widths dynamically - *Page_PreRender* event is suitable for this functionality:

````C#
protected void Page_PreRender(object o, EventArgs e)
{
    GridColumn column = RadGrid1.MasterTableView.GetColumn("MyColumnName");
    column.HeaderStyle.Width = Unit.Pixel(300);
}
````
````VB
Protected Sub Page_PreRender(ByVal o As Object, ByVal e As EventArgs)
    Dim column As GridColumn = RadGrid1.MasterTableView.GetColumn("MyColumnName")
    column.HeaderStyle.Width = Unit.Pixel(300)
End Sub
````

>note If you want the changes to be applied to the exported file only, you can use a boolean flag to distinguish whether the event is fired as a result of a button click (or manual invoking of the export method).
>

## Text aligning

Text alignment could be set either to the row element or to the cell. The only exception is when the cell is part of the *GridHeaderItem* - the elements are not *TD*, but *TH*. In this case you should set the style (*text-align*) to each cell in the given row.

## Page break

In *RadControls for ASP.NET AJAX Q3 2009 Beta* we introduced the possibility to use *page-breaks*. They can be added in many ways - declaratively, in code-behind or directly in the raw html.

The page-breaking tag is **<?hard-pagebreak?>**

````ASP.NET
<columns>    
  <telerik:GridTemplateColumn>        
    <ItemTemplate>
       FIRST COLUMN        
    </ItemTemplate>    
  </telerik:GridTemplateColumn>    
  <telerik:GridTemplateColumn>        
    <ItemTemplate>
       LAST_COLUMN<?hard-pagebreak?>        
    </ItemTemplate>    
  </telerik:GridTemplateColumn>
</columns>
````

## Header and Footer Support

From Q2 2013 PDF export supports header and footer. PageHeader element holds the header cells while the PageFooter elements contains the footer cells and they are applicable to ExportSettings-Pdf tab. The supported child properties for the both elements are LeftCell, MiddleCell, RightCell which contain the cell text and text alignment properties. Apart from the plain text,the cell text property can contain HTML code, and a special tag **<?page-number?>** which can be used to display the current page's number.

>note Image contents of the header/footer cells might be shrunk if they go out of the header/footer area. Adjusting the pagemargins can give the header/footer more space for the larger images.
>

````ASP.NET
<ExportSettings>
    <Pdf>
        <PageHeader>
            <LeftCell Text="Company Name" TextAlign="Left" />
            <MiddleCell Text="<img src="~/logo.png" alt="company logo" />" TextAlign="Right" />
        </PageHeader>
        <PageFooter>
            <MiddleCell Text="<?page-number?>" />
        </PageFooter>
    </Pdf>
</ExportSettings>
````

## PDF Content Filters

The standard PDF filters can be separated in two categories. ASCII filters and Compression/Decompression filters.The first ones enable the stream contents to be represented in a printer-friendly way and enable better portability for environments which have restrictions regarding the special characters, maximum line length, and the like. Compression filters are helpful when the file size is important. The compression ratio depends greatly on the file contents. It is important to note that the filters are optional and can be turned off. ASCII filters serve no purpose if the file is encrypted.

From SP1 2013 Q2 we introduce a new property named **ContentFilter** which gives you the ability to choose a filter. The supported values are as follow.

* **NoFilter** - no filters will be used (default)

* **ASCII85** - ASCII base-85 representation

* **AsciiHex** - hexadecimal ASCII representation

* **Flate** - deflate compression method; binary representation

````ASP.NET
<ExportSettings>
    <Pdf ContentFilter="Ascii85"></Pdf>
</ExportSettings>
````

## Content Encryption

The PDF file generated by RadGrid has the content encryption enabled by default. This functionality is normally used for obfuscating the content especially when there is a UserPassword specified in the PDF settings. When the encryption is disabled, the password will not have an effect. It is important to note that if FIPS validation is enforced the encryption is automatically disabled and can't be used. By default the content encryption is disabled.

````ASP.NET
<ExportSettings>
    <Pdf DisableContentEncryption="True"> </Pdf>
</ExportSettings>
````

## Forced Text Wrapping

Until now, the overflowing text was carried over the next lines only when there are whitespace characters inside. With the newly introduced **ForceTextWrap** property it is now possible to force the text wrapping even when there are no white spaces or separator characters. It is important to note that the forced mode will make the file size larger.

````ASP.NET
<ExportSettings>
    <Pdf ForceTextWrap="True"> </Pdf>
</ExportSettings>
````

## PDF Export Q & A

Below, you can find the answers of some commonly asked questions

Q: How to insert newline character?

A: You can use *\<br/\>* tag to add a new line. Another solution is to use paragraph *\<p\>\<p/\>*.

Q: How to fit XX columns on my page?

A: Depending on your scenario, you can choose one or more suggestions from the following list:



* switch the orientation to landscape

* reduce the font size

* use narrower fonts

* decrease the page margins

* increase the page size

Q: I want to export multiple *RadGrids* / I want to export nested *RadGrids*

A: Have a look at the following code-library project: [Export multiple RadGrids]( https://www.telerik.com/community/code-library/aspnet-ajax/grid/export-multiple-radgrids-in-single-pdf-excel-file.aspx )

Q: The *PDF* file appears blank on my *Mac*

A: Please use *Adobe Reader* instead of the built-in *Preview*. This limitation does not apply to versions later than SP1 2013 Q2.

Q: My *PDF* file is blank or I see the page title only

A: Disable the *Scrolling/StaticHeaders* functionality - don't forget to Rebind() the RadGrid control afterwards, otherwise the changes will not take effect.

Q: I have a *RadChart* control nested in my *RadGrid*. How to export it?

A: Although this is not supported out-of-the-box (since the *RadChart* image is served by a *HttpHandler)* you could use the following trick: Insert a regular (invisible) *ASP.NET Image* next to your *RadChart* control and then call the *Save* method on *ItemDataBound* event. Set this image to the *ImageUrl* property of the aforementioned image control. Of course, you will have to show (*Visible="true"*) the image before export.

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

The default pager's *RadComboBox* uses special *CSS* approach that is unsupported by the *PDF* parser

* **Telerik.Web.Apoc.ApocException: fo:block must be child of fo:basic-link, fo:block, fo:block-container, fo:float, fo:flow, fo:footnote-body, fo:inline, fo:inline-container, fo:list-item-body, fo:list-item-label, fo:marker, fo:multi-case, fo:static-content, fo:table-caption, fo:table-cell or fo:wrapper not fo:table-header**

This exception is probably result of a **hard-pagebreak**, inserted in a wrong place - for example directly after the starting tag of a table

* **System.IndexOutOfRangeException: Index was outside the bounds of the array.at Telerik.Web.Apoc.Render.Pdf.Fonts.Type2CIDSubsetFont.GetWidth(Int32 charIndex)**

You are either using *RTL* fonts or mixing *Korean* characters with another language in the same element (rare scenario)

* **Unable to cast object of type 'Telerik.Web.Apoc.Layout.BlockArea' to type 'Telerik.Web.Apoc.Layout.AreaContainer'**

Most probably you have *DIV* element with specified dimensions or absolute positioning. Remove the relevant width/height/position attributes to avoid this exception.

* **System.Security.SecurityException: Request for the permission of type 'System.Security.Permissions.FileIOPermission**

*RadGrid's PDF* export engine doesn't work in **medium trust**.

* **Telerik.Web.Apoc.ApocException: internal-destination or external-destination must be specified in basic-link**

*PDF* engine is trying to resolve *empty anchor* *URL*. Please note, that the anchor links are supported only when valid *URL* is supplied. Example:

* **System.IndexOutOfRangeException: Index was outside the bounds of the array.	at Telerik.Web.Apoc.Fo.Flow.TableRow.CellArray.GetNextFreeCell(Int32 colNum)**

The reason for this exception is that the number of col elements is the colgroup is not equal to the maximum number of cells per row. Put simply, if you have a table with two columns, you should put two col elements.

````ASP.NET
<a href="#">text</a>
<%--ERROR--%>

<a href="https://www.w3.org/TR/REC-html40/struct/links.html#h-12.2">W3.ORG</a>
<%--VALID--%>
````


