---
title: Critical Security Bulletin - Multiple Vulnerabilities Chained to Remote Code Execution (July 2026)
description: "Critical security bulletin for July 2026 - multiple vulnerabilities in RadAsyncUpload, RadPersistenceManager, and RadDockLayout can be chained to achieve unauthenticated remote code execution."
slug: kb-security-critical-rce-chain-bulletin-july-2026
res_type: kb
---

## Description

**[Critical Security Bulletin] – [July 2026]** – [CVE-2026-13181](https://www.cve.org/CVERecord?id=CVE-2026-13181), [CVE-2026-13182](https://www.cve.org/CVERecord?id=CVE-2026-13182), [CVE-2026-13183](https://www.cve.org/CVERecord?id=CVE-2026-13183), [CVE-2026-13184](https://www.cve.org/CVERecord?id=CVE-2026-13184), [CVE-2026-13185](https://www.cve.org/CVERecord?id=CVE-2026-13185), [CVE-2026-13186](https://www.cve.org/CVERecord?id=CVE-2026-13186), [CVE-2026-13190](https://www.cve.org/CVERecord?id=CVE-2026-13190)

- Progress® Telerik® UI for AJAX 2026 Q2 (2026.2.519) or earlier.

Multiple high security vulnerabilities have been confirmed in Telerik UI for ASP.NET AJAX affecting the RadAsyncUpload, RadPersistenceManager, and RadDockLayout components. When chained together, these vulnerabilities can allow an unauthenticated remote attacker to achieve Remote Code Execution (RCE) on the server hosting the application. This article describes the combined attack chain, its impact, and the actions required to remediate or mitigate the risk.

### What Are the Symptoms?

There are no visible symptoms. These vulnerabilities can be exploited silently without causing application errors visible to the application owner. Successful exploitation leaves no obvious trace in standard ASP.NET error logs.

### What Are the Impacts?

An unauthenticated remote attacker who successfully exploits this vulnerability chain can execute arbitrary code on the web server with the privileges of the application pool identity. This may result in full server compromise, data exfiltration, or further lateral movement within the hosting environment.

### Affects

| Component | Affected Version | Fixed Version |
|---|---|---|
| RadAsyncUpload | `>= 2010.1.309` && `<= 2026.2.519` | `>= 2026.2.708` (2026 Q2 SP1) |
| RadPersistenceManager | `>= 2013.1.220` && `<= 2026.2.519` | `>= 2026.2.708` (2026 Q2 SP1) |
| RadDockLayout | `>= 2013.1.220` && `<= 2026.2.519` | `>= 2026.2.708` (2026 Q2 SP1) |

> Our only official recommendation is to upgrade to the patched release following the [Upgrade to a Newer Version](https://www.telerik.com/products/aspnet-ajax/documentation/upgrade-compatibility/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version) documentation. If you cannot upgrade immediately, visit the [Mitigation](#mitigation) section for temporary mitigation options.

### Applicability when listed components are not used

If an application does not use `RadAsyncUpload`, `RadPersistenceManager`, or `RadDockLayout`, the attack paths requiring those controls or their documented persistence providers may not apply. Verify this condition against the deployed application rather than relying only on page markup: check inherited and nested configuration, IIS handler mappings, custom handlers or alternate handler URLs, and any persistence provider or layout repository configured outside the page.

This component-specific assessment does not establish that an older Telerik UI for ASP.NET AJAX release is safe overall. Other Telerik controls, handlers, and advisories have separate applicability conditions. The application version, deployed assemblies, enabled features, and effective configuration must be reviewed before deciding that an upgrade is unnecessary. The official recommendation remains upgrading to a supported release that contains the applicable security fixes.

### Assembly presence versus reachable functionality

Deploying `Telerik.Web.UI.dll` alone does not establish that any one of these seven CVEs is exploitable. Each documented path also depends on the corresponding feature and its runtime conditions:

| CVE | Feature and condition to verify |
|---|---|
| [CVE-2026-13181]({%slug kb-security-rau-asyncuploadtypename-deserialization-cve-2026-13181%}) | `RadAsyncUpload` metadata processing and a reachable built-in or custom upload handler. |
| [CVE-2026-13182]({%slug kb-security-rau-padding-oracle-cve-2026-13182%}) | `RadAsyncUpload` client-state processing and a reachable endpoint that exposes the documented decrypt/parse behavior. |
| [CVE-2026-13183]({%slug kb-security-rau-timing-oracle-cve-2026-13183%}) | `RadAsyncUpload` upload-metadata processing and a reachable upload handler. |
| [CVE-2026-13184]({%slug kb-security-rau-unauth-deserialization-chain-cve-2026-13184%}) | `RadAsyncUpload` processing together with the documented key or machine-key configuration conditions. |
| [CVE-2026-13185]({%slug kb-security-persistence-cookie-deserialization-cve-2026-13185%}) | Cookie-backed `RadPersistenceManager` storage or `RadDockLayout` cookie persistence, with the persisted state processed. |
| [CVE-2026-13186]({%slug kb-security-appdata-path-traversal-deserialization-cve-2026-13186%}) | File-based persistence with a `StorageProviderKey` that can be influenced by request data. |
| [CVE-2026-13190]({%slug kb-security-persistence-framework-unsafe-type-resolution-CVE-2026-13190%}) | `RadPersistenceManager` processing attacker-influenced persisted state with the documented storage-key and type-resolution conditions. |

The absence of a control from page markup is not by itself sufficient to prove that its path is unavailable. Verify parent and nested configuration, IIS handler mappings, custom handler URLs, indirect control usage, persistence-provider settings, `LoadState()` calls, and request-derived storage keys. Conversely, the presence of the assembly alone is not proof that these runtime conditions exist. This July bulletin is separate from the RadFilter advisory [CVE-2026-6023]({%slug kb-security-deserialization-of-untrusted-data-cve-2026-6023%}).

If you have any questions or concerns related to this issue, please [log in to open a new Technical Support case](https://prgress.co/DevToolsSupport). If your version is no longer supported as part of the [Telerik UI for ASP.NET AJAX Release History](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history), you should upgrade to a supported and fixed version.

## Issue

- CWE-326: Inadequate Encryption Strength
- CWE-502: Deserialization of Untrusted Data
- CWE-22: Improper Limitation of a Pathname ('Path Traversal')

In Progress Telerik UI for ASP.NET AJAX before version 2026.2.708 (2026 Q2 SP1), multiple vulnerabilities in RadAsyncUpload, RadPersistenceManager, and RadDockLayout can be combined by an unauthenticated remote attacker to achieve Remote Code Execution on the server. 

## Solution

We have addressed the vulnerabilities and the Progress Telerik team strongly recommends performing an upgrade to the latest version listed in the table above.

For all customers on a current maintenance agreement, the upgrade can be accessed by logging into the [Product Downloads | Your Account](https://www.telerik.com/account/downloads/product-download?product=RCAJAX). Customers that are not on a current maintenance agreement should [contact a Progress account representative](https://www.telerik.com/account).

To confirm your current version of Telerik UI for ASP.NET AJAX, open your project in Visual Studio and check the version of Telerik.Web.UI.dll in the References, or see [How to determine which version of Telerik UI for ASP.NET AJAX you are using](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/common-assembly-version).

## Mitigation

If you cannot upgrade immediately, apply all applicable mitigations from the checklist below.

>important Per-session temporary-folder isolation is the mitigation documented for the separate **CVE-2026-2878** insufficient-entropy issue. It does not fix the July CVEs in this bulletin, which require their own configuration mitigations or an upgrade to `2026.2.708` or later. See the [CVE-2026-2878 guidance]({%slug kb-security-insufficient-entropy-cve-2026-2878%}) for that separate issue.

| # | Check | Applies to |
|---|---|---|
| 1 | `customErrors` is `RemoteOnly` or `On` in Web.config | All apps with RadAsyncUpload |
| 2 | Carefully review *any* use of `Telerik.AsyncUpload.ConfigurationEncryptionKey`, `Telerik.Upload.ConfigurationHashKey`, or `Telerik.Web.UI.DialogParametersEncryptionKey` | All apps with RadAsyncUpload |
| 3 | RadPersistenceManager does not use `CookieStateStorageProvider`; `RadDockLayout.LayoutPersistenceRepositoryType` is not `Cookies` | Apps using PersistenceFramework |
| 4 | `StorageProviderKey` is not derived from Request data | Apps using AppDataStorageProvider |
| 5 | `Telerik.AsyncUpload.TemporaryFolder` points outside `App_Data` (defense-in-depth) | Apps with both RadAsyncUpload and RadPersistenceManager |

>important This is intended as a temporary stopgap until you can update the application to use the new release, do not rely on mitigation as a long-term strategy.

### Mitigation 1 - Set customErrors to RemoteOnly or On

```xml
<system.web>
  <customErrors mode="RemoteOnly" />
</system.web>
```

### Mitigation 2- Custom Keys in Web.config

The **RELEVANT_KEY** references below refers to any of `Telerik.AsyncUpload.ConfigurationEncryptionKey`, `Telerik.Upload.ConfigurationHashKey`, or  `Telerik.Web.UI.DialogParametersEncryptionKey` in web.config. 

#### Using v2026.2.514 and earlier:

- **Vulnerable Scenario 1** - If you **are** using a **RELEVANT_KEY** in web.config
  1. Remove **RELEVANT_KEY** from web.config, to fall back on `MachineKey.Unprotect` with AES + HMAC
  2. Continue to [Instructions - Generating Strong Machine Keys](#instructions-generating-strong-machine-keys) section
- **Vulnerable Scenario 2** - If you are **not** using **RELEVANT_KEY**
  1. Continue to [Instructions - Generating Strong Machine Keys](#instructions-generating-strong-machine-keys) section

#### Using v2026.2.708 and later:

- **Option 1** - You can use **RELEVANT_KEY** again, it provides stronger protection than machineKey, via AES-GCM
- **Option 2** - Remove **RELEVANT_KEY** to use machineKey, while not as strong as GCM, it is useful for webfarm environments, and you can use the "autogenerate keys at runtime" again.

#### Instructions - Generating Strong Machine Keys

AES + HMAC support and framework-managed key material via machine key config. even a strong custom key will not prevent padding oracle attacks.
Critical - You must manually generate the keys in IIS, using the Autogenerate creates the same HMAC guard collapse as #1

1. Open IIS > select your site > select **Machine Key**
2. **Validation method**: choose HMACSHA256
3. **Automatically generate at runtime** checkboxes: uncheck both (very important!)
4. In the right pane, click **Generate Keys** 
5. In the right pane, click **Apply**
6. In the left pane, select **Application Pools** and recycle the relevant App Pool (very important)


See [Mandatory web.config settings](https://docs.telerik.com/devtools/aspnet-ajax/general-information/web-config-settings-overview#mandatory-additions-to-the-webconfig) for requirements and key generation guidance.

### Mitigation 2.5 Disable the upload handler if not in use

```xml
<appSettings>
  <add key="Telerik.Web.DisableAsyncUploadHandler" value="true" />
</appSettings>
```

### Mitigation 3 - Do not use cookie-based persistence storage

**For RadPersistenceManager** - remove any `CookieStateStorageProvider` configuration. The default `AppDataStorageProvider` is safe:

```csharp
// Page_Init
PersistenceManager1.StorageProvider =
    new AppDataStorageProvider(Server.MapPath("~/App_Data/PersistenceState/"));
```

**For RadDockLayout** - ensure `LayoutPersistenceRepositoryType` is not Cookies:

```csharp
RadDockLayout1.LayoutPersistenceRepositoryType =
    DockLayoutPersistenceRepository.FileSystem;
```

### Mitigation 4 - Do not derive StorageProviderKey from user input

```csharp
// UNSAFE - never do this
// PersistenceManager1.StorageProviderKey = Request.QueryString["userId"];

// Safe - hardcoded key
PersistenceManager1.StorageProviderKey = "my-app-persistence-state";
```

The default key (`TelerikAspNetRadControlsPersistedState`) is safe if you have not overridden it.

### Mitigation 5 - Move RadAsyncUpload temp folder outside App_Data (defense-in-depth)

```xml
<appSettings>
  <add key="Telerik.AsyncUpload.TemporaryFolder" value="~/UploadTemp" />
</appSettings>
```

Create the folder manually and grant write permissions to the application pool identity. This is defense-in-depth only - always apply Mitigation 4 first.

## Notes

- If you have any questions or concerns related to this issue, open a new Technical Support case in [Your Account | Support Center](https://www.telerik.com/account/support-center/contact-us/). Technical Support is available to customers with an active support plan.
- We would like to thank TantoSec (Marcio Almeida, Justin Steven) and CODE WHITE GmbH (Markus Wulftange) for responsibly disclosing these vulnerabilities and assisting in their resolution.

## External References

### Related CVEs

The following individual vulnerabilities contribute to the chained RCE scenario described above. Each has a dedicated KB article with per-vulnerability details.

---

[CVE-2026-13181](https://www.cve.org/CVERecord?id=CVE-2026-13181) (High) CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H

**CVSS:** 8.1 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, forged upload metadata can influence AsyncUploadTypeName processing and trigger unsafe attacker-controlled type resolution.

Discoverer Credit: Marcio Almeida of TantoSec

---

[CVE-2026-13182](https://www.cve.org/CVERecord?id=CVE-2026-13182) (High) CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N

**CVSS:** 7.5 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload client-state processing can distinguish decrypt failures from invalid-JSON parse failures, enabling a padding oracle that may be used to forge valid encrypted payloads.

Discoverer Credit: Marcio Almeida of TantoSec

---

[CVE-2026-13183](https://www.cve.org/CVERecord?id=CVE-2026-13183) (High) CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N

**CVSS:** 7.5 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, RadAsyncUpload upload metadata processing may leak cryptographic validity through measurable timing differences, enabling a timing oracle that may be used to forge valid encrypted payloads.

Discoverer Credit: Justin Steven and Marcio Almeida of TantoSec

---

[CVE-2026-13184](https://www.cve.org/CVERecord?id=CVE-2026-13184) (High) CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N

**CVSS:** 7.5 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, when Telerik.Upload.ConfigurationHashKey is absent and machineKey is not explicitly configured, upload metadata integrity protection may fall back to a predictable default key, enabling attackers to forge protected upload metadata and unlock further exploit chains.

Discoverer Credit: Marcio Almeida of TantoSec

---

[CVE-2026-13185](https://www.cve.org/CVERecord?id=CVE-2026-13185) (High) CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H

**CVSS:** 8.1 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, applications using cookie-based storage in RadPersistenceManager or RadDockLayout deserialize attacker-controlled persistence state via unsafe type resolution, which can lead to remote code execution.

Discoverer Credit: Markus Wulftange of CODE WHITE GmbH

---

[CVE-2026-13186](https://www.cve.org/CVERecord?id=CVE-2026-13186) (High) CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H

**CVSS:** 8.1 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, a path traversal vulnerability in the file-based persistence storage provider can be exploited when the storage key is derived from user-controlled input, enabling loading of attacker-uploaded files into the deserialization pipeline.

Discoverer Credit: Markus Wulftange of CODE WHITE GmbH

---

[CVE-2026-13190](https://www.cve.org/CVERecord?id=CVE-2026-13190) (High) CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H

**CVSS:** 8.1 / High

In Progress® Telerik® UI for AJAX prior to v2026.2.708, a deserialization vulnerability in the persistence utilities allows unsafe type instantiation from attacker-influenced persisted state, which can lead to remote code execution.

Discoverer Credit: Progress Telerik Security Team
