---
title: Set RadTextbox width by CSS, JavaScript or Server side
description: Learn how to change the RadTextbox's width by CSS, JavaScript or Server side.
type: how-to
page_title: How to set the RadInput width by a CSS class, with JavaScript or via a server property
slug: set-radtextbox-width-by-css-javascript-or-server-side
position: 
tags: 
ticketid: 348259
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadInput for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The article shows a couple of ways to change the RadTextbox's width by CSS, via JavaScript or Server side.

## Solution
See below the different approaches for setting the width:

## Solution 1 with CSS

````ASPNET
<style>
    .riTextBox {
        width: 1000px !important;
    }
</style>
<telerik:RadTextBox runat="server" ID="RadTextBox1"></telerik:RadTextBox>
````

## Solution 2 with JavaScript

````JavaScript
        <script>
            function OnClientLoad(sender, args) {
                sender.get_element().style.width = "1000px";
            }
        </script>
        <telerik:RadTextBox runat="server" ID="RadTextBox1">
            <ClientEvents OnLoad="OnClientLoad" />
        </telerik:RadTextBox>
````

## Solution 3 via the codebehind

````ASP.NET

    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="sm1" runat="server"></telerik:RadScriptManager>
        <telerik:RadTextBox runat="server" ID="RadTextBox1"></telerik:RadTextBox>
    </form>
````

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        RadTextBox1.Width = Unit.Pixel(1000);
    }
````

### Bonus
In order to have percentage width for the input, some of its parent HTML elements must have a fixed width. In the example below the body has a width of 500 pixels:

````ASP.NET
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        body { width:500px }
        form, .RadInput, .riTextBox {
            width: 100% !important;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager ID="sm1" runat="server"></telerik:RadScriptManager>
        <telerik:RadTextBox runat="server" ID="RadTextBox1"></telerik:RadTextBox>
    </form>
</body>
</html>
````

