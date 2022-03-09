---
title: Security Exception Occurs
page_title: Security Exception Occurs
description: "When working with Telerik UI for ASP.NET AJAX, a security exception occurs that the application attempted to perform an operation not allowed by the security policy."
slug: security-exception-occurs
tags: telerik, asp, net, ajax, troubleshooting, security, exception, occurs
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

When working with Telerik UI for ASP.NET AJAX, a security exception occurs: `The application attempted to perform an operation not allowed by the security policy. To grant this application the required permission, please contact your system administrator or change the application's trust level in the configuration file.`

## Error Message

`System.Security.SecurityException:Request for the permission of type 'System.Web.AspNetHostingPermission,...`

## Cause

Microsoft changed the default setting of the **Load User Profile** setting of the application pools in Windows 7 and Windows 2008. Previously, the setting was `True` while in IIS7.5 it is `False`.

## Solution

Open the **Advanced Settings** of the application pool and set the **Load User Profile** property to `True`.
