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


<style>
    input.collapse-panel-toggle-checkbox {
        display: none;
    }


    .collapse-panel-toggle-lable {
        display: block;
        padding: 1rem;
        background: #f9edc6;
        cursor: pointer;
        transition: all 0.25s ease-out;
    }

        .collapse-panel-toggle-lable::before {
            content: ' ';
            display: inline-block;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid currentColor;
            vertical-align: middle;
            margin-right: .7rem;
            transform: translateY(-2px);
            transition: transform .2s ease-out;
        }

    .collapse-panel-toggle-checkbox:checked + .collapse-panel-toggle-lable::before {
        transform: rotate(90deg) translateX(-3px);
    }


    .collapse-panel-content-wrapper {
        max-height: 0px;
        overflow: hidden;
        transition: max-height .25s ease-in-out;
    }


    .collapse-panel-toggle-checkbox:checked + .collapse-panel-toggle-lable + .collapse-panel-content-wrapper {
        max-height: unset;
        overflow: auto;
    }


    .collapse-panel-content-wrapper .collapse-panel-content {
        background: rgba(249,237,198, .2);
        border-bottom: 1px solid rgba(249,237,198, .45);
        padding: .5rem 1rem;
    }

    .collapse-panel-content-wrapper p {
        margin-bottom: 0;
    }
</style>
<!--[if IE]>
<style>
    .collapse-panel-content-wrapper {
        max-height: none;
    }
</style>
<![endif]-->

<div class="collapse-panel">
    <input id="collapse-panel-checkbox" class="collapse-panel-toggle-checkbox" type="checkbox">
    <label for="collapse-panel-checkbox" class="collapse-panel-toggle-lable">Deprecated Solutions</label>
    <div class="collapse-panel-content-wrapper">
        <div class="collapse-panel-content">
            <p>
<p>To ensure your application is not exposed to risk, there are several mitigation paths.The recommended approach is to upgrade to the latest version and follow the steps in the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a>. You can find the other alternatives below.</p>

<p><strong>Update from 8 Sep 2017:</strong> You should follow one of these options even if you are not using RadAsyncUpload in your application.<br>
<strong>Update from 23 Oct 2019:</strong>&nbsp;Information on avoiding the issue through general web.config networking settings was removed because it is not sufficiently safe.</p>

<ul>
<li>Use a patch&nbsp;for versions between Q1 2011 (2011.1.315)&nbsp;and R2 2017 SP1 (2017.2.621).</li>
<li>If you are on active maintenance,&nbsp;upgrade to R2 2017 SP2 (2017.2.711) or later.</li>
</ul>

<p>NOTE: The patches are&nbsp;<strong>not</strong>&nbsp;available on the Telerik NuGet feed.</p>

<p>NOTE: If you are targeting .NET 3.5, review the&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/fips-compatibility">FIPS Compatibility article</a>, because the encryption issue it describes also pertains to these patches.</p>

<hr>

<h4>Use a patch for versions between Q1 2011 (2011.1.315)&nbsp;and R2 2017 SP1 (2017.2.621)</h4>

<p>The R2 2017 SP2 release brings a fix and the ability to disable uploads for the first time. This fix was ported in the patches.</p>

<p>Download a patched version&nbsp;from your Telerik.com account&nbsp;<strong>after the 15th of August 2017</strong>. If you downloaded it earlier, download it again, because the file was updated since its <a href="https://www.telerik.com/support/kb/aspnet-ajax/details/cryptographic-weakness">original creation</a>. Here is how to get the patch:</p>

<ol>
<li><p>Go to your&nbsp;<a href="https://www.telerik.com/account/product-download?product=RCAJAX">telerik.com account</a>.</p></li>
<li><p>From the Version dropdown, select your release:&nbsp;<br>
<img src="images/asyncupload-insecure-direct-object-reference-version-dropdown.png" alt="How to select your Telerik.Web.UI version"></p></li>
<li><p>Download the&nbsp;SecurityPatch_&lt;your_version&gt;.zip&nbsp;file.</p></li>
<li><p><a href="http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade">Replace the Telerik.Web.UI assembly in your application</a>&nbsp;with the one of the same version that you just downloaded. Temporary files saved to the disk by RadAsyncUpload will now have the <code>.tmp</code> extension.</p></li>
<li><p>*<em>(Updated on 23 Oct 2019): *</em>Set the encryption keys described in the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a>.</p></li>
</ol>

<p>This patch brings an added security measure. After applying the patched DLL, you can now&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#disableasyncuploadhandler">disable file uploads through the Telerik handler</a>. To do that, set the&nbsp;<strong>Telerik.Web.DisableAsyncUploadHandler</strong>&nbsp;key in the appSettings section of your web.config to&nbsp;<strong>true</strong>. You can then&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler">create a custom handler</a>&nbsp;with the desired level of security. If you do that, see the&nbsp;<a href="https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler">UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler</a>&nbsp;KB article.</p>

<p><strong>NOTE</strong>: Due to technical feasibility, the following versions do&nbsp;not&nbsp;have patches for this issue:</p>

<ul>
<li>Q1 2011 SP2 (2011.1.519)</li>
<li>Q2 2011 SP1 (2011.2.915)</li>
<li>Q3 2011 SP1 (2011.3.1305)</li>
<li>Q1 2012 SP1 (2012.1.411)</li>
<li>Q2 2012 SP2 (2012.2.912)</li>
</ul>

<p>The patched version shows "Telerik.Web.UI.Patch" in the File Description under Properties in Windows Explorer:</p>

<p>How to spot a patched version of Telerik.Web.UI.dll:</p>

<p><img src="images/asyncupload-insecure-direct-object-reference-patched-version.png" alt="How a patched version looks like"></p>

<p>Source code&nbsp;for building a&nbsp;patched&nbsp;version and&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/deployment/protecting-the-telerik-asp.net-ajax-assembly">protecting the Telerik.Web.UI assembly</a>&nbsp;is available as well. If you downloaded it before the 15th of August 2017, you can download it again, because the file was updated.</p>

<hr>

<h4>Upgrade to&nbsp;R2 2017 SP2&nbsp;(2017.2.711) or later if you’re on active maintenance.</h4>

<ol>
<li>
<a href="http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax">Upgrade&nbsp;your Telerik UI for ASP.NET AJAX version</a>to&nbsp;R2 2017 SP2&nbsp;(2017.2.711) or later.</li>
<li>Set the encryption keys as explained in the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a>.</li>
</ol>

<p>The R2 2017 SP2 (2017.2.711) release brings an additional security measure. It allows you to&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#disableasyncuploadhandler">disable file uploads through the Telerik handler</a>. To do that, set the&nbsp;<strong>Telerik.Web.DisableAsyncUploadHandler</strong>&nbsp;key in the appSettings section of your web.config to&nbsp;<strong>true</strong>. You can then&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler">create a custom handler</a> with the desired level of security. If you do that, see the&nbsp;<a href="https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler">UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler</a>&nbsp;KB article.</p>

            </p>
        </div>
    </div>
</div>



## Notes

We would like to thank Paul Taylor / Foregenix Ltd and Markus Wulftange of Code White GmbH for assisting with making the information public.


## External References

[CVE-2017-11357](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11357)

# See Also

 - [Cryptographic Weakness](https://www.telerik.com/support/kb/aspnet-ajax/details/cryptographic-weakness)
 
 - [Unrestricted File Upload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/unrestricted-file-upload)
 
 - [Allows JavaScriptSerializer Deserialization](https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/allows-javascriptserializer-deserialization)
 
 - [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance blog post (CVE-2019-18935)](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance)
 
 - [UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler)
 
 - [Implications for Sitefinity websites](http://knowledgebase.progress.com/articles/Article/resolving-security-vulnerability-cve-2017-9248)


