---
title: Security
page_title: Security | RadSpell for ASP.NET AJAX Documentation
description: Apply security in RadSpell and enforce information encryption to prevent attacks.
slug: editor-security
tags: security
published: True
position: 5
---

# Security

This article explains how to ensure information about the RadSpell configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Configuration information includes various dialog settings.

There is one `appSettings` key you should add to your `web.config` to ensure information security with the spell dialog:

* set a custom `Telerik.Web.UI.DialogParametersEncryptionKey`.

>important If you do not set custom keys, default (hardcoded) values are used to encrypt/decrypt the information.
>
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [unique custom keys]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).

## DialogParametersEncryptionKey

To provide secure encryption, we strongly advise that you set a custom encryption key for **Telerik.Web.UI.DialogParametersEncryptionKey**:

````web.config
<appSettings>
	<add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-THIRD-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
