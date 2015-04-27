---
title: Adding Templates at Runtime
page_title: Adding Templates at Runtime | RadRibbonBar for ASP.NET AJAX Documentation
description: Adding Templates at Runtime
slug: ribbonbar/templates/adding-templates-at-runtime
tags: adding,templates,at,runtime
published: True
position: 1
---

# Adding Templates at Runtime



## 

The following help article demonstrates how you can add templates to RadRibbonBar control at runtime, using the **RibbonBarTemplateItem**.

>note The **RibbonBarTemplateItem** should be initialized in the OnInit event of the page. This is needed as the template should be instantiated before the elements of the RadRibbonBar are initialized. The tabs and groups should be dynamically added so that templates can be defined at run time.
>


````ASPNET
		<telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" />
````





````C#
	
		protected override void OnInit(EventArgs e)
		{
			//RibbonBar properties 
			RadRibbonBar1.Skin = "Default";
			RadRibbonBar1.Width = Unit.Percentage(100);
	
			//creating RibbonBar tab 
			RibbonBarTab radRibbonBarTab = new RibbonBarTab();
			radRibbonBarTab.ID = "HomeID";
			radRibbonBarTab.Value = "HomeValue";
			radRibbonBarTab.Text = "Home";
			RadRibbonBar1.Tabs.Add(radRibbonBarTab);
	
			//creating RibbonBar group
			RibbonBarGroup radRibbonBarGroup = new RibbonBarGroup();
			radRibbonBarGroup.ID = "GroupID";
			radRibbonBarGroup.Value = "GroupValue";
			radRibbonBarGroup.Text = "Group";
			radRibbonBarTab.Groups.Add(radRibbonBarGroup);
	
			//creating RibbonBar button
			RibbonBarButton btnRibbonBarButton = new RibbonBarButton();
			btnRibbonBarButton.ID = "btn1";
			btnRibbonBarButton.Value = "ribbonBtn1";
			btnRibbonBarButton.Enabled = true;
			btnRibbonBarButton.Size = RibbonBarItemSize.Large;
			btnRibbonBarButton.Text = "Ribbon Button";
			radRibbonBarGroup.Items.Add(btnRibbonBarButton);
	
			//creating RibbonBar template
			RibbonBarTemplateItem radRibbonBarTemplateItem = new RibbonBarTemplateItem();
			radRibbonBarTemplateItem.Template = new RibbonCheckBox("checkbox", "CheckBox Text", false, true);
			//radRibbonBarTemplateItem.Template = new RibbonCheckBox("checkbox", "CheckBox Text", false, false, true);
			radRibbonBarGroup.Items.Add(radRibbonBarTemplateItem);
	
			base.OnInit(e);
		}
	
		protected void Page_Load(object sender, EventArgs e)
		{
		}
	
		protected override void OnPreRender(EventArgs e)
		{
			base.OnPreRender(e);
		}
	
		class RibbonCheckBox : ITemplate
		{
			private string _strID;
			private string _strText;
			private bool _bEnabled;
			private bool _bChecked;
			private bool _bAddOnClickEvent;
	
			//	public RibbonCheckBox(string strID, string strText, bool bChecked, bool bAddOnClickEvent, bool bEnabled)
			public RibbonCheckBox(string strID, string strText, bool bChecked, bool bEnabled)
			{
				_strID = strID;
				_strText = strText;
				_bEnabled = bEnabled;
				_bChecked = bChecked;
				//_bAddOnClickEvent = bAddOnClickEvent;
			}
	
	
			public void InstantiateIn(Control htmlControlContainer)
			{
				CheckBox htmlCheckBox = new CheckBox();
				htmlCheckBox.ID = _strID;
				htmlCheckBox.Text = _strText;
				htmlCheckBox.Enabled = _bEnabled;
				htmlCheckBox.Checked = _bChecked;
				htmlCheckBox.CssClass = "ribbonCheckBox";
				//if (_bAddOnClickEvent)
				//	htmlCheckBox.Attributes.Add("onclick", "RibbonCheckBoxClick('" + _strID + "', this.checked);");
				htmlControlContainer.Controls.Add(htmlCheckBox);
			}
		}
	
````
````VB.NET
	
		Protected Overrides Sub OnInit(ByVal e As EventArgs)
			'RibbonBar properties 
			RadRibbonBar1.Skin = "Default"
			RadRibbonBar1.Width = Unit.Percentage(100)
	
			'creating RibbonBar tab 
			Dim radRibbonBarTab As New RibbonBarTab()
			radRibbonBarTab.ID = "HomeID"
			radRibbonBarTab.Value = "HomeValue"
			radRibbonBarTab.Text = "Home"
			RadRibbonBar1.Tabs.Add(radRibbonBarTab)
	
			'creating RibbonBar group
			Dim radRibbonBarGroup As New RibbonBarGroup()
			radRibbonBarGroup.ID = "GroupID"
			radRibbonBarGroup.Value = "GroupValue"
			radRibbonBarGroup.Text = "Group"
			radRibbonBarTab.Groups.Add(radRibbonBarGroup)
	
			'creating RibbonBar button
			Dim btnRibbonBarButton As New RibbonBarButton()
			btnRibbonBarButton.ID = "btn1"
			btnRibbonBarButton.Value = "ribbonBtn1"
			btnRibbonBarButton.Enabled = True
			btnRibbonBarButton.Size = RibbonBarItemSize.Large
			btnRibbonBarButton.Text = "Ribbon Button"
			radRibbonBarGroup.Items.Add(btnRibbonBarButton)
	
			'creating RibbonBar template
			Dim radRibbonBarTemplateItem As New RibbonBarTemplateItem()
			'radRibbonBarTemplateItem.Template = new RibbonCheckBox("checkbox", "CheckBox Text", false, false, true);
			radRibbonBarTemplateItem.Template = New RibbonCheckBox("checkbox", "CheckBox Text", False, True)
			radRibbonBarGroup.Items.Add(radRibbonBarTemplateItem)
	
			MyBase.OnInit(e)
		End Sub
	
		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
		End Sub
	
		Protected Overrides Sub OnPreRender(ByVal e As EventArgs)
			MyBase.OnPreRender(e)
		End Sub
	
		Class RibbonCheckBox
			Implements ITemplate
	
			Private _strID As String
			Private _strText As String
			Private _bEnabled As Boolean
			Private _bChecked As Boolean
			'Private _bAddOnClickEvent As Boolean
	
			'Public Sub New(ByVal strID As String, ByVal strText As String, ByVal bChecked As Boolean, ByVal bAddOnClickEvent As Boolean, ByVal bEnabled As Boolean)
			Public Sub New(ByVal strID As String, ByVal strText As String, ByVal bChecked As Boolean, ByVal bEnabled As Boolean)
				_strID = strID
				_strText = strText
				_bEnabled = bEnabled
				_bChecked = bChecked
				'	_bAddOnClickEvent = bAddOnClickEvent
			End Sub
			Public Sub InstantiateIn1(ByVal htmlControlContainer As System.Web.UI.Control) Implements System.Web.UI.ITemplate.InstantiateIn
				Dim htmlCheckBox As New CheckBox()
				htmlCheckBox.ID = _strID
				htmlCheckBox.Text = _strText
				htmlCheckBox.Enabled = _bEnabled
				htmlCheckBox.Checked = _bChecked
				htmlCheckBox.CssClass = "ribbonCheckBox"
				'If _bAddOnClickEvent Then
				'htmlCheckBox.Attributes.Add("onclick", "RibbonCheckBoxClick('" + _strID + "', this.checked);")
				'End If
				htmlControlContainer.Controls.Add(htmlCheckBox)
			End Sub
		End Class
	
````


# See Also

 * [Templates](http://demos.telerik.com/aspnet-ajax/ribbonbar/examples/templates/defaultcs.aspx)
