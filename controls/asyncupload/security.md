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

## 

One of the approaches, which ensures a secure application is to store the sensitive information not in a readable or easily decodable format. Therefor, the information about the configuration of RadAsyncUpload(e.g. Target Folder, AllowedFileExtensions ) is encrypted and sent to the client, using with default encryption key. In order to encrypt the configuration in a secure way, we strongly recommend to set the custom encryption key in the **web config** using the following app setting -**Telerik.AsyncUpload.ConfigurationEncryptionKey**.
