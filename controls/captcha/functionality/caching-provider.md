---
title: Caching Provider
page_title: Caching Provider | UI for ASP.NET AJAX Documentation
description: Caching Provider
slug: captcha/functionality/caching-provider
tags: caching,provider
published: True
position: 0
---

# Caching Provider



## 

Since the Q2 2013 SP1 release of Telerik UI for ASP.NET AJAX, the RadCaptcha makes it possible to create a custom caching provider that allows specifying a storagefor the captcha code different than the cache and the session.

The following example demonstrates how to utilize a MS SQL database for this purpose:

1. In the folder __App_Code__ of the web site, a custom class that inherits the abstract class __BaseCaptchaCachingProvider__ is created. The code sample below shows the implementation of such class, which uses a database __CachingProviderDatabase__ with table __Table_1__ that has columns TableKey (type nvarchar) and TableContent (type varbinary):

>tabbedCode

````C#
	
	using System;
	using System.Data.SqlClient;
	using System.IO;
	using System.Linq;
	using System.Runtime.Serialization.Formatters.Binary;
	using System.Web;
	using Telerik.Web.UI;
	using Telerik.Web.UI.Captcha;
	
	
	public class DBImageStorageProvider : BaseCaptchaCachingProvider
	{
		public DBImageStorageProvider(HttpContext context) : base(context)
		{
		}
	
	    // Defines if a cache dependency should be applied to the cached object.
		public override bool ShouldAddCacheDependecy
		{
			get{ return true; }
		}
	
	    // Saves the CachedImage into the storage.
		public override void Save(string key, CaptchaImage image)
		{
			using(var conn = GetConnection(connectionString))
			{
				conn.Open();
				using(var command = new SqlCommand("INSERT INTO [Table_1] ([TableKey], [TableContent]) VALUES (@key, @value)", conn))
				{
					using(var ms = SerializeImage(image))
					{
						command.Parameters.Add(new SqlParameter("key", key));
						command.Parameters.Add(new SqlParameter("value", ms));
	
						command.ExecuteNonQuery();
					}
				}
			}
		}
	
	    // Retrieves the cached image from the storage.
		public override CaptchaImage Load(string key)
		{
			CaptchaImage result = null;
			using(var conn = GetConnection(connectionString))
			{
				conn.Open();
				using(var command = new SqlCommand("SELECT [TableContent] FROM [Table_1] WHERE [TableKey] = @key", conn))
				{
					command.Parameters.Add(new SqlParameter("key", key));
					byte[] bData = (byte[])command.ExecuteScalar();
	
					using(var ms = new MemoryStream())
					{
						result = DeserializeImage(bData, ms);
					}
				}
			}
	
			return result;
		}
	
	    // Removes the cached image from the storage.
		public override void Clear(string key)
		{
			using(var conn = GetConnection(connectionString))
			{
				conn.Open();
				using(var command = new SqlCommand("DELETE FROM [Table_1] WHERE [TableKey] = @key", conn))
				{
					command.Parameters.Add(new SqlParameter("key", key));
					command.ExecuteNonQuery();
				}
			}
		}
		
		private static string connectionString = @"Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|CachingProviderDatabase.mdf;Integrated Security=True;User Instance=True;";
	
	    // Creates a new SQL connection.
		private SqlConnection GetConnection(string connString)
		{
			return new SqlConnection(connString);
		}
	
	    // Serializes image to memory stream.
		private MemoryStream SerializeImage(CaptchaImage image)
		{
			var ms = new MemoryStream();
			var bFormatter = new BinaryFormatter();
			bFormatter.Serialize(ms, image);
			ms.Seek(0,0);
	
			return ms;
		}
	
	    // De-serializes image from memory stream.
		private CaptchaImage DeserializeImage(byte[] bData, MemoryStream ms)
		{
			var bFormatter = new BinaryFormatter();
	
			ms.Write(bData, 0, bData.Length);
			ms.Seek(0, 0);
	
			return (CaptchaImage)bFormatter.Deserialize(ms);
		}
	
	
	}
				
````



````VB
	
	Imports System.Data.SqlClient
	Imports System.IO
	Imports System.Linq
	Imports System.Runtime.Serialization.Formatters.Binary
	Imports System.Web
	Imports Telerik.Web.UI
	Imports Telerik.Web.UI.Captcha
	
	
	    Public Class DBImageStorageProvider
	        Inherits BaseCaptchaCachingProvider
	        Public Sub New(context As HttpContext)
	            MyBase.New(context)
	        End Sub
	
	        ' Defines if a cache dependency should be applied to the cached object.
	        Public Overrides ReadOnly Property ShouldAddCacheDependecy() As Boolean
	            Get
	                Return True
	            End Get
	        End Property
	
	        ' Saves the CachedImage into the storage.
	        Public Overrides Sub Save(key As String, image As CaptchaImage)
	            Using conn = GetConnection(connectionString)
	                conn.Open()
	                Using command = New SqlCommand("INSERT INTO [Table_1] ([TableKey], [TableContent]) VALUES (@key, @value)", conn)
	                    Using ms = SerializeImage(image)
	                        command.Parameters.Add(New SqlParameter("key", key))
	                        command.Parameters.Add(New SqlParameter("value", ms))
	
	                        command.ExecuteNonQuery()
	                    End Using
	                End Using
	            End Using
	        End Sub
	
	        ' Retrieves the cached image from the storage.
	        Public Overrides Function Load(key As String) As CaptchaImage
	            Dim result As CaptchaImage = Nothing
	            Using conn = GetConnection(connectionString)
	                conn.Open()
	                Using command = New SqlCommand("SELECT [TableContent] FROM [Table_1] WHERE [TableKey] = @key", conn)
	                    command.Parameters.Add(New SqlParameter("key", key))
	                    Dim bData As Byte() = DirectCast(command.ExecuteScalar(), Byte())
	
	                    Using ms = New MemoryStream()
	                        result = DeserializeImage(bData, ms)
	                    End Using
	                End Using
	            End Using
	
	            Return result
	        End Function
	
	        ' Removes the cached image from the storage.
	        Public Overrides Sub Clear(key As String)
	            Using conn = GetConnection(connectionString)
	                conn.Open()
	                Using command = New SqlCommand("DELETE FROM [Table_1] WHERE [TableKey] = @key", conn)
	                    command.Parameters.Add(New SqlParameter("key", key))
	                    command.ExecuteNonQuery()
	                End Using
	            End Using
	        End Sub
	
	        Private Shared connectionString As String = "Data Source=.\SQLEXPRESS;AttachDbFilename=|DataDirectory|CachingProviderDatabase.mdf;Integrated Security=True;User Instance=True;"
	
	        ' Creates a new SQL connection.
	        Private Function GetConnection(connString As String) As SqlConnection
	            Return New SqlConnection(connString)
	        End Function
	
	        ' Serializes image to memory stream.
	        Private Function SerializeImage(image As CaptchaImage) As MemoryStream
	            Dim ms = New MemoryStream()
	            Dim bFormatter = New BinaryFormatter()
	            bFormatter.Serialize(ms, image)
	            ms.Seek(0, 0)
	
	            Return ms
	        End Function
	
	        ' De-serializes image from memory stream.
	        Private Function DeserializeImage(bData As Byte(), ms As MemoryStream) As CaptchaImage
	            Dim bFormatter = New BinaryFormatter()
	
	            ms.Write(bData, 0, bData.Length)
	            ms.Seek(0, 0)
	
	            Return DirectCast(bFormatter.Deserialize(ms), CaptchaImage)
	        End Function
	
	
	    End Class
	
	
	
````


>end

1. The custom caching provider is registered in the __web.config__ of the web site by setting the fully qualified name of the storage type to the following key. If the captcha is used in a web application scenario, the namespace of the application may need to be included in the fully qualified name:

````XML
	<appSettings>
	  <add key="Telerik.Web.CaptchaImageStorageProviderTypeName" value="DBImageStorageProvider, App_Code.lfcwuanr, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null"/>
	</appSettings>
````



1. Finally, the property __ImageStorageLocation__ of RadCaptcha is set to __Custom__:

````ASPNET
	       <telerik:RadCaptcha ID="Captcha1" runat="server" ErrorMessage="The entered code is incorrect" CaptchaMaxTimeout="1"
	           ImageStorageLocation="Custom">
	       </telerik:RadCaptcha>
````


