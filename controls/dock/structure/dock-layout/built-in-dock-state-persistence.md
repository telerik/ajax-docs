---
title: Built-in Dock State Persistence
page_title: Built-in Dock State Persistence | UI for ASP.NET AJAX Documentation
description: Built-in Dock State Persistence
slug: dock/structure/dock-layout/built-in-dock-state-persistence
tags: built-in,dock,state,persistence
published: True
position: 0
---

# Built-in Dock State Persistence



## 

Since the Q1 2013 release of Telerik UI for ASP.NET AJAX, the RadDockLayout provides a built-in long-term persistence of RadDocks’ states. This means that the layout of the docks can be saved when a page is closed and opened, without necessarily handling the server-side events [SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%}) and [LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%})of RadDockLayout.

The built-in dock state persistance is enabled by setting the property __EnableLayoutPersistence__ to__true__. There are several options for the data repository that will be used for storing the state:

* __Cookies__ - The dock state is stored in a cookie. This provider is enabled by setting the property __LayoutPersistenceRepositoryType__ to __Cookies__. It is not recommended for use when there are a lot of docks on the page due to the [4KB size limit of a cookie](http://coursesweb.net/javascript/cookies).If this limit is exceeded, the state of the controls will not be persisted correctly.

* __FileSystem__ - The dock state is stored in a file that resides in the __App_Data__ folder of the project. This provider is enabled by setting the property __LayoutPersistenceRepositoryType__ to__FileSystem__. If the property __LayoutRepositoryID__ (described below) is configured, its value willbe used for naming the file with the state data.

* __Custom__ - The dock state is stored in a custom storage provider. This provider is enabled by setting theproperty __LayoutPersistenceRepositoryType__ to __Custom__, creating a class that implements the interface__IStateStorageProvider__ and setting an instance of this class to the property __StorageProvider__ of RadDockLayout. The methods __LoadStateFromStorage__ and __SaveStateToStorage__ of the interface need to be implemented. This is demonstrated in the following code sample that uses the database table __DockStates__:

````ASPNET
	        <telerik:RadDockLayout runat="server" ID="RadDockLayout1" EnableLayoutPersistence="true" LayoutPersistenceRepositoryType="Custom" 
	            LayoutRepositoryID="CustomLayout">
	            <telerik:RadDockZone runat="server" ID="RadDockZone1" Width="300" MinHeight="200">
	                <telerik:RadDock runat="server" ID="RadDock1" Title="RadDock 1" Width="300"></telerik:RadDock>
	                <telerik:RadDock runat="server" ID="RadDock2" Title="RadDock 2" Width="300"></telerik:RadDock>
	            </telerik:RadDockZone>
	            <telerik:RadDockZone runat="server" ID="RadDockZone2" Width="300" MinHeight="200">
	            </telerik:RadDockZone>
	        </telerik:RadDockLayout>
````



>tabbedCode

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
>endNote that the value of __LayoutRepositoryID__ is available via the __key__ parameter of the above methods and can be included the custom storage provider implementation.

The LoadDockLayout also provides a property __LayoutRepositoryID__ which can be used for storing individual dock states that depend on the value of the property, e.g. for storing a unique dock state for every user in a website.
