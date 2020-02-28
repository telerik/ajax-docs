---
title: Content Security Policy
page_title: Content Security Policy | UI for ASP.NET AJAX Documentation
description: Content Security Policy and the UI for ASP.NET AJAX suite
slug: general-information/content-security-policy
tags: Content Security Policy,csp,unsafe-eval,eval
published: True
position: 8
---

# Content Security Policy

If the strict `Content-Security-Policy` (CSP) mode is enabled, some browser features are disabled by default:

* Inline JavaScript, such as `<script></script>` or DOM event attributes like `onclick`, are blocked. All script code must reside in separate files, served from a whitelisted domain.
* Dynamic code evaluation via `eval()` and string arguments for both `setTimeout` and `setInterval` are blocked.

## UI for ASP.NET AJAX and CSP

UI for ASP.NET AJAX (and [the MS AJAX framework itself](#ms-ajax-and-csp)) uses `eval()` calls and inline `<script>` tags. Thus, UI for ASP.NET AJAX does not currently support the strict CSP mode.

If CSP mode is enabled for a web application utilizing UI for ASP.NET AJAX, at least the `unsafe-eval` and `unsafe-inline` keywords must be added as part of the `script-src` section of the `meta` tag or `HTTP header` used for enabling the CSP mode.

To allow font icons, raster icons and inline style attributes that are also heavily used by the UI for ASP.NET AJAX suite, you must also add the `unsafe-inline` keyword for the `style-src` section.

>caption Example 1: Minimal configuration to run UI for ASP.NET AJAX with CSP.
````HTML
<meta 
    http-equiv="Content-Security-Policy" 
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' ;"
     />
````

To work with CDN, you must also add the `self` keyword to the `font-src` and `img-src` sections. Make sure to also add their domains to the `script-src`, `style-src`, `font-src` and `img-src` sections.

>caption Example 2: Using UI for ASP.NET AJAX with CDN over HTTPS (SSL).
````HTML
<meta 
    http-equiv="Content-Security-Policy" 
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://d2i2wahzwrm1n5.cloudfront.net ;
			 style-src 'self' 'unsafe-inline' https://d35islomi5rx1v.cloudfront.net ;
			 font-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:';
			 img-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:'"
     />
````

>caption Example 3: Using UI for ASP.NET AJAX with CDN over plain HTTP.
````HTML
<meta 
    http-equiv="Content-Security-Policy" 
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://aspnet-scripts.telerikstatic.com ;
			 style-src 'self' 'unsafe-inline' https://aspnet-skins.telerikstatic.com ;
			 font-src 'self' https://aspnet-skins.telerikstatic.com 'data:';
			 img-src 'self' https://aspnet-skins.telerikstatic.com 'data:'"
     />
````

If you are using a custom CDN provider, make sure to replace the built-in Telerik URLs with the URLs to your host.

If you are using the Material skin, you must also add the `https://fonts.gstatic.com` address to the allowed URLs for fonts so that the Roboto font is allowed.

The presence of the `font-src 'self'` section causes Chrome to evaluate all fonts on the page and this will also trigger requests to the Google cloud for the Roboto font, even if it is not used by the page (i.e., the Material skin is not used).

## MS AJAX and CSP

The MS AJAX framework generates a `$create()` statement for each `IScriptControl` instance (such as the Telerik UI for ASP.NET AJAX controls). They are placed in an inline `<script>` tag at the end of the form.

Also, the MS AJAX framework has numerous calls to `setTimeout()`, `eval()` and renders other inline scripts. Thus, it is unlikely to work without `script-src 'self' 'unsafe-inline' 'unsafe-eval'`.

You can easily test whether the basic MS AJAX functionality operates in your environemnt by clicking the button from Example 4 below and ensuring there are no errors, and that the request is an XmlHttpRequest and not a full postback.

Also, make sure to test the application in `Release` mode explicitly because the `Debug` mode of the MS AJAX scripts contains more `eval` statements than the release mode. Thus, the behavior between the local development environment and the staging/production environment may differ.

Having an operational MS AJAX environment is essential before adding the Telerik controls to it.

>caption Example 4: Test basic MS AJAX functionality with CSP
````ASPX
<ol>
    <li>Make sure there are no errors and blocked resources.</li>
    <li>Click the button.</li>
    <li>Make sure it does not throw errors and that it performs a partial postback.</li>
</ol>
<asp:ScriptManager runat="server" ID="sm1" ScriptMode="Release"/>
<asp:UpdatePanel runat="server">
    <ContentTemplate>
        <asp:Button Text="I must invoke an AJAX request if things work fine" runat="server" />
    </ContentTemplate>
</asp:UpdatePanel>
````



## See Also


