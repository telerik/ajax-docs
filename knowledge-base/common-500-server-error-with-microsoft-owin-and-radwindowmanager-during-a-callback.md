---
title: 500 server error with Microsoft OWIN and Telerik controls during a callback
description: Learn how to fix 500 internal server error in response to callbacks when Microsoft OWIN startup class code for authentication is used together with some of Telerik UI for ASP.NET AJAX controls.
type: troubleshooting
page_title: 500 server error with Microsoft OWIN and Telerik controls during a callback
slug: common-500-server-error-with-microsoft-owin-and-radwindowmanager-during-a-callback
res_type: kb
---

## Problem

500 (internal server error) in response to callbacks when Microsoft OWIN startup class code for authentication is used together with some of Telerik UI for ASP.NET AJAX controls like RadAsyncUpload, RadWindow and RadWindowManager as well as composite components like RadEditor and RadFileExplorer.

Here is information about  the server error and its stack trace:

````C#
Exception information:
    Exception type: ArgumentNullException
    Exception message: Value cannot be null.
Parameter name: parameter
at Microsoft.IdentityModel.Protocols.AuthenticationProtocolMessage.SetParameter(String parameter, String value)
at Microsoft.IdentityModel.Protocols.WsFederationMessage..ctor(IEnumerable`1 parameters)
at Microsoft.Owin.Security.WsFederation.WsFederationAuthenticationHandler.<AuthenticateCoreAsync>d__1f.MoveNext()
````
 
The following two GitHub issues indicate that this may be an issue with the OWIN provider itself that may be fixed in later versions:

* https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/issues/143
* https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet/issues/495

## Description

The issue stems from additional validation that the OWIN classes perform. If the page contains <input> elements without a name attribute, an error is thrown.

RadWindowManager contains an HTML template for RadPrompt that contains an <input> without a name attribute because the controls themselves do not add data to it, and it cannot be a part of the POST request, because any RadPrompt clones the template and does not use it in place.

## Solution

[Edit the PromptTemplate](http://docs.telerik.com/devtools/aspnet-ajax/controls/window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates?_ga=2.163959037.317000784.1618326771-650494500.1548082460) to add a desired name attribute or to remove the input entirely in case you application does not use the RadPrompt feature.

A small sample is attached that explains how to reproduce the issue so you can test out the solution for your setup. Note that you should keep the browser console open and monitor the network requests and that the site must be deployed to IIS.

For composite controls like RadFileExplorer, you can override the templates from the server. An additional sample is available that demonstrates the approach.

For the RadEditor dialogs, you will need to apply the approach from the [Displaying single upload control in the FileBrowser Upload manager KB article](https://www.telerik.com/support/kb/aspnet-ajax/details/displaying-single-upload-control-in-the-filebrowser-upload-manager) to change the settings of the RadFileExplorer control inside. A sample is also available below. Versions prior to R1 2017 may still exhibit this issue because of several other input element whose name attributes need to be added from the server code.

*** Update on December 19, 2017 ***

Note for RadEditor: The solution for RadEditor has been updated with fixes for File Upload and Refresh functionalities of the File Browser dialogs. Download the EditorAddendum_v3.zip archive to see how to fix the problem.

Note for RadFileExlorer: The solution for RadFileExplorer was improved with fixes for File Upload and Refresh functionalities of the component. Download the FileExplorerAddendum_v2.zip archive to see how to fix the problem.

Note for RadWindow: You may experience this error with RadWindow related to that its statusbar input element does not have a name attribute applied. Download RadWindowAddendum.zip to find a solution for this problem.

Note for RadAsyncUpload: There may be input element(s) in the markup of RadAsyncUpload without name attribute(s). You can add the name attribute in the OnClientAdded client-side event of RadAsyncUpload as shown in the provided RadAsyncUploadAddendum.zip.

*** End of Update ***


*** Update on March 02, 2018 ***

This issue seems to be handled in the latest (4.0.0) version of Microsoft.Owin, so upgrading to it can also solve the problem.

*** End of Update ***

## Files

* [testOwinIssue](files/testowinissue.zip)
* [WindowManagerAddendum](files/windowmanageraddendum.zip)
* [WindowAddendum](files/windowaddendum.zip)
* [editoraddendum_v3](files/editoraddendum_v3.zip)
* [FileExplorerAddendum_v2](files/fileexploreraddendum_v2.zip)
* [AsyncUploadAddendum](files/asyncuploadaddendum.zip)
