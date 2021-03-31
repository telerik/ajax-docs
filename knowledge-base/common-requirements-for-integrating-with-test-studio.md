---
title: Requirements for Using Test Studio with UI for ASP.NET AJAX
description: 
type: troubleshooting
page_title: Requirements for Integrating UI for ASP.NET AJAX with Test Studio
slug: common-requirements-for-integrating-with-test-studio
position: 
tags: 
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>UI for ASP.NET AJAX</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Test Studio</td>
		</tr>
	</tbody>
</table>

## Description
If using Test Studio as a testing platform with an UI for ASP.NET AJAX project, and receiving the error that many of the Telerik.Web.UI references are undefined.

## Cause
A known cause of this is because Test Studio requires the .NET Framework 4.5+ version and the UI for ASP.NET AJAX assemblies target 4.0.

## Solution
Upgrade the Web Applicaiton's target framework to 4.5+. This can be achieved through the Project's Properties page. 

![Set Project Target .NET Framework](images/common-test-studio-set-target-framework.png)

## See Also
[Test Studio Requirements](https://docs.telerik.com/teststudio/system-requirements#framework)