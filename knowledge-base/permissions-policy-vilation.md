```markdown
---
title: Resolving Permissions Policy Violation in UI for ASP.NET AJAX
description: Learn how to address permissions policy violations in UI for ASP.NET AJAX applications by configuring headers or handling the policy correctly.
type: how-to
page_title: Fixing Permissions Policy Violation in UI for ASP.NET AJAX
meta_title: Fixing Permissions Policy Violation in UI for ASP.NET AJAX
slug: fixing-permissions-policy-violation-aspnet-ajax
tags: asp.net, permissions-policy, violation, configuration
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
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

I am encountering a permissions policy violation in my application when using UI for ASP.NET AJAX. This issue occurs when the browser blocks certain features or APIs due to misconfigured or missing permissions policy headers. 

This knowledge base article also answers the following questions:
- How to fix permissions policy issues in ASP.NET AJAX?
- What causes permissions policy violations in ASP.NET AJAX applications?
- How to configure permissions policy headers correctly?

## Solution

To resolve permissions policy violations in UI for ASP.NET AJAX applications:

1. Identify the specific feature or API causing the permissions policy violation. Check browser console logs for details on the blocked feature.

2. Add or update the `Permissions-Policy` header in the application's HTTP response. Configure the header to allow the required features or APIs.

   Example of setting the `Permissions-Policy` header in the web.config file:
   ```xml
   <system.webServer>
       <httpProtocol>
           <customHeaders>
               <add name="Permissions-Policy" value="fullscreen=(self), geolocation=*" />
           </customHeaders>
       </httpProtocol>
   </system.webServer>
   ```
   Adjust the policy values based on the features required by your application.

3. If the application uses custom HTTP modules or handlers, ensure they do not override or remove the `Permissions-Policy` header.

4. Test the application to confirm that the permissions policy violations are resolved.

## See Also

- [Permissions-Policy HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
- [UI for ASP.NET AJAX Documentation](https://docs.telerik.com/aspnet-ajax/overview)
- [Troubleshooting Common Issues in UI for ASP.NET AJAX](https://docs.telerik.com/aspnet-ajax/troubleshooting/troubleshooting-common-issues)
```
