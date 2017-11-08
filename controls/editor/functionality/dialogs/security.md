---
title: Security
page_title: Security | RadEditor for ASP.NET AJAX Documentation
description: Apply security in RadEditor and enforce information encryption to prevent attacks.
slug: editor-security
tags: security
published: True
position: 1
---

# Security

This article explains how to ensure information about the RadEditor configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Configuration information includes dialog settings and upload configuration.

There are three `appSettings` keys you should add to your `web.config` to ensure information security with the dialogs:

* set a custom `Telerik.Web.UI.DialogParametersEncryptionKey`.

* set a custom `Telerik.AsyncUpload.ConfigurationEncryptionKey`

* set a custom `Telerik.Upload.ConfigurationHashKey`

>important If you do not set custom keys, default (hardcoded) values are used to encrypt/decrypt the information.
>
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [unique custom keys]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](../../../../general-information/images/generate-keys-iis.png).

>tip You may also want to add a layer of security on the user actions from the file browser dialogs (such as Image Manager). To do this, follow the [RadFileExplorer Security]({%slug fileexplorer/security%}) article. To attach to the `ItemCommand` event, you must use the `FileBrowser` and `MobileImageManager` dialogs as [external dialogs]({%slug editor/functionality/dialogs/externaldialogspath-property%}) and add the file with the event handler and business logic to them. You can find an example in the [item-command-in-external-dialogs.zip](item-command-in-external-dialogs.zip) archive.

## DialogParametersEncryptionKey

To provide secure encryption, we strongly advise that you set a custom encryption key for **Telerik.Web.UI.DialogParametersEncryptionKey**:

````web.config
<appSettings>
	<add key="Telerik.Web.UI.DialogParametersEncryptionKey" value="YOUR-THIRD-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## ConfigurationEncryptionKey

To provide secure encryption, we strongly advise that you set a custom encryption key for **Telerik.AsyncUpload.ConfigurationEncryptionKey**:

````web.config
<appSettings>
	<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````



## ConfigurationHashKey

As of **R1 2017**, the **Encrypt-then-MAC** approach is implemented, in order to improve the integrity of the encrypted temporary and target folders.

The additional **Telerik.Upload.ConfigurationHashKey** key is used to hash the encrypted text. The value returned from the client is checked in the upload handler for integrity. If the hashing attempt is incorrect, a `new CryptographicException("The hash is not valid!");` exception will be thrown.

````web.config
<appSettings>
	<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
