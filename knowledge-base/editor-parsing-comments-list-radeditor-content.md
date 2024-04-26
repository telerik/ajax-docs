---
title: Parsing Comments in a List from RadEditor Content
description: Learn how to parse out all the comments in a list from the content of RadEditor using VB.NET or C# in a button click event.
type: how-to
page_title: Parsing Comments in a List from RadEditor Content
slug: editor-parsing-comments-list-radeditor-content
tags: radeditor, comments, list, parse, vb.net, c#
res_type: kb
---

## Environment
| Product | RadEditor for ASP.NET AJAX |
| ------- | ------------------------- |
| Version | all               |

## Description
I want to parse out all the comments in a list from the content of RadEditor using VB.NET or C# in a button click event.

## Solution
To parse out all the comments in a list from the content of RadEditor in a button click event, follow these steps:

1. Get the content from the RadEditor control.
2. Use a regular expression to find `<span>` tags with the `reComment` class and extract the comment attribute.
3. Create a list to hold the comments.
4. Match all instances and extract the comments.
5. Output the comments to a label or any other control.

Here's an example solution using VB.NET:

````C#
protected void btnExtractComments_Click(object sender, EventArgs e)
{
    // Get the content from RadEditor
    string editorContent = theEditor.Content;

    // Regular expression to find span tags with the reComment class and extract the comment attribute
    Regex regex = new Regex("<span[^>]*class=\"[^\"]*reComment[^\"]*\"[^>]*comment=\"(.*?)\"[^>]*>", RegexOptions.IgnoreCase);

    // Create a list to hold the comments
    List<string> commentsList = new List<string>();

    // Match all instances and extract comments
    foreach (Match match in regex.Matches(editorContent))
    {
        if (match.Success)
        {
            // Extract the comment attribute
            string comment = match.Groups[1].Value;
            commentsList.Add(comment);
        }
    }

    // Output the comments to a label or any other control
    lblComments.Text = string.Join("<br/>", commentsList);
}
````
````VB
Protected Sub btnExtractComments_Click(sender As Object, e As EventArgs)
    ' Get the content from RadEditor
    Dim editorContent As String = theEditor.Content

    ' Regular expression to find span tags with the reComment class and extract the comment attribute
    Dim regex As New Regex("<span[^>]*class=""[^""]*reComment[^""]*""[^>]*comment=""(.*?)""[^>]*>", RegexOptions.IgnoreCase)

    ' Create a list to hold the comments
    Dim commentsList As New List(Of String)

    ' Match all instances and extract comments
    For Each match As Match In regex.Matches(editorContent)
        If match.Success Then
            ' Extract the comment attribute
            Dim comment As String = match.Groups(1).Value
            commentsList.Add(comment)
        End If
    Next

    ' Output the comments to a label or any other control
    lblComments.Text = String.Join("<br/>", commentsList)
End Sub
````

You can modify this code per your requirements and use it to parse out the comments from the RadEditor content in a button-click event.
 
