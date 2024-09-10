---
title: Understanding CSP Support with Telerik UI for ASP.NET AJAX
description: Explore how Telerik UI for ASP.NET AJAX aligns with Content Security Policy (CSP) directives and the impact on web application security.
type: troubleshooting
page_title: Implementing Content Security Policy (CSP) with Telerik UI for ASP.NET AJAX Components
slug: content-security-policy-telerik-ui-aspnet-ajax
tags: content security policy, csp, asp.net ajax, unsafe-inline, unsafe-eval
res_type: kb
ticketid: 1660059
---

## Environment

| Product | Telerik UI for ASP.NET AJAX |
| --- | --- |
| Version | Current |

## Description

When integrating Telerik UI for ASP.NET AJAX into web applications with a Content Security Policy (CSP), it's necessary to include 'unsafe-inline' and 'unsafe-eval' directives. This requirement stems from the Microsoft AJAX client-side library used by ASP.NET Web Forms, which relies on functions like `setTimeout()`, `setInterval()`, inline scripts, and `eval()`.

## Cause

The ASP.NET Web Forms framework and, by extension, Telerik UI for ASP.NET AJAX depend on the Microsoft AJAX client-side library. This library uses `eval()` and inline scripts extensively, making it incompatible with a strict CSP that excludes 'unsafe-inline' and 'unsafe-eval' directives.

## Solution

As Microsoft's [Content Security Vulnerability in ASP.NET(WebForms)](https://techcommunity.microsoft.com/t5/iis-support-blog/content-security-vulnerability-in-asp-net-webforms/ba-p/3951304) blog post advices to ensure the proper functioning of your ASP.NET Web Forms application, you should include the following minimal CSP configuration:

```html
<meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' ;"
     />
```

For applications using Telerik UI for ASP.NET AJAX with CDN over HTTPS, use this extended CSP configuration:

```html
<meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://d2i2wahzwrm1n5.cloudfront.net ;
             style-src 'self' 'unsafe-inline' https://d35islomi5rx1v.cloudfront.net ;
             font-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:';
             img-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:'"
     />
```

## Suggested Workarounds

For projects where strict CSP compliance is a priority, consider migrating to Telerik UI for ASP.NET MVC or Telerik UI for ASP.NET Core. These products have enhanced CSP support:

- As of the R1 2023 release, 'unsafe-eval' is no longer required.
- Starting with the R3 2023 release, 'unsafe-inline' in the "style-src" directive won't be necessary, except for specific components like the Editor, ResponsivePanel, GridLayout, and StackLayout.

## Notes

Due to the reliance on the Microsoft AJAX framework, achieving full CSP compliance without 'unsafe-inline' and 'unsafe-eval' is challenging for ASP.NET Web Forms applications. Microsoft's focus has shifted towards ASP.NET MVC and Core, emphasizing the need for modernization and security compliance in web development.

## See Also

- [Content Security Vulnerability in ASP.NET(WebForms)](https://techcommunity.microsoft.com/t5/iis-support-blog/content-security-vulnerability-in-asp-net-webforms/ba-p/3951304)
- [Working with Telerik UI for ASP.NET AJAX and Content Security Policy](https://docs.telerik.com/devtools/aspnet-ajax/getting-started/work-with-controls/content-security-policy)
- [Content Security Policy Support in Telerik UI for ASP.NET MVC](https://docs.telerik.com/aspnet-mvc/html-helpers/helper-basics/content-security-policy)
- [Content Security Policy Support in Telerik UI for ASP.NET Core](https://docs.telerik.com/aspnet-core/html-helpers/helper-basics/content-security-policy)
