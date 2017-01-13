---
title: Security
page_title: Security | RadAsyncUpload for ASP.NET AJAX Documentation
description: Security
slug: asyncupload-security
tags: security
published: True
position: 14
---

# Security

## ConfigurationEncryptionKey

One of the approaches, which ensures a secure application is to store the sensitive information not in a readable or easily decodable format. Therefor, the information about the configuration of RadAsyncUpload(e.g. Target Folder, AllowedFileExtensions ) is encrypted and sent to the client, using with default encryption key. In order to encrypt the configuration in a secure way, we strongly recommend to set the custom encryption key in the **web config** using the following app setting -**Telerik.AsyncUpload.ConfigurationEncryptionKey**.

## ConfigurationHashKey 

In addition to the ConfigurationEncryptionKey, as from **R1 2017**, the Encrypt-then-MAC approach is implemented, in order to improve the integrity of the encrypted temporary and target folders. It includes adding a new **Telerik.Upload.ConfigurationHashKey** in the web.config and a hashing function that hashes the encrypted text. The encrypted text is later checked in the upload handler for verifying the integrity of the values. If the hashing attempt is incorrect, a **new CryptographicException("The hash is not valid!");** will be thrown.