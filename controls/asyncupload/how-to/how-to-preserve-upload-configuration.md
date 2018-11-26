---
title: How to Preserve Upload Configuration
page_title: How to Preserve Upload Configuration | RadAsyncUpload for ASP.NET AJAX Documentation
description: How to Preserve Upload Configuration
slug: asyncupload/how-to/how-to-preserve-upload-configuration
tags: how,to,preserve,upload,configuration
published: True
position: 2
---

# How to Preserve Upload Configuration

## Preserving UploadConfiguration

Initially the default value of **PersistConfiguration** property is **false**. However, by setting it to **true**, the **UploadConfiguration** property can be persisted through postbacks via ControlState(only in case the **UploadConfiguration** property is not null).

>tip The ControlState property allows you to persist property information that is specific to a control and cannot be turned off like the ViewState property for instance. Use the control state only for small amount of critical data that is essential for the control across postbacks. The control state should not be used as an alternative to view state.
>


The following code snippets demonstrate how it can be used:



````C#
protected void Page_Load(object sender, EventArgs e)
{
    //It is possible to set PersistConfiguration propety from the markup and form the code behind
    RadAsyncUpload1.PersistConfiguration = true;
    Button1.Click += new EventHandler(Button1_Click);
    if (!IsPostBack)
    {
        SampleAsyncUploadConfiguration config =
             RadAsyncUpload1.CreateDefaultUploadConfiguration<SampleAsyncUploadConfiguration>();
        config.UserID = 1;
        config.UserName = "TelerikUser";
        RadAsyncUpload1.UploadConfiguration = config;
    }
}

void Button1_Click(object sender, EventArgs e)
{
    var uploadConfiguration = (SampleAsyncUploadConfiguration)RadAsyncUpload1.UploadConfiguration;
    Label1.Text = uploadConfiguration.UserID.ToString();
    Label2.Text = uploadConfiguration.UserName;
}
...
	
[Serializable]
public class SampleAsyncUploadConfiguration : IAsyncUploadConfiguration
{
    public int UserID { get; set; }
    public string UserName { get; set; }

    public string TargetFolder { get; set; }
    public string TempTargetFolder { get; set; }
    public int MaxFileSize { get; set; }
    public TimeSpan TimeToLive { get; set; }
}			
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    'It is possible to set PersistConfiguration propety from the markup and form the code behind
    RadAsyncUpload1.PersistConfiguration = True
    If Not IsPostBack Then
        Dim config As SampleAsyncUploadConfiguration = RadAsyncUpload1.CreateDefaultUploadConfiguration(Of SampleAsyncUploadConfiguration)()
        config.UserID = 1
        config.UserName = "TelerikUser"
        RadAsyncUpload1.UploadConfiguration = config
    End If
End Sub

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
    Dim uploadConfiguration = CType(RadAsyncUpload1.UploadConfiguration, SampleAsyncUploadConfiguration)
    Label1.Text = uploadConfiguration.UserID.ToString()
    Label2.Text = uploadConfiguration.UserName
End Sub
	
...
	
<Serializable()>
Public Class SampleAsyncUploadConfiguration
    Implements IAsyncUploadConfiguration
    Private m_userID As Integer
    Public Property UserID() As Integer
        Get
            Return m_userID
        End Get

        Set(ByVal value As Integer)
            m_userID = value
        End Set
    End Property

    Private m_userName As String
    Public Property UserName() As String
        Get
            Return m_userName
        End Get
        Set(ByVal value As String)
            m_userName = value
        End Set
    End Property


    Private targetFolder As String
    Public Property TargetFoderNew() As String Implements IAsyncUploadConfiguration.TargetFolder
        Get
            Return targetFolder
        End Get
        Set(ByVal value As String)
            targetFolder = value
        End Set
    End Property

    Private maxFileSize As Integer
    Public Property MaxFileSizeNew() As Integer Implements IAsyncUploadConfiguration.MaxFileSize
        Get
            Return maxFileSize
        End Get
        Set(ByVal value As Integer)
            maxFileSize = value
        End Set
    End Property

    Private timeToLive As TimeSpan
    Public Property TimeToLiveNew() As TimeSpan Implements IAsyncUploadConfiguration.TimeToLive
        Get
            Return timeToLive
        End Get
        Set(ByVal value As TimeSpan)
            timeToLive = value
        End Set
    End Property

    Private tempTargetFolder As String
    Public Property TempTargetFolderNew() As String Implements IAsyncUploadConfiguration.TempTargetFolder
        Get
            Return tempTargetFolder
        End Get
        Set(ByVal value As String)
            tempTargetFolder = value
        End Set
    End Property
End Class	
````

