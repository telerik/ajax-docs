---
title: Insecure Direct Object Reference in RadAsyncUpload
description: Insecure Direct Object Reference in RadAsyncUpload. Check it now!
type: how-to
page_title: Insecure Direct Object Reference in RadAsyncUpload
slug: asyncupload-insecure-direct-object-reference
res_type: kb
---

## Problem

Security vulnerability [CVE-2017-11357](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11357): user input is used directly by RadAsyncUpload without modification or validation.

## Description

An exploit can result in arbitrary file uploads in a limited location and/or remote code execution.

## Solutions

>caption Update from Jan 5, 2021

Due to the .NET JavaScriptSerializer Deserialization ([CVE-2019-18935](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18935)) vulnerability, we strongly recommend upgrading to R1 2020 (version 2020.1.114) or later since the patches provided for [CVE-2017-1135](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11357), [CVE-2014-2217](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-2217) and [CVE-2017-11317](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11317) do not prevent it.   
  
Only the upgrade to R1 2020 (2020.1.114) or later can prevent the known vulnerabilities at the time of writing.  
  
You can find more details and instructions at [Allows JavaScriptSerializer Deserialization](https://www.telerik.com/support/kb/aspnet-ajax/details/allows-javascriptserializer-deserialization?_ga=2.47010279.1514756545.1609746144-426342040.1588420200) and [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance).  
  
Also check the FAQ section at the end of the [Security article](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security?&amp;_ga=2.240996419.1514756545.1609746144-426342040.1588420200#frequently-asked-questions).

## Deprecated solutions

>caption
>
>**Start of the deprecated solutions section:**
>
>To ensure your application is not exposed to risk, there are several mitigation paths. The recommended approach is to upgrade to the latest version and follow the steps in the [RadAsyncUpload Security article](https://docs.>telerik.com/devtools/aspnet-ajax/controls/asyncupload/security). You can find other alternatives below.
>
>**Update from 8 Sep 2017:** You should follow one of these options even if you are not using RadAsyncUpload in your application.  
>**Update from 23 Oct 2019:** Information on avoiding the issue through general web.config networking settings was removed because it is not sufficiently safe.
>
>- Use a patch for versions between Q1 2011 (2011.1.315) and R2 2017 SP1 (2017.2.621).
>- If you are on active maintenance, upgrade to R2 2017 SP2 (2017.2.711) or later.
>
> **NOTE:** The patches are **not** available on the Telerik NuGet feed.
>
> **NOTE:** If you are targeting .NET 3.5, review the [FIPS Compatibility article](http://docs.telerik.com/devtools/aspnet-ajax/controls/fips-compatibility), because the encryption issue it describes also pertains to these >patches.
>
>---
>
>#### Use a patch for versions between Q1 2011 (2011.1.315) and R2 2017 SP1 (2017.2.621)
>
>The R2 2017 SP2 release brings a fix and the ability to disable uploads for the first time. This fix was ported in the patches.
>
>Download a patched version from your Telerik.com account **after the 15th of August 2017**. If you downloaded it earlier, download it again, because the file was updated since its [original creation](https://www.telerik.com/>support/kb/aspnet-ajax/details/cryptographic-weakness).
>
>Steps to get the patch:
>1. Go to your [Telerik.com account](https://www.telerik.com/account/product-download?product=RCAJAX).

>2. From the Version dropdown, select your release:

>   ![Version Dropdown](images/asyncupload-insecure-direct-object-reference-version-dropdown.png)

>3. Download the `SecurityPatch_<your_version>.zip` file.

>4. [Replace the Telerik.Web.UI assembly in your application](http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade) >with the one of the same version that you just downloaded. Temporary files saved to the disk by RadAsyncUpload will now have the `.tmp` extension.

>5. *(Updated on 23 Oct 2019):* Set the encryption keys described in the [RadAsyncUpload Security article](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security).
>
>This patch brings an added security measure. After applying the patched DLL, you can now [disable file uploads through the Telerik handler](http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/>security#disableasyncuploadhandler). To do that, set the **Telerik.Web.DisableAsyncUploadHandler** key in the `appSettings` section of your web.config to **true**. You can then [create a custom handler](http://docs.telerik.>com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler) with the desired level of security.
>
> **NOTE:** Due to technical feasibility, the following versions do not have patches for this issue:
> 
> - Q1 2011 SP2 (2011.1.519)
> - Q2 2011 SP1 (2011.2.915)
> - Q3 2011 SP1 (2011.3.1305)
> - Q1 2012 SP1 (2012.1.411)
> - Q2 2012 SP2 (2012.2.912)
>
>The patched version shows "Telerik.Web.UI.Patch" in the File Description under Properties in Windows Explorer:
>
>![Patched Version](images/asyncupload-insecure-direct-object-reference-patched-version.png)
>
>---
>
>#### Upgrade to R2 2017 SP2 (2017.2.711) or later if you're on active maintenance
>
>1. [Upgrade your Telerik UI for ASP.NET AJAX version](http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/>upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax) to R2 2017 SP2 (2017.2.711) or later.
>2. Set the encryption keys as explained in the [RadAsyncUpload Security article](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security).
>
>The R2 2017 SP2 (2017.2.711) release brings an additional security measure. It allows you to [disable file uploads through the Telerik handler](http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/>security#disableasyncuploadhandler). To do that, set the **Telerik.Web.DisableAsyncUploadHandler** key in the `appSettings` section of your web.config to **true**. You can then [create a custom handler](http://docs.telerik.>com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler) with the desired level of security.
>
>**End of the deprecated solutions section**


## Notes

We would like to thank Paul Taylor / Foregenix Ltd and Markus Wulftange of Code White GmbH for assisting with making the information public.


## External References

[CVE-2017-11357](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11357)

# See Also

 - [Security]({%slug general-information/security%})

 - [Cryptographic Weakness](https://www.telerik.com/support/kb/aspnet-ajax/details/cryptographic-weakness)
 
 - [Unrestricted File Upload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/unrestricted-file-upload)
 
 - [Allows JavaScriptSerializer Deserialization](https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/allows-javascriptserializer-deserialization)
 
 - [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance blog post (CVE-2019-18935)](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance)
 
 - [UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler)
 
 - [Implications for Sitefinity websites](http://knowledgebase.progress.com/articles/Article/resolving-security-vulnerability-cve-2017-9248)


