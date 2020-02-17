---
title: RadPdfViewer Object
page_title: RadPdfViewer Object | RadPdfViewer for ASP.NET AJAX Documentation
description: RadPdfViewer Object
slug: pdfviewer/client-side-programming/overview
tags: pdfviewer,object
published: True
position: 0
---

# RadPdfViewer Object

This article lists the client-side API of **RadPdfViewer** and how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var pdfViewerObject = $find("<%=RadPdfViewer1.ClientID %>");
````

RadPdfViewer is a server-side wrapper over the Kendo UI PdfViewer Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/PdfViewer#methods). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

    **JavaScript**
    
        var pdfViewerObject  = $find("<%=RadPdfViewer1.ClientID %>"); //the standard script control object
        var kendoPdfViewerObject = pdfViewerObject.get_kendoWidget(); //the Kendo widget

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

    **JavaScript**
    
        var kendoPdfViewer = $telerik.$("#<%=RadPdfViewer1.ClientID %>").data("kendoPDFViewer"); //the jQuery selector must get the RadPdfViewer1 wrapper span element

In addition to using the Kendo method directly, you can also use their wrappers that follow the MS AJAX convention through the RadPdfViewer client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadPdfViewer object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **activatePage** | Number | none |Loads and scrolls to the page by number.|
| **addToolBarItem** | Object | none |Add new command to the nested in RadPdfViewer Toolbar widget. Accepts object with [valid command configuration options](https://docs.telerik.com/kendo-ui/controls/navigation/toolbar/overview#functionality-and-features).|
| **dispose** |none|none|Disposes the PdfViewer client-side object (calls its underlying Kendo widget's [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **execute** | Object | none |Executes a command of the PDFViewer (calls its underlying Kendo widget's [execute](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/methods/execute) method). The available commands are: *OpenCommand*, *PageChangeCommand*, *DownloadCommand*, *EnableSelectionCommand*о, *EnablePanCommand*, *ExportCommand*, *PrintCommand*, *OpenSearchCommand*, *ZoomCommand*|
| **fromFile** | String | none |Displays the file which path is passed as a parameter in the PDFViewer.|
| **get_activePage** |none|Number|Returns the selected page number in the viewer.|
| **get_defaultPageSize** |none|Object|Returns the default page size.|
| **get_document** |none|Object|Returns a reference to the loaded document.|
| **get_height** |none|Number|Returns the height of the PDFViewer.|
| **get_kendoWidget** |none|object|Returns a reference to the underlying Kendo PdfViewer widget.|
| **get_pageContainer** |none|Object|Returns a reference to the current page container.|
| **get_pages** |none|Array|Returns a list of the pages in the loaded document.|
| **get_processor** |none|Object|Returns a reference to the current PDF proccessor instance.|
| **get_toolBar** |none|Object|Returns the a reference to the nested in the PdfViewer [Kendo UI toolbar instance](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/configuration/toolbar).|
| **get_visible** |none|Boolean|Returns a Boolean value indicating whether the PdfViewer is visible.|
| **get_width** |none|Number|Returns the width of the PDFViewer.|
| **get_zoomMax** |none|Number|Returns the maximum zoom that could be applied to the pages.|
| **get_zoomMin** |none|Number|Returns the minimum zoom that could be applied to the pages.|
| **hide** |none|none|Hides the PdfViewer element.|
| **hideToolBar** |none|none|Hides the element of the nested in the PdfViewer toolbar.|
| **loadPage** |Number|none|Renders page canvas by number.|
| **repaint** |Boolean|none|Repaints the control. The "force" argument determines whether the resizing routine should be executed even if the respective widget's outer dimensions have not changed.|
| **set_activePage** |Number|none| Loads and scrolls to the page by number.|
| **set_height** |Number|none| Specifies the height of the PDFViewer.|
| **set_visible** |Boolean|none|Shows/Hides the PdfViewer element.|
| **set_width** |Number|none| Specifies the width of the PDFViewer.|
| **set_zoomMax** |Number|none| Specifies the maximum zoom that could be applied to the pages.|
| **set_zoomMin** |Number|none| Specifies the minimum zoom that could be applied to the pages.|
| **show** |none|none|Shows the PdfViewer element.|
| **showToolBar** |none|none|Shows the element of the nested in the PdfViewer toolbar.|

# See Also

 * [Live Demo - RadPdfViewer Client-side API](https://demos.telerik.com/aspnet-ajax/PdfViewer/clientsideapi/defaultcs.aspx)

 * [RadPdfViewer Client-side Events]({%slug pdfviewer/client-side-programming/events%})

 


