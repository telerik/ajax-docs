---
title: How to Load and Save RTF Data from a SQL Database with RadEditor
description: This how-to article explains how to load and save RTF data from a SQL database with RadEditor for ASP.NET AJAX server-side, including the character encoding issues when dealing with different languages, and provides code examples for implementing the solution. - Telerik Web UI
type: how-to
page_title: Load and Save RTF Data from a SQL Database Using RadEditor, Best Practices and Implementation Guide
slug: editor-rtf-content-load-and-save-from-to-database
position: 
tags: 
ticketid: 1602243
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Have you ever dealt with a scenario where you needed to load and save RTF data from a SQL database using RadEditor? If so, this how-to article provides code examples and explains how to address character encoding issues that may arise when dealing with different languages.

## Solution
RTF (Rich Text Format) is a document file format that allows users to exchange text documents, images, and other objects between different applications and platforms. In this tutorial, we will explain how to load and save RTF data from a SQL database with RadEditor server-side, including character encoding issues when dealing with different languages.

### Character Encoding and Internal String in Visual Studio:
First, it's important to understand character coding. You can find an explanation here: [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/). It is important to be aware that in Visual Studio, internal strings are on the `UNICODE` standard.

### SQL Server and Character Encoding:
On SQL Server, the fields `nchar` and `nvarchar` both use UTF-16 encoding (which is UNICODE) or UCS-2 encoding (a subset of UTF-16). You can find more information here: [nchar and nvarchar (Transact-SQL)](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql?WT.mc_id=DP-MVP-5001259&view=sql-server-ver15). If you retrieve or save data to a DB field with special characters (such as Japanese or Chinese), you may encounter conversion problems.

### How to avoid the above issue and load RTF Data from a SQL Database:
To load RTF data from a SQL Server table, use a rtfData-named field that is of type `nvarchar(max)` to avoid character encoding issues. Here's an example code snippet for loading RTF data from a SQL database using SqlDataReader:

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        SqlDataReader rdr = null;
        string constr = ConfigurationManager.ConnectionStrings["myConnStringOn WebConfig"].ConnectionString;
        int myIdKey = 10; // the ID of the record you want to retrieve

        using (SqlConnection con = new SqlConnection(constr))
        {
            using (SqlCommand cmd = new SqlCommand("SELECT * FROM MyTable WHERE [IDKey] = " + myIdKey))
            {
                cmd.CommandType = CommandType.Text;
                cmd.Connection = con;
                try
                {
                    con.Open();
                    rdr = cmd.ExecuteReader();
                    if (rdr.HasRows)
                    {
                        rdr.Read();
                        {
                            byte[] textRtf = Encoding.UTF8.GetBytes(rdr["rtfData"].ToString()); //use Encoding.UTF8 instead of Encoding.UNICODE

                            // Load the RTF data to RadEditor1
                            MemoryStream msTextRtf = new MemoryStream(textRtf);
                            try
                            {
                                if (textRtf.Length > 0)
                                    RadEditor1.LoadRtfContent(msTextRtf);
                            }
                            catch (Exception e) //we never know ;)
                            {
                                // Handle error
                                Console.WriteLine(e.Message);
                                // write the error on plain text
                                RadEditor1.Content = e.message;
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    // Handle error
                    Console.WriteLine(e.Message);
                }
                finally
                {
                    if (rdr != null)
                        rdr.Close();
                    if (con != null)
                        con.Close();
                }
            }
        }
    }
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    Dim rdr As SqlDataReader = Nothing
    Dim constr As String = ConfigurationManager.ConnectionStrings("myConnStringOn WebConfig").ConnectionString
    Dim myIdKey As Integer = 10

    Using con As SqlConnection = New SqlConnection(constr)

        Using cmd As SqlCommand = New SqlCommand("SELECT * FROM MyTable WHERE [IDKey] = " & myIdKey)
            cmd.CommandType = CommandType.Text
            cmd.Connection = con

            Try
                con.Open()
                rdr = cmd.ExecuteReader()

                If rdr.HasRows Then
                    rdr.Read()

                    If True Then
                        Dim textRtf As Byte() = Encoding.UTF8.GetBytes(rdr("rtfData").ToString())
                        Dim msTextRtf As MemoryStream = New MemoryStream(textRtf)

                        Try
                            If textRtf.Length > 0 Then RadEditor1.LoadRtfContent(msTextRtf)
                        Catch e As Exception
                            Console.WriteLine(e.Message)
                            RadEditor1.Content = e.message
                        End Try
                    End If
                End If

            Catch e As Exception
                Console.WriteLine(e.Message)
            Finally
                If rdr IsNot Nothing Then rdr.Close()
                If con IsNot Nothing Then con.Close()
            End Try
        End Using
    End Using
End Sub
````

### Saving RTF Data to a SQL Database

To save the RTF data to a SQL Server table, you can use the following code:


````C#
//The ExportContent event fires when the ExportToRtf() is called and allows you to obtain the row RTF data
protected void RadEditor1_ExportContent(object sender, EditorExportingArgs e)
{
    byte[] rtfData = System.Text.Encoding.Unicode.GetBytes(e.ExportOutput);

    // Save the RTF data to the database
    using (SqlConnection conn = new SqlConnection("<your connection string here>"))
    {
        conn.Open();
        using (SqlCommand cmd = new SqlCommand("INSERT INTO YourTableName (YourFieldName) VALUES (@rtfData)", conn))
        {
            cmd.Parameters.Add("@rtfData", SqlDbType.VarBinary).Value = rtfData;
            cmd.ExecuteNonQuery();
        }
    }

    e.Cancel = true; //cancel the event to prevent downloading of the rtf file by the browser
}

protected void Button1_Click(object sender, EventArgs e)
{
    RadEditor1.ExportToRtf();
}
````
````VB
Protected Sub RadEditor1_ExportContent(ByVal sender As Object, ByVal e As EditorExportingArgs)
    Dim rtfData As Byte() = System.Text.Encoding.Unicode.GetBytes(e.ExportOutput)

    Using conn As SqlConnection = New SqlConnection("<your connection string here>")
        conn.Open()

        Using cmd As SqlCommand = New SqlCommand("INSERT INTO YourTableName (YourFieldName) VALUES (@rtfData)", conn)
            cmd.Parameters.Add("@rtfData", SqlDbType.VarBinary).Value = rtfData
            cmd.ExecuteNonQuery()
        End Using
    End Using

    e.Cancel = True
End Sub

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadEditor1.ExportToRtf()
End Sub
````

In the above code, the `RadEditor1_ExportContent` method is called when you click the button to save the RTF data to the database. In this method, the RTF data is first converted to a byte array using the `System.Text.Encoding.Unicode.GetBytes` method. Then, the byte array is saved to the SQL Server table using the `SqlCommand` object.

> Note that it's important to save the byte array to your `nvarchar` field with a `binary data type` otherwise, SQL Server will convert the array to a `UCS-2` encoding, and you will see "Chinese-like characters" or other special characters.

In conclusion, this how-to article provided a solution for loading and saving RTF data from a SQL database with RadEditor server-side, along with examples of how to deal with character encoding issues when dealing with different languages. With this solution, you can easily retrieve and store rich text data in your SQL Server database, even when dealing with non-English languages.

You can find more useful resources at:

* [Prevent the rtf, pdf and docx file download and convert the exported content to a string]({%slug editor-export-as-a-string%})
* [Enabling the Import Feature for DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})
* [Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})
 
     