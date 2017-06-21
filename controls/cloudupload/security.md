---
title: Security
page_title: Security | RadCloudUpload for ASP.NET AJAX Documentation
description: Apply security in RadCloudUpload and enforce information encryption to prevent attacks.
slug: cloudupload-security
tags: security
published: True
position: 14
---

# Security

This article explains how to ensure information about the RadCloudUpload configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Configuration information includes temporary and target folder on the server, and allowed file extensions.

There is an `appSettings` key you should add to your `web.config` to ensure information security with file uploads:

* set a custom `Telerik.Upload.ConfigurationHashKey`.

>important If you do not set a custom key, a default (hardcoded) value is used to encrypt/decrypt the information.
>
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [custom keys]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). You can use the IIS MachineKey generator to get them.



## ConfigurationHashKey

As of **R1 2017**, the **Encrypt-then-MAC** approach is implemented, in order to improve the integrity of the encrypted temporary and target folders.

The additional **Telerik.Upload.ConfigurationHashKey** key is used to hash the encrypted text. The value returned from the client is checked in the upload handler for integrity. If the hashing attempt is incorrect, a `new CryptographicException("The hash is not valid!");` exception will be thrown.

````web.config
<appSettings>
	<add key="Telerik.Upload.ConfigurationHashKey" value="0987654321zyxwvutsrqponmlkjihgfedcba" />
</appSettings>
````


## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
