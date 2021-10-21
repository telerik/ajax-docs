---
title: Show error image for RadTabStrip tabs that have controls that do not pass validation
description: Show error image for RadTabStrip tabs that have controls that do not pass validation. Check it now!
type: how-to
page_title: Show error image for RadTabStrip tabs that have controls that do not pass validation
slug: tabstrip-show-error-image-for-tabs-that-have-controls-that-do-not-pass-validation
res_type: kb
---

## HOW-TO
Show error image for RadTabStrip tabs that have controls that do not pass validation 

## SOLUTION
The code below shows how to set error image for tabs that have controls that do not pass validation:

````ASP.NET
    <script type="text/javascript">
        window.AttachErrorImage = function(tabID) {
            var tabStrip = $find('<%= ts.ClientID %>');
            var tab = tabStrip.findTabByValue(tabID);
            tab.set_imageUrl("Images/error.gif");
        }
    </script>

    <telerik:RadTabStrip ID="ts" runat="server" Align="Justify" SelectedIndex="0" MultiPageID="mp"
        Width="700px" CausesValidation="false">
        <Tabs>
            <telerik:RadTab ID="tab1" Value="tab1" runat="server" PageViewID="pv1" Text="Tab 1">
            </telerik:RadTab>
            <telerik:RadTab ID="tab2" Value="tab2" runat="server" PageViewID="pv2" Text="Tab 2">
            </telerik:RadTab>
            <telerik:RadTab ID="tab3" Value="tab3" runat="server" PageViewID="pv3" Text="Tab 3">
            </telerik:RadTab>
        </Tabs>
    </telerik:RadTabStrip>
    <div style="width: 710px; margin-top: -1px; border: solid 1px" align="left">
        <telerik:RadMultiPage ID="mp" runat="server" SelectedIndex="0">
            <telerik:RadPageView ID="pv1" runat="server">
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                <asp:CustomValidator ID="CustomValidator1" runat="server" ErrorMessage="CustomValidator 1"
                    ControlToValidate="TextBox1" ValidateEmptyText="true" OnServerValidate="CustomValidator1_ServerValidate"></asp:CustomValidator>
            </telerik:RadPageView>
            <telerik:RadPageView ID="pv2" runat="server">
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                <asp:CustomValidator ID="CustomValidator2" runat="server" ErrorMessage="CustomValidator 2"
                    ControlToValidate="TextBox2" ValidateEmptyText="true" OnServerValidate="CustomValidator2_ServerValidate"></asp:CustomValidator>
            </telerik:RadPageView>
            <telerik:RadPageView ID="pv3" runat="server">
                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                <asp:CustomValidator ID="CustomValidator3" runat="server" ErrorMessage="CustomValidator 3"
                    ControlToValidate="TextBox3" ValidateEmptyText="true" OnServerValidate="CustomValidator3_ServerValidate"></asp:CustomValidator>
            </telerik:RadPageView>
        </telerik:RadMultiPage>
    </div>
    <asp:Button ID="Button1" runat="server" Text="Button" CausesValidation="true" />
    <asp:ValidationSummary ID="ValidationSummary1" runat="server" />
````

````C#
    private System.Collections.Hashtable errorImages = new System.Collections.Hashtable();

    protected void Page_Load(object sender, System.EventArgs e)
    {
    }

    protected override void OnPreRender(System.EventArgs e)
    {
        string s = string.Empty;
        foreach (System.Collections.DictionaryEntry error in this.errorImages)
        {
            s += "Sys.Application.add_load(function(){AttachErrorImage('" + error.Value + "');});\n";
        }

        if (s != string.Empty)
        {
            ScriptManager.RegisterStartupScript(this, GetType(), "errorimages", s, true);
        }

        base.OnPreRender(e);
    }

    protected void CustomValidator1_ServerValidate(object source, System.Web.UI.WebControls.ServerValidateEventArgs args)
    {
        args.IsValid = args.Value != string.Empty;

        if (!args.IsValid)
        {
            if (!this.errorImages.Contains(tab1.Value))
            {
                this.errorImages.Add(tab1.Value, tab1.Value);
            }
        }
    }

    protected void CustomValidator2_ServerValidate(object source, System.Web.UI.WebControls.ServerValidateEventArgs args)
    {
        args.IsValid = args.Value != string.Empty;

        if (!args.IsValid)
        {
            if (!this.errorImages.Contains(tab2.Value))
            {
                this.errorImages.Add(tab2.Value, tab2.Value);
            }
        }
    }

    protected void CustomValidator3_ServerValidate(object source, System.Web.UI.WebControls.ServerValidateEventArgs args)
    {
        args.IsValid = args.Value != string.Empty;

        if (!args.IsValid)
        {
            if (!this.errorImages.Contains(tab3.Value))
            {
                this.errorImages.Add(tab3.Value, tab3.Value);
            }
        }
    }
````

 