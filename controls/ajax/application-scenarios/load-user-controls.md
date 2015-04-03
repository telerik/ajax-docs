---
title: Load User Controls
page_title: Load User Controls | UI for ASP.NET AJAX Documentation
description: Load User Controls
slug: ajax/application-scenarios/load-user-controls
tags: load,user,controls
published: True
position: 2
---

# Load User Controls



## 

The dynamic loading of user controls follows the same logic as in normal postback applications. You can load customUserControls via AJAX requests by following the steps below:

1. You need to have an appropriate container for it, for example asp:Panel.

1. Instantiate your user control in __Page_Init__ or __Page_Load__ and always recreate the last loaded User Control:

>tabbedCode

````C#
	        UserControl MyControl = (UserControl)LoadControl(controlName);
	        LoadMyUserControl(CurrentControl, Panel1);
````



````VB.NET
	        Dim MyControl As UserControl = Me.LoadControl(controlName)
	        Me.LoadMyUserControl(Me.CurrentControl, Panel1)
````


>end

1. Make sure you assign a unique ID to the dynamically loaded User Control:

>tabbedCode

````C#
	        string userControlID = controlName.Split('.')[0];
	        MyControl.ID = userControlID.Replace("/", "").Replace("~", "");
````



````VB.NET
	        Dim userControlID As String = controlName.Split(".")(0)
	        MyControl.ID = userControlID.Replace("/", "").Replace("~", "")
	
````


>end

1. Place the instance inside the controls collection of the container:

````VB.NET
	        Parent.Controls.Add(MyControl)
	
````



__Example__: The following example demonstrates how to implement the above steps in simple scenario.

````ASPNET
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <asp:Button ID="Button1" runat="server" Text="Load WebUserControl1.ascx" OnClick="Button1_Click" />
	    <asp:Button ID="Button2" runat="server" Text="Load WebUserControl2.ascx" OnClick="Button2_Click" />
	    <asp:Panel ID="Panel1" runat="server">
	    </asp:Panel>
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Panel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="Button2">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Panel1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````



And in the code-behind:

>tabbedCode

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (this.CurrentControl != string.Empty)
	        {
	            LoadMyUserControl(CurrentControl, Panel1);
	        }
	    }
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        this.LoadMyUserControl("~/WebUserControl1.ascx", Panel1);
	    }
	    protected void Button2_Click(object sender, EventArgs e)
	    {
	        this.LoadMyUserControl("~/WebUserControl2.ascx", Panel1);
	    }
	
	    private string CurrentControl
	    {
	        get
	        {
	            return this.ViewState["CurrentControl"] == null ? string.Empty : (string)this.ViewState["CurrentControl"];
	        }
	        set
	        {
	            this.ViewState["CurrentControl"] = value;
	        }
	    }
	
	    private void LoadMyUserControl(string controlName, Control parent)
	    {
	        parent.Controls.Clear();
	        UserControl MyControl = (UserControl)LoadControl(controlName);
	        string userControlID = controlName.Split('.')[0];
	        MyControl.ID = userControlID.Replace("/", "").Replace("~", "");
	        parent.Controls.Add(MyControl);
	        this.CurrentControl = controlName;
	    }
	
````



````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Me.Load
	        If (Not Me.CurrentControl Is String.Empty) Then
	            Me.LoadMyUserControl(Me.CurrentControl, Panel1)
	        End If
	    End Sub
	
	    Protected Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	        Me.LoadMyUserControl("~/WebUserControl1.ascx", Panel1)
	    End Sub
	
	    Protected Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	        Me.LoadMyUserControl("~/WebUserControl2.ascx", Panel1)
	    End Sub
	
	    Private Property CurrentControl() As String
	        Get
	            Return IIf(Me.ViewState("CurrentControl") Is Nothing, String.Empty, Me.ViewState("CurrentControl"))
	        End Get
	        Set(ByVal Value As String)
	            Me.ViewState("CurrentControl") = Value
	        End Set
	    End Property
	
	    Private Sub LoadMyUserControl(ByVal controlName As String, ByVal parent As Control)
	        parent.Controls.Clear()
	        Dim MyControl As UserControl = Me.LoadControl(controlName)
	        Dim userControlID As String = controlName.Split(".")(0)
	        MyControl.ID = userControlID.Replace("/", "").Replace("~", "")
	        parent.Controls.Add(MyControl)
	        Me.CurrentControl = controlName
	    End Sub
````


>end

An online demo for loading User Controls is available at the following link:

[http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/LoadingUserControls/DefaultCS.aspx](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/LoadingUserControls/DefaultCS.aspx)

# See Also

 * [AJAX - Loading User Controls](http://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/LoadingUserControls/DefaultCS.aspx)
