---
title: Changes and Backward Compatibility
page_title: Changes and backward compatibility - RadCloudUpload
description: Check our Web Forms article about Changes and backward compatibility.
slug: cloudupload/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 2
---

# Changes and Backward Compatibility

## RadCloudUpload for ASP.NET AJAX Q1 2019

Files whose names contain non-ASCII symbols (like Greek, Hebrew, Cyrillic letters and umlauts) are not supported in Azure and Amazon storages by default. As a result, they could not be uploaded through RadCloudUpload. 

As of **R1 2019**, RadCloudUpload will **encode** such **non-ASCII file names** to **base64** on the ASP.NET server before sending them to the cloud provider in case a non-ASCII character is present, and will use that encoded string in the blob metadata instead of the file name.

If there are no non-ASCII symbols, nothing will change.

This encoding logic applies to the other metadata fields as well.

## RadCloudUpload for ASP.NET AJAX Q1 2017

As from Q1 2017, the RadCloudUpload is internally referencing version 3 of the Amazon SDK for .NET. Hence, you will be able to use all new features that come with this version. The version 3 of the AWS SDK for .NET uses separate packages (dlls) for each service. The RadCloudUpload only references [AWSSDK.Core.dll](https://www.nuget.org/packages/AWSSDK.Core/) and [AWSSDK.S3.dll](https://www.nuget.org/packages/AWSSDK.S3/). 
For more information on how to use old version of the Amazon SDK with the RadCloudUpload, refer to this [documentation article]({%slug cloudupload/how-to/using-amazonsdk-version2%})



