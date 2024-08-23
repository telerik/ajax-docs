---
title: Connect to Amazon S3 storage
description: Setup Amazon S3 FileBrowserContentProvider. Check it now!
type: how-to
page_title: Connect to Amazon S3 storage
slug: fileexplorer-connect-to-amazon-s3-storage
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
            <td>RadFileExplorer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## DESCRIPTION 

This article shows how to connect the RadFileExplorer control to the Amazon S3 storage.

## SOLUTION  

The bucket's name is hardcoded. The credentials for accessing Amazon service need to be set to the **awsAccessKeyId** and **awsSecretAccessKey** read-only properties.

The paths set to the ViewPaths, DeletePaths and UploadPaths properties follow this logic:

If we have this bucket : http://bucket.s3.amazonaws.com/, then in the provider, the BUCKET_NAME read-only property needs to be set to "bucket" value. The paths should point to the virtual folders in this bucket.

Two folders for example :
http://bucket.s3.amazonaws.com/folder1
http://bucket.s3.amazonaws.com/folder2

````C#
string[] paths = new string[] { "folder1/", "folder2/" };
RadFileExplorer1.Configuration.ViewPaths = paths;
RadFileExplorer1.Configuration.DeletePaths = paths;
RadFileExplorer1.Configuration.UploadPaths = paths;
RadFileExplorer1.Configuration.ContentProviderTypeName = typeof(S3ContentProvider).AssemblyQualifiedName;
````

**NOTE**

In the earlier versions of the control the CheckDeletePermissions method does not exist and needs to be removed.

Additionally, you can consider trying the [TNTDrive](https://tntdrive.com/) tool, allowing you to map an S3 bucket as a network drive. Once this is done you can create a virtual directory in the IIS application root which can be accessed after that with a standard virtual path (with ~/).

You can find atached the projects demonstrating the described approached here:

* [Amazon S3 FileBrowserContentProvider.zip](files/fileexplorer-s3filebrowsercontentprovider-cs.zip)



