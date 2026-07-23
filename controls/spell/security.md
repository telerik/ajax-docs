---
title: Security
page_title: Security - RadSpell
description: Check our Web Forms article about Apply security in RadSpell and enforce information encryption to prevent attacks.
slug: spell/security
tags: security
published: True
position: 5
---

# Security

This article explains how to ensure information about the RadSpell configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Configuration information includes various dialog settings.

There is one `appSettings` key you should add to your `web.config` to ensure information security with the spell dialog:

* set a custom `Telerik.Web.UI.DialogParametersEncryptionKey`.

>important As of **2026.2.708** (R2 2026 SP1), the custom key settings have been improved, since the control now encrypts the values with AES-GCM, which provides stronger protection than the machine key fallback. It is strongly recommended to upgrade to this version or newer. For more information, refer to the [Critical Security Bulletin - July 2026]({%slug kb-security-critical-rce-chain-bulletin-july-2026%}) article.
>
> If these keys are not set, the controls fall back to the .NET `MachineKey` for encryption and integrity. While this is functional, setting the keys explicitly on v2026.2.708+ is recommended because AES-GCM provides stronger protection. If you choose not to set the keys, ensure you have a strong, explicitly configured `<machineKey>` in web.config. You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](images/generate-keys-iis.png).

## DialogParametersEncryptionKey

To provide secure encryption, we strongly advise that you set a custom encryption key for **Telerik.Web.UI.DialogParametersEncryptionKey**:

````web.config
<appSettings>
	<add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-THIRD-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})