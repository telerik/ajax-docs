---
title: Cryptographic Weakness
description: Prevent exploitiation of security issue due to a known cryptographic weaknes.
type: troubleshooting
page_title: Cryptographic Weakness
slug: common-cryptographic-weakness
tags: upload, asyncupload, security, editor
res_type: kb
---

## Problem

A third party organization has identified a cryptographic weakness ([CVE-2017-9248](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9248)) in Telerik.Web.UI.dll that can be exploited to the disclosure of encryption keys (Telerik.Web.UI.DialogParametersEncryptionKey and/or the MachineKey).

## Description

Knowledge of these keys in web applications using Telerik UI for ASP.NET AJAX components can lead to:
 - cross-site-scripting (XSS) attacks

 - leak of MachineKey

 - compromise of the ASP.NET ViewState

 - arbitrary file uploads/downloads

## Solution

>caption Update from Jan 5, 2021

Due to the .NET JavaScriptSerializer Deserialization ([CVE-2019-18935](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18935)) vulnerability, we strongly recommend upgrading to R1 2020 (version 2020.1.114) or later since the patches provided for [CVE-2017-9248](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9248), [CVE-2017-1135](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11357), [CVE-2014-2217](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-2217) and [CVE-2017-11317](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11317) do not prevent it.

Only the upgrade to R1 2020 (2020.1.114) or later can prevent the known vulnerabilities at the time of writing.

You can find more details and instructions at [Allows JavaScriptSerializer Deserialization]({%slug common-allows-javascriptserializer-deserialization%}) and [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance).

Also check the FAQ section at the end of the [Security]({%slug asyncupload-security%}#frequently-asked-questions) article.

## Deprecated Solutions

>caption 
>
>**Start of the deprecated solutions section:**
>
>To ensure your application is not exposed to such a risk, there are three mitigation paths:
>
>1. [Use a patch](#full-patches) for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)
>2. [Use a patch](#partial-patches) for some versions between Q1 2011 (2011.1.315) and Q3 2012 SP2 (2012.3.1308)
>3. If you are on active maintenance, [upgrade to R2 2017 SP1 (2017.2.621) or later](#upgrade-to-latest).
>4. [Prevent access to the Telerik Dialog Handler](#prevent-access)
>
>**NOTE**: The patches are **not** available on the Telerik NuGet feed.
>
>**NOTE**: If you are targeting .NET 3.5, review the [FIPS Compatibility article](http://docs.telerik.com/devtools/aspnet-ajax/controls/fips-compatibility), because the encryption issue it describes also pertains to these patches.
>
>---
>
>#### Use a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)
>
>**Download a patched version** from your Telerik.com account **after the 26th of June 2017**:
>
>1. Go to your [telerik.com account](https://www.telerik.com/account/downloads/product-download?product=RCAJAX).

>2. From the Version dropdown, select your release:

>   ![Version dropdown](images/common-cryptographic-weakness-version-dropdown.png)

>3. Download the `SecurityPatch_<your_version>.zip` file.

>4. [Replace the Telerik.Web.UI assembly in your application](http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade) with the one of the same >version that you just downloaded.

>5. Generate **new unique keys** for **Telerik.Web.UI.DialogParametersEncryptionKey** and **MachineKey** in your **web.config**. You can [use the IIS MachineKey Validation Key generator](http://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/>images/generate-keys-iis.png) to get them (make sure to avoid the ,IsolateApps portion).
>
>The patched version shows "Telerik.Web.UI.Patch" in the File Description under Properties in Windows Explorer:
>
>How to spot a patched version of Telerik.Web.UI.dll:
>
>![Patched version description](images/common-cryptographic-weakness-patched-version-description.png)
>
>**Source code** for building a **patched** version and [protecting the Telerik.Web.UI assembly](http://docs.telerik.com/devtools/aspnet-ajax/deployment/protecting-the-telerik-asp.net-ajax-assembly) is available after **14 Jul 2017**.
>
>---
>
>#### Use a patch for versions between Q1 2011 (2011.1.315) and Q3 2012 SP2 (2012.3.1308)
>
>If you are on active maintenance, **upgrade at least to Q1 2013 (2013.1.220)** and follow the same approach for [Using a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)](#full-patches).
>
>Due to technical feasibility, the following versions do **not** have patches for this issue:
>
>- Q1 2011 SP2 (2011.1.519)
>- Q2 2011 SP1 (2011.2.915)
>- Q3 2011 SP1 (2011.3.1305)
>- Q1 2012 SP1 (2012.1.411)
>- Q2 2012 SP2 (2012.2.912)
>
>If your version lists a `SecurityPatch_<your_version>.zip` file, you can follow the same approach for [Using a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)](#full-patches).
>
>---
>
>#### Upgrade to **R2 2017 SP1** (2017.2.621) or later.
>
>1. [**Upgrade**](http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax) your Telerik UI for ASP.NET >AJAX version to **R2 2017 SP1** (2017.2.621) or later.
>2. **Generate new keys** for **Telerik.Web.UI.DialogParametersEncryptionKey** and **MachineKey** in your [**web.config**](http://docs.telerik.com/devtools/aspnet-ajax/general-information/>web-config-settings-overview#mandatory-additions-to-the-webconfig). You can [use the IIS MachineKey Validation Key generator](http://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/images/generate-keys-iis.png) to get them (make sure to avoid >the ,IsolateApps portion).
>
>---
>
>#### Prevent access to the Telerik Dialog Handler
>
>An **alternative** to a fix or a patch is to prevent access to the Telerik DialogHandler. Note that this will make it impossible to use Telerik built-in dialogs for RadEditor and RadSpell.
>
>There are different ways to do that, for example:
>
>- Add a firewall rule that rejects traffic to the handler.
>- Add a URL redirect rule that returns an error page instead of the handler. Note that this will merely redirect the requests to a page of your choosing, usually with a 301 status code. Here is a basic example:
>
>    ```xml
>    <rewrite>
>        <rules>
>            <rule name="DisableDialogHandler" enabled="true" stopProcessing="true">
>                <match url="^Telerik.Web.UI.DialogHandler.*?$" />
>                <action type="Redirect" url="not-allowed.aspx" redirectType="Permanent" />
>            </rule>
>        </rules>
>    </rewrite>
>    ```
>
>- Remove the handler from the web.config:
>
>    ```xml
>    <system.web>
>        <httpHandlers>
>            <!-- You may have either of the following lines, depending on the extension you use -->
>            <!-- Remove this line -->
>            <add path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
>            <!-- Remove this line -->
>            <add path="Telerik.Web.UI.DialogHandler.ashx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
>        </httpHandlers>
>    </system.web>
>    
>    <system.webServer>
>        <handlers>
>            <!-- Ensure you have this line -->
>            <remove name="Telerik_Web_UI_DialogHandler_aspx" />
>            <!-- You may have either of the following lines, depending on the extension you use -->
>            <!-- Remove this line -->
>            <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
>            <!-- Remove this line -->
>            <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.ashx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
>        </handlers>
>    </system.webServer>
>    ```
>
>- For **SharePoint** sites, **delete** the **Telerik.Web.UI.SpellCheckHandler.ashx** and **Telerik.Web.UI.DialogHandler.aspx** files that correspond to these handlers. You can find them in the following folders:
>
>    - SharePoint 2010: `C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources`
>    - SharePoint 2013: `C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\7.x.x.0__1f131a624888eeed\Resources`
>    - SharePoint 2016: `C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\7.x.x.0__1f131a624888eeed\Resources`
>
>You can test whether the handler is available by requesting the following URL under your application root: **Telerik.Web.UI.DialogHandler.aspx?checkHandler=true**
>
>When the handler is not available, you will get an error similar to the following:
>
>![Error when handler is not registered](https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/handler-not-registered.png?sfvrsn=a04bb79_1)
>
>**End of the deprecated solutions section**

## Notes

We would like to thank Erlend Leiknes, security consultant in Mnemonic AS, and Thanh Van Tien Nguyen, for responsibly disclosing this vulnerability to us and helping in its resolution.

## External References

[CVE-2017-9248](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9248)

## See Also
* [Security]({%slug general-information/security%})
* [RadEditor Security article]({%slug editor/security%})
* [Allows JavaScriptSerializer Deserialization]({%slug common-allows-javascriptserializer-deserialization%})
* [RadAsyncUpload Security article]({%slug asyncupload-security%})
* [Unrestricted File Upload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/unrestricted-file-upload)
* [Insecure Direct Object Reference](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/insecure-direct-object-reference)
* [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance blog post (CVE-2019-18935)](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance)
