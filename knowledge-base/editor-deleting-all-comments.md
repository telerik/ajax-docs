---
title: Deleting All Comments in RadEditor for ASP.NET AJAX
description: Learn how to delete all comments in RadEditor for ASP.NET AJAX programmatically.
type: how-to
page_title: Deleting All Comments in RadEditor for ASP.NET AJAX | Telerik UI for ASP.NET AJAX
slug: editor-deleting-all-comments
tags: radeditor, comments, tracked changes, delete comments, accept changes, asp.net ajax, webforms
res_type: kb
---
# Environment
| Property | Value |
|----------|-------|
| Product  | RadEditor for ASP.NET AJAX |
| Version  | all |

# Description
To delete all comments and accept all changes programmatically in RadEditor for ASP.NET AJAX, you can use either of the following approaches:

# Solution

## Approach 1: Using Regular Expressions
This approach involves manually parsing and manipulating the HTML content using regular expressions. Here's how you can adapt your existing `CleanContent` function:

````C#
private string CleanContent(string content)
{
    if (content != null && content != "")
    {
        // Define a regular expression to match span or font tags with the 'reComment' class
        Regex regex = new Regex("<(span|font)[^>]*class=[\"']reComment[\\s\\w]*[\"'][^>]*>", RegexOptions.IgnoreCase);

        // Use the regular expression to replace the matched elements with just the opening tag
        content = regex.Replace(content, "<$1>");

        // Assign the modified HTML content back to RadEditor
        RadEditor1.Content = content;

        // Accept all track changes
        RadEditor1.AcceptTrackChanges();

        // Return the modified content
        return RadEditor1.Content;
    }
    else
    {
        return content;
    }
}
````
````vb
Private Function CleanContent(content As String) As String
    If content IsNot Nothing AndAlso Not content = "" Then

        ' Define a regular expression to match span or font tags with the 'reComment' class
        Dim regex As New Regex("<(span|font)[^>]*class=[""']reComment[\s\w]*[""'][^>]*>", RegexOptions.IgnoreCase)

        ' Use the regular expression to replace the matched elements with just the opening tag
        content = regex.Replace(content, "<$1>")

        ' Assign the modified HTML content back to RadEditor
        RadEditor1.Content = content

        ' Accept all track changes
        RadEditor1.AcceptTrackChanges()

        ' Return the modified content
        Return RadEditor1.Content
    Else
        Return content
    End If
End Function
````

## Approach 2: Utilizing RadEditor's Built-in Functionality
This solution leverages the `GetHtml` method of RadEditor with specific `EditorStripHtmlOptions`. Here's how you can implement this in your code:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    // Accept the track changes
    RadEditor1.AcceptTrackChanges();

    // Strip the comments
    string htmlResult = RadEditor1.GetHtml(EditorStripHtmlOptions.Comments);

    // Set the content of RadEditor1
    RadEditor1.Content = htmlResult;
}
````
````vb
Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    ' Accept the track changes
    RadEditor1.AcceptTrackChanges()

    ' Strip the comments
    Dim htmlResult As String = RadEditor1.GetHtml(EditorStripHtmlOptions.Comments)

    ' Set the content of RadEditor1
    RadEditor1.Content = htmlResult
End Sub
````

These approaches will allow you to programmatically delete all comments and accept all changes in RadEditor for ASP.NET AJAX.

# Notes
- Make sure to replace `RadEditor1` with the actual ID of your RadEditor instance.
- Approach 1 provides more control over the process and can be used if your version of RadEditor doesn't support the needed functionality through its API.
- Approach 2 is more straightforward and stable as it relies on the RadEditor's built-in functionality.
- Test the code thoroughly to ensure it meets your requirements.

# See Also
- [RadEditor for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [RadEditor AcceptTrackChanges Method Documentation](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadEditor#methods-AcceptTrackChanges)
- [RadEditor GetHtml Method Documentation](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadEditor#methods-GetHtml)
- [RadEditor EditorStripHtmlOptions Enumeration Documentation](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/EditorStripHtmlOptions)
