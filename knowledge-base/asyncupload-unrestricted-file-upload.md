---
title: Unrestricted File Upload in RadAsyncUpload
description: Unrestricted File Upload in RadAsyncUpload. Check it now!
type: how-to
page_title: Unrestricted File Upload in RadAsyncUpload
slug: asyncupload-unrestricted-file-upload
res_type: kb
---

## Problem

Security vulnerabilities [CVE-2014-2217](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-2217) and [CVE-2017-11317](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11317): weak encryption has been used in old versions of Telerik.Web.UI to encrypt data used by RadAsyncUpload.

## Description

An exploit can result in arbitrary file uploads and/or remote code execution.

## Solutions

>caption Update from Jan 5, 2021

Due to the .NET JavaScriptSerializer Deserialization ([CVE-2019-18935](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18935)) vulnerability, we strongly recommend upgrading to R1 2020 (version 2020.1.114) or later since the patches provided for [CVE-2014-2217](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-2217) and [CVE-2017-11317](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11317) do not prevent it.   
  
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
<p>Below is a Table of Contents that will help you to follow the correct instructions for your version.</p>

<ol>
<li>Introduction</li>
<li>Mitigation paths for all versions:&nbsp;&nbsp; 

<ol>
<li>Instructions for versions between Q1 2011 (2011.1.315) and R3 2016 SP2 (2016.3.1027)</li>
<li>Instructions for versions between R1 2017 (2017.1.118) and R2 2017 SP1 (2017.2.621)</li>
<li>Instructions for versions between R2 2017 SP2 (2017.2.711) and R3 2019 (2019.3.917)</li>
<li>Instructions for versions R3 2019 SP1 (2019.3.1023) and later</li>
</ol>
</li>
<li>What is the patch</li>
<li>How to obtain and apply the patch</li>
<li>How to spot a patched version of Telerik.Web.UI.dll</li>
<li>Notes</li>
<li>External References</li>
<li>See Also</li>
</ol>

<h3 id="introduction"><a href="#introduction"><strong>Introduction</strong></a></h3>

<p><strong>Update from 8 Sep 2017</strong>: You <em>should</em> follow one of these options even if you are not using RadAsyncUpload in your application.</p>

<p><strong>Update from 23 Oct 2019:</strong> Information on avoiding the issue through general web.config networking settings was removed because it is not sufficiently safe. General readability and information structure improvements were made as well.</p>

<p>To ensure your application is not exposed to risk, there are several mitigation paths that ensure different level of security. The recommended approach with the highest level of security is using the Latest version of the controls and following the recommendations of the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a>.</p>

<hr>

<h3 id="versions-between-q1-2011-20111315and-r3-2016-sp2-201631027"><a href="#versions-between-q1-2011-20111315and-r3-2016-sp2-201631027"><strong>Versions between Q1 2011 (2011.1.315)&nbsp;and R3 2016 SP2 (2016.3.1027)</strong></a></h3>

<p><strong>NOTE</strong>: Due to technical feasibility, the following versions do&nbsp;not&nbsp;have patches for this issue and need to be upgraded and the steps for the new version to be followed:</p>

<ul>
<li>Q1 2011 SP2 (2011.1.519)</li>
<li>Q2 2011 SP1 (2011.2.915)</li>
<li>Q3 2011 SP1 (2011.3.1305)</li>
<li>Q1 2012 SP1 (2012.1.411)</li>
<li>Q2 2012 SP2 (2012.2.912)</li>
</ul>

<p><strong><em>Required steps:</em></strong></p>

<p><strong><em>Step 1:&nbsp;</em></strong>Follow the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security"><em>RadAsyncUpload Security article</em></a> and set all encryption keys.</p>

<p><em>**Step 2: *</em>*Depending on project requirements and active maintenance licenses, there are a few options to pursue:</p>

<p><strong><em>Option 1:</em></strong>Upgrade to R2 2017 SP2 (2017.2.911) or later and follow the steps for the chosen version.</p>

<p><strong><em>Option 2:</em></strong>Apply a patch and <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#disableasyncuploadhandler">disable the built-in RadAsyncUpload handler</a>.</p>

<p><strong><em>&nbsp;</em></strong></p>

<p><strong><em>Recommended steps for improved security:&nbsp;</em></strong></p>

<p>Important encryption improvements were implemented in R2 2017 SP2 (2017.2.711) that improve the security of the control and we strongly recommend using that version or a newer one.</p>

<p><strong><em>Tip 1:</em></strong>&nbsp;Upgrade to R3 2019 SP1 or later because it contains <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes">custom metadata whitelisting feature</a>.</p>

<p><strong><em>Tip 2:</em></strong> Follow the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a> and set all encryption keys.</p>

<hr>

<h3 id="versions-between-r1-2017-20171118-and-r2-2017-sp1-20172621"><a href="#versions-between-r1-2017-20171118-and-r2-2017-sp1-20172621"><strong>Versions between R1 2017 (2017.1.118) and R2 2017 SP1 (2017.2.621)</strong></a></h3>

<p>The official versions&nbsp;between R1 2017 (2017.1.118) and R2 2017 SP1 (2017.2.621) have the&nbsp;<a href="https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/insecure-direct-object-reference">Insecure Direct Object Reference</a> vulnerability if the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#configuration-keys-details">Custom Encryption keys</a>&nbsp;are not set.</p>

<p><strong><em>Required steps:</em></strong></p>

<p><strong><em>Option 1:</em></strong>Apply a patch and <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#disableasyncuploadhandler">disable the built-in RadAsyncUpload handler</a>.</p>

<p><strong><em>Option 2:</em></strong> ** **Upgrade to R2 2017 SP2 or later and follow the steps for the chosen version.</p>

<p><strong><em>Recommendations for improved security :</em></strong></p>

<p><strong><em>Tip 1:</em></strong> Upgrade to R3 2019 SP1 or later because it contains&nbsp;<a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes">custom metadata whitelisting feature</a>.</p>

<hr>

<h3 id="versions-between-r2-2017-sp2-20172711-and-r3-2019-20193917"><a href="#versions-between-r2-2017-sp2-20172711-and-r3-2019-20193917"><strong>Versions between R2 2017 SP2 (2017.2.711) and R3 2019 (2019.3.917)</strong></a></h3>

<p><strong><em>Required steps:</em></strong></p>

<p><strong><em>Step 1</em></strong> <strong><em>:</em></strong> ** **Follow the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security"><em>RadAsyncUpload Security article</em></a> and set all encryption keys.</p>

<p><strong><em>Recommendations for improved security:</em></strong></p>

<p><strong><em>Tip 1:</em></strong> Upgrade to R3 2019 SP1 or later because it contains&nbsp;<a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes">custom metadata whitelisting feature</a>.</p>

<hr>

<h3 id="versions-r3-2019-sp1-201931023-and-later"><a href="#versions-r3-2019-sp1-201931023-and-later"><strong>Versions R3 2019 SP1 (2019.3.1023) and later</strong></a></h3>

<p><strong><em>Required steps:&nbsp;</em></strong></p>

<p><strong><em>Step 1:</em></strong>Follow the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a> and set all encryption keys.</p>

<hr>

<h3 id="what-is-the-patch"><a href="#what-is-the-patch"><strong>What is the Patch</strong></a></h3>

<p>This is a Telerik.Web.UI.dll assembly, available for most versions between Q1 2011 and R2 2017 SP1. It provides the following abilities for older versions that are available built-in for versions R2 2017 SP2 or later:</p>

<ol>
<li>The temporary files in the TemporaryFolder are now saved with <em>**.</em><em>tmp</em> extension;</li>
<li>The built-in RadAsyncUpload handler can be disabled;</li>
</ol>

<p>You can follow the instruction in&nbsp;How to Obtain and Apply the Patch section to get and apply the patch for your version.</p>

<p><strong><em>Recommendations for improved security:</em></strong></p>

<p><strong><em>Tip 1:</em></strong>Upgrade to R3 2019 SP1 or later because it contains&nbsp;<a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#allowedcustommetadatatypes">custom metadata whitelisting feature</a>.</p>

<p><strong><em>Tip 2:</em></strong>Upgrade at least to R2 2017 SP2 because it contains significant security enhancements that fully fix the relevant security issues</p>

<hr>

<h3 id="how-to-obtain-and-apply-the-patch">
<a href="#how-to-obtain-and-apply-the-patch"><strong>How to Obtain and Apply the Patch</strong></a>&nbsp;</h3>

<p>Before proceeding with the patching procedure, please review the following notes:</p>

<p><strong><em>Note 1:</em></strong>&nbsp;If you are targeting .NET 3.5, review the&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/fips-compatibility">FIPS Compatibility article</a>, because the encryption issue it describes also pertains to these patches.</p>

<p><strong><em>Note 2:</em></strong>&nbsp;The patches are&nbsp;<strong><em>not</em></strong>&nbsp;available on the Telerik NuGet feed.</p>

<p><strong><em>Note 3:</em></strong>&nbsp;If you downloaded the patch before <strong>the 15th of August 2017</strong>, download and apply it again, because the file was updated since its&nbsp;<a href="https://www.telerik.com/support/kb/aspnet-ajax/details/cryptographic-weakness">original creation</a>.</p>

<p><strong><em>Note 4:</em></strong>&nbsp;Due to technical feasibility, the following versions do&nbsp;not&nbsp;have patches for this issue and need to be upgraded and the steps for the new version to be followed:</p>

<ul>
<li>Q1 2011 SP2 (2011.1.519)</li>
<li>Q2 2011 SP1 (2011.2.915)</li>
<li>Q3 2011 SP1 (2011.3.1305)</li>
<li>Q1 2012 SP1 (2012.1.411)</li>
<li>Q2 2012 SP2 (2012.2.912)</li>
</ul>

<h4>Here are the steps for obtaining and applying the patch:</h4>

<p><strong><em>Step 1:&nbsp;</em></strong>Go to your&nbsp;<a href="/devtools/aspnet-ajax/account/product-download?product=RCAJAX">telerik.com account</a>.</p>

<p><strong><em>Step 2:</em></strong>&nbsp;From the Version dropdown, select your release:</p>

<p><img src="images/asyncupload-insecure-direct-object-reference-version-dropdown.png" alt="How to select your Telerik.Web.UI version"></p>

<p><strong><em>Step 3:</em></strong>Download the&nbsp;S<em>ecurityPatch_&lt;your_version&gt;.zip</em>&nbsp;file (e.g. <em>SecurityPatch_2017.2.621.zip</em>);</p>

<p><strong><em>Step 4:</em></strong><a href="http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade">Replace the Telerik.Web.UI assembly in your application</a>&nbsp;with the one of the same version that you just downloaded</p>

<p><strong><em>Step 5:</em></strong> ** **Disable the handler as explained in the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security#disableasyncuploadhandler">RadAsyncUpload Security article</a>.</p>

<p><strong><em>Step</em></strong> <strong><em>6 (</em></strong> <strong>Added</strong> ** ** <strong>on</strong> ** 2** <strong>3</strong> ** Oct 2019):** Follow the <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/security">RadAsyncUpload Security article</a> and set all encryption keys.</p>

<p><strong><em>Step</em></strong> <strong><em>7</em></strong> <strong><em>:</em></strong>Verify the patch is applied</p>

<p>Once the built-in handler of RadAsyncUpload is disabled, the control <em>cannot be used</em>unless a <a href="https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/how-to/how-to-extend-the-radasyncupload-handler">Custom Handler</a> with the desired level of security is defined.</p>

<p>The custom metadata configuration whitelisting functionality further improves security. It is available&nbsp;as of R3 2019 SP1.</p>

<p>Source code&nbsp;for building a&nbsp;patched&nbsp;version and&nbsp;<a href="http://docs.telerik.com/devtools/aspnet-ajax/deployment/protecting-the-telerik-asp.net-ajax-assembly">protecting the Telerik.Web.UI assembly</a>&nbsp;is available as well.</p>

<h3 id="how-to-spot-a-patched-version-of-telerikwebuidll"><a href="#how-to-spot-a-patched-version-of-telerikwebuidll"><strong>How to Spot a Patched Version of Telerik.Web.UI.dll</strong></a></h3>

<p>The patched version shows "<em>Telerik.Web.UI.Patch</em>" in the File Description under Properties in Windows Explorer:</p>

<p><img src="images/asyncupload-insecure-direct-object-reference-patched-version.png" alt="How a patched version looks like"></p>
            </p>
        </div>
    </div>
</div>



## Notes

We would like to thank Paul Taylor / Foregenix Ltd and Markus Wulftange of Code White GmbH for assisting with making the information public.

## External References

 - [CVE-2014-2217](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2014-2217)

 - [CVE-2017-11317](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-11317)


## See Also

 - [Cryptographic Weakness](https://www.telerik.com/support/kb/aspnet-ajax/details/cryptographic-weakness)

 - [Insecure Direct Object Reference](https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/insecure-direct-object-reference)

 - [Allows JavaScriptSerializer Deserialization](https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/allows-javascriptserializer-deserialization)

 - [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance)

 - [UploadedFiles.SaveAs Throws FileNotFound Error with Custom Handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-%28async%29/details/uploadedfiles.saveas-throws-filenotfound-error-with-custom-handler)

 - [Implications for Sitefinity websites](http://knowledgebase.progress.com/articles/Article/resolving-security-vulnerability-cve-2017-9248)

