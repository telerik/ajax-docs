---
title: Embed JavaScript code in RadEditor
description: Learn how to embed and keep JavaScript in RadEditor content area - Telerik UI for ASP.NET AJAX
type: how-to
page_title: How to insert JavaScript code in RadEditor
slug: editor-embed-javascript-code
position: 
tags: 
ticketid: 1619141
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadEditor for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
What is the best way to insert (embed) JavaScript code in HTML mode of the Telerik Editor control? Learn the answer in the Solution section below.

## Solution
By default, RadEditor strips the script tags to prevent script code execution and XSS.

There are two content filters responsible for the script encoding and removal: 

- RemoveScripts: this filter removes script tags from the editor content. Disable the filter if you want to insert script tags in the content. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS) article](http://www.telerik.com/help/aspnet-ajax/editor-preventing-cross-site-scripting.html).
- EncodeScripts: this filter encodes all script tags from the content. You can examine more details about this filter in the [Preventing Cross-site Scripting (XSS) article](http://www.telerik.com/help/aspnet-ajax/editor-preventing-cross-site-scripting.html).

You can disable one or both of them with the following C# code:

````C#
RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.EncodeScripts));
RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.RemoveScripts));
````
````VB
RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.EncodeScripts))
RadEditor1.DisableFilter(Telerik.Web.UI.EditorFilters.RemoveScripts))
````
   
