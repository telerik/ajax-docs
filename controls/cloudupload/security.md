---
title: Security
page_title: Security - RadCloudUpload
description: Check our Web Forms article about Apply security in RadCloudUpload and enforce information encryption to prevent attacks.
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
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [unique custom keys]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).

As an added security measure, as of **R2 2017 SP2**, you can **disable file uploads for your application** via the [Telerik.Web.DisableCloudUploadHandler key](#disableclouduploadhandler) web.config switch.

>tip You can [encrypt the appSettings section in the web.config](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).

## ConfigurationHashKey

As of **R1 2017**, the **Encrypt-then-MAC** approach is implemented, in order to improve the integrity of the encrypted temporary and target folders.

The additional **Telerik.Upload.ConfigurationHashKey** key is used to hash the encrypted text. The value returned from the client is checked in the upload handler for integrity. If the hashing attempt is incorrect, a `new CryptographicException("The hash is not valid!");` exception will be thrown.

````web.config
<appSettings>
	<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## DisableCloudUploadHandler


Setting the `Telerik.Web.DisableCloudUploadHandler` key to `true` disables the built-in RadCloudUpload handler that is used for sending files to the server before they are moved to the cloud via the provider. This feature is available as of **R2 2017 SP2**.

When you set this key to `true`, no files can be uploaded to the default handler (`Telerik.Web.UI.WebResource.axd`) and cloud upload requests to it will return a 404 error.

Custom handlers are not affected by this feature and you can still use them to upload and save files.

>caption How to disable (make unavailable) the default Cloud Upload handler so no files can be uloaded.

````web.config
<appSettings>
	<add key="Telerik.Web.DisableCloudUploadHandler" value="true"/>
</appSettings>
````


## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
