---
title: Built-in Dock State Persistence
page_title: Built-in Dock State Persistence | RadDock for ASP.NET AJAX Documentation
description: Built-in Dock State Persistence
slug: dock/structure/dock-layout/built-in-dock-state-persistence
tags: built-in,dock,state,persistence
published: True
position: 0
---

# Built-in Dock State Persistence

Since the Q1 2013 release of Telerik® UI for ASP.NET Ajax, the RadDockLayout provides a built-in long-term persistence of RadDocks’ states. This means that the layout of the docks can be saved when a page is closed and opened, without necessarily handling the server-side events [SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%}) and [LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%}) of RadDockLayout.

The built-in dock state persistence is enabled by setting the property **EnableLayoutPersistence** to **true**. There are several options for the data repository that will be used for storing the state:

* **Cookies** - The dock state is stored in a cookie. This provider is enabled by setting the property **LayoutPersistenceRepositoryType** to **Cookies**. It is not recommended for use when there are a lot of docks on the page due to the [4KB size limit of a cookie](http://coursesweb.net/javascript/cookies).If this limit is exceeded, the state of the controls will not be persisted correctly.

* **FileSystem** - The dock state is stored in a file that resides in the **App_Data** folder of the project. This provider is enabled by setting the property **LayoutPersistenceRepositoryType** to **FileSystem**. If the property **LayoutRepositoryID** (described below) is configured, its value will be used for naming the file with the state data.

* **Custom** - The dock state is stored in a custom storage provider. This provider is enabled by setting the property **LayoutPersistenceRepositoryType** to **Custom**, creating a class that implements the interface**IStateStorageProvider** and setting an instance of this class to the property **StorageProvider** of RadDockLayout. The methods **LoadStateFromStorage** and **SaveStateToStorage** of the interface need to be implemented. This is demonstrated in the following code sample that uses the database table **DockStates**:


````ASP.NET
<telerik:RadDockLayout runat="server" ID="RadDockLayout1" EnableLayoutPersistence="true" LayoutPersistenceRepositoryType="Custom" 
    LayoutRepositoryID="CustomLayout">
    <telerik:RadDockZone runat="server" ID="RadDockZone1" Width="300" MinHeight="200">
        <telerik:RadDock RenderMode="Lightweight" runat="server" ID="RadDock1" Title="RadDock 1" Width="300"></telerik:RadDock>
        <telerik:RadDock RenderMode="Lightweight" runat="server" ID="RadDock2" Title="RadDock 2" Width="300"></telerik:RadDock>
    </telerik:RadDockZone>
    <telerik:RadDockZone runat="server" ID="RadDockZone2" Width="300" MinHeight="200">
    </telerik:RadDockZone>
</telerik:RadDockLayout>
````





````C#
using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using Telerik.Web.UI.PersistenceFramework;

public partial class DockStetePersistanceDemo : System.Web.UI.Page
{
    protected void Page_Init(object sender, EventArgs e)
    {
        RadDockLayout1.StorageProvider = new CustomLayoutStorage();
    }
}

public class CustomLayoutStorage : IStateStorageProvider
{
    public string LoadStateFromStorage(string key)
    {
	    using (var conn = GetConnection())
	    {
		    conn.Open();
		    using (var cmd = new SqlCommand("SELECT [state] FROM DockStates where [Key] = @Key", conn))
		    {
			    cmd.Parameters.Add(new SqlParameter("Key", key));
			    string dockStateFromDB = cmd.ExecuteScalar().ToString();

			    return dockStateFromDB;
		    }
	    }
    }

    public void SaveStateToStorage(string key, string serializedState)
    {
	    using (var conn = GetConnection())
	    {
		    conn.Open();
		    using (var updateCmd = new SqlCommand("UPDATE DockStates SET [state]=@DockState WHERE [Key]=@Key", conn))
		    {
			    SetDockStateParameters(updateCmd, key, serializedState);

			    int updatedRowsCount = updateCmd.ExecuteNonQuery();
			    if (updatedRowsCount == 0)
			    {
				    using (var insertCmd = new SqlCommand("INSERT INTO DockStates ([Key], [state]) VALUES (@Key, @DockState)", conn))
				    {
					    SetDockStateParameters(insertCmd, key, serializedState);
					    insertCmd.ExecuteNonQuery();
				    }
			    }
		    }
	    }
    }

    private void SetDockStateParameters(SqlCommand cmd, string key, string serializedState)
    {
	    cmd.Parameters.Add(new SqlParameter("@Key", key));
	    cmd.Parameters.Add(new SqlParameter("@DockState", serializedState));
    }

    private SqlConnection GetConnection()
    {
	    return new SqlConnection(ConfigurationManager.ConnectionStrings["dockPersistDB"].ConnectionString);
    }
}
````
````VB
Imports Telerik.Web.UI.PersistenceFramework
Imports System.Data.SqlClient

Partial Class DockStetePersistanceDemoVB
    Inherits System.Web.UI.Page

    Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
        RadDockLayout1.StorageProvider = New CustomLayoutStorage()
    End Sub

End Class

Public Class CustomLayoutStorage
    Implements IStateStorageProvider
    Public Function LoadStateFromStorage(key As String) As String
        Using conn = GetConnection()
            conn.Open()
            Using cmd = New SqlCommand("SELECT [state] FROM DockStates where [Key] = @Key", conn)
                cmd.Parameters.Add(New SqlParameter("Key", key))
                Dim dockStateFromDB As String = cmd.ExecuteScalar().ToString()

                Return dockStateFromDB
            End Using
        End Using
    End Function

    Public Sub SaveStateToStorage(key As String, serializedState As String)
        Using conn = GetConnection()
            conn.Open()
            Using updateCmd = New SqlCommand("UPDATE DockStates SET [state]=@DockState WHERE [Key]=@Key", conn)
                SetDockStateParameters(updateCmd, key, serializedState)

                Dim updatedRowsCount As Integer = updateCmd.ExecuteNonQuery()
                If updatedRowsCount = 0 Then
                    Using insertCmd = New SqlCommand("INSERT INTO DockStates ([Key], [state]) VALUES (@Key, @DockState)", conn)
                        SetDockStateParameters(insertCmd, key, serializedState)
                        insertCmd.ExecuteNonQuery()
                    End Using
                End If
            End Using
        End Using
    End Sub

    Private Sub SetDockStateParameters(cmd As SqlCommand, key As String, serializedState As String)
        cmd.Parameters.Add(New SqlParameter("@Key", key))
        cmd.Parameters.Add(New SqlParameter("@DockState", serializedState))
    End Sub

    Private Function GetConnection() As SqlConnection
        Return New SqlConnection(ConfigurationManager.ConnectionStrings("dockPersistDB").ConnectionString)
    End Function
End Class
````

Note that the value of **LayoutRepositoryID** is available via the **key** parameter of the above methods and can be included the custom storage provider implementation.

The LoadDockLayout also provides a property **LayoutRepositoryID** which can be used for storing individual dock states that depend on the value of the property, e.g. for storing a unique dock state for every user in a website.

>important If you are creating the **RadDock**, **RadDockZone** and/or **RadDockLayout** **programmatically**, you must use the **Page_Init** event. For more details about the server lifecycle of the control and what each event is suitable for, review the [RadDock Lifecycle]({%slug dock/structure/dock/lifecycle%}) article.
