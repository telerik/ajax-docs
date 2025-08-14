---
title: Converting Filter States in RadPivotGrid with RadPersistenceManager After Security Update  
description: Learn how to update RadPivotGrid filter states stored by RadPersistenceManager after a recent security update in Telerik.Web.UI.
type: how-to
page_title: How to Update RadPivotGrid Filter States in RadPersistenceManager
meta_title: How to Update RadPivotGrid Filter States in RadPersistenceManager  
slug: pivotgrid-update-old-persisted-filter-states-after-security-update
tags: persistenceframework, ui-for-asp.net-ajax, radpivotgrid, radpersistencemanager, filters-persistence, filter-states
ticketid: 1694223
res_type: kb
---

## Environment

| Version | Product | Author | 
| ---     | ---     | ----   | 
| 2024.4.1114 | PivotGrid for Telerik UI for ASP.NET AJAX | [Attila Antal](https://github.com/attilaantal)| 

## Description

I need to update legacy filter states in `RadPivotGrid` because a security update in Telerik.Web.UI removed support for filters serialized using the unsafe .NET BinaryFormatter. Older persisted filter states fail to deserialize after the upgrade, resulting in errors. While manually removing old persisted values, reapplying filters, and saving works, I need a scalable solution for hundreds of saved views.

This knowledge base article also answers the following questions:

- How can I convert persisted filter states in `RadPivotGrid`?
- How do I handle filter serialization issues after upgrading Telerik.Web.UI?
- What is the workaround for updating legacy filter states in `RadPivotGrid`?


## Solution

To convert legacy filter states in RadPivotGrid to the new JSON-based format, use the following approach. This code handles scenarios where filter states are stored as strings or files.

The following example shows how to convert the persisted state:

````C#
// The actual logic for converting the state
private string ConvertState(string oldState)
{
    XDocument doc = XDocument.Parse(oldState);

    XElement filterPersistenceElement = doc.Descendants("ControlSetting")
        .Where(setting => setting.Element("Name").Value == "FiltersPersistence").FirstOrDefault();

    if (filterPersistenceElement != null)
    {
        string[] oldFilterStates = filterPersistenceElement.Element("Value").Element("string").Value.Trim().Split(',');

        List<string> newFilterStates = new List<string>();

        foreach (string filterState in oldFilterStates)
        {
            string[] options = filterState.Split(new string[] { ";" }, StringSplitOptions.RemoveEmptyEntries);

            options[2] = SerializeObject(DeserializeObject(options[2]));

            newFilterStates.Add(string.Join(";", options));
        }

        filterPersistenceElement.Element("Value").Element("string").Value = string.Join(",", newFilterStates.ToArray());
    }

    return doc.ToString();
}

// Legacy code for deserializing the state
// WARNING: This method uses BinaryFormatter.Deserialize(), which is deprecated and insecure.
// Only use this on trusted data during migration. Do NOT use in production or with untrusted data.
// See: https://learn.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guide
public static object DeserializeObject(string objectToDeserialize)
{
    byte[] unencodedArray = Convert.FromBase64String(objectToDeserialize);
    BinaryFormatter bf = new BinaryFormatter();
    using (MemoryStream ms = new MemoryStream(unencodedArray))
    {
        return bf.Deserialize(ms);
    }
}

// Current code for serializing the state
public static string SerializeObject(object objectToSerialize)
{
    var jsonString = JsonConvert.SerializeObject(objectToSerialize);
    byte[] bytes = Encoding.UTF8.GetBytes(jsonString);
    return Convert.ToBase64String(bytes);
}
````
````VB.NET
'The actual logic for converting the state
Private Function ConvertState(oldState As String) As String
    Dim doc As XDocument = XDocument.Parse(oldState)

    Dim filterPersistenceElement As XElement = doc.Descendants("ControlSetting") _
        .Where(Function(setting) setting.Element("Name").Value = "FiltersPersistence") _
        .FirstOrDefault()

    If filterPersistenceElement IsNot Nothing Then
        Dim oldFilterStates As String() = filterPersistenceElement.Element("Value").Element("string").Value.Trim().Split(","c)

        Dim newFilterStates As New List(Of String)()

        For Each filterState As String In oldFilterStates
            Dim options As String() = filterState.Split(New String() {";"}, StringSplitOptions.RemoveEmptyEntries)

            options(2) = SerializeObject(DeserializeObject(options(2)))

            newFilterStates.Add(String.Join(";", options))
        Next

        filterPersistenceElement.Element("Value").Element("string").Value = String.Join(",", newFilterStates.ToArray())
    End If

    Return doc.ToString()
End Function

' Legacy code for deserializing the state
Public Shared Function DeserializeObject(objectToDeserialize As String) As Object
    Dim unencodedArray As Byte() = Convert.FromBase64String(objectToDeserialize)
    Dim bf As New BinaryFormatter()
    Using ms As New MemoryStream(unencodedArray)
        Return bf.Deserialize(ms)
    End Using
End Function

' Current code for serializing the state
Public Shared Function SerializeObject(objectToSerialize As Object) As String
    Dim jsonString As String = JsonConvert.SerializeObject(objectToSerialize)
    Dim bytes As Byte() = Encoding.UTF8.GetBytes(jsonString)
    Return Convert.ToBase64String(bytes)
End Function
````

You can create a few helper methods and plug-in the functions from above to handle different scenarios.

````C#
// Update the state in files
private void UpdateStateInFile(string filePath)
{
    string oldState = GetFileContents(filePath);
    string newState = ConvertState(oldState);
    WriteFileContents(filePath, newState);
}

// Convert the old state from string to new state
private string GetConvertedState(string oldState)
{
    return ConvertState(oldState);
}

private string GetFileContents(string filePath)
{
    string contents;
    using (var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
    using (var reader = new StreamReader(stream))
    {
        contents = reader.ReadToEnd();
    }
    return contents;
}

private void WriteFileContents(string filePath, string contents)
{
    using (var stream = new FileStream(Server.MapPath(filePath), FileMode.Create, FileAccess.Write, FileShare.Read))
    using (var writer = new StreamWriter(stream))
    {
        writer.Write(contents);
    }
}
````
````VB.NET
'Update the state in files
Private Sub UpdateStateInFile(filePath As String)
    Dim oldState As String = GetFileContents(filePath)
    Dim newState As String = ConvertState(oldState)
    WriteFileContents(filePath, newState)
End Sub

'Convert the old state from string to new state
Private Function GetConvertedState(oldState As String) As String
    Return ConvertState(oldState)
End Function

Private Function GetFileContents(filePath As String) As String
    Dim contents As String
    Using stream As New FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
        Using reader As New StreamReader(stream)
            contents = reader.ReadToEnd()
        End Using
    End Using
    Return contents
End Function

Private Sub WriteFileContents(filePath As String, contents As String)
    Using stream As New FileStream(Server.MapPath(filePath), FileMode.Create, FileAccess.Write, FileShare.Read)
        Using writer As New StreamWriter(stream)
            writer.Write(contents)
        End Using
    End Using
End Sub
````


## See Also

* [Persisting PivotGrid Settings](https://demos.telerik.com/aspnet-ajax/pivotgrid/examples/applicationscenarios/persisting-radpivotgrid-settings/defaultcs.aspx)
