---
title: Update in Composite Control
page_title: Update in Composite Control
description: "Learn how to make updates in a composite control with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/update-in-composite-control
previous_url: ajax/radajaxmanager/how-to/update-in-composite-control, controls/ajaxmanager/how-to/update-in-composite-control
tags: telerik, asp, net, ajax, manager, how, to, update, in, composite, control
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I use AjaxManager updates controls from a composite control with Telerik UI for ASP.NET AJAX? 

## Solution


To use AjaxManager updates controls from a composite control, set IDs of the instantiated controls and add them to the controls collection. You can add a necessary AJAX setting in the `CreateChildControls` method only after the controls are added into the corresponding controls collection.

The example below includes a single AjaxManager control on the page and shows the code-behind:



````C#
	 
TestComposite Tst1;
	
protected void Page_Load(object sender, EventArgs e)
{
	       Tst1 = new TestComposite(RadAjaxManager1, "1");
	       //set an ID of instantiated control!
	       Tst1.ID = "tst1";
	       this.form1.Controls.Add(Tst1);
}
	
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	       //Update control from the composite on AJAX request
	       Tst1.controLbl.Text = Tst1.controTB.Text;
}
				
````
````VB
	
Private Tst1 As TestComposite
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Tst1 = New TestComposite(RadAjaxManager1, "1")
	        'set an ID of instantiated control!
	        Tst1.ID = "tst1"
	        Me.form1.Controls.Add(Tst1)
End Sub
	
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	        'Update control from the composite on AJAX request
	        Tst1.controLbl.Text = Tst1.controTB.Text
End Sub
````


The following example demonstrates how to set the composite control class.



````C#
	
public class TestComposite : CompositeControl
{
	        private Telerik.Web.UI.RadAjaxManager m_radAm;
	        private string m_UniqueId;
	        public TextBox MyTxt;
	        public Label MyLbl;
	
public TestComposite(RadAjaxManager radAm, string UniqueId)
{
	            m_radAm = radAm;
	            m_UniqueId = UniqueId;

	
protected override void RecreateChildControls()
{
	            EnsureChildControls();
}
	
protected override void CreateChildControls()
{
	            MyTxt = new TextBox();
	            MyLbl = new Label();
	
	            //set IDs of instantiated controls!
	            MyLbl.ID = "Lbl_" + m_UniqueId;
	            MyTxt.ID = "Txt_" + m_UniqueId;
	
	            MyLbl.Text = "LabelText";
	
	            //add the controls into controls collection!
	            this.Controls.Add(MyTxt);
	            this.Controls.Add(MyLbl);
	
	            //Manually add AJAX request triggered on onBlur client event of the text box
	            MyTxt.Attributes.Add("onBlur", m_radAm.GetAjaxEventReference(MyTxt.ClientID));
	
	            //Add the ajax setting - this should be done after controls are added into controls collection
	            m_radAm.AjaxSettings.AddAjaxSetting(m_radAm, MyLbl);
}
	
public TextBox controTB
{
	            get
	            {
	                return MyTxt;
	            }
}
	
public Label controLbl
{
	            get
	            {
	                return MyLbl;
	            }
}
	
protected override void Render(HtmlTextWriter output)
{
	            base.Render(output);
	
	            MyTxt.RenderControl(output);
	            MyLbl.RenderControl(output);
	
}
}  
				
````
````VB
Public Class TestComposite
	        Inherits CompositeControl
	        Private m_radAm As Telerik.Web.UI.RadAjaxManager
	        Private m_UniqueId As String
	        Public MyTxt As TextBox
	        Public MyLbl As Label
	
Public Sub New(ByVal radAm As RadAjaxManager, ByVal UniqueId As String)
	            m_radAm = radAm
	            m_UniqueId = UniqueId
End Sub
	
Protected Overrides Sub RecreateChildControls()
	            EnsureChildControls()
End Sub
	
Protected Overrides Sub CreateChildControls()
	            MyTxt = New TextBox()
	            MyLbl = New Label()
	
	            'set IDs of instantiated controls!
	            MyLbl.ID = "Lbl_" + m_UniqueId
	            MyTxt.ID = "Txt_" + m_UniqueId
	
	            MyLbl.Text = "LabelText"
	
	            'add the controls into controls collection!
	            Me.Controls.Add(MyTxt)
	            Me.Controls.Add(MyLbl)
	
	            'Manually add AJAX request triggered on onBlur client event of the text box
	            MyTxt.Attributes.Add("onBlur", m_radAm.GetAjaxEventReference(MyTxt.ClientID))
	
	            'Add the ajax setting - this should be done after controls are added into controls collection
	            m_radAm.AjaxSettings.AddAjaxSetting(m_radAm, MyLbl)
End Sub
	
Public ReadOnly Property controTB() As TextBox
	            Get
	                Return MyTxt
	            End Get
End Property
	
Public ReadOnly Property controLbl() As Label
	            Get
	                Return MyLbl
	            End Get
End Property
	
Protected Overrides Sub Render(ByVal output As HtmlTextWriter)
	            MyBase.Render(output)
	
	            MyTxt.RenderControl(output)
	            MyLbl.RenderControl(output)
	
End Sub
End Class
````


## See Also

* [Sending and receiving AJAX requests with Telerik AjaxManager]({%slug ajax-sending-and-receiving-ajax-requests%})
