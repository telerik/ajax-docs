---
title: Amazon S3
page_title: Amazon S3 | UI for ASP.NET AJAX Documentation
description: Amazon S3
slug: cloudupload/cloud-storage-providers/amazon-s3
tags: amazon,s3
published: True
position: 0
---

# Amazon S3



## Adding References

To upload files in Amazon S3(or Amazon Simple Storage Service) **RadCloudUpload** depends on the [AWS SDK for .NET](http://aws.amazon.com/sdkfornet/). This package can be installed from [NuGet Repository](http://www.nuget.org/packages/AWSSDK/) via the **Package Management Console** with the following command:

**Install-Package AWSSDK -Version 1.5.45** - for Telerik.Web.UI version 2013.3.1324 or earlier.

**Install-Package AWSSDK -Version 2.0.5** - for Telerik.Web.UI version 2014.1.XXXX or later.![cloudupload-amazon-nuget](images/cloudupload-amazon-nuget.png)

>note The package management tool will add the **AWSSDK.dll** assembly.
>When Web Application is used the Copy Local property in the Reference Properties dialog box, available from the References pane of the Project Designer must be set to **True** .
>


## Configuration

**RadCloudUpload** supports file uploading in Amazon S3. Configuration requires to set **Access Key**, **Secret Key** and **Bucket Name**.

1. From **RadCloudUpload**'s smart tag choose Amazon as provider tag and open the **Configuration Wizard**:

1. In the **Configuration Wizard** dialog enter Amazon S3 **Access Key**, **Secret Key** and **Bucket Name**. ![cloudupload-amazon-s 3-configuration](images/cloudupload-amazon-s3-configuration.png)Specifying the **Uncommitted Files Expiration Period**(TimeSpan Structure), you could easily configure the time, after which the unprocessed files will be removed from the storage.When **Ensure Container** is checked, the control will create a new Bucket if it doesn't exist. In case it is not checked and the Bucket doesn't exist - an exception will be thrown.This will add configuration setting in the **web.config** file:

````XML
<telerik.web.ui>
	<radCloudUpload>
		<storageProviders>
			<add name="Amazon" type="Telerik.Web.UI.AmazonS3Provider" accessKey="" secretKey="" bucketName="" uncommitedFilesExpirationPeriod="2" />
		</storageProviders>
	</radCloudUpload>
</telerik.web.ui>
````



>caution Uploading files in Amazon S3 is performed in chunks. Default chunk size defined by Amazon is 5 MB. Because the default ASP.NET size request is 4MB, you must increase it, in order to avoid errors. This can be done by increasing the value of [MaxRequestLength]({%slug cloudupload/how-to/uploading-large-files%}) property. Chunks which are not uploaded will be removed automatically by **RadCloudUpload** .
>


# See Also

 * [Custom Storage Providers]({%slug cloudupload/custom-cloud-storage-providers/overview%})

 * [Custom Amazon Storage Provider]({%slug cloudupload/custom-cloud-storage-providers/custom-amazon-s3-provider%})

 * [Troubleshooting]({%slug cloudupload/troubleshooting%})
