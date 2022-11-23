---
title: Security
page_title: Security
description: "Learn more about how to secure the Telerik UI for ASP.NET AJAX controls and your ASP.NET Web Forms app."
slug: general-information/security
tags: telerik, asp, net, ajax, security, microsoft
published: True
position: 10
---

# Security

In this article you will find out useful tips and resources on how to tighten the security of the Telerik ASP.NET AJAX controls which offer editing, upload and file management capabilities:



## RadAsyncUpload security

* [Security]({%slug asyncupload-security%}) - This article explains how to ensure information about the RadAsyncUpload configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Also, go through the [FAQ section]({%slug asyncupload-security%}#frequently-asked-questions) where you can find useful information and tips for the AsyncUpload security.

## RadClouUpload security

* [Security]({%slug cloudupload-security%}) - See how to ensure information about the RadCloudUpload configuration is secure and non-readable.

## RadEditor security

* [Security]({%slug editor/security%}) - learn how to ensure information about the RadEditor configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.
* [Prevent Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%}) - see how to enable the anti-XSS mechanism of RadEditor.

## RadGrid security

* [Security]({%slug grid/security%}) - this article addresses Security issues concerning the Telerik RadGrid.


## RadFileExplorer security

* [Security]({%slug fileexplorer/security%}) - learn how to  secure the user actions invoked through RadFileExplorer.

## RadSpell security

* [Security]({%slug spell/security%}) - the article shows how to ensure information about the RadSpell configuration is secure and non-readable


## More Useful Tips

* [Configure the mandatory additions to the web.config file]({%slug general-information/web-config-settings-overview%}#configuring-mandatory-additions) - provides guidance on the most important web.config settings for the AJAX suite.

* [How to encrypt the Telerik appSettings keys]({%slug common-how-to-encrypt-the-telerik-appsettings-keys%}) - In some cases you may want to avoid storing information in plain text to improve security. The article will guide you how to do encrypt the appSetting section of the web.config using the aspnet_regiis tool.

* **Encrypt ViewState** - ViewState gets encrypted by default after ASP.NET 4.5 and MAC-ed after ASP.NET 4.5.2. For the earlier versions you have the options to enable the ViewState encryption by setting the *ViewStateEncryptionMode* and *EnableViewStateMAC* attributes in web.config or page directive as suggested in [Security Briefs - View State Security](https://learn.microsoft.com/en-us/archive/msdn-magazine/2010/july/security-briefs-view-state-security):

 ````XML
<configuration>
   <system.web>
      <pages viewStateEncryptionMode="Always" enableViewStateMac="true">
````

The official recommendation by Microsoft is to upgrade to at least .NET 4.8 as noted at [.NET Release history](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet-framework). You can find more useful information at [](Cryptographic Improvements in ASP.NET 4.5, pt. 2)

* [Encrypt Telerik WebResource Querystring]({%slug scriptmanager/encrypt-telerik-webresource-querystring%}) - The Telerik.ScriptManager.EnableHandlerEncryption setting allows you enable the Telerik WebResource request querystring encryption amd hide the product version.

* [Embedded jQuery Security]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}#embedded-jquery-security) - find out how the Telerik team has modified and secured the jQuery version distributed by the suite. 

* Last but not least perform regular upgrades to the latest Telerik UI for ASP.NET AJAX version since this will ensure security, stability and support for the latest modern browsers. You can find upgrade instructions [here]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}).

  