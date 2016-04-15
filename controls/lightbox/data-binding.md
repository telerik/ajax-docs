---
title: Data Binding
page_title: Data Binding | RadLightBox for ASP.NET AJAX Documentation
description: Data Binding
slug: lightbox/data-binding
tags: data,binding
published: True
position: 4
---

# Data Binding



**RadLightBox** fully supports binding to various data sources:

* [Array, ArrayList](#binding-to-array-or-arraylist)

* [Folder](#binding-to-folder)

* [DataTable, DataSet, DataView](#binding-to-datatable,-dataset,-and-dataview)

* [DataSource components](#radlightbox-supports-binding-to-all-asp.net-datasource-components,-including:)

* [ModelBinding](#radlightbox-supports-modelbinding:)

## Databinding Properties and Methods

The following properties and methods are used when binding RadLightBox to a data source:

* **DataSource** property - set to an instance of your data source. This is mandatory when bindingRadLightBox at runtime.

* **DataSourceID** property - set to the ID of your data source. This is mandatory when binding RadLightBox declaratively.

* **DataTitleField** property - field name from the data source to bind to the **Title** property.

* **DataDescriptionField** property - field name from the data source to bind to the **Description** property.

* **DataBind** method - must be called after the aforementioned properties are set, when binding at runtime.This method is mandatory for binding at runtime

* **DataImageUrlField** property - field name from the data source to bind to the **ImageUrl** property.

* **DataNavigateUrlField** property - field name from the data source to bind to the **NavigateUrl** property.

## Binding to Array or ArrayList

**RadLightBox** can be bound either to **Array** or **ArrayList**.The following example shows how to bind RadLightBox objects to both Array and ArrayList, at runtime. The declaration ofRadLightBox object includes no DataSourceID property or <items> section:

````ASPNET
<script type="text/javascript">
	function button1Click()
	{
		var lightBox1 = $find('<%= RadLightBox1.ClientID %>');
		lightBox1.show();
	}
	function button2Click()
	{
		var lightBox2 = $find('<%= RadLightBox2.ClientID %>');
		lightBox2.show();
	}
</script>
<telerik:radlightbox id="RadLightBox1" runat="server"></telerik:radlightbox>
<telerik:radlightbox id="RadLightBox2" runat="server"></telerik:radlightbox>
<asp:Button ID="Button1" OnClientClick="button1Click(); return false;" runat="server"
	Text="Open RadLightBox1" />
<asp:Button ID="Button2" OnClientClick="button2Click(); return false;" runat="server"
	Text="Open RadLightBox2" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		BindToArrayList(RadLightBox1);
		BindToArray(RadLightBox2);
	}
}

private void BindToArray(RadLightBox lightBox)
{
	string[] itemsList = { "~/img/1.png", "~/img/2.png", "~/img/3.png" };
	lightBox.DataSource = itemsList;
	lightBox.DataBind();
}

private void BindToArrayList(RadLightBox lightBox)
{
	ArrayList itemsList = new ArrayList();
	itemsList.Add("~/img/4.png");
	itemsList.Add("~/img/5.png");
	itemsList.Add("~/img/6.png");
	lightBox.DataSource = itemsList;
	lightBox.DataBind();
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs)
	If Not Page.IsPostBack Then
		BindToArrayList(RadLightBox1)
		BindToArray(RadLightBox2)
	End If
End Sub

Private Sub BindToArray(lightBox As RadLightBox)
	Dim itemsList As String() = {"~/img/1.png", "~/img/2.png", "~/img/3.png"}
	lightBox.DataSource = itemsList
	lightBox.DataBind()
End Sub

Private Sub BindToArrayList(lightBox As RadLightBox)
	Dim itemsList As New ArrayList()
	itemsList.Add("~/img/4.png")
	itemsList.Add("~/img/5.png")
	itemsList.Add("~/img/6.png")
	lightBox.DataSource = itemsList
	lightBox.DataBind()
End Sub
````



## Binding to Folder

**RadLightBox** can be bound to folder and display all images contained in it.The following example shows how to bind RadLightBox objects to a folder, at runtime. The declaration ofRadLightBox object includes no DataSourceID property or <items> section:

````ASPNET
<telerik:RadCodeBlock runat="server">
	<script type="text/javascript">
		function OpenLightBox() {
			$find("<%=RadLightBox1.ClientID %>").show();
		}
	</script>
</telerik:RadCodeBlock>
<telerik:RadLightBox RenderMode="Lightweight" ID="RadLightBox1" runat="server" SelectMethod="GetPictures" DataImageUrlField="Path">
	 
</telerik:RadLightBox>
<asp:Button ID="Button8" runat="server" Text="Show LightBox" OnClientClick="OpenLightBox(); return false;" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadLightBox1.DataSource = GetFileInfoData();
		RadLightBox1.DataBind();
	}
}

private object GetFileInfoData()
{
	List<FileInfoData> fid = new List<FileInfoData>();
	foreach (string fileName in Directory.GetFiles(Server.MapPath("images")))
	{ 
		fid.Add(new FileInfoData { 
			FileName = Path.GetFileNameWithoutExtension(fileName), 
			FilePath = "~\\" + fileName.Replace(Request.ServerVariables["APPL_PHYSICAL_PATH"], String.Empty),
			FileNameExt = Path.GetFileName(fileName)
		});
	}
	return fid;
}


public class FileInfoData
{
	public string FileName { get; set; }
	public string FilePath { get; set; }
	public string FileNameExt { get; set; }
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	If Not IsPostBack Then
		RadLightBox1.DataSource = GetFileInfoData()
		RadLightBox1.DataBind()
	End If
End Sub

Private Function GetFileInfoData() As Object
	Dim fid As New List(Of FileInfoData)()
	For Each fileName As String In Directory.GetFiles(Server.MapPath("images"))
		fid.Add(New FileInfoData() With { _
			.FileName = Path.GetFileNameWithoutExtension(fileName), _
			.FilePath = "~\" + fileName.Replace(Request.ServerVariables("APPL_PHYSICAL_PATH"), [String].Empty), _
			.FileNameExt = Path.GetFileName(fileName) _
		})
	Next
	Return fid
End Function


Public Class FileInfoData
	Public Property FileName() As String
		Get
			Return m_FileName
		End Get
		Set(value As String)
			m_FileName = value
		End Set
	End Property
	Private m_FileName As String
	Public Property FilePath() As String
		Get
			Return m_FilePath
		End Get
		Set(value As String)
			m_FilePath = value
		End Set
	End Property
	Private m_FilePath As String
	Public Property FileNameExt() As String
		Get
			Return m_FileNameExt
		End Get
		Set(value As String)
			m_FileNameExt = value
		End Set
	End Property
	Private m_FileNameExt As String
End Class
````



## Binding to DataTable, DataSet, and DataView

**RadLightBox** can be bound to a **DataTable**, **DataSet**,and **DataView**. The following example shows binding to a DataTable object. The declaration ofRadLightBox object includes no DataSourceID property or <items> section:

````ASPNET
<script type="text/javascript">
	function button1Click()
	{
		var lightBox1 = $find('<%= RadLightBox1.ClientID %>');
		lightBox1.show();
	}
</script>
<telerik:radlightbox id="RadLightBox1" runat="server"></telerik:radlightbox>
<asp:Button ID="Button3" OnClientClick="button1Click(); return false;" runat="server"
	Text="Open RadLightBox1" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		BindToDataTable(RadLightBox1);
	}

}

private void BindToDataTable(RadLightBox lightBox)
{

	SqlConnection con = new SqlConnection("Data Source=LOCAL;Initial Catalog=Combo;Integrated Security=True");

	SqlDataAdapter adapter = new SqlDataAdapter("SELECT [Title], [Description], [ImageUrl] FROM [Portfolio]", con);
	DataTable links = new DataTable();

	adapter.Fill(links);

	lightBox.DataImageUrlField = "ImageUrl";
	lightBox.DataTitleField = "Title";
	lightBox.DataDescriptionField = "Description";
	lightBox.DataSource = links;
	lightBox.DataBind();
}
	
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs)
	If Not Page.IsPostBack Then
		BindToDataTable(RadLightBox1)
	End If

End Sub

Private Sub BindToDataTable(lightBox As RadLightBox)

	Dim con As New SqlConnection("Data Source=LOCAL;Initial Catalog=Combo;Integrated Security=True")

	Dim adapter As New SqlDataAdapter("SELECT [Title], [Description], [ImageUrl] FROM [Portfolio]", con)
	Dim links As New DataTable()

	adapter.Fill(links)

	lightBox.DataImageUrlField = "ImageUrl"
	lightBox.DataTitleField = "Title"
	lightBox.DataDescriptionField = "Description"
	lightBox.DataSource = links
	lightBox.DataBind()
End Sub
	
````


## RadLightBox supports binding to all ASP.NET DataSource components, including:

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

* EntityDataSource

To bind to a DataSource component, all you need to do is set the **DataSourceID** property of **RadLightBox** to the ID of the DataSource component. You should also set the **DataImageUrl**,**DataTitleField** and **DataDescriptionField** properties of RadLightBox to map the **ImageUrl**, **Title** and **Description** properties of the items to therespective columns / fields from the data source.

**SqlDataSource**

````ASPNET
<script type="text/javascript">
	function button1Click()
	{
		var lightBox1 = $find('<%= RadLightBox1.ClientID %>');
		lightBox1.show();
	}
</script>
<telerik:radlightbox id="RadLigthBox1" runat="server" datasourceid="SqlDataSource1"
	dataimageurlfield="ImageUrl" datatitlefield="Title" datadescriptionfield="Description"></telerik:radlightbox>
<asp:Button ID="Button4" OnClientClick="button1Click(); return false;" runat="server"
	Text="Open RadLightBox1" />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:LightBoxConnectionString %>"
	SelectCommand="SELECT * FROM [Portfolio]"></asp:SqlDataSource>
````



**XmlDataSource**

````ASPNET
<script type="text/javascript">
	function button1Click()
	{
		var lightBox1 = $find('<%= RadLightBox1.ClientID %>');
		lightBox1.show();
	}
</script>
<telerik:radlightbox id="RadLigthBox1" runat="server" datasourceid=" XmlDataSource1"
	dataimageurlfield="ImageUrl" datatitlefield="Title" datadescriptionfield="Description"></telerik:radlightbox>
<asp:Button ID="Button5" OnClientClick="button1Click(); return false;" runat="server"
	Text="Open RadLightBox1" />
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ContentFile.xml">
</asp:XmlDataSource>
````



**ObjectDataSource**

````ASPNET
<script type="text/javascript">
	function button1Click()
	{
		var lightBox1 = $find('<%= RadLightBox1.ClientID %>');
		lightBox1.show();
	}
</script>
<telerik:radlightbox id="RadLigthBox1" runat="server" datasourceid=" ObjectDataSource1"
	dataimageurlfield="ImageUrl" datatitlefield="Title" datadescriptionfield="Description"></telerik:radlightbox>
<asp:Button ID="Button6" OnClientClick="button1Click(); return false;" runat="server"
	Text="Open RadLightBox1" />
<asp:ObjectDataSource ID="ObjectDataSource1" TypeName="LightBoxObjectData" SelectMethod="GetItems"
	runat="server"></asp:ObjectDataSource>
````



````C#
public LightBoxObjectData() { }
public static List<LightBoxDataItem> GetItems()
{
	List<LightBoxDataItem> itemsList = new List<LightBoxDataItem>();
	itemsList.Add(new LightBoxDataItem("Title1", "~/img/1.png", "Description1"));
	itemsList.Add(new LightBoxDataItem("Title2", "~/img/2.png", "Description2"));
	itemsList.Add(new LightBoxDataItem("Title3", "~/img/3.png", "Description3"));
	return itemsList;
}
public class LightBoxDataItem
{
	private string _title;
	private string _imageUrl;
	private string _description;

	public string Title
	{
		get
		{
			return _title;
		}
		set
		{
			_title = value;
		}
	}

	public string ImageUrl
	{
		get
		{
			return _imageUrl;
		}
		set
		{
			_imageUrl = value;
		}
	}

	public string Description
	{
		get
		{
			return _description;
		}
		set
		{
			_description = value;
		}
	}
	public LightBoxDataItem(string title, string imageUrl, string description)
	{
		_title = title;
		_imageUrl = imageUrl;
		_description = description;
	}
}
	
````
````VB.NET
Public Sub New()
End Sub
Public Shared Function GetItems() As List(Of LightBoxDataItem)
	Dim itemsList As New List(Of LightBoxDataItem)()
	itemsList.Add(New LightBoxDataItem("Title1", "~/img/1.png", "Description1"))
	itemsList.Add(New LightBoxDataItem("Title2", "~/img/2.png", "Description2"))
	itemsList.Add(New LightBoxDataItem("Title3", "~/img/3.png", "Description3"))
	Return itemsList
End Function
Public Class LightBoxDataItem
	Private _title As String
	Private _imageUrl As String
	Private _description As String

	Public Property Title() As String
		Get
			Return _title
		End Get
		Set(value As String)
			_title = value
		End Set
	End Property

	Public Property ImageUrl() As String
		Get
			Return _imageUrl
		End Get
		Set(value As String)
			_imageUrl = value
		End Set
	End Property

	Public Property Description() As String
		Get
			Return _description
		End Get
		Set(value As String)
			_description = value
		End Set
	End Property
	Public Sub New(title As String, imageUrl As String, description As String)
		_title = title
		_imageUrl = imageUrl
		_description = description
	End Sub
End Class
	
````



## RadLightBox supports ModelBinding:

To bind the databound **RadLightBox** via ModelBinding you need to set only the **SelectMethod** property to the name of the public method placed into the page's code-behind file. When you run the page, the control will call the above method and automatically retrieve the data and render it.

````ASPNET
<telerik:RadCodeBlock runat="server">
	<script type="text/javascript">
		function OpenLightBox()
		{
			$find("<%=RadLightBox1.ClientID %>").show();
		}
	</script>
</telerik:RadCodeBlock>
<telerik:RadLightBox RenderMode="Lightweight" ID="RadLightBox1" runat="server" SelectMethod="GetPictures" DataImageUrlField="Path">
	 
</telerik:RadLightBox>
<asp:Button ID="Button7" runat="server" Text="Show LightBox" OnClientClick="OpenLightBox(); return false;" />
````
````C#
public IQueryable<MyPicture> GetPictures()
{
	return new MyPicture().GetPictures();
}

public class MyPicture
{
	public int ID { get; set; }
	public string Path { get; set; }

	public IQueryable<MyPicture> GetPictures()
	{
		List<MyPicture> collection = new List<MyPicture>();

		collection.Add(new MyPicture() { ID = 1, Path = "~/Images/1.png" });
		collection.Add(new MyPicture() { ID = 2, Path = "~/Images/2.png" });
		collection.Add(new MyPicture() { ID = 3, Path = "~/Images/3.png" });
		collection.Add(new MyPicture() { ID = 4, Path = "~/Images/4.png" });
		collection.Add(new MyPicture() { ID = 5, Path = "~/Images/5.png" });

		return collection.AsQueryable();
	}
}
````
````VB.NET
Public Function GetPictures() As IQueryable(Of MyPicture)
	Return New MyPicture().GetPictures()
End Function

Public Class MyPicture
	Public Property ID() As Integer
		Get
			Return m_ID
		End Get
		Set(value As Integer)
			m_ID = Value
		End Set
	End Property
	Private m_ID As Integer
	Public Property Path() As String
		Get
			Return m_Path
		End Get
		Set(value As String)
			m_Path = Value
		End Set
	End Property
	Private m_Path As String

	Public Function GetPictures() As IQueryable(Of MyPicture)
		Dim collection As New List(Of MyPicture)()

		collection.Add(New MyPicture() With { _
			.ID = 1, _
			.Path = "~/Images/1.png" _
		})
		collection.Add(New MyPicture() With { _
			.ID = 2, _
			.Path = "~/Images/2.png" _
		})
		collection.Add(New MyPicture() With { _
			.ID = 3, _
			.Path = "~/Images/3.png" _
		})
		collection.Add(New MyPicture() With { _
			.ID = 4, _
			.Path = "~/Images/4.png" _
		})
		collection.Add(New MyPicture() With { _
			.ID = 5, _
			.Path = "~/Images/5.png" _
		})

		Return collection.AsQueryable()
	End Function
End Class
````


