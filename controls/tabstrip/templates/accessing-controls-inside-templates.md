---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | RadTabStrip for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: tabstrip/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 4
---

# Accessing Controls Inside Templates



## 

If your **RadTabStrip**has items with templates that have embedded controls, you may want to access the properties of those embedded controls. To get a reference to the embedded control, locate the **RadTab**that has the template, and use its **FindControl** method.

For example, consider the following, very simple, tab strip:

````ASPNET
	    <telerik:radtabstrip id="RadTabStrip1" runat="server" selectedindex="0" ontabclick="RadTabStrip1_TabClick">
	        <Tabs>         
	            <telerik:RadTab runat="server" Text="Products" Selected="True" SelectedIndex="0">      
	        <Tabs>        
	            <telerik:RadTab runat="server" Text="Food" Selected="True" />        
	            <telerik:RadTab runat="server" Text="Electronics" />      
	        </Tabs>    
	        </telerik:RadTab>    
	        <telerik:RadTab runat="server" Text="Tours">      
	        <Tabs>        
	            <telerik:RadTab runat="server" Text="Europe" />        
	            <telerik:RadTab runat="server" Text="South Pacific" />      
	        </Tabs>    
	        </telerik:RadTab> 
	        </Tabs>  
	        <TabTemplate>     
	            <asp:CheckBox ID="CheckBox1" Text='<%# DataBinder.Eval(Container, "Text") %>' 
	               Checked='<%# DataBinder.Eval(Container, "Selected") %>' runat="server" />  
	        </TabTemplate>
	    </telerik:radtabstrip>
````



* **Server-side access**

The **TabClick** event handler uses the **FindControl** method to locate the **CheckBox** in the template, so that it can be synchronized with the Selected property:



````C#
	
	    protected void RadTabStrip1_TabClick(object sender, RadTabStripEventArgs e) 
	    { 
	        for (int i = 0; i < RadTabStrip1.Tabs.Count; i++) 
	        { 
	            RadTab tab = RadTabStrip1.Tabs[i];
	            CheckBox c = (CheckBox)tab.FindControl("CheckBox1"); 
	            c.Checked = tab.Selected; 
	            for (int j = 0; j < tab.Tabs.Count; j++) 
	            { 
	                RadTab child = tab.Tabs[j]; c = (CheckBox)child.FindControl("CheckBox1"); 
	                c.Checked = child.Selected; 
	            } 
	        } 
	    }
	
````
````VB.NET
	
	    Protected Sub RadTabStrip1_TabClick(ByVal sender As Object, ByVal e As RadTabStripEventArgs) Handles RadTabStrip1.TabClick
	        Dim i As Integer = 0
	        While i < RadTabStrip1.Tabs.Count
	
	            Dim tab As RadTab = RadTabStrip1.Tabs(i)
	            Dim c As CheckBox = CType(tab.FindControl("CheckBox1"), CheckBox)
	            c.Checked = tab.Selected
	            Dim j As Integer = 0
	            While j < tab.Tabs.Count
	                Dim child As RadTab = tab.Tabs(j)
	                c = CType(child.FindControl("CheckBox1"), CheckBox)
	                c.Checked = child.Selected
	                System.Math.Max(System.Threading.Interlocked.Increment(j), j - 1)
	            End While
	            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
	        End While
	    End Sub
	
````


* **Client-side access**

The client-side **findControl** method can be used to find an embedded Control's client-side object. For example, if there is a RadToolBar instead of a CheckBox in the example above, the client-side object of the ToolBar can be obtained, like this:

````JavaScript
	    var tabStrip = $find("<%= RadTabStrip1.ClientID %>;");
	    var tab = tabStrip.findTabByText("Europe");
	    var toolBar = tab.findControl("RadToolBar1");
````


