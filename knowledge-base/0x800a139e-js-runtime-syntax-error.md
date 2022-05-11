---
title: A 0x800a139e JavaScript Runtime Syntax Error Occurs
page_title: A 0x800a139e JavaScript Runtime Syntax Error Occurs
description: "Learn how to fix the 0x800a139e JavaScript runtime syntax error when working with Telerik UI for ASP.NET AJAX."
slug: 0x800a139e-js-runtime-syntax-error
tags: telerik, asp, net, ajax, troubleshooting, 0x800a139e, java, script, runtime, synatx, error, occurs
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

When you run a Telerik UI project in the debug mode under Internet Explorer, the Visual Studio output window may throw JavaScript errors.

## Error Messages

`Exception was thrown at line 1577, column 10673 in http://localhost:55082/TWS/Telerik.Web.UI.WebResource.axd?_TSM_HiddenField_=RadScriptManager1_TSM&compress=1&_TSM_CombinedScripts_=;;System.Web.Extensions,+Version=4.0.0.0,+Culture=neutral,+PublicKeyToken=31bf3856ad364e35:en-US:0f2ae90c-87fb-4f74-9210-4b167170d85e:ea597d4b:b25378d2;Telerik.Web.UI,+Version=2016.3.1027.40,+Culture=neutral,+PublicKeyToken=121fae78165ba3d4:en-US:a5034868-8cfd-4375-ba8c-d3e7543c32f7:16e4e7cd:f7645509:24ee1bba:4cd1fec6:77613e24:71188da4:f0c58c30:9b7cc2d2:ec7335e:d944e0f6:c442ac3f:8d1fecce:69667591:6b6b9ee5:595e7652`


`0x800a139e - JavaScript runtime error: SyntaxError`

## Steps to Reproduce

The issue can be reproduced on a simple page with no Telerik controls that contains a reference to jQuery. The following example demonstrates the Visual Studio output window showing JavaScript errors when a project that references jQuery is run in the debug mode under Internet Explorer.

````ASP.NET
<form id="form1" runat="server">
<asp:ScriptManager ID="Scriptmanager1" runat="server">
<Scripts>
<asp:ScriptReference Path="~/Scripts/jquery-1.9.1.js" />
</Scripts>
</asp:ScriptManager>
</form>
````

As a result, the `Exception was thrown at line 4224, column 4 in http://localhost:60537/WebSite1/Scripts/jquery-1.9.1.js` is thrown and the `0x800a139e - JavaScript runtime error: SyntaxError` error occurs.

## Cause

The issue is not directly related to the Telerik UI for ASP.NET AJAX controls.

## Solution

The runtime error is from a caught exception that doesn't affect the production environment. For more information, refer to [this bug report](https://bugs.jquery.com/ticket/14123).
