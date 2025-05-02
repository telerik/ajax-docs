---
title: Use Telerik Report Viewer in ASP.NET AJAX Applications
description: "Guide to embed Telerik Report Viewer in AJAX enabled ASP.NET Web Forms applications."
type: how-to
page_title: Use Telerik Report Viewer in ASP.NET AJAX Applications
slug: integration-use-telerik-report-viewer-in-aspnet-ajax-applications
tags: telerik, report, viewer, aspnet, ajax, web forms
ticketid: 1683007
res_type: kb
---

## Description

Telerik Report Viewer disappear after a Post Back while AJAX is enabled in the ASP.NET AJAX Web Forms application.

Unlike the Telerik UI for ASP.NET AJAX components, the Telerik Reporting for ASP.NET Web Forms does not support AJAX (`asp:UpdatePanel`, `telerik:RadAjaxManager`, `telerik:RadAjaxPanel`) out of the box. 

The Report Viewer's initializer scripts are called inside `window.onload` event and work when the document first loads, however, an AJAX Post Back does not trigger this event, thus the Telerik Report Viewer application does not get initialized.

The functions that will only trigger on the initial load of the page but not on subsequent AJAX requests:

```javascript
window.onload = function () { }
jQuery(function () { });
$(document).ready(function () { });
```


## Solution

The solution would be to call the initializer scripts inside the [Sys.Application.load event](https://learn.microsoft.com/en-us/previous-versions/bb383829(v=vs.100)?redirectedfrom=MSDN) that will trigger upon AJAX requests.

To do that, attach the `PreRender` event to the Report Viewer which will trigger on every request (see [ASP.NET Page Life Cycle](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100))).

````ASP.NET
<telerik:ReportViewer ID="ReportViewer1" runat="server" OnPreRender="ReportViewer1_PreRender">
</telerik:ReportViewer>
````

In the event handler, you can check if the request is an AJAX PostBack (IsInAsyncPostBack), then register a Startup Script that will initialize the Report Viewer after the AJAX Post Back is complete.

>The `InitializeReportViewer()` method parses the Report Viewer's HTML DOM to find the initializer scripts generated for it then call those scripts inside the `Sys.Application.load` event.

````C#
protected void ReportViewer1_PreRender(object sender, EventArgs e)
{
    // Access the Application's ScriptManager
    ScriptManager sm = RadScriptManager.GetCurrent(Page);

    // Check if the request is an AJAX Post Back
    if (sm.IsInAsyncPostBack)
    {
        // Call a custom method
        InitializeReportViewer((ReportViewer)sender);
    }
}

protected void InitializeReportViewer(ReportViewer reportViewer)
{
    // Search pattern for regex
    string pattern = string.Format(@"syncReportViewerState\([^)]*\);|jQuery\('#{0}'\)\.telerik_ReportViewer\([^)]*\);", reportViewer.ID);

    // find the two functions containing all the params from the generated HTML string of reportViewer.ToString()
    MatchCollection matches = Regex.Matches(reportViewer.ToString(), pattern);

    // Concatenate both scripts
    string reportingScripts = string.Empty;
    foreach (Match match in matches)
    {
        reportingScripts += match.Value;
    }

    if (!string.IsNullOrEmpty(reportingScripts))
    {
        string startupScript = string.Format(@"
            function pageLoadHandler() {{ 
                {0}
                Sys.Application.remove_load(pageLoadHandler); 
            }} 
            Sys.Application.add_load(pageLoadHandler);", reportingScripts);

        // Register a Startup Script that will be executed after the AJAX Post Back
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), Guid.NewGuid().ToString(), startupScript, true);
    }
}
````
````VB
Protected Sub ReportViewer1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim sm As ScriptManager = RadScriptManager.GetCurrent(Page)

    If sm.IsInAsyncPostBack Then
        InitializeReportViewer(CType(sender, ReportViewer))
    End If
End Sub

Protected Sub InitializeReportViewer(ByVal reportViewer As ReportViewer)
    Dim pattern As String = String.Format("syncReportViewerState\([^)]*\);|jQuery\('#{0}'\)\.telerik_ReportViewer\([^)]*\);", reportViewer.ID)
    Dim matches As MatchCollection = Regex.Matches(reportViewer.ToString(), pattern)
    Dim reportingScripts As String = String.Empty

    For Each match As Match In matches
        reportingScripts += match.Value
    Next

    If Not String.IsNullOrEmpty(reportingScripts) Then
        Dim startupScript As String = String.Format("
        function pageLoadHandler() {{ 
            {0}
            Sys.Application.remove_load(pageLoadHandler); 
        }} 
        Sys.Application.add_load(pageLoadHandler);", reportingScripts)
        ScriptManager.RegisterStartupScript(Page, Page.[GetType](), Guid.NewGuid().ToString(), startupScript, True)
    End If
End Sub
````
