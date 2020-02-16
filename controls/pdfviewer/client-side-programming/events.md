---
title: Events Overview
page_title: Overview | RadPdfViewer for ASP.NET AJAX Documentation
description: Overview
slug: pdfviewer/client-side-programming/events
tags: overview,events
published: True
position: 1
---


# Events Overview

This article lists the clients-side events of the **RadPdfViewer** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadPdfViewer]({%slug pdfviewer/client-side-programming/overview%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

RadPdfViewer is a wrapper over the Kendo UI PDFViewer widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are avaliable through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel an event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadPdfViewer

* **OnInitialize**—Fired just before the RadPdfViewer client-side object is initialized.

* **OnLoad**—Fired when RadPdfViewer is initialized.

* [OnRender](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/events/render)—Fired when a page is rendered.

* [OnOpen](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/events/open)—Fired when a PDF is opened in the viewer.

* [OnError](https://docs.telerik.com/kendo-ui/api/javascript/ui/pdfviewer/events/error)—Fired when an error is encountered. By default, a dialog is shown with error message (unless the event is prevented).

## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````JavaScript
<script type="text/javascript">
    var pdfViewer, kendoPdfViewer;
    function OnLoad(sender, args) {
        pdfViewer = sender; //the RadPdfViewer
        kendoPdfViewer = sender.get_kendoWidget(); //the underlying Kendo PDFViewer
    }
</script>
<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="450px" Width="1000px">
    <ClientEvents OnLoad="OnLoad" />
    <PdfjsProcessingSettings File="Document1.pdf">
    </PdfjsProcessingSettings>
</telerik:RadPdfViewer>
````

>caption Example 2: Get the number of the rendered pages (they are loaded on demand)

````JavaScript
<script type="text/javascript">
    function OnRender(sender, args) {
        console.log(args.get_page().pageNumber);
    }
</script>
<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="450px" Width="1000px">
    <ClientEvents OnRender="OnRender" />
    <PdfjsProcessingSettings File="Document1.pdf">
    </PdfjsProcessingSettings>
</telerik:RadPdfViewer>
````

>caption Example 3: Cancel an event

````JavaScript
<script type="text/javascript">
    function OnError(sender, args) {
        var shouldCancel = true;//use actual business logic
        args.set_cancel(shouldCancel);//cancel the event
        //in this example, the dialog with the thrown error will not be shown
    }
</script>
<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="450px" Width="1000px">
    <ClientEvents OnError="OnError" />
    <PdfjsProcessingSettings File="Document1.pdf">
    </PdfjsProcessingSettings>
</telerik:RadPdfViewer>
````


## See Also

* [Live Demo - Client-side Events](https://demos.telerik.com/aspnet-ajax/pdfviewer/client-side-events/defaultcs.aspx)

* [RadPdfViewer Client-side Object]({%slug pdfviewer/client-side-programming/overview%})


