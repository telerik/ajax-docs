---
title: Security
page_title: Security | RadAsyncUpload for ASP.NET AJAX Documentation
description: Apply security in RadAsyncUpload and enforce information encryption to prevent attacks.
slug: asyncupload-security
tags: security
published: True
position: 14
---

# Security

This article explains how to ensure information about the RadAsyncUpload configuration is secure and non-readable. Its transmission between the client and the server must be encrypted and impossible to decode, so the data cannot be used by a malicious entity in an attack against the server.

Configuration information includes temporary and target folder on the server, and allowed file extensions.

There are two `appSettings` keys you should add to your `web.config` to ensure information security with file uploads:

* set a custom `Telerik.AsyncUpload.ConfigurationEncryptionKey`.

* set a custom `Telerik.Upload.ConfigurationHashKey`.

>important If you do not set any custom keys, default (hardcoded) values are used to encrypt/decrypt the information.
>
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [unique custom keys]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig). You can [use the IIS MachineKey Validation Key generator to get them (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).
>
>Other cryptographic operations in the UI for ASP.NET AJAX suite may also use these two keys. Telerik avoids adding more keys in order to improve backwards compatibility of your applications and to reduce the number of properties you have to set.

As an added security measure, as of **R2 2017 SP2**, you can **disable file uploads for your application** via the [Telerik.Web.DisableAsyncUploadHandler key](#disableasyncuploadhandler) web.config switch.

>tip You can [encrypt the appSettings section in the web.config](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).


## ConfigurationEncryptionKey

To provide secure encryption of the control configuration, we strongly advise that you set a custom encryption key for **Telerik.AsyncUpload.ConfigurationEncryptionKey**:

````web.config
<appSettings>
	<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

The `Telerik.AsyncUpload.ConfigurationEncryptionKey` is available as of Q3 2012 SP1 (version 2012.3.1205).


## ConfigurationHashKey

As of **R1 2017**, the **Encrypt-then-MAC** approach is implemented, in order to improve the integrity of the encrypted temporary and target folders.

The additional **Telerik.Upload.ConfigurationHashKey** key is used to hash the encrypted text. The value returned from the client is checked in the upload handler for integrity. If the hashing attempt is incorrect, a `new CryptographicException("The hash is not valid!");` exception will be thrown.

````web.config
<appSettings>
	<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

## DisableAsyncUploadHandler

Setting the `Telerik.Web.DisableAsyncUploadHandler` key to `true` disables the built-in RadAsyncUpload handler that is used for storing files in the temporary folder before they are moved to the target folder. This feature is available as of **R2 2017 SP2**.

When you set this key to `true`, no files can be uploaded to the default handler (`Telerik.Web.UI.WebResource.axd`) and async upload requests to it will return a 404 error. You may want to handle the [OnClientFileUploadFailed event]({%slug asyncupload/client-side-programming/onclientfileuploadfailed%}) to prevent the page from throwing JavaScript errors.

[Custom handlers]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) are not affected by this feature and you can still use them to upload and save files with the desired level of security.

>caption How to disable (make unavailable) the default Async Upload handler so no files can be uploaded.

````web.config
<appSettings>
	<add key="Telerik.Web.DisableAsyncUploadHandler" value="true"/>
</appSettings>
````

## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
* [Create a Custom Handler for RadAsyncUpload]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})