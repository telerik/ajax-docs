---
title: Word Format (HTML-Based)
page_title: Word Format (HTML-Based) | UI for ASP.NET AJAX Documentation
description: Word Format (HTML-Based)
slug: grid/functionality/exporting/export-formats/word-and-excel-export/word-format-(html-based)
tags: word,format,(html-based)
published: True
position: 2
---

# Word Format (HTML-Based)



## Styles / Appearance

__Microsoft Word 2003__ displays grid lines by default. These lines just shows where the table/cell/row borders are. If you want to remove them, you should choose __Table____>>____Show Gridlines__ (uncheck this option).

## XML Options

__XmlOptions__ property allows you to set different options of the exported file.	The XML element contains one or more sub-elements. These include __DocumentProperties__ which is valid for Word and Excel,	__WordDocument__ which can be used when exporting to Word, and finally __ExcelWorkbook__ which applies to Microsoft Excel.

A list of the supported WordDocument values is represented below.


| WordDocument | Represents |
| ------ | ------ |
|<w:View> </w:View>|This element may contain one of the following values:

*  __MasterPages__ 

*  __Normal__ 

*  __Print__ 

*  __Web__ (default)|
|<w:Zoom> </w:Zoom>|This element may contain one of the following values:


| Value | Description |
| ------ | ------ |
|A numerical value between 1 and 500|This value represents the zoom percentage. The default value is 100.|
| __BestFit__ |Zoom to page width. Only available in print layout view.|
| __FullPage__ |Zoom to whole page. Only available in print layout view.|
| __TextFit__ |Zoom to text width. Only available in print layout view.||
|<w:HideSpellingErrors/>|If this property is specified, the document's spelling errors are hidden.|
|<w:HideGrammaticalErrors/>|If this property is specified, the document's grammatical errors are hidden.|

Example:

>tabbedCode

````C#
	    protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
	    {
	        e.XmlOptions = @"<xml>
	                            <w:WordDocument>
	                                <w:HideSpellingErrors/>
	                                <w:View>Print</w:View>
	                            </w:WordDocument>
	                         </xml>";
	    }
````
````VB.NET
	
	    Protected Sub RadGrid1_HTMLExporting(sender As Object, e As GridHTMLExportingEventArgs)
	        e.XmlOptions = "<xml><w:WordDocument><w:HideSpellingErrors/><w:View>Print</w:View></w:WordDocument></xml>"
	    End Sub
	
````
>end
