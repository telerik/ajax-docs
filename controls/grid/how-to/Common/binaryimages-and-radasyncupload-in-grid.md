---
title: BinaryImages and RadAsyncUpload in Grid
page_title: BinaryImages and RadAsyncUpload in Grid | RadGrid for ASP.NET AJAX Documentation
description: BinaryImages and RadAsyncUpload in Grid
slug: grid/how-to/common/binaryimages-and-radasyncupload-in-grid
tags: binaryimages,and,radasyncupload,in,grid
published: True
position: 15
---

# BinaryImages and RadAsyncUpload in Grid



##

[This example](https://demos.telerik.com/aspnet-ajax/controls/examples/integration/gridandradasyncupload/defaultcs.aspx?product=grid) illustrates the usage of RadAsyncUpload and BinaryImage and how to display and edit images. RadAsyncUpload offers asynchronous upload capability while maintaining the look of the regular RadUpload control. The upload process requires that the files are uploaded to a custom handler and not to the hosting page. Files are stored in a temporary location until a Postback occurs. The temporary location is cleaned-up automatically.

Some of the key advantages that RadAsyncUpload offers against RadUpload are

* Uploads the file(s) automatically and asynchronously to the server

* Integrated visual clue of the current operations - uploading, upload successfully completed, upload failed

* Client side events for upload completed and upload failed

* Simpler validation
![](images/grd_BinaryImagesRadAsyncUploadInGrid_thumb.png)

There are a few important things to consider when using RadAsyncUpload

* RadAsyncUpload requires the Telerik.Web.UI.WebResource handler to be registered in the web.config.

* You need to ensure that any submit buttons on the page are disabled while upload is in progress. Otherwise, there is no guarantee that the files will be uploaded successfully

You can also perform validation over the file input as shown in the demo code:



````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
  <script>
    var uploadedFilesCount = 0; var isEditMode; function validateRadUpload(source, e) {
      // When the RadGrid is in Edit mode the user is not obliged to upload file.
      if (isEditMode == null || isEditMode == undefined) {
        e.IsValid = false;
        if (uploadedFilesCount > 0) {
          e.IsValid = true;
        }
      }
      isEditMode = null;
    }
    function OnClientFileUploaded(sender, eventArgs) {
      uploadedFilesCount++;
    }
  </script>
</telerik:RadCodeBlock>
````
````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" Skin="Office2007" AllowPaging="True"
  AllowSorting="True" AutoGenerateColumns="False" Width="97%" ShowStatusBar="True"
  GridLines="None" OnItemCreated="RadGrid1_ItemCreated" PageSize="3" OnInsertCommand="RadGrid1_InsertCommand"
  OnNeedDataSource="RadGrid1_NeedDataSource" OnDeleteCommand="RadGrid1_DeleteCommand"
  OnUpdateCommand="RadGrid1_UpdateCommand" OnItemCommand="RadGrid1_ItemCommand">
  <PagerStyle Mode="NumericPages" AlwaysVisible="true" />
  <MasterTableView Width="100%" CommandItemDisplay="Top" DataKeyNames="ID">
    <Columns>
      <telerik:GridEditCommandColumn ButtonType="ImageButton">
        <HeaderStyle Width="3%" />
      </telerik:GridEditCommandColumn>
      <telerik:GridTemplateColumn HeaderText="Image Name" UniqueName="ImageName" SortExpression="Name">
        <ItemTemplate>
          <asp:Label runat="server" ID="lblName" Text='<%# Eval("Name") %>' />
        </ItemTemplate>
        <EditItemTemplate>
          <telerik:RadTextBox RenderMode="Lightweight" runat="server" Width="200px" ID="txbName" Text='<%# Eval("Name") %>' /><asp:RequiredFieldValidator
            ID="Requiredfieldvalidator1" runat="server" ControlToValidate="txbName" ErrorMessage="Please, enter a name!"
            Display="Dynamic" SetFocusOnError="true" />
        </EditItemTemplate>
        <HeaderStyle Width="30%" />
      </telerik:GridTemplateColumn>
      <telerik:GridTemplateColumn HeaderText="Description" UniqueName="Description" DataField="Description">
        <ItemTemplate>
          <asp:Label ID="lblDescription" runat="server" Text='<%# TrimDescription(Eval("Description") as string) %>' />
        </ItemTemplate>
        <EditItemTemplate>
          <telerik:RadTextBox RenderMode="Lightweight" ID="txbDescription" Width="300px" runat="server" TextMode="MultiLine"
            Text='<%# Eval("Description") %>' Height="150px" />
        </EditItemTemplate>
        <ItemStyle VerticalAlign="Top" />
      </telerik:GridTemplateColumn>
      <telerik:GridTemplateColumn DataField="Data" HeaderText="Image" UniqueName="Upload">
        <ItemTemplate>
          <telerik:RadBinaryImage runat="server" ID="RadBinaryImage1" DataValue='<%#Eval("Data") %>'
            AutoAdjustImageControlSize="false" Height="80px" Width="80px" ToolTip='<%#Eval("Name", "Photo of {0}") %>'
            AlternateText='<%#Eval("Name", "Photo of {0}") %>' />
        </ItemTemplate>
        <EditItemTemplate>
          <telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="AsyncUpload1" OnClientFileUploaded="OnClientFileUploaded"
            Skin="Office2007" AllowedFileExtensions="jpg,jpeg,png,gif" MaxFileSize="1048576"
            OnValidatingFile="RadAsyncUpload1_ValidatingFile">
          </telerik:RadAsyncUpload>
        </EditItemTemplate>
      </telerik:GridTemplateColumn>
      <telerik:GridButtonColumn Text="Delete" CommandName="Delete" ButtonType="ImageButton">
        <HeaderStyle Width="2%" />
      </telerik:GridButtonColumn>
    </Columns>
    <EditFormSettings>
      <EditColumn ButtonType="ImageButton" />
    </EditFormSettings>
    <PagerStyle AlwaysVisible="True" />
  </MasterTableView>
</telerik:RadGrid>
````
````C#
const int MaxTotalBytes = 1048576; // 1 MBint totalBytes;
public bool? IsRadAsyncValid
{
    get
    {
        if (Session["IsRadAsyncValid"] == null)
        {
            Session["IsRadAsyncValid"] = true;
        }
        return Convert.ToBoolean(Session["IsRadAsyncValid"].ToString());
    }
    set
    {
        Session["IsRadAsyncValid"] = value;
    }
}
public static string ConnectionString
{
    get
    {
        return ConfigurationManager.ConnectionStrings["TelerikConnectionString"].ConnectionString;
    }
}
protected override void OnLoad(EventArgs e)
{
    base.OnLoad(e);
    IsRadAsyncValid = null;
}
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        RadAsyncUpload upload = ((GridEditableItem)e.Item)["Upload"].FindControl("AsyncUpload1") as RadAsyncUpload;
        TableCell cell = (TableCell)upload.Parent;
        CustomValidator validator = new CustomValidator();
        validator.ErrorMessage = "Please select file to be uploaded";
        validator.ClientValidationFunction = "validateRadUpload";
        validator.Display = ValidatorDisplay.Dynamic;
        cell.Controls.Add(validator);
    }
}
protected string TrimDescription(string description)
{
    if (!string.IsNullOrEmpty(description) && description.Length > 200)
    {
        return string.Concat(description.Substring(0, 200), "...");
    }
    return description;
}
private static DataTable GetDataTable(string queryString)
{
    SqlConnection MySqlConnection = new SqlConnection(ConnectionString);
    SqlDataAdapter MySqlDataAdapter = new SqlDataAdapter();
    MySqlDataAdapter.SelectCommand = new SqlCommand(queryString, MySqlConnection);
    DataTable myDataTable = new DataTable();
    MySqlConnection.Open();
    try
    {
        MySqlDataAdapter.Fill(myDataTable);
    }
    finally
    {
        MySqlConnection.Close();
    }
    return myDataTable;
}
protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDataTable("SELECT * FROM [Images]");
}
protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)
{
    if (!IsRadAsyncValid.Value)
    {
        e.Canceled = true;
        RadAjaxManager1.Alert("The length of the uploaded file must be less than 1 MB");
        return;
    }
    GridEditFormInsertItem insertItem = e.Item as GridEditFormInsertItem;
    string imageName = (insertItem["ImageName"].FindControl("txbName") as RadTextBox).Text;
    string description = (insertItem["Description"].FindControl("txbDescription") as RadTextBox).Text;
    RadAsyncUpload radAsyncUpload = insertItem["Upload"].FindControl("AsyncUpload1") as RadAsyncUpload;
    UploadedFile file = radAsyncUpload.UploadedFiles[0];
    byte[] fileData = new byte[file.InputStream.Length];
    file.InputStream.Read(fileData, 0, (int)file.InputStream.Length);
    using (SqlConnection conn = new SqlConnection(ConnectionString))
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand("INSERT INTO [Images] ([Name], [Description], [Data]) VALUES (@Name, @Description, @Data)", conn);
        cmd.Parameters.Add("@Name", SqlDbType.NVarChar, 50, "Name");
        cmd.Parameters.Add("@Description", SqlDbType.NVarChar, 4000, "Description");
        cmd.Parameters.Add("@Data", SqlDbType.Image);
        cmd.Parameters["@Name"].Value = imageName;
        cmd.Parameters["@Description"].Value = description;
        cmd.Parameters["@Data"].Value = fileData;
        cmd.ExecuteScalar();
    }
}
protected void RadGrid1_UpdateCommand(object source, GridCommandEventArgs e)
{
    if (!IsRadAsyncValid.Value)
    {
        e.Canceled = true;
        RadAjaxManager1.Alert("The length of the uploaded file must be less than 1 MB");
        return;
    }
    GridEditableItem editedItem = e.Item as GridEditableItem;
    int ID = Convert.ToInt32(editedItem.OwnerTableView.DataKeyValues[editedItem.ItemIndex]["ID"].ToString());
    string imageName = (editedItem["ImageName"].FindControl("txbName") as RadTextBox).Text;
    string description = (editedItem["Description"].FindControl("txbDescription") as RadTextBox).Text;
    RadAsyncUpload radAsyncUpload = editedItem["Upload"].FindControl("AsyncUpload1") as RadAsyncUpload;
    using (SqlConnection conn = new SqlConnection(ConnectionString))
    {
        conn.Open();
        SqlCommand cmd;
        if (radAsyncUpload.UploadedFiles.Count > 0)
        {
            cmd = new SqlCommand("UPDATE [Images] SET [Name] = @Name, [Description] = @Description, [Data] = @Data WHERE [ID] = @ID", conn);
            UploadedFile file = radAsyncUpload.UploadedFiles[0];
            byte[] fileData = new byte[file.InputStream.Length];
            file.InputStream.Read(fileData, 0, (int)file.InputStream.Length);
            cmd.Parameters.Add("@Data", SqlDbType.Image);
            cmd.Parameters["@Data"].Value = fileData;
        }
        else
        {
            cmd = new SqlCommand("UPDATE [Images] SET [Name] = @Name, [Description] = @Description WHERE [ID] = @ID", conn);
        }
        cmd.Parameters.Add("@ID", SqlDbType.Int);
        cmd.Parameters.Add("@Name", SqlDbType.NVarChar, 50, "Name");
        cmd.Parameters.Add("@Description", SqlDbType.NVarChar);
        cmd.Parameters["@ID"].Value = ID;
        cmd.Parameters["@Name"].Value = imageName;
        cmd.Parameters["@Description"].Value = description;
        cmd.ExecuteScalar();
    }
}
protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    string ID = (e.Item as GridDataItem).OwnerTableView.DataKeyValues[e.Item.ItemIndex]["ID"].ToString();
    using (SqlConnection conn = new SqlConnection(ConnectionString))
    {
        conn.Open();
        SqlCommand cmd = new SqlCommand("DELETE FROM Images WHERE ID = @ID", conn);
        cmd.Parameters.Add("@ID", SqlDbType.Int);
        cmd.Parameters["@ID"].Value = ID;
        cmd.ExecuteScalar();
    }
}
public void RadAsyncUpload1_ValidatingFile(object sender, Telerik.Web.UI.Upload.ValidateFileEventArgs e)
{
    if ((totalBytes < MaxTotalBytes) && (e.UploadedFile.ContentLength < MaxTotalBytes))
    {
        e.IsValid = true;
        totalBytes += e.UploadedFile.ContentLength;
        IsRadAsyncValid = true;
    }
    else
    {
        e.IsValid = false;
        IsRadAsyncValid = false;
    }
}
protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.EditCommandName)
    {
        ScriptManager.RegisterStartupScript(Page, Page.GetType(), "SetEditMode", "isEditMode = true;", true);
    }
}
````
````VB
Const MaxTotalBytes As Integer = 1048576 ' 1 MB
Dim totalBytes As Integer
Public Property IsRadAsyncValid() As System.Nullable(Of Boolean)
    Get
        If Session("IsRadAsyncValid") Is Nothing Then
            Session("IsRadAsyncValid") = True
        End If
        Return Convert.ToBoolean(Session("IsRadAsyncValid").ToString())
    End Get
    Set(ByVal value As System.Nullable(Of Boolean))
        Session("IsRadAsyncValid") = value
    End Set
End Property
Public Shared ReadOnly Property ConnectionString() As String
    Get
        Return ConfigurationManager.ConnectionStrings("TelerikConnectionString").ConnectionString
    End Get
End Property
Protected Overrides Sub OnLoad(ByVal e As EventArgs)
    MyBase.OnLoad(e)
    IsRadAsyncValid = Nothing
End Sub
Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    Dim ID As String = TryCast(e.Item, GridDataItem).OwnerTableView.DataKeyValues(e.Item.ItemIndex)("ID").ToString()
    Using conn As New SqlConnection(ConnectionString)
        conn.Open()
        Dim cmd As New SqlCommand("DELETE FROM Images WHERE ID = @ID", conn)
        cmd.Parameters.Add("@ID", SqlDbType.Int)
        cmd.Parameters("@ID").Value = ID
        cmd.ExecuteScalar()
    End Using
End Sub
Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    If Not IsRadAsyncValid.Value Then
        e.Canceled = True
        RadAjaxManager1.Alert("The length of the uploaded file must be less than 1 MB")
        Return
    End If
    Dim insertItem As GridEditFormInsertItem = TryCast(e.Item, GridEditFormInsertItem)
    Dim imageName As String = TryCast(insertItem("ImageName").FindControl("txbName"), RadTextBox).Text
    Dim description As String = TryCast(insertItem("Description").FindControl("txbDescription"), RadTextBox).Text
    Dim radAsyncUpload As RadAsyncUpload = TryCast(insertItem("Upload").FindControl("AsyncUpload1"), RadAsyncUpload)
    Dim file As UploadedFile = radAsyncUpload.UploadedFiles(0)
    Dim fileData As Byte() = New Byte(file.InputStream.Length - 1) {}
    file.InputStream.Read(fileData, 0, CInt(file.InputStream.Length))
    Using conn As New SqlConnection(ConnectionString)
        conn.Open()
        Dim cmd As New SqlCommand("INSERT INTO [Images] ([Name], [Description], [Data]) VALUES (@Name, @Description, @Data)", conn)
        cmd.Parameters.Add("@Name", SqlDbType.NVarChar, 50, "Name")
        cmd.Parameters.Add("@Description", SqlDbType.NVarChar, 4000, "Description")
        cmd.Parameters.Add("@Data", SqlDbType.Image)
        cmd.Parameters("@Name").Value = imageName
        cmd.Parameters("@Description").Value = description
        cmd.Parameters("@Data").Value = fileData
        cmd.ExecuteScalar()
    End Using
End Sub
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    If e.CommandName = RadGrid.EditCommandName Then
        ScriptManager.RegisterStartupScript(Page, Page.[GetType](), "SetEditMode", "isEditMode = true;", True)
    End If
End Sub
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GetDataTable("SELECT * FROM [Images]")
End Sub
Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    If Not IsRadAsyncValid.Value Then
        e.Canceled = True
        RadAjaxManager1.Alert("The length of the uploaded file must be less than 1 MB")
        Return
    End If
    Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    Dim ID As Integer = Convert.ToInt32(editedItem.OwnerTableView.DataKeyValues(editedItem.ItemIndex)("ID").ToString())
    Dim imageName As String = TryCast(editedItem("ImageName").FindControl("txbName"), RadTextBox).Text
    Dim description As String = TryCast(editedItem("Description").FindControl("txbDescription"), RadTextBox).Text
    Dim radAsyncUpload As RadAsyncUpload = TryCast(editedItem("Upload").FindControl("AsyncUpload1"), RadAsyncUpload)
    Using conn As New SqlConnection(ConnectionString)
        conn.Open()
        Dim cmd As SqlCommand
        If radAsyncUpload.UploadedFiles.Count > 0 Then
            cmd = New SqlCommand("UPDATE [Images] SET [Name] = @Name, [Description] = @Description, [Data] = @Data WHERE [ID] = @ID", conn)
            Dim file As UploadedFile = radAsyncUpload.UploadedFiles(0)
            Dim fileData As Byte() = New Byte(file.InputStream.Length - 1) {}
            file.InputStream.Read(fileData, 0, CInt(file.InputStream.Length))
            cmd.Parameters.Add("@Data", SqlDbType.Image)
            cmd.Parameters("@Data").Value = fileData
        Else
            cmd = New SqlCommand("UPDATE [Images] SET [Name] = @Name, [Description] = @Description WHERE [ID] = @ID", conn)
        End If
        cmd.Parameters.Add("@ID", SqlDbType.Int)
        cmd.Parameters.Add("@Name", SqlDbType.NVarChar, 50, "Name")
        cmd.Parameters.Add("@Description", SqlDbType.NVarChar)
        cmd.Parameters("@ID").Value = ID
        cmd.Parameters("@Name").Value = imageName
        cmd.Parameters("@Description").Value = description
        cmd.ExecuteScalar()
    End Using
End Sub
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim upload As RadAsyncUpload = TryCast(DirectCast(e.Item, GridEditableItem)("Upload").FindControl("AsyncUpload1"), RadAsyncUpload)
        Dim cell As TableCell = DirectCast(upload.Parent, TableCell)
        Dim validator As New CustomValidator()
        validator.ErrorMessage = "Please select file to be uploaded"
        validator.ClientValidationFunction = "validateRadUpload"
        validator.Display = ValidatorDisplay.Dynamic
        cell.Controls.Add(validator)
    End If
End Sub
Protected Function TrimDescription(ByVal description As String) As String
    If Not String.IsNullOrEmpty(description) AndAlso description.Length > 200 Then
        Return String.Concat(description.Substring(0, 200), "...")
    End If
    Return description
End Function
Public Sub RadAsyncUpload1_ValidatingFile(ByVal sender As Object, ByVal e As Telerik.Web.UI.Upload.ValidateFileEventArgs)
    If (totalBytes < MaxTotalBytes) AndAlso (e.UploadedFile.ContentLength < MaxTotalBytes) Then
        e.IsValid = True
        totalBytes += e.UploadedFile.ContentLength
        IsRadAsyncValid = True
    Else
        e.IsValid = False
        IsRadAsyncValid = False
    End If
End Sub
Private Shared Function GetDataTable(ByVal queryString As String) As DataTable
    Dim MySqlConnection As New SqlConnection(ConnectionString)
    Dim MySqlDataAdapter As New SqlDataAdapter()
    MySqlDataAdapter.SelectCommand = New SqlCommand(queryString, MySqlConnection)
    Dim myDataTable As New DataTable()
    MySqlConnection.Open()
    Try
        MySqlDataAdapter.Fill(myDataTable)
    Finally
        MySqlConnection.Close()
    End Try
    Return myDataTable
End Function
````


More information about the RadAsyncUpload you can find in the links below:

[Overview](https://www.telerik.com/help/aspnet-ajax/async-upload-overview.html)

[Getting Started](https://www.telerik.com/help/aspnet-ajax/async-upload-getting-started.html)

[Migrating from RadUpload for ASP.NET Ajax to RadAsyncUpload](https://www.telerik.com/help/aspnet-ajax/async-upload-migrating.html)

[RadAsyncUpload vs. RadUpload for ASP.NET Ajax](https://www.telerik.com/help/aspnet-ajax/async-upload-differences.html)
