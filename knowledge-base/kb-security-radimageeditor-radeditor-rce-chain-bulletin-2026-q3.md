---
title: Critical Security Bulletin - RadImageEditor and RadEditor CVE-2026-18672 and CVE-2026-19219 (2026 Q3)
description: "Critical security bulletin for CVE-2026-18672 and CVE-2026-19219 affecting RadImageEditor and RadEditor DialogHandler through 2026.2.708 and fixed in 2026.3.812."
slug: kb-security-radimageeditor-radeditor-rce-chain-bulletin-2026-q3
tags: security, vulnerability, CVE-2026-18672, CVE-2026-19219, RadImageEditor, RadEditor, DialogHandler, 2026.3.812
res_type: kb
---

## Description

**[Critical Security Bulletin] – [2026 Q3]** – [CVE-2026-18672](https://www.cve.org/CVERecord?id=CVE-2026-18672), [CVE-2026-19219](https://www.cve.org/CVERecord?id=CVE-2026-19219)

- Progress® Telerik® UI for AJAX 2026 Q2 SP2 (2026.2.708) or earlier.

This bulletin covers `CVE-2026-18672` in `RadImageEditor` and `CVE-2026-19219` in `RadEditor` DialogHandler. A vulnerability in `RadImageEditor`, combined with a separate vulnerability affecting `RadEditor` dialog processing, can be chained by an unauthenticated remote attacker to obtain application configuration secrets and, from there, achieve Remote Code Execution (RCE) on the server hosting the application. This article describes the combined attack chain, its impact, and the actions required to remediate or mitigate the risk.

### What Are the Symptoms?

There are no visible symptoms. These vulnerabilities can be exploited silently without causing application errors visible to the application owner. Successful exploitation leaves no obvious trace in standard ASP.NET error logs.

### What Are the Impacts?

An unauthenticated remote attacker who successfully exploits this vulnerability chain can execute arbitrary code on the web server with the privileges of the application pool identity. This may result in full server compromise, data exfiltration, or further lateral movement within the hosting environment.

### Affects

| Component | Affected Version | Fixed Version |
|---|---|---|
| RadImageEditor | `>= 2011.2.712` && `<= 2026.2.708` | `>= 2026.3.812` (2026 Q3) |
| RadEditor (DialogHandler) | `>= 2011.2.712` && `<= 2026.2.708` | `>= 2026.3.812` (2026 Q3) |

> Our only official recommendation is to upgrade to the patched release following the [Upgrade to a Newer Version](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version) documentation. If you cannot upgrade immediately, visit the [Mitigation](#mitigation) section for temporary mitigation options.

If you have any questions or concerns related to this issue, please [log in to open a new Technical Support case](https://prgress.co/DevToolsSupport). If your version is no longer supported as part of the [Telerik UI for ASP.NET AJAX Release History](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history), you should upgrade to a supported and fixed version.

## Issue

- CWE-22: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')
- CWE-345: Insufficient Verification of Data Authenticity
- CWE-434: Unrestricted Upload of File with Dangerous Type

In Progress Telerik UI for ASP.NET AJAX before version 2026.3.812 (2026 Q3), a path traversal vulnerability in `RadImageEditor` can expose application configuration secrets. Where those secrets are then obtained, a separate vulnerability in `RadEditor` dialog processing allows an unauthenticated remote attacker to combine the two to achieve Remote Code Execution on the server.

## Solution

We have addressed both vulnerabilities and the Progress Telerik team strongly recommends performing an upgrade to 2026.3.812 (2026 Q3) or later, which fixes both `RadImageEditor` and the `RadEditor` dialog-processing issue.

For all customers on a current maintenance agreement, the upgrade can be accessed by logging into the [Product Downloads | Your Account](https://www.telerik.com/account/downloads/product-download?product=RCAJAX). Customers that are not on a current maintenance agreement should [contact a Progress account representative](https://www.telerik.com/account).

To confirm your current version of Telerik UI for ASP.NET AJAX, open your project in Visual Studio and check the version of Telerik.Web.UI.dll in the References, or see [How to determine which version of Telerik UI for ASP.NET AJAX you are using](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-assembly-version).

## Mitigation

Upgrading is the only remediation that fully closes this chain. There is no configuration that mitigates the `RadImageEditor` half of the chain prior to upgrading, and that half can be used to obtain any `DialogParametersEncryptionKey` an application has configured, which means key secrecy cannot be relied on to fully stop this specific chain. The measures below reduce risk in the interim but should not be treated as a substitute for upgrading.

- Confirm the application pool identity does not have write access to the web application root, and disable script execution on any folder it can write to.
- Remove the affected `RadImageEditor` and `RadEditor` controls from the page(s) until you can upgrade.
- Do not treat blocking a literal request such as `/Telerik.Web.UI.WebResource.axd?type=iec` as a complete or confirmed mitigation. The repository does not establish that this query-string filter covers every handler mapping, alternate URL, encoding, casing, or configured `HttpHandlerUrl`. A request filter may reduce one observed route or break Image Editor functionality, but it does not replace upgrading to `2026.3.812` or later.
- If the dialog/file-browser functionality is not required by your application, disable the dialog handler `Telerik.Web.UI.DialogHandler.aspx` in web.config:
     ```xml
     <system.web>
          <httpHandlers>
               <!-- Remove or comment the following line -->
               <add path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false" />
          </httpHandlers>
     </system.web>
     <system.webServer>
          <handlers>
               <!-- Ensure you have this line -->
               <remove name="Telerik_Web_UI_DialogHandler_aspx" />
               <!-- Remove or comment the following line -->
               <add name="Telerik_Web_UI_DialogHandler_aspx" path="Telerik.Web.UI.DialogHandler.aspx" type="Telerik.Web.UI.DialogHandler" verb="*" preCondition="integratedMode" />
          </handlers>
     </system.webServer>
     ```

### Verify the Effective Handler Configuration

The absence of `Telerik.Web.UI.DialogHandler` from one `system.web/httpHandlers` section does not by itself prove that the handler is inactive. ASP.NET and IIS configuration can be inherited from parent files, and the application can use an IIS mapping under `system.webServer/handlers` instead. Check the effective configuration for the deployed application, including parent and nested `web.config` files, in addition to the source `web.config`.

IIS does not provide a single switch that reliably lists every handler loaded at runtime by an ASP.NET application. Use the IIS Manager **Handler Mappings** view or the supported IIS configuration tools to inspect the effective `system.webServer/handlers` section for the site and application. Treat this as configuration evidence, not as proof that an endpoint cannot be reached.

When reviewing the mappings, search for entries whose `path` and `type` reference `Telerik.Web.UI.DialogHandler`. Do not assume that the `.aspx` example above is the only possible registration. Check for other configured extensions, such as `.ashx` or `.axd`, custom paths, and a `DialogHandlerUrl` value used by an application. Remove or deny each mapping only when the application does not require the related dialog or file-browser functionality.

After reviewing the effective configuration, test each documented endpoint that is actually configured in the deployment with a controlled request. A handler-check response or a rejected request tests that particular path only; it does not prove that all alternate paths, inherited mappings, or related vulnerabilities are closed. Continue to treat upgrading to `2026.3.812` or later as the only complete remediation.

## Notes

- If you have any questions or concerns related to this issue, open a new Technical Support case in [Your Account | Support Center](https://www.telerik.com/account/support-center/contact-us/). Technical Support is available to customers with an active support plan.
- We would like to thank the researchers at TantoSec for their responsible disclosure and cooperation.

## External References

### Related CVEs

The following individual vulnerabilities contribute to the chained RCE scenario described above. Each has a dedicated KB article with per-vulnerability details.

* [RadImageEditor Path Traversal Vulnerability (CVE-2026-18672)]({%slug kb-security-rie-path-traversal-cve-2026-18672%})
* [DialogHandler UploadPaths Tampering Vulnerability (CVE-2026-19219)]({%slug kb-security-dialoghandler-uploadpaths-tampering-cve-2026-19219%})

---

[CVE-2026-18672](https://www.cve.org/CVERecord?id=CVE-2026-18672) (High)

**CVSS:** 7.5 / High (CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N)

In Progress® Telerik® UI for AJAX prior to v2026.3.812, a path traversal vulnerability in `RadImageEditor` may allow an unauthenticated attacker to read file contents outside the intended image directories.

Discoverer Credit: Marcio Almeida of TantoSec

---

[CVE-2026-19219](https://www.cve.org/CVERecord?id=CVE-2026-19219) (High) 

**CVSS:** 8.1 / High (CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H)

In Progress® Telerik® UI for AJAX prior to v2026.3.812, insufficient integrity protection of dialog request parameters may allow an attacker with certain application key material to influence server-side file operations, which can lead to remote code execution.

Discoverer Credit: Marcio Almeida of TantoSec
