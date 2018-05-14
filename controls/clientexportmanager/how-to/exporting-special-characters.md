---
title: Exporting Special Characters
page_title: Exporting Special Characters | RadClientExportManager for ASP.NET AJAX Documentation
description: Exporting Special Characters
slug: clientexportmanager/how-to/exporting-special-characters
tags: custom,font,ASCII,special,characters,pdf
published: True
position: 3
---

# Exporting Special Characters


This article demonstrates how you can use custom fonts to export non-ASCII characters to PDF. It contains the following sections:

* [Description of the problem](#description-of-the-problem)
* [Solution](#solution)
* [Example](#example)
* [Tips on defining fonts](#tips-on-defining-fonts)

## Description of the problem

If you do not specify a font explicitly, any non-ASCII characters the exported DOM element contains will not be exported to the PDF file. This includes some accent characters, for example:

**Example:** Consider the following `<div>` element, which contains Swedish and Japanese characters (Kanji):


````ASP.NET
<div id="foo">Västergötland(West Gothia) 日本(Japan)</div>
````


````CSS
#foo {
    background-color: grey;
    color: white;
}
````

This is how it looks like in the browser:

![Special Characters](images/clientexportmanager-special-characters.png)

Exporting this `<div>` to PDF would result in the following:

![Special Characters Missing](images/clientexportmanager-special-characters-missing.png)

The special characters are missing in the exported file, because the standard fonts used in exporting to PDF do not support non-ASCII characters. 

## Solution

In order to export special characters such as some accent and diacritical marks, you have to use a custom font that supports them:
* The custom font file has to be included in the project
* The font has to be added to the RadClientExportManager's **PdfSettings.Fonts** collection
* The font must be set to the element you want to export (in this example the `<div>` "foo").

## Example

Here is a process of how to define a font that contains the desired symbols for export. It assumes you have the "Arial Unicode MS" font. You can replace it with other suitable fonts such as "DejaVu Sans".

1. Include the `Arial Unicode MS` font in your project's `Fonts` folder. It is an extended version of the Arial font and supports Unicode characters.

1. Add the font to the **PdfSettings.Fonts** collection. 

    **C#**

        protected void Page_Load(object sender, EventArgs e)
        {
            RadClientExportManager1.PdfSettings.Fonts.Add("Arial Unicode MS", "Fonts/ArialUnicodeMS.ttf");
        }

    **VB**

    Protected Sub Page_Load(sender As Object, e As EventArgs)
        RadClientExportManager1.PdfSettings.Fonts.Add("Arial Unicode MS", "Fonts/ArialUnicodeMS.ttf")
    End Sub

1. Apply the font to the `<div>` "foo":

    **CSS**

        #foo {
            font-family: 'Arial Unicode MS';
            background-color: grey;
            color: white;
        }

1. Export the `<div>`:

    **ASP.NET**

        <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
            <pdfsettings filename="Myfile.pdf" />
        </telerik:RadClientExportManager>
        <input type="button" onclick="exportElement()" value="export" />

        <script type="text/javascript">
            function exportElement() {
                var exp = $find("<%= RadClientExportManager1.ClientID %>");
                exp.exportPDF($telerik.$("#foo"));
            }
        </script>


1. **Result**: The special characters are correctly exported and visible in the PDF file:

    ![Special Characters Exported](images/clientexportmanager-special-characters-exported.png)

## Tips on defining fonts

Defining a `@font-face` element in the CSS of the page is equivalent to populating the `Fonts` collection. For example:

````CSS
@font-face {
   font-family: 'Arial Unicode MS';
   src: url('Fonts/Arial Unicode MS.ttf');
}
````

You can define the special font for the global PDF export through specific CSS classes that are added to it. This means you can have it rendered on the page according to the page/browser styleshets and only change the font for export without any additional code in your markup.
 
````CSS
 .k-pdf-export, .k-pdf-export * {
    font-family: 'Arial Unicode MS';
 }
````



# See Also

 * [ClientExportManager - Export Special Characters](https://demos.telerik.com/aspnet-ajax/client-export-manager/applicationscenarios/export-special-characters/defaultcs.aspx) online demo
 
 * [ClientExportManager - Change the Exported Content before Export]({%slug clientexportmanager/how-to/change-the-exported-content-before-export%}) how-to article

