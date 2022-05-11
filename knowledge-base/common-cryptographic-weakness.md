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
<p>To ensure your application is not exposed to such a risk, there are three mitigation paths:</p>
<ul>
    <li>
    <p><a href="#full-patches">Use a patch</a> for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)</p>
    </li>
    <li>
    <p><a href="#partial-patches">Use a patch</a> for some versions between Q1 2011 (2011.1.315) and Q3 2012 SP2 (2012.3.1308)</p>
    </li>
    <li>
    <p>If you are on active maintenance,&nbsp;<a href="#upgrade-to-latest">upgrade to R2 2017 SP1 (2017.2.621) or later</a>.</p>
    </li>
    <li>
    <p><a href="#prevent-access">Prevent access to the Telerik Dialog Handler</a></p>
    </li>
</ul>
<p>NOTE: The patches are <strong>not</strong> available on the Telerik NuGet feed.</p>
<p>NOTE: If you are targeting .NET 3.5, review the<a href="http://docs.telerik.com/devtools/aspnet-ajax/controls/fips-compatibility"> FIPS Compatibility article</a>&nbsp;, because the encryption issue it describes also pertains to these patches.</p>
<hr >
<a id="full-patches"></a>
<h4>Use a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)</h4>
<p><strong>Download a patched version</strong> from your Telerik.com account <strong>after the 26th of June 2017</strong>:</p>
<ol>
    <li>Go to your <a href="/account/product-download?product=RCAJAX" target="_blank">telerik.com account</a>.</li>
    <li>From the Version dropdown, select your release: <p><img src="images/common-cryptographic-weakness-version-dropdown.png" alt="Version dropdown"></p></li>
    <li>Download the <span >SecurityPatch_&lt;your_version&gt;.zip</span> file.
    </li>
    <li>
    <a href="http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#manual-upgrade">Replace the Telerik.Web.UI assembly in your application</a> with the one of the same version that you just downloaded.
    </li>
    <li>Generate <strong>new unique keys</strong>&nbsp;for&nbsp;<strong>Telerik.Web.UI.DialogParametersEncryptionKey&nbsp;</strong>and&nbsp;<strong>MachineKey&nbsp;</strong>in your&nbsp;<strong>web.config</strong>. You can <a href="http://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/images/generate-keys-iis.png" title="" class="" target="">use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)</a>.</li>
</ol>
<p>The patched version shows "Telerik.Web.UI.Patch" in the File Description under Properties in Windows Explorer:</p>
<p>How to spot a patched version of Telerik.Web.UI.dll:</p>
<p><img src="images/common-cryptographic-weakness-patched-version-description.png" alt="Patched version description"></p>
<p><strong>Source code</strong> for building a <strong>patched </strong>version and <a href="http://docs.telerik.com/devtools/aspnet-ajax/deployment/protecting-the-telerik-asp.net-ajax-assembly">protecting the Telerik.Web.UI assembly</a> is available after <strong>14 Jul 2017</strong>.</p>
<hr >
<a id="partial-patches"></a>
<h4>Use a patch for versions between Q1 2011 (2011.1.315) and Q3 2012 SP2 (2012.3.1308)</h4>
<p>If you are on active maintenance,&nbsp;<strong>upgrade at least to Q1 2013 (2013.1.220)</strong> and follow the same approach for <a href="#full-patches">Using a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)</a>.</p>
<p>Due to technical feasibility, the following versions do <strong>not</strong> have patches for this issue:</p>
<ul>
    <li>Q1 2011 SP2 (2011.1.519)</li>
    <li>Q2 2011 SP1 (2011.2.915)</li>
    <li>Q3 2011 SP1 (2011.3.1305)</li>
    <li>Q1 2012 SP1 (2012.1.411)</li>
    <li>Q2 2012 SP2 (2012.2.912)</li>
</ul>
<p>If your version lists a <span >SecurityPatch_&lt;your_version&gt;.zip</span> file, you can follow the same approach for <a href="#full-patches">Using a patch for versions between Q1 2013 (2013.1.220) and R2 2017 (2017.2.503)</a>.</p>
<hr >
<a id="upgrade-to-latest"></a>
<h4>Upgrade to <strong>R2 2017 SP1</strong> (2017.2.621) or later.</h4>
<ol>
    <li>
    <a href="http://docs.telerik.com/devtools/aspnet-ajax/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax">
    <strong>Upgrade</strong> your Telerik UI for ASP.NET AJAX version
    </a> to <strong>R2 2017 SP1</strong> (2017.2.621) or later.
    </li>
    <li>
    <strong>Generate new keys</strong> for&nbsp;<strong>Telerik.Web.UI.DialogParametersEncryptionKey </strong>and <strong>MachineKey </strong>in your <strong><a href="http://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig">web.config</a></strong>. You can <a href="http://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/images/generate-keys-iis.png" title="" class="" target="">use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)</a>.</li>
</ol>
<hr >
<a id="prevent-access"></a>
<h4>Prevent access to the Telerik Dialog Handler</h4>
<p>An <strong>alternative</strong> to a fix or a patch is to prevent access to the Telerik DialogHandler. Note that this will make it impossible to use Telerik built-in dialogs for RadEditor and RadSpell.</p>
<p>There are different ways to do that, for example:</p>
<ul>
    <li>
    <p>Add a firewall rule that rejects traffic to the handler.</p>
    </li>
    <li>
    <p>Add a URL redirect rule that returns an error page instead of the handler. Note that this will merely redirect the requests to a page of your choosing, usually with a 301 status code. Here is a basic example:<br>
    <br>
    </p>
    <pre class="prettyprint lang-undefined prettyprinted" style=""><span class="copy-code-btn" title="" id="copy-code-btn-0" data-original-title="Copy Code."><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g><polygon points="3,2 6,2 6,3 8,3 6,1 2,1 2,12 5,12 5,11 3,11"></polygon><path d="M10,4H6v11h8V8L10,4z M7,14V5h3v3h3v6H7z"></path></g></svg></span><code><span class="tag">&lt;rewrite&gt;</span><span class="pln">
    </span><span class="tag">&lt;rules&gt;</span><span class="pln">
        </span><span class="tag">&lt;rule</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"DisableDialogHandler"</span><span class="pln"> </span><span class="atn">enabled</span><span class="pun">=</span><span class="atv">"true"</span><span class="pln"> </span><span class="atn">stopProcessing</span><span class="pun">=</span><span class="atv">"true"</span><span class="tag">&gt;</span><span class="pln">
            </span><span class="tag">&lt;match</span><span class="pln"> </span><span class="atn">url</span><span class="pun">=</span><span class="atv">"^Telerik.Web.UI.DialogHandler.*?$"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
            </span><span class="tag">&lt;action</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"Redirect"</span><span class="pln"> </span><span class="atn">url</span><span class="pun">=</span><span class="atv">"not-allowed.aspx"</span><span class="pln"> </span><span class="atn">redirectType</span><span class="pun">=</span><span class="atv">"Permanent"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
        </span><span class="tag">&lt;/rule&gt;</span><span class="pln">
    </span><span class="tag">&lt;/rules&gt;</span><span class="pln">
</span><span class="tag">&lt;/rewrite&gt;</span></code></pre>
    </li>
    <li>
    <p>Remove the handler from the web.config:</p>
   <pre class="prettyprint lang-undefined prettyprinted" style=""><span class="copy-code-btn" title="" id="copy-code-btn-0" data-original-title="Copy Code."><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g><polygon points="3,2 6,2 6,3 8,3 6,1 2,1 2,12 5,12 5,11 3,11"></polygon><path d="M10,4H6v11h8V8L10,4z M7,14V5h3v3h3v6H7z"></path></g></svg></span><code><span class="tag">&lt;system.web&gt;</span><span class="pln">
    </span><span class="tag">&lt;httpHandlers&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- You may have either of the following lines, depending on the extension you use --&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- Remove this line --&gt;</span><span class="pln">
        </span><span class="tag">&lt;add</span><span class="pln"> </span><span class="atn">path</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler.aspx"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler"</span><span class="pln"> </span><span class="atn">verb</span><span class="pun">=</span><span class="atv">"*"</span><span class="pln"> </span><span class="atn">validate</span><span class="pun">=</span><span class="atv">"false"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- Remove this line --&gt;</span><span class="pln">
        </span><span class="tag">&lt;add</span><span class="pln"> </span><span class="atn">path</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler.ashx"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler"</span><span class="pln"> </span><span class="atn">verb</span><span class="pun">=</span><span class="atv">"*"</span><span class="pln"> </span><span class="atn">validate</span><span class="pun">=</span><span class="atv">"false"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
    </span><span class="tag">&lt;/httpHandlers&gt;</span><span class="pln">
</span><span class="tag">&lt;/system.web&gt;</span><span class="pln">
</span><span class="tag">&lt;system.webServer&gt;</span><span class="pln">
    </span><span class="tag">&lt;handlers&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- Ensure you have this line --&gt;</span><span class="pln">
        </span><span class="tag">&lt;remove</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"Telerik_Web_UI_DialogHandler_aspx"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- You may have either of the following lines, depending on the extension you use --&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- Remove this line --&gt;</span><span class="pln">
        </span><span class="tag">&lt;add</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"Telerik_Web_UI_DialogHandler_aspx"</span><span class="pln"> </span><span class="atn">path</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler.aspx"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler"</span><span class="pln"> </span><span class="atn">verb</span><span class="pun">=</span><span class="atv">"*"</span><span class="pln"> </span><span class="atn">preCondition</span><span class="pun">=</span><span class="atv">"integratedMode"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
        </span><span class="com">&lt;!-- Remove this line --&gt;</span><span class="pln">
        </span><span class="tag">&lt;add</span><span class="pln"> </span><span class="atn">name</span><span class="pun">=</span><span class="atv">"Telerik_Web_UI_DialogHandler_aspx"</span><span class="pln"> </span><span class="atn">path</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler.ashx"</span><span class="pln"> </span><span class="atn">type</span><span class="pun">=</span><span class="atv">"Telerik.Web.UI.DialogHandler"</span><span class="pln"> </span><span class="atn">verb</span><span class="pun">=</span><span class="atv">"*"</span><span class="pln"> </span><span class="atn">preCondition</span><span class="pun">=</span><span class="atv">"integratedMode"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln">
    </span><span class="tag">&lt;/handlers&gt;</span><span class="pln">
</span><span class="tag">&lt;/system.webServer&gt;</span></code></pre>
    </li>
    <li>
    <p>For <strong>SharePoint </strong>sites, <strong>delete </strong>the <strong>Telerik.Web.UI.SpellCheckHandler.ashx </strong>and&nbsp;<strong>Telerik.Web.UI.DialogHandler.aspx&nbsp;</strong>files that correspond to these handlers. You can find them in the following folders:</p>
    <ul>
        <li>
        <p>SharePoint 2010: C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\6.x.x.0__1f131a624888eeed\Resources</p>
        </li>
        <li>
        <p>SharePoint 2013: C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\7.x.x.0__1f131a624888eeed\Resources</p>
        </li>
        <li>
        <p>SharePoint 2016: C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\7.x.x.0__1f131a624888eeed\Resources</p>
        </li>
    </ul>
    </li>
</ul>
<p>You can test whether the handler is available by requesting the following URL under you application root: <strong>Telerik.Web.UI.DialogHandler.aspx?checkHandler=true</strong></p>
<p>When the handler is not available, you will get an error similar to the following:<br>
<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/handler-not-registered.png?sfvrsn=a04bb79_1" data-displaymode="Original" alt="Error when handler is not registered" title="handler-not-registered"></p>

            </p>
        </div>
    </div>
</div>

## Notes

We would like to thank Erlend Leiknes, security consultant in Mnemonic AS, and Thanh Van Tien Nguyen, for responsibly disclosing this vulnerability to us and helping in its resolution.

## External References

[CVE-2017-9248](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-9248)

## See Also

* [RadEditor Security article]({%slug editor/security%})
* [Allows JavaScriptSerializer Deserialization]({%slug common-allows-javascriptserializer-deserialization%})
* [RadAsyncUpload Security article]({%slug asyncupload-security%})
* [Unrestricted File Upload](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/unrestricted-file-upload)
* [Insecure Direct Object Reference](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/insecure-direct-object-reference)
* [Blue Mockingbird Vulnerability Picks up Steam—Telerik Guidance blog post (CVE-2019-18935)](https://www.telerik.com/blogs/blue-mockingbird-vulnerability-telerik-guidance)
