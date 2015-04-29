---
title: Update ZipArchive
page_title: Update ZipArchive | RadZipLibrary for ASP.NET AJAX Documentation
description: Update ZipArchive
slug: ziplibrary/functionality/update-ziparchive
tags: update,ziparchive
published: True
position: 1
---

# Update ZipArchive



With **RadZipLibrary** you can update existing ZIP archive in order to add new entries to it, delete or update existing entries.

The **ZipArchive** class provides three modes: *Read*, *Create* and *Update*. More information on creating and reading an archive is available [here]({%slug ziplibrary/getting-started%}).

The following code snippet opens a ZIP archive in update mode using **ZipArchive** class:



````C#
using (Stream stream = File.Open("test.zip", FileMode.Open))
{
	using (ZipArchive archive = new ZipArchive(stream, ZipArchiveMode.Update, false, null))
	{               
		// Display the list of the files in the selected zip file using the ZipArchive.Entries property.
	}
}
	
````
````VB.NET
Using stream As Stream = File.Open("test.zip", FileMode.Open)
	' Display the list of the files in the selected zip file using the ZipArchive.Entries property.
	Using archive As New ZipArchive(stream, ZipArchiveMode.Update, False, Nothing)
	End Using
End Using
````


>note You must always dispose the ZIP archive object when all update operations (add/delete/update) are competed. The best practice is declaration and instantiation of the ZIP archive object in a using statement. If it is not possible for some reason then do not forget to call **Dispose()** method when you complete all operations.
>


## Add Entry

In order to add a new entry into the ZIP archive you should perform the following steps:

1. Use **CreateEntry()** method of the **ZipArchive** object to create a new entry.

1. Open the entry to obtain stream for writing.

1. Write necessary information into the entry.

1. Dispose entry when all necessary information is written. In the *Update* mode this step is optional. You can omit it if you are going to add/delete/update other entries in the archive.



````C#
using (ZipArchiveEntry entry = archive.CreateEntry("text.txt"))
{
	StreamWriter writer = new StreamWriter(entry.Open());
	writer.WriteLine("Hello world!");
	writer.Flush();
}
````
````VB.NET
Using entry As ZipArchiveEntry = archive.CreateEntry("text.txt")
	Dim writer As New StreamWriter(entry.Open())
	writer.WriteLine("Hello world!")
	writer.Flush()
End Using
````


>note If you are using **StremWriter** to write information into the entry stream (the stream opened using entry.Open() method) then you must use **Flush()** method when you finish writing. However, do not dispose the entry stream or writer which uses it as this can cause unpredictable result. The entry stream is disposed automatically when you dispose the entry or archive opened in the *Update* mode.
>


## Delete Entry

The **ZipArchive** class provides a **GetEntry()** method which allows you access to a particular entry in the archive.

The following code snippet obtains an entry and deletes it from the ZIP archive using the **Delete()** method:



````C#
ZipArchiveEntry entry = archive.GetEntry("text.txt");
if (entry != null)
{
	entry.Delete();
}
````
````VB.NET
Dim entry As ZipArchiveEntry = archive.GetEntry("text.txt")
If entry IsNot Nothing Then
	entry.Delete()
End If
````


## Update Entry

In order to update an existing entry in the ZIP archive you should perform the following steps:

1. Use **GetEntry()** method of the **ZipArchive** object to obtain existing entry.

1. Open entry to get stream for reading/writing.

1. Read/Write necessary information from/to the entry.

1. Dispose entry when all necessary information is written. In the **Update** mode this step is optional. You can omit it if you are going to add/delete/update other entries in the archive.



````C#
ZipArchiveEntry entry = archive.GetEntry("text.txt");
if (entry != null)
{
	Stream entryStream = entry.Open();
	StreamReader reader = new StreamReader(entryStream);
	string content = reader.ReadToEnd();

	entryStream.Seek(0, SeekOrigin.End);
	StreamWriter writer = new StreamWriter(entryStream);
	writer.WriteLine("Updated line.");
	writer.Flush();
}
````
````VB.NET
Dim entry As ZipArchiveEntry = archive.GetEntry("text.txt")
If entry IsNot Nothing Then
	Dim entryStream As Stream = entry.Open()
	Dim reader As New StreamReader(entryStream)
	Dim content As String = reader.ReadToEnd()

	entryStream.Seek(0, SeekOrigin.[End])
	Dim writer As New StreamWriter(entryStream)
	writer.WriteLine("Updated line.")
	writer.Flush()
End If
````


>note If you are using **StremWriter** to write information into the entry stream (the stream opened using entry.Open() method) then you must use **Flush()** method when you finish writing. However, do not dispose the entry stream or writer which uses it as this can cause unpredictable result. The entry stream is disposed automatically when you dispose the entry or archive opened in the *Update* mode.
>

