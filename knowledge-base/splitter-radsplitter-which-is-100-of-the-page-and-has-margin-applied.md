---
title: RadSplitter which is 100% of the page and has margin applied
description: RadSplitter which is 100% of the page and has margin applied. Check it now!
type: how-to
page_title: RadSplitter which is 100% of the page and has margin applied
slug: splitter-radsplitter-which-is-100-of-the-page-and-has-margin-applied
res_type: kb
---

   
## HOW-TO

RadSplitter which is 100% of the page and has margin applied  
   
## SOLUTION

   
 In order to apply margin to a RadSplitter which is 100% you cannot simply set margin to it or padding to its parent due to the box model. In order to achieve the visual result of a margin with a 100% sized RadSplitter you should go through the following steps:  
   

1) Configure the RadSplitter to be 100% of the page (set Width and Height 100% and also set explicit height to all its parent elements including the html, body and form)  
   

2) Set the HeightOffset property to the resultant sum of the top and the bottom desired margin  
   

3) Set the desired top margin to the RadSplitter's wrapper DIV element by using CSS  
   

4) The 3 steps above will ensure the 100% size with vertical margin applied. To set the horizontal margin, set it as a padding of the body element.  
   

Sample code which demonstrates the above explained approach is available below:  
   
````ASPX
<%@ Page Language="C#" AutoEventWireup="true" %>
  
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
        <style type="text/css">
        html, body, form
        {
            height: 100%;
            margin: 0px;
            padding:0px;
            overflow:hidden;
        }
          
        #RadSplitter1
        {
            margin-top: 15px;
        }
    </style>
    </telerik:RadCodeBlock>
</head>
<body>
    <form id="form1" runat="server" style="background-color: Gray; padding: 0px 15px;">
        <asp:ScriptManager ID="ScriptManager1" runat="server" />
        <telerik:RadSplitter ID="RadSplitter1" runat="server" PanesBorderSize="0" BorderSize="0"
            Width="100%" Height="100%" Orientation="Horizontal" BackColor="Blue" HeightOffset="30">
            <telerik:RadPane ID="RadPane1" runat="server" Width="100%" Height="150px" BackColor="red"
                MinHeight="150" MinWidth="1000">
            </telerik:RadPane>
            <telerik:RadPane ID="RadPane2" runat="server" BackColor="Yellow" MinWidth="1000">
            </telerik:RadPane>
        </telerik:RadSplitter>
    </form>
</body>
</html>
````

   