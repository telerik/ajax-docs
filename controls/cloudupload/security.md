---
title: Security
page_title: Security | RadCloudUpload for ASP.NET AJAX Documentation
description: Security
slug: cloudupload-security
tags: security
published: True
position: 14
---

# Security

## ConfigurationHashKey 

As from **R1 2017**, the Encrypt-then-MAC approach is implemented, in order to improve the integrity of the for the CloudUpload encryption. The encrypted options, which are sent to the storage, are **AllowedFileExtensions** and **MaxFileSize**. The implementation includes adding a new **Telerik.Upload.ConfigurationHashKey** in the web.config and a hashing function that hashes the encrypted text. The encrypted text is later checked in the upload handler for verifying the integrity of the values. If the hashing attempt is incorrect, a **new CryptographicException("The hash is not valid!");** will be thrown.