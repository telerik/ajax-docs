---
title: Connect RadFileExplorer or RadEditor to a SQL database
description: See how to connect RadFileExplorer or RadEditor to a SQL database
type: how-to
page_title: Connect RadFileExplorer or RadEditor to a SQL database
slug: common-connect-radfileexplorer-or-radeditor-to-a-sql-database
tags: telerik, telerik ajax editor, editor, file manager
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

This article aims to show how to connect RadFileExplorer or RadEditor to a SQL database.

## Solution

**Default.aspx**

Markup and code-behind of the Editor/FileExplorer.

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" /> 
...
<telerik:RadFileexplorer runat="server" id="RadFileExplorer1" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadFileExplorer1.Configuration.ContentProviderTypeName = typeof(DBContentProvider).AssemblyQualifiedName;
	RadFileExplorer1.Configuration.ViewPaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };
	RadFileExplorer1.Configuration.UploadPaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };
	RadFileExplorer1.Configuration.DeletePaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };

	// ...

	RadEditor1.ImageManager.ContentProviderTypeName = typeof(DBContentProvider).AssemblyQualifiedName;
	RadEditor1.ImageManager.ViewPaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };
	RadEditor1.ImageManager.UploadPaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };
	RadEditor1.ImageManager.DeletePaths = new string[] { "ROOT/Images/Nature/Fruits", "ROOT/Images/Nature/Animals" };
}
````

**Handler.ashx**

This serves as an HTTP handler for processing requests made to it. It retrieves a file path from the query string, retrieves the corresponding file's content from a SQL database using DBDataServer, and writes the file content back to the response stream. It also handles setting the appropriate content type and content disposition headers based on the file extension before sending the file content to the client.

````C#
<%@ WebHandler Language="C#" Class="Handler" %>
using System.Web;

public class Handler : IHttpHandler
{
	#region IHttpHandler Members

	private DBDataServer dataServer;
	private DBDataServer DataServer
	{
		get
		{
			if (dataServer == null)
			{
				dataServer = new DBDataServer(System.Configuration.ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString);
			}
			return dataServer;
		}
	}

	private HttpContext Context { get; set; }

	public void ProcessRequest(HttpContext context)
	{
		Context = context;

		if (context.Request.QueryString["path"] == null)
		{
			return;
		}
		string path = Context.Server.UrlDecode(Context.Request.QueryString["path"]);

		var item = DataServer.GetItem(path);
		if (item == null) return;

		WriteFile((byte[])item["Content"], item["Name"].ToString(), item["MimeType"].ToString(), context.Response);
	}

	/// <summary>
	/// Sends a byte array to the client
	/// </summary>
	/// <param name="content">binary file content</param>
	/// <param name="fileName">the filename to be sent to the client</param>
	/// <param name="contentType">the file content type</param>
	private void WriteFile(byte[] content, string fileName, string contentType, HttpResponse response)
	{
		response.Buffer = true;
		response.Clear();
		response.ContentType = contentType;
		string extension = System.IO.Path.GetExtension(fileName).ToLower();
		if (extension != ".htm" && extension != ".html" && extension != ".xml" && extension != ".jpg" && extension != ".gif" && extension != ".png")
		{
			response.AddHeader("content-disposition", "attachment; filename=" + fileName);
		}
		response.BinaryWrite(content);
		response.Flush();
		response.End();
	}

	public bool IsReusable
	{
		get
		{
			return false;
		}
	}

	#endregion
}
````

**DBContentProvider.cs**

The class extends **FileBrowserContentProvider** and serves as a custom content provider for a file browser, specifically tailored to interact with a SQL database via the DBDataServer class. It overrides various methods to handle operations like resolving directories, getting file names and paths, retrieving file content, storing files, deleting files and directories, moving and copying files and directories, and checking permissions. 

Additionally, it includes methods for extracting paths from URLs, getting image MIME types, and determining permissions based on folder paths. This class essentially acts as a bridge between the Telerik file browser and the SQL database.

````C#
using System;
using System.Linq;
using System.Web;

using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using Telerik.Web.UI;
using Telerik.Web.UI.Widgets;


/// <summary>
/// Summary description for OpenAccessContentProvider
/// </summary>
public class DBContentProvider : FileBrowserContentProvider
{
	private readonly DBDataServer dataServer;

	private readonly string itemHandlerPath;

	public DBContentProvider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
		: base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
	{
		this.dataServer = new DBDataServer(System.Configuration.ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString);
		this.itemHandlerPath = System.Configuration.ConfigurationManager.AppSettings["Telerik.WebControls.EditorExamples.ItemHandler"];
		if (itemHandlerPath.StartsWith("~/"))
		{
			itemHandlerPath = HttpContext.Current.Request.ApplicationPath.TrimEnd('/') + itemHandlerPath.Substring(1);
		}
	}

	#region OVERRIDES

	public override DirectoryItem ResolveRootDirectoryAsTree(string path)
	{
		DirectoryItem directory = dataServer.GetDirectoryItem(path, true);

		if (directory == null) return null;

		directory.Permissions = GetPermissions(path);
		foreach (DirectoryItem dir in directory.Directories)
		{
			dir.Permissions = GetPermissions(path);
		}

		return directory;
	}

	public override DirectoryItem ResolveDirectory(string path)
	{
		DirectoryItem directory = dataServer.GetDirectoryItem(path, false);

		if (directory == null) return null;

		directory.Permissions = GetPermissions(directory.Path);
		directory.Files = dataServer.GetChildFiles(path, this.SearchPatterns, this.itemHandlerPath);
		foreach (FileItem file in directory.Files)
		{
			file.Permissions = GetPermissions(file.Location);
		}

		return directory;
	}

	public override string GetFileName(string url)
	{
		return Path.GetFileName(ExtractPathFromUrl(url));
	}

	public override string GetPath(string url)
	{
		return dataServer.GetPath(ExtractPathFromUrl(url));
	}
	
	public override Stream GetFile(string url)
	{
		byte[] buffer = dataServer.GetItemContent(ExtractPathFromUrl(url));
		if (!Object.Equals(buffer, null))
		{
			return new MemoryStream(buffer);
		}
		return null;
	}

	public override string StoreBitmap(Bitmap bitmap, string url, ImageFormat format)
	{
		string newItemPath = ExtractPathFromUrl(url);
		string name = GetFileName(newItemPath);
		string path = GetPath(newItemPath);
		string tempFilePath = System.IO.Path.GetTempFileName();
		bitmap.Save(tempFilePath);
		byte[] content;
		using (FileStream inputStream = File.OpenRead(tempFilePath))
		{
			long size = inputStream.Length;
			content = new byte[size];
			inputStream.Read(content, 0, Convert.ToInt32(size));
		}

		if (File.Exists(tempFilePath))
		{
			File.Delete(tempFilePath);
		}

		string error = dataServer.StoreFile(name, path, GetImageMimeType(bitmap), content);

		return String.IsNullOrEmpty(error) ? String.Format("{0}{1}{2}", path, PathSeparator, name) : String.Empty;
	}

	public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments)
	{
		long fileLength = file.InputStream.Length;
		byte[] content = new byte[fileLength];
		file.InputStream.Read(content, 0, (int)fileLength);

		string error = dataServer.StoreFile(name, path, file.ContentType, content);

		return String.IsNullOrEmpty(error) ? String.Format("{0}{1}{2}", path, PathSeparator, name) : String.Empty;
	}

	public override string DeleteFile(string path)
	{
		dataServer.DeleteItem(path);
		return String.Empty;
	}

	public override string DeleteDirectory(string path)
	{
		dataServer.DeleteItem(path);
		return String.Empty;
	}

	public override string CreateDirectory(string location, string name)
	{
		if (dataServer.ItemExists(String.Format("{0}{1}", location, name)))
			return "Directory with the same name already exists!";

		string error = dataServer.CreateDirectory(name, location);
		return !String.IsNullOrEmpty(error) ? String.Format("{0}{1}", location, name) : String.Empty;
	}

	public override string MoveFile(string path, string newPath)
	{
		if (!dataServer.ItemExists(newPath))
		{
			dataServer.UpdateItem(path, newPath);
			return String.Empty;
		}
		else return "File or folder with the same name already exists!";
	}
	
	public override string MoveDirectory(string path, string newPath)
	{
		return MoveFile(path, newPath);
	}

	public override string CopyFile(string path, string newPath)
	{
		if (!dataServer.ItemExists(newPath))
		{
			dataServer.CopyItem(path, newPath);
			return String.Empty;
		}
		else return "File or folder with the same name already exists!";
	}

	public override string CopyDirectory(string path, string destinationPath)
	{
		string destFullName = destinationPath + path.Trim(PathSeparator).Substring(path.Trim(PathSeparator).LastIndexOf(PathSeparator) + 1);

		return CopyFile(path, destFullName);
	}

	public override bool CheckDeletePermissions(string folderPath)
	{
		foreach (string path in this.DeletePaths)
		{
			if (folderPath.StartsWith(path, StringComparison.CurrentCultureIgnoreCase))
			{
				return true;
			}
		}
		return false;
	}

	public override bool CheckWritePermissions(string folderPath)
	{
		foreach (string path in this.UploadPaths)
		{
			if (folderPath.StartsWith(path, StringComparison.CurrentCultureIgnoreCase))
			{
				return true;
			}
		}
		return false;
	}

	public override bool CheckReadPermissions(string folderPath)
	{
		foreach (string viewPath in this.ViewPaths)
		{
			if (folderPath.StartsWith(viewPath, StringComparison.CurrentCultureIgnoreCase))
			{
				return true;
			}
		}
		return false;
	}

	public override bool CanCreateDirectory
	{
		get
		{
			return true;
		}
	}

	#endregion

	#region PRIVATE METHODS

	private PathPermissions GetPermissions(string folderPath)
	{
		PathPermissions permissions = PathPermissions.Read;
		if (CheckDeletePermissions(folderPath)) permissions = PathPermissions.Delete | permissions;
		if (CheckWritePermissions(folderPath)) permissions = PathPermissions.Upload | permissions;

		return permissions;
	}

	private string ExtractPathFromUrl(string url) 
	{
		string itemUrl = RemoveProtocolNameAndServerName(url);

		if (itemUrl == null)
		{
			return string.Empty;
		}

		if (itemUrl.StartsWith(this.itemHandlerPath))
		{
			return itemUrl.Substring(GetItemUrl(string.Empty).Length);
		}
		return itemUrl;	
	}

	private string GetItemUrl(string virtualItemPath)
	{
		string escapedPath = Context.Server.UrlEncode(virtualItemPath);
		return string.Format("{0}?path={1}", this.itemHandlerPath, escapedPath);
	}

	private string GetImageMimeType(Bitmap bitmap)
	{ 
		foreach (ImageCodecInfo codec in ImageCodecInfo.GetImageDecoders())
		{
			if (codec.FormatID == bitmap.RawFormat.Guid)
				return codec.MimeType;
		}

		return "image/unknown";
	}

	#endregion
}
````

**DBDataServer.cs**

The class encapsulates the functionality for interacting with a SQL database to manage files and directories. It provides methods for operations such as updating items (files or directories), retrieving items, deleting items, adding items (files or directories), copying items, getting item content, getting item paths, getting item URLs, checking item existence, and more. 

It also handles various tasks like converting paths to IDs, retrieving parent directories, handling file uploads, and constructing file and directory objects for use in a file browser interface. This class essentially acts as a bridge between the file browser UI and the underlying SQL database, providing the necessary functionality to manage files and directories.

````C#
using System;
using System.Data;
using System.Data.SqlClient;

using System.IO;
using Telerik.Web.UI.Widgets;
using System.Web;
using System.Collections.Generic;

public class DBDataServer
{
	private readonly string connectionString;
	private readonly char pathSeparator;

	private DataTable _data;
	private DataTable Data
	{
		get
		{
			if (_data == null)
			{
				SqlConnection connection = this.GetConnection(this.connectionString);
				SqlDataAdapter adapter = new SqlDataAdapter("SELECT ItemID, [Name], ParentID, MimeType, IsDirectory, [Size], [Content] FROM Items ORDER BY ItemID, [Name]", connection);
				using (connection)
				{
					connection.Open();
					_data = new DataTable();
					adapter.Fill(_data);
				}
			}
			return _data;
		}
	}

	public DBDataServer(string connectionString) : this(connectionString, '/') { }
	public DBDataServer(string connectionString, char pathSeparator)
	{
		this.connectionString = connectionString;
		this.pathSeparator = pathSeparator;
	}

	private SqlConnection GetConnection(string connectionString)
	{
		return new SqlConnection(connectionString);
	}

	public void UpdateItem(string path, string newPath)
	{
		string oldName = this.GetName(path);
		string newName = this.GetName(newPath);


		int itemId = (int)GetItemIdFromPath(path);

		if (oldName == newName) //move
		{
			DataRow newParent = this.GetParentFromPath(newPath);
			this.UpdateItem(itemId, new string[] { "ParentID" }, new string[] { newParent["ItemID"].ToString() });
		}
		else //rename
		{
			this.UpdateItem(itemId, new string[] { "Name" }, new string[] { newName });
		}
	}

	public DataRow GetItem(string path)
	{
		return this.GetItemRowFromPath(path);
	}

	private void UpdateItem(int itemId, string[] fields, string[] values)
	{
		if (fields.Length != values.Length)
			return;

		string updateCommandStr = "UPDATE [Items] SET";
		for (int i = 0; i < fields.Length; i++)
		{
			updateCommandStr += String.Format(" [{0}]='{1}'", fields[i], values[i]);
			if (i < fields.Length - 1)
				updateCommandStr += ",";
		}
		updateCommandStr += String.Format(" WHERE [ItemID] = {0}", itemId);

		SqlConnection connection = this.GetConnection(this.connectionString);

		using (connection)
		{
			connection.Open();
			SqlCommand command = new SqlCommand(updateCommandStr, connection);
			command.ExecuteNonQuery();

			this._data = null; //force update
		}
	}

	private DataRow GetParentFromPath(string path)
	{
		string parentPath = path.Substring(0, TrimSeparator(path).LastIndexOf(pathSeparator));

		return this.GetItemRowFromPath(parentPath);
	}

	private int[] ConvertPathToIds(string path)
	{
		path = this.TrimSeparator(path);
		string[] names = path.Split('/');

		List<int> result = new List<int>(names.Length);

		int itemId = 0;
		for (int i = 0; i < names.Length; i++)
		{
			string name = names[i];
			DataRow[] rows = this.Data.Select(string.Format("Name='{0}' AND (ParentID={1} OR {1}=0)", name.Replace("'", "''"), itemId), "[Name]");
			if (rows.Length > 0)
			{
				result.Add((int)rows[0]["ItemID"]);
				itemId = (int)rows[0]["ItemID"];
			}
		}

		return names.Length == result.Count ? result.ToArray() : null;
	}

	private DataRow GetItemRowFromPath(string path)
	{
		int? itemId = GetItemIdFromPath(path);
		if (itemId == null) return null;

		DataRow[] result = this.Data.Select(String.Format("ItemID = {0}", itemId), "[Name]");
		return result.Length > 0 ? result[0] : null;
	}

	private int? GetItemIdFromPath(string path)
	{
		int[] ancestors = this.ConvertPathToIds(path);

		return ancestors != null && ancestors.Length > 0 ? (int?)ancestors[ancestors.Length - 1] : null;
	}

	public void DeleteItem(string path)
	{
		SqlConnection connection = this.GetConnection(this.connectionString);

		using (connection)
		{
			connection.Open();

			SqlCommand command = new SqlCommand(String.Format("DELETE FROM [Items] WHERE ItemID = {0}", GetItemIdFromPath(path)), connection);
			command.ExecuteNonQuery();

			this._data = null;
		}
	}

	private string AddItem(string name, int parentId, string mimeType, int isDirectory, long size, byte[] content)
	{
		try
		{
			SqlConnection connection = this.GetConnection(this.connectionString);

			SqlCommand command =
				new SqlCommand(
					"INSERT INTO Items ([Name], ParentId, MimeType, IsDirectory, [Size], Content) VALUES (@Name, @ParentId, @MimeType, @IsDirectory, @Size, @Content)", connection);
			command.Parameters.Add(new SqlParameter("@Name", name));
			command.Parameters.Add(new SqlParameter("@ParentId", parentId));
			command.Parameters.Add(new SqlParameter("@MimeType", mimeType));
			command.Parameters.Add(new SqlParameter("@IsDirectory", isDirectory));
			command.Parameters.Add(new SqlParameter("@Size", size));
			command.Parameters.Add(new SqlParameter("@Content", content));

			using (connection)
			{
				connection.Open();
				command.ExecuteNonQuery();
				this._data = null; //force update
			}

			return String.Empty;
		}
		catch (Exception e)
		{
			return e.Message;
		}
	}

	private string AddDirectory(string name, int parentId)
	{
		return this.AddItem(name, parentId, String.Empty, 1, 0, new byte[0]);
	}

	private string AddFile(string name, int parentId, string mimeType, byte[] content)
	{
		return this.AddItem(name, parentId, mimeType, 0, content.LongLength, content);
	}

	private void CopyItemInternal(string path, string newPath)
	{
		DataRow itemRow = this.GetItemRowFromPath(path);
		DataRow parent = this.GetParentFromPath(newPath);

		if (Convert.ToInt32(itemRow["IsDirectory"]) == 1)
		{
			this.AddDirectory(itemRow["Name"].ToString(), (int)parent["ItemID"]);

			DataRow[] children = this.Data.Select(String.Format("ParentId = {0}", (int)itemRow["ItemID"]), "[Name]");
			foreach (DataRow child in children)
			{
				this.CopyItemInternal(String.Format("{0}{1}{2}", this.TrimSeparator(path), this.pathSeparator, child["Name"].ToString()), String.Format("{0}{1}{2}", newPath, this.pathSeparator, child["Name"].ToString()));
			}
		}
		else
		{
			this.AddFile(itemRow["Name"].ToString(), (int)parent["ItemID"], itemRow["MimeType"].ToString(), (byte[])itemRow["Content"]);
		}
	}

	public void CopyItem(string path, string newPath)
	{
		this.CopyItemInternal(path, newPath);
		this._data = null;
	}

	public string StoreFile(string name, string location, string contentType, byte[] content)
	{
		DataRow parent = this.GetItemRowFromPath(location);
		if (parent == null) return "Invalid location path.";

		return AddFile(name, (int)parent["ItemID"], contentType, content);
	}

	public string CreateDirectory(string name, string location)
	{
		return this.AddDirectory(name, (int)this.GetItemIdFromPath(location));
	}

	public byte[] GetItemContent(string path)
	{
		DataRow item = this.GetItemRowFromPath(path);

		return item != null ? (byte[])item["Content"] : null;
	}

	public string GetPath(string path)
	{
		DataRow item = this.GetItemRowFromPath(path);
		if (item == null)
			item = this.GetParentFromPath(path);

		return Convert.ToInt32(item["IsDirectory"]) == 1 ? this.GetFullPath(item) : this.GetLoaction(item);
	}

	public string GetLocation(string path)
	{
		DataRow item = this.GetItemRowFromPath(path);

		return this.GetLoaction(item);
	}

	private string GetLoaction(DataRow item)
	{
		if (String.IsNullOrEmpty(item["ParentID"].ToString()))
		{
			return String.Empty;
		}

		DataRow parentFolder = this.Data.Select(String.Format("ItemID = {0}", item["ParentID"].ToString()), "[Name]")[0];
		return this.GetFullPath(parentFolder);
	}

	public FileItem GetFileItem(string path, string handlerPath)
	{
		DataRow item = this.GetItemRowFromPath(path);

		return this.CreateFileItem(item, handlerPath);
	}

	public DirectoryItem GetDirectoryItem(string path, bool includeSubfolders)
	{
		DataRow item = this.GetItemRowFromPath(path);

		return (item != null && Convert.ToInt32(item["IsDirectory"]) == 1) ? this.CreateDirectoryItem(item, includeSubfolders) : null;
	}

	private DirectoryItem CreateDirectoryItem(DataRow item, bool includeSubfolders)
	{
		DirectoryItem directory = new DirectoryItem(item["Name"].ToString(),
													this.GetLoaction(item),
													this.GetFullPath(item),
													String.Empty,
													PathPermissions.Read, //correct permissions should be applied from the content provider
													null,
													null
													);

		if (includeSubfolders)
		{
			DataRow[] subDirItems = GetChildDirectories(item);
			List<DirectoryItem> subDirs = new List<DirectoryItem>();

			foreach (DataRow subDir in subDirItems)
			{
				subDirs.Add(CreateDirectoryItem(subDir, false));
			}

			directory.Directories = subDirs.ToArray();
		}

		return directory;
	}

	private DataRow[] GetChildDirectories(DataRow item)
	{
		return this.Data.Select(String.Format("ParentID = {0} AND IsDirectory = 1", item["ItemID"].ToString()), "[Name]");
	}

	public FileItem[] GetChildFiles(string folderPath, string[] searchPatterns, string handlerPath)
	{
		DataRow parentFolder = this.GetItemRowFromPath(folderPath);

		DataRow[] fileRows = this.Data.Select(String.Format("ParentID = {0} AND IsDirectory = 0{1}", parentFolder["ItemID"].ToString(), this.GetSearchPatternsFilter(searchPatterns)), "[Name]");

		List<FileItem> result = new List<FileItem>(fileRows.Length);
		foreach (DataRow fileRow in fileRows)
		{
			result.Add(this.CreateFileItem(fileRow, handlerPath));
		}

		return result.ToArray();
	}

	private string GetSearchPatternsFilter(string[] searchPatterns)
	{
		if (Array.IndexOf(searchPatterns, "*.*") > -1)
			return String.Empty;


		string searchPatterntsFilterExpression = " AND (Name LIKE '%";
		for (int i = 0; i < searchPatterns.Length; i++)
		{
			searchPatterntsFilterExpression += searchPatterns[i].Substring(searchPatterns[i].LastIndexOf('.'));
			if (i < searchPatterns.Length - 1)
				searchPatterntsFilterExpression += "' OR Name LIKE '%";
			else
				searchPatterntsFilterExpression += "')";
		}

		return searchPatterntsFilterExpression;
	}

	private FileItem CreateFileItem(DataRow item, string handlerPath)
	{
		string itemPath = this.GetFullPath(item);
		return new FileItem(item["Name"].ToString(),
							Path.GetExtension(itemPath),
							Convert.ToInt64(item["Size"]),
							itemPath,
							GetItemUrl(itemPath, handlerPath),
							String.Empty,
							PathPermissions.Read //correct permissions should be applied from the content provider
							);
	}

	private string GetFullPath(DataRow item)
	{
		string path = item["Name"].ToString();
		if (Convert.ToInt32(item["IsDirectory"]) == 1) path += this.pathSeparator;

		do
		{
			DataRow[] parentSearch = !String.IsNullOrEmpty(item["ParentID"].ToString()) ? this.Data.Select(String.Format("ItemID = {0}", item["ParentID"].ToString()), "[Name]") : new DataRow[0];

			if (parentSearch.Length > 0)
			{
				item = parentSearch[0];
				path = String.Format("{0}{1}{2}", item["Name"].ToString(), this.pathSeparator, path);
			}
		} while (!String.IsNullOrEmpty(item["ParentID"].ToString()));

		return path;
	}

	private string GetItemUrl(string itemPath, string handlerPath)
	{
		string escapedPath = HttpUtility.UrlEncode(itemPath);
		return string.Format("{0}?path={1}", handlerPath, escapedPath);
	}

	public bool ItemExists(string path)
	{
		DataRow item = this.GetItemRowFromPath(path);
		return !Object.Equals(item, null);
	}

	private string TrimSeparator(string path)
	{
		return path.Trim(this.pathSeparator);
	}

	private string GetName(string path)
	{
		string tmpPath = this.TrimSeparator(path);
		return tmpPath.Substring(tmpPath.LastIndexOf(pathSeparator) + 1);
	}
}
````

[Download the project](files/commonn-connect-radfileexplorer-or-radeditor-to-a-sql-databse.zip)




  