---
title: Telerik NuGet keys - Rotating Telerik Service Account for a build NuGet server
description: Learn how to deal in a scenario with a build server when you have to store the private Telerik NuGet credentials - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Obtaining a rotating Telerik Service Account for a build NuGet server 
slug: common-rotating-telerik-service-account-for-a-build-nuget-server
position: 
tags: 
ticketid: 1582025
res_type: kb
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
Learn how to deal in a scenario with a build server when you have to store the private Telerik NuGet credentials.

Use case questions: 
Is it possible to get a secondary login for the Telerik private NuGet that is not tied to a specific user account login? 

We would like to use the NuGet feed on a build server and are concerned about the account login getting rotated and not updated on the build server. 

## Solution
Until now, you could only use your Telerik account’s credentials to authenticate with the Telerik NuGet server. This is fine when the environment is your own dev machine but can be problematic in CI environments like Azure DevOps/GitHub Actions, or a colleague’s machine who needs to restore packages to build a project but doesn't use them directly (e.g., QA, designer, or a build user account, etc.).

That is why we introduced the new [NuGet Keys feature](https://www.telerik.com/blogs/announcing-nuget-keys) available in your account under https://www.telerik.com/account/downloads/nuget-keys.

You can now generate a unique key that can be used to authenticate with the Telerik NuGet server to restore packages in your CI (Continuous Integration) or desktop environment.

   
## See Also
* [Announcing NuGet Keys](https://www.telerik.com/blogs/announcing-nuget-keys)
* (First Steps by Installing from a NuGet Package)[https://docs.telerik.com/devtools/aspnet-ajax/getting-started/first-steps-nuget].
   
   