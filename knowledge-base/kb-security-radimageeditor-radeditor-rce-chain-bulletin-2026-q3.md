---
title: Critical Security Bulletin - RadImageEditor and RadEditor Vulnerabilities Chained to Remote Code Execution (2026 Q3)
description: "Critical security bulletin - vulnerabilities in RadImageEditor and RadEditor dialog handling can be chained to achieve remote code execution."
slug: kb-security-radimageeditor-radeditor-rce-chain-bulletin-2026-q3
res_type: kb
---

## Description

**[Critical Security Bulletin] – [2026 Q3]** – [CVE-2026-18672](https://www.cve.org/CVERecord?id=CVE-2026-18672), [CVE-2026-19219](https://www.cve.org/CVERecord?id=CVE-2026-19219)

- Progress® Telerik® UI for AJAX 2026 Q2 SP2 (2026.2.708) or earlier.

A vulnerability in `RadImageEditor`, combined with a separate vulnerability affecting `RadEditor` dialog processing, can be chained by an unauthenticated remote attacker to obtain application configuration secrets and, from there, achieve Remote Code Execution (RCE) on the server hosting the application. This article describes the combined attack chain, its impact, and the actions required to remediate or mitigate the risk.

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

## Notes

- If you have any questions or concerns related to this issue, open a new Technical Support case in [Your Account | Support Center](https://www.telerik.com/account/support-center/contact-us/). Technical Support is available to customers with an active support plan.
- We would like to thank the researchers at TantoSec for their responsible disclosure and cooperation.

## External References

### Related CVEs

The following individual vulnerabilities contribute to the chained RCE scenario described above. Each has a dedicated KB article with per-vulnerability details.

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
