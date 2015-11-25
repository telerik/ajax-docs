---
title: Telerik.Web.UI.Diagram.Pdf
page_title: Telerik.Web.UI.Diagram.Pdf
description: Telerik.Web.UI.Diagram.Pdf
---

# Telerik.Web.UI.Diagram.Pdf

Configures the export settings for the saveAsPDF method.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Diagram.Pdf : IDefaultCheck

## Properties

###  Author `String`

The author of the PDF document.

###  Creator `String`

The creator of the PDF document.

###  Date `Nullable`1`

The date when the PDF document is created. Defaults to new Date().

###  FileName `String`

Specifies the file name of the exported PDF file.

###  ForceProxy `Boolean`

If set to true, the content will be forwarded to proxyURL even if the browser supports saving files locally.

###  Keywords `String`

Specifies the keywords of the exported PDF file.

###  Landscape `Boolean`

Set to true to reverse the paper dimensions if needed such that width is the larger edge.

###  MarginSettings `Margin`

Specifies the margins of the page (numbers or strings with units). Supported units are "mm", "cm", "in" and "pt" (default).

###  PaperSize `String`

Specifies the paper size of the PDF document. The default "auto" means paper size is determined by content.Supported values:

###  ProxyURL `String`

The URL of the server side proxy which will stream the file to the end user.A proxy will be used when the browser isn't capable of saving files locally. Such browsers are IE version 9 and lower and Safari.The developer is responsible for implementing the server-side proxy.The proxy will receive a POST request with the following parameters in the request body:The proxy should return the decoded file with set "Content-Disposition" header.

###  Subject `String`

Sets the subject of the PDF file.

###  Title `String`

Sets the title of the PDF file.

