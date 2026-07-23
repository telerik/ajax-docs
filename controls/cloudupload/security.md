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

>important As of **2026.2.708** (R2 2026 SP1), the custom key settings have been improved, since the control now encrypts the values with AES-GCM, which provides stronger protection than the machine key fallback. It is strongly recommended to upgrade to this version or newer. For more information, refer to the [Critical Security Bulletin - July 2026]({%slug kb-security-critical-rce-chain-bulletin-july-2026%}) article.
>
>note If this key is not set, the control falls back to the .NET `MachineKey` for encryption and integrity. While this is functional, setting the key explicitly on v2026.2.708+ is recommended because AES-GCM provides stronger protection. If you choose not to set the key, ensure you have a strong, explicitly configured `<machineKey>` in web.config. You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](images/generate-keys-iis.png).

As an added security measure, as of **R2 2017 SP2**, you can **disable file uploads for your application** via the [Telerik.Web.DisableCloudUploadHandler key](#disableclouduploadhandler) web.config switch.

>tip You can [encrypt the `appSettings` section in the `web.config` file](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).

## ConfigurationHashKey

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
