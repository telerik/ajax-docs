---
title: Controls Collection Cannot Be Modified because of Code Blocks Error Occurs
page_title: Controls Collection Cannot Be Modified because of Code Blocks Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get a controls collection cannot be modified because the control contains code blocks error message."
slug: cannot-modify-control-collection-because-of-code-blocks
tags: telerik, asp, net, ajax, troubleshooting, controls, collection, cannot, be, modified, because, the, control, contains, code, blocks, error
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX, I get an error that the controls collection cannot be modified because the control contains code blocks.

## Error Message

`The Controls collection cannot be modified because the control contains code blocks`

## Cause

The possible cause for this issues is that the code block is inside the `head` tag, for example:

````ASP.NET
<head id="Head1" runat="server">
  <script type="text/javascript">
  var grid = $find('<%= RadGrid1.ClientID %>');
  ...
  </script>
</head>
<body>
...
</body>
````

## Solution

To solve this issue, move the code block (`<% ... %>`) outside the `head` tag:

````ASP.NET
<head id="Head2" runat="server">
<telerik:RadCodeBlock id="RadCodeBlock1" runat="server">
   <script type="text/javascript">
       var grid = $find('<%= RadGrid1.ClientID %>');
       ...
   </script>
</telerik:RadCodeBlock>
</head>
<body>
...
</body>
or
<head id="Head3" runat="server">
</head>
<body>
   <telerik:RadCodeBlock id="RadCodeBlock1" runat="server">
   <script type="text/javascript">
       var grid = $find('<%= RadGrid1.ClientID %>');
       ...
   </script>
   </telerik:RadCodeBlock>
</body>   
````

 
