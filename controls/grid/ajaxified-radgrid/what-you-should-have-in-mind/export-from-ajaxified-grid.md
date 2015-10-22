---
title: Export from Ajaxified Grid
page_title: Export from Ajaxified Grid | RadGrid for ASP.NET AJAX Documentation
description: Export from Ajaxified Grid
slug: grid/ajaxified-radgrid/what-you-should-have-in-mind/export-from-ajaxified-grid
tags: export,from,ajaxified,grid
published: True
position: 0
---

# Export from Ajaxified Grid



## 

Generally speaking, the exporting feature of the control work with regular postbacks only. The reason is the grid prepares additional information when performing export operation (available on postback). When the action is performed through asynchronous requests, this information can not be passed through the *XMLHttpRequest* object - that is why the communication between the browser and the server fails.To bypass the limitation you can wire the *OnRequestStart* event of the ajax panel or ajax manager, determine whether the target control is ajaxified and explicitly disable its ajax mode to export with regular postback. The demo from [this code library project](http://www.telerik.com/support/code-library/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled) presents how to export the grid content to *Excel*/*Word* when:

* *RadGrid* resides inside *RadAjaxPanel*

* *RadGrid* is ajaxified through *RadAjaxManager*

````JavaScript
function onRequestStart(sender, args) {
  if (args.get_eventTarget().indexOf("btnExport") >= 0)
    args.set_enableAjax(false);
}
````



When you are exporting from a built-in export button in a CommandItem, you need to replace "*btnExport*" from the above code snippet with the server ID of the export button. The IDs of the four built-in export buttons are:



* **ExportToExcelButton**

* **ExportToWordButton**

* **ExportToPdfButton**

* **ExportToCsvButton**



In case you export from a *Button* that is nested in **MS AJAX UpdatePanel**, you should set this control as *PostBackTrigger*:

````ASP.NET
<triggers>         
    <asp:PostBackTrigger ControlID="btnExport" />
</triggers>
````



It is also possible to register the control as a trigger for *postback* in code-behind:

````C#
ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport);          
````



````VB
ScriptManager.GetCurrent(Page).RegisterPostBackControl(btnExport)          
````



Refer to the following link for more information:[Exclude controls from ajaxifying](http://www.telerik.com/help/aspnet-ajax/ajxexclude.html)
