---
title: Content Security Policy Mode
page_title: Content Security Policy Mode
description: "Learn more about the Content Security Policy (CSP) mode and how to work with it in Telerik UI for ASP.NET AJAX and Microsoft AJAX projects."
slug: general-information/content-security-policy
previous_url: general-information/troubleshooting/content-security-policy
tags: telerik, asp, net, ajax, content, security, policy, csp, unsafe-eval, eval, microsoft
published: True
position: 5
---

# Content Security Policy Mode

If the strict `Content-Security-Policy` (CSP) mode is enabled, it disables the following browser features by default:

* Inline JavaScript, such as `<script></script>`, or DOM event attributes, such as `onclick`, are blocked. All script code must reside in separate files that are served from a white-listed domain.

* Dynamic code evaluation through `eval()` and string arguments for both `setTimeout` and `setInterval` are blocked.

## Working with Telerik UI for ASP.NET AJAX

Telerik UI for ASP.NET AJAX uses `eval()` calls and inline `<script>` tags. Thus, Telerik UI for ASP.NET AJAX does not currently support the strict CSP mode.

If CSP is enabled for a web application, which utilizes Telerik UI for ASP.NET AJAX, you have to add at least the `unsafe-eval` and `unsafe-inline` keywords to the `script-src` section of the `meta` tag or `HTTP header` that are used for enabling the CSP mode.

To allow font icons, raster icons, and inline style attributes that are also heavily used by the Telerik UI for ASP.NET AJAX suite, you must also add the `unsafe-inline` keyword for the `style-src` section.

>caption Minimal configuration to run Telerik UI for ASP.NET AJAX with the CSP mode
````HTML
<meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' ;"
     />
````

To work with CDN, you must also add the `self` keyword to the `font-src` and `img-src` sections. Make sure that you also include their domains in the `script-src`, `style-src`, `font-src`, and `img-src` sections.

>caption Using Telerik UI for ASP.NET AJAX with CDN over HTTPS (SSL)
````HTML
<meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://d2i2wahzwrm1n5.cloudfront.net ;
			 style-src 'self' 'unsafe-inline' https://d35islomi5rx1v.cloudfront.net ;
			 font-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:';
			 img-src 'self' https://d35islomi5rx1v.cloudfront.net 'data:'"
     />
````

>caption Using Telerik UI for ASP.NET AJAX with CDN over plain HTTP
````HTML
<meta
    http-equiv="Content-Security-Policy"
    content="script-src 'self' 'unsafe-inline' 'unsafe-eval' http://aspnet-scripts.telerikstatic.com ;
			 style-src 'self' 'unsafe-inline' http://aspnet-skins.telerikstatic.com ;
			 font-src 'self' http://aspnet-skins.telerikstatic.com 'data:';
			 img-src 'self' http://aspnet-skins.telerikstatic.com 'data:'"
     />
````

If you are using a custom CDN provider, replace the built-in Telerik URLs with the URLs to your host.

If you are using the Material skin, you must also add the `https://fonts.gstatic.com` address to the allowed URLs for fonts so that the Roboto font is allowed.

The presence of the `font-src 'self'` section causes Chrome to evaluate all fonts on the page and this will also trigger requests to the Google cloud for the Roboto font, even if it is not used by the page, that is, even if the Material skin is not used.

You can find more information on how to work with third-party libraries and resolved CSP-related issues in the following Telerik forum thread [RadMap CSP Setting for Bing](https://www.telerik.com/forums/rad-map-csp-setting-for-bing) and in the Resolve Content Security Policies errors YouTube video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/FWHUzMZKXE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Working with Microsoft AJAX

The Microsoft (MS) AJAX framework also uses `eval()` calls and inline `<script>` tags. It generates a `$create()` statement for each `IScriptControl` instance such as the Telerik UI for ASP.NET AJAX controls. They are placed in an inline `<script>` tag at the end of the form.

Also, the MS AJAX framework has numerous calls to `setTimeout()` and `eval()`, and renders other inline scripts. Thus, it is unlikely to work without `script-src 'self' 'unsafe-inline' 'unsafe-eval'`.

You can test whether the basic MS AJAX functionality operates in your environment by clicking the button from the following example, then ensuring that no errors occur and that the request is an `XmlHttpRequest` and not a full postback.

Also, you need to test the application in the Release mode explicitly because the Debug mode of the MS AJAX scripts contains more `eval` statements than the Release mode. Therefore, the behavior between the local development environment and the staging or production environment may differ.

Having an operational MS AJAX environment is essential before adding the Telerik controls to it.

>caption Testing basic MS AJAX functionality with CSP
````ASP.NET
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

 
