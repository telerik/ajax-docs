---
title: Protect ZipArchive
page_title: Protect ZipArchive | RadZipLibrary for ASP.NET AJAX Documentation
description: Protect ZipArchive
slug: ziplibrary/functionality/protect-ziparchive
tags: protect,ziparchive
published: True
position: 2
---

# Protect ZipArchive



**RadZipLibrary** lets you protect a ZIP archive with a password. This help article will teach you to use **RadZipLibrary** to password protect files and how to open files that are protected with a password. To protect a ZIP archive and all **ZipArchiveEntry** items in it you should specify encryption settings when creating the [ZipArchive]({%slug ziplibrary/getting-started%}) object.

**RadZipLibrary** supports traditional PKWARE encryption only. The settings for this encryption type are represented by the **DefaultEncryptionSettings** class.

* [Create a Password-protected ZipArchive](#create-a-password-protected-ziparchive)

* [Read a Password-protected ZipArchive](#read-a-password-protected-ziparchive)

## Create a Password-protected ZipArchive

In order to create a password-protected ZIP archive you need to pass a **DefaultEncryptionSettings** object to the **ZipArchive**'s constructor along with the **ZipArchiveMode.Create** parameter.

**DefaultEncryptionSettings** has a **Password** property of type string which represents the used password.

**Example 1**: Create a password-protected ZIP archive:



````C#
	    using (Stream stream = File.Open("test.zip", FileMode.Create)) 
	{
	    DefaultEncryptionSettings encryptionSettings = new DefaultEncryptionSettings(); 
	    encryptionSettings.Password = "password"; 
	    using (ZipArchive archive = new ZipArchive(stream, ZipArchiveMode.Create, false, null, null, encryptionSettings)) 
	    { 
	        using (ZipArchiveEntry entry = archive.CreateEntry("text.txt"))
	        { 
	            StreamWriter writer = new StreamWriter(entry.Open()); 
	            writer.WriteLine("Hello world!"); writer.Flush();
	        }
	    }
	}
````
````VB.NET
	Using stream As Stream = File.Open("test.zip", FileMode.Create)
	    Dim encryptionSettings As New DefaultEncryptionSettings()
		encryptionSettings.Password = "password"
		Using archive As New ZipArchive(stream, ZipArchiveMode.Create, False, Nothing, Nothing, encryptionSettings)
			Using entry As ZipArchiveEntry = archive.CreateEntry("text.txt")
	    Dim writer As New StreamWriter(entry.Open())
				writer.WriteLine("Hello world!")
				writer.Flush()
			End Using
		End Using
	End Using
	
````


>tip You must always dispose of the ZIP archive object when all operations that use it are competed. Telerik Support recommends that you declare and instantiate the ZIP archive object in a using statement. If it is not possible for some reason, then do not forget to call the **Dispose()** method when you complete all operations.
>


## Read a Password-protected ZipArchive

In order to open a password-protected **ZipArchive** you need to pass a **DefaultEncryptionSettings** object with the password that was used to create the archive in the first place.

**Example 2**: Open and read a password-protected ZIP archive.



````C#
	using (Stream stream = File.Open("test.zip", FileMode.Open)) 
	{ 
	    DefaultEncryptionSettings encryptionSettings = new DefaultEncryptionSettings(); 
	    encryptionSettings.Password = "password"; 
	    using (ZipArchive archive = new ZipArchive(stream, ZipArchiveMode.Read, false, null,null, encryptionSettings))
	    {
	        {
	            // Display the list of the files in the selected zip file using the ZipArchive.Entries property. 
	        }
	    }
	}
````
````VB.NET
	    Using stream As Stream = File.Open("test.zip", FileMode.Open)
	    Dim encryptionSettings As New DefaultEncryptionSettings()
		encryptionSettings.Password = "password"
		Using archive As New ZipArchive(stream, ZipArchiveMode.Read, False, Nothing, Nothing, encryptionSettings)
			If True Then
	    ' Display the list of the files in the selected zip file using the ZipArchive.Entries property. 
			End If
		End Using
	End Using
````


>tip You must always dispose of the ZIP archive object when all operations that use it are competed. Telerik Support recommends that you declare and instantiate the ZIP archive object in a using statement. If it is not possible for some reason, then do not forget to call the **Dispose()** method when you complete all operations.
>


# See Also

 * [Getting Started]({%slug ziplibrary/getting-started%})

 * [Update ZipArchive]({%slug ziplibrary/functionality/update-ziparchive%})
