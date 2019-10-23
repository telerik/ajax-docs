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

Configuration information includes temporary and target folder on the server, allowed file extensions and the type of the file metadata object (by default, a class from the Telerik.Web.UI.dll assembly).

This article contains the following sections:

* [Recommended Settings](#recommended-settings)
* [Configuration Keys Details](#configuration-keys-details)
	* [ConfigurationEncryptionKey](#configurationencryptionkey)
	* [ConfigurationHashKey](#configurationhashkey)
	* [AllowedCustomMetaDataTypes](#allowedcustommetadatatypes)
	* [DisableAsyncUploadHandler](#disableasyncuploadhandler)


## Recommended Settings

There are three `appSettings` keys you should add to your `web.config` to ensure information security with file uploads:

1. Set a custom `Telerik.AsyncUpload.ConfigurationEncryptionKey`.

2. Set a custom `Telerik.Upload.ConfigurationHashKey`.

3. set the `Telerik.Upload.AllowedCustomMetaDataTypes` key. Check the [Metadata Type Whitelisting](#allowedcustommetadatatypes) section to avoid any breaking changes.

>tip You can [use the IIS MachineKey Validation Key generator to get the encryption keys (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).

````web.config
<appSettings>
        <add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
        <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="Telerik.Web.UI.AsyncUploadConfiguration" />
</appSettings>
````

>tip You can [encrypt the appSettings section in the web.config](https://www.telerik.com/support/kb/aspnet-ajax/details/how-to-encrypt-the-telerik-appsettings-keys).

>tip In case you do not use RadAsyncUpload, you can **disable file uploads for your application** via the [Telerik.Web.DisableAsyncUploadHandler key](#disableasyncuploadhandler) web.config switch. This feature is available as of **R2 2017 SP2**.

## Configuration Keys Details

The information below provides more details on the available keys and their usage.

>important If you do not set custom encryption and hashing keys, default (hardcoded) values are used to encrypt/decrypt the information for versions prior to R2 2017 SP1. If you are using such an old version, we recommend [upgrading]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}) to the latest.
>
>As of R2 2017 SP1, hardcoded keys are not used anymore. Instead, standard .NET methods are used for encryption. Nevertheless, you should still set your own [unique custom keys](#recommended-settings). 
>
>Other cryptographic operations in the UI for ASP.NET AJAX suite may also use these two keys. Telerik avoids adding more keys in order to improve backwards compatibility of your applications and to reduce the number of properties you have to set.

Available keys:

* [ConfigurationEncryptionKey](#configurationencryptionkey)
* [ConfigurationHashKey](#configurationhashkey)
* [AllowedCustomMetaDataTypes](#allowedcustommetadatatypes)
* [DisableAsyncUploadHandler](#disableasyncuploadhandler)

### ConfigurationEncryptionKey

To provide secure encryption of the control configuration, we strongly advise that you set a custom encryption key for `Telerik.AsyncUpload.ConfigurationEncryptionKey`:

````web.config
<appSettings>
	<add key="Telerik.AsyncUpload.ConfigurationEncryptionKey" value="YOUR-FIRST-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

The `Telerik.AsyncUpload.ConfigurationEncryptionKey` is available as of Q3 2012 SP1 (version 2012.3.1205).

>tip You can [use the IIS MachineKey Validation Key generator to get the encryption keys (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).


### ConfigurationHashKey

As of **R1 2017**, the **Encrypt-then-MAC** approach is implemented, in order to improve the integrity of the encrypted temporary and target folders.

The additional `Telerik.Upload.ConfigurationHashKey` key is used to hash the encrypted text. The value returned from the client is checked in the upload handler for integrity. If the hashing attempt is incorrect, a `new CryptographicException("The hash is not valid!");` exception will be thrown.

````web.config
<appSettings>
	<add key="Telerik.Upload.ConfigurationHashKey" value="YOUR-SECOND-UNIQUE-STRONG-RANDOM-VALUE-UNIQUE-TO-YOUR-APP&" />
</appSettings>
````

>tip You can [use the IIS MachineKey Validation Key generator to get the encryption keys (make sure to avoid the ,IsolateApps portion)](../../general-information/images/generate-keys-iis.png).

### AllowedCustomMetaDataTypes

As of R3 2019 SP1, the metadata classes (upload configurations) can be whitelisted. That allows the application to use only the metadata classes from a whitelisted collection of configurations.

>important This feature is opt-in to avoid breaking changes. This means that if you do not add this setting, whitelisting is not used. If you add any types, you must add all types that you use, otherwise those that are not whitelisted will throw an error when uploading. We recommend always setting this key to enable the whitelisting feature.

>caption How to enable whitelisting only for the built-in Telerik type. Adding this improves security and you should use it even if you do not use custom metadata types.

````web.config
<appSettings>
    <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="Telerik.Web.UI.AsyncUploadConfiguration" />
</appSettings>
````

There are several situations when you may be using a custom metadata class, you can read more on the most common cases in the following resources. This can help you determine whether you have such code in your application for any purpose. If you do, read the information after this list to see how to apply whitelisting for them.

* [Sending custom information to and from a custom handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}#send-custom-information-to-and-from-the-handler)
* [Capturing file upload errors from a custom handler](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/how-to-capture-file-upload-errors-with-custom-handler)
* [Preserving upload configuration across postbacks]({%slug asyncupload/how-to/how-to-preserve-upload-configuration%})

To whitelist your custom types, add the `Telerik.Upload.AllowedCustomMetaDataTypes` key in the `appSettings` section of the `web.config`. As a value for the key, provide the metadata class full name, including the namespace, in a list delimited by a semicolon (`;`). The built-in type that we use out-of-the-box is always whitelisted if the whitelisting is enabled.

>caption Whitelist custom metadata types

````web.config
<appSettings>
    <add key="Telerik.Upload.AllowedCustomMetaDataTypes" value="SomeNameSpace.SampleAsyncUploadConfiguration;SomeOtherNameSpace.OtherAsyncUploadConfiguration" />
</appSettings>
````


>note This is an additional security measure and it does not replace setting the [main custom encryption keys](#recommended-settings).

Failure to deserialize a custom metadata type will also throw a `CryptographicException`.

[Custom handlers]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) **are** affected by this feature.


### DisableAsyncUploadHandler

You can disable file uploads through RadAsyncUpload's built-in configuration altogether. This feature is available as of **R2 2017 SP2**.

Setting the `Telerik.Web.DisableAsyncUploadHandler` key to `true` disables the built-in RadAsyncUpload handler that is used for storing files in the temporary folder before they are moved to the target folder. 

When you set this key to `true`, no files can be uploaded to the default handler (`Telerik.Web.UI.WebResource.axd`) and async upload requests to it will return a 404 error. You may want to handle the [OnClientFileUploadFailed event]({%slug asyncupload/client-side-programming/onclientfileuploadfailed%}) to prevent the page from throwing JavaScript errors.

[Custom handlers]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) are **not** affected by this feature and you can still use them to upload and save files with the desired level of security.

>caption How to disable (make unavailable) the default Async Upload handler so no files can be uploaded through it.

````web.config
<appSettings>
	<add key="Telerik.Web.DisableAsyncUploadHandler" value="true"/>
</appSettings>
````

>important Even when disabling file uploads, we recommend setting the [main custom encryption keys](#recommended-settings), especially for versions prior to R2 2019 SP1.


## See Also

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})
* [Create a Custom Handler for RadAsyncUpload]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})
