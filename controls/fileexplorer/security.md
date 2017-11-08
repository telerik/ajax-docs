---
title: Security
page_title: Security | RadFileExplorer for ASP.NET AJAX Documentation
description: Security
slug: fileexplorer/security
tags: security,action
published: True
position: 15
---

# Security

To secure the user actions invoked through RadFileExplorer, you must apply your business logic on top of the API the control provides.

The easiest approach is to use the [ItemCommand]({%slug fileexplorer/server-side-programming/events%}#itemcommand) to write simplistic logic that looks at the file paths that will be modified and cancel the event if suspicious activity is found (for example, attempts to tamper with `.config` or `.aspx` files). Depending on the user login implemented in your application, you may also want to add user authentication and rights checks here.

You can implement a thorough security layer by [creating a custom content provider]({%slug fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider%}) where you can perform all necessary permissions and validation checks according to application pool identity, Windows permissions and so on.

Below follows an illustrative example of validating user actions through the `ItemCommand` event.

>caption Example 1: Validate user actions to secure file types tampering.

````C#
protected void RadFileExplorer1_ItemCommand(object sender, RadFileExplorerEventArgs e)
{
    //NOTE: the example below is for illustrative purposes
    //You must employ strong protection according to the application logic and user actions
    bool suspiciousActivityDetected = false;
    string[] searchPatterns = (sender as RadFileExplorer).Configuration.SearchPatterns;
    if (!string.IsNullOrEmpty(e.Path))
    {
        suspiciousActivityDetected = IsSuspiciousActivity(e.Path, searchPatterns);
    }

    if (!string.IsNullOrEmpty(e.NewPath))
    {
        suspiciousActivityDetected = suspiciousActivityDetected ? suspiciousActivityDetected : IsSuspiciousActivity(e.NewPath, searchPatterns);
    }
    e.Cancel = suspiciousActivityDetected;
}

protected bool IsSuspiciousActivity(string pathToCheck, string[] allowedExtensions)
{
    //this is a basic example that checks for the extensions in a simplistic manner
    //you should implement stronger logic that fits your application needs

    string currExtension = pathToCheck.Substring(pathToCheck.LastIndexOf("."));
    currExtension = string.Concat("*", currExtension);

    //add sample extensions that must never be allowed regardless of control configuration
    string[] prohibitedExtensions = {"*.aspx", "*.config" };
    //check if the operation includes prohibited files
    if (prohibitedExtensions.Contains(currExtension))
    {
        return true;
    }

    //or, simply check for the presence of potentially harmful strings in the file names, which can be useful when uploading files
    if (pathToCheck.Contains(".aspx") || pathToCheck.Contains(".config"))
    {
        return true;
    }

    //Add other high priority checks/denial conditions here

    //Then check if you can allow the action
    //For example, if the extension is whitelisted in the control configuration

    //check if the operation includes allowed files that are not covered by the prohibited extensions
    //this example deliberately does not take into account the default *.* pattern
    if (allowedExtensions.Contains(currExtension))
    {
        return false;
    }

    return false;
}
````
````VB
Protected Sub RadFileExplorer1_ItemCommand(sender As Object, e As RadFileExplorerEventArgs) Handles RadFileExplorer1.ItemCommand
    'NOTE: the example below is for illustrative purposes
    'You must employ strong protection according to the application logic and user actions
    Dim suspiciousActivityDetected As Boolean = False
    Dim searchPatterns As String() = TryCast(sender, RadFileExplorer).Configuration.SearchPatterns
    If Not String.IsNullOrEmpty(e.Path) Then
        suspiciousActivityDetected = IsSuspiciousActivity(e.Path, searchPatterns)
    End If

    If Not String.IsNullOrEmpty(e.NewPath) Then
        suspiciousActivityDetected = If(suspiciousActivityDetected, suspiciousActivityDetected, IsSuspiciousActivity(e.NewPath, searchPatterns))
    End If
    e.Cancel = suspiciousActivityDetected
End Sub

Protected Function IsSuspiciousActivity(pathToCheck As String, allowedExtensions As String()) As Boolean
    'this is a basic example that checks for the extensions in a simplistic manner
    'you should implement stronger logic that fits your application needs

    Dim currExtension As String = pathToCheck.Substring(pathToCheck.LastIndexOf("."))
    currExtension = String.Concat("*", currExtension)

    'add sample extensions that must never be allowed regardless of control configuration
    Dim prohibitedExtensions As String() = {"*.aspx", "*.config"}
    'check if the operation includes prohibited files
    If prohibitedExtensions.Contains(currExtension) Then
        Return True
    End If

    'or, simply check for the presence of potentially harmful strings in the file names, which can be useful when uploading files
    If pathToCheck.Contains(".aspx") OrElse pathToCheck.Contains(".config") Then
        Return True
    End If

    'Add other high priority checks/denial conditions here

    'Then check if you can allow the action
    'For example, if the extension is whitelisted in the control configuration

    'check if the operation includes allowed files that are not covered by the prohibited extensions
    'this example deliberately does not take into account the default *.* pattern
    If allowedExtensions.Contains(currExtension) Then
        Return False
    End If

    Return False
End Function
````

## See Also

 * [Server-side Events]({%slug fileexplorer/server-side-programming/events%})

 * [Using a Custom Provider]({%slug fileexplorer/server-side-programming/use-custom-filebrowsercontentprovider%})

