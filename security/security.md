---
title: Useful Tips
page_title: Useful Tips
description: "Learn more about how to secure the Telerik UI for ASP.NET AJAX controls and your ASP.NET Web Forms app."
slug: security/security
previous_url: getting-started/work-with-controls/security
tags: telerik, asp, net, ajax, security, microsoft
published: True
position: 2
---

# Useful Security Tips

In this article, you will find helpful security tips and resources to strengthen the protection of your ASP.NET Web Forms app and Telerik ASP.NET AJAX controls, those offering editing, file upload, and file management features.

## General Security Best Practices

These tips apply across many Telerik controls and help secure your application holistically:

* **Regular Upgrades**: Always perform regular upgrades to the latest version of Telerik UI for ASP.NET AJAX to ensure the highest levels of security, stability, and support for modern browsers. You can find upgrade instructions [here]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}).

* **Web.config Additions**: Ensure you configure the mandatory additions to your `web.config` file. This article provides guidance on the essential web.config settings for Telerik's AJAX suite: [Configure Mandatory Additions to web.config file]({%slug general-information/web-config-settings-overview%}#configuring-mandatory-additions).

* **Encrypt appSettings Keys**: For better security, avoid storing sensitive information in plain text. Follow this guide to encrypt the `appSetting` section of your `web.config` using the `aspnet_regiis` tool: [How to Encrypt Telerik appSettings Keys]({%slug common-how-to-encrypt-the-telerik-appsettings-keys%}) 

* **Encrypt ViewState** - If you're using a version earlier than ASP.NET 4.5, ensure ViewState encryption is enabled by setting the `ViewStateEncryptionMode` and `EnableViewStateMAC` attributes. Here's a sample configuration: 

   ````XML
   <configuration>
      <system.web>
         <pages viewStateEncryptionMode="Always" enableViewStateMac="true">
   ````

   The official recommendation by Microsoft is to upgrade to at least .NET 4.8 as noted at [.NET Release history](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework). You can find more useful information at [Cryptographic Improvements in ASP.NET 4.5, pt. 2](https://devblogs.microsoft.com/dotnet/cryptographic-improvements-in-asp-net-4-5-pt-2/) and .

* **Encrypt Telerik WebResource Querystring**: For extra security, encrypt the Telerik WebResource querystring by enabling the `Telerik.ScriptManager.EnableHandlerEncryption` setting. This hides product version information in the page markup. Follow the steps here: [Encrypt Telerik WebResource Querystring]({%slug scriptmanager/encrypt-telerik-webresource-querystring%}).

* **Embedded jQuery Security**: Telerik ASP.NET AJAX components embed a custom, secure version of jQuery. Learn about the security enhancements and modifications made to ensure safe usage of jQuery within Telerik controls: [Embedded jQuery Security]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#embedded-jquery-security). 


## Control-Specific Security Guidelines

### File Upload Security

* [RadAsyncUpload]({%slug asyncupload-security%}) - This article explains how to ensure information about the RadAsyncUpload configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server. Also, go through the [FAQ section]({%slug asyncupload-security%}#frequently-asked-questions) where you can find useful information and tips for the AsyncUpload security.

* [RadCloudUpload Security]({%slug cloudupload-security%}) - See how to ensure information about the RadCloudUpload configuration is secure and non-readable.

### Editor Control Security

* [RadEditor Security]({%slug editor/security%}) - learn how to ensure information about the RadEditor configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.
* [Prevent Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) - see how to enable the anti-XSS mechanism of RadEditor.

### Grid Control Security

* Security is a priority for RadGrid, especially when handling sensitive data. For a detailed guide on addressing potential security risks, visit the [Security]({%slug grid/security%}).

### File Explorer Control Security

* [Security]({%slug fileexplorer/security%}) - learn how to  secure the user actions invoked through RadFileExplorer.

### Spell Control Security

* [Security]({%slug spell/security%}) - the article shows how to ensure information about the RadSpell configuration is secure and non-readable


## Content Security Policy (CSP)
Content Security Policy (CSP) is an effective security layer against cross-site scripting (XSS) and data injection attacks. However, full CSP compliance without the use of `unsafe-inline` and `unsafe-eval` is challenging for ASP.NET Web Forms applications. This limitation arises due to the heavy reliance on the Microsoft AJAX client-side library, which makes extensive use of functions like setTimeout(), setInterval(), inline scripts, and eval().

When integrating Telerik UI for ASP.NET AJAX with a CSP, it's necessary to include `unsafe-inline` and `unsafe-eval` directives for proper functionality.

For more details on how to configure your Web Forms application to use CSP, refer to the following resource: [Content Security Policy Mode]({%slug general-information/content-security-policy%}).

## Additional Resources

* **Security FAQ**: For more answers to common security-related questions, visit our [Security FAQ]({%slug security/security-faq%}).
* **Upgrade Recommendations**: Regularly updating to the latest version of Telerik UI for ASP.NET AJAX is one of the best ways to ensure security. You can find the necessary upgrade steps [here]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}).
* **Security Blog** For more expert tips, check out the following blog post [First 5 Tips for Building Secure (Web) Apps](https://www.telerik.com/blogs/first-5-tips-for-building-secure-web-apps).



      