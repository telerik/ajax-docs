---
title: Initially Resize the RadSplitter according to its content
description: Initially Resize the RadSplitter according to its content. Check it now!
type: how-to
page_title: Initially Resize the RadSplitter according to its content
slug: splitter-initially-resize-the-radsplitter-according-to-its-content
res_type: kb
---

## HOW-TO
Make RadSplitter automatically resize itself according to its content when the page initially loads  
   
## SOLUTION
   
A common scenario is to use **RadSplitter** as a container for the page's content in order build a certain layout. The **RadSplitter's** sizes can be set both in percentages and in pixels but the control does not offer an automatic resize functionality based on its content. This can be easily achieved by using javascript and the **RadSplitter's** client-side API.  
   
 Let's assume that the **RadSplitter's** initial size is a small one, e.g the control is 200px wide and 200px high:  
   
````ASPX
  <telerik:RadSplitter ID="RadSplitter1" runat="server" Height="200px" Width=200px OnClientLoaded="SplitterLoaded">  
            <telerik:RadPane ID="RadPane1" runat="server"> 
````
 
   
 and its content is bigger than 200px. The javascript code which will resize the **RadSplitter** according to the content slightly differs for splitter with a **Vertical** and with **Horizontal** orientation. However, in both configurations, in order to achieve the desired behavior, the heights of the **RadPane** and the **RadSplitter** should be calculated and reset in the splitter's **OnClientLoaded** handler as shown below:  
   
   
 
1. RadSplitter with **Vertical** orientation (default setting):  
   ````ASPX
         <script type="text/javascript">
         function SplitterLoaded(splitter, arg)
         {
            var pane = splitter.getPaneById('<%= RadPane2.ClientID %>');
            var height = pane.getContentElement().scrollHeight;
            splitter.set_height(height);
            pane.set_height(height);
         }
         </script>

         <form id="form1" runat="server">
            <asp:ScriptManager ID="ScriptManager1" runat="server" />
            <telerik:RadSplitter ID="RadSplitter1" runat="server" Height="200px" Width=200px OnClientLoaded="SplitterLoaded">
               <telerik:RadPane ID="RadPane1" runat="server">
                     text<br />
                     text<br />
                     text<br />
                     text<br />
               </telerik:RadPane>
               <telerik:RadPane ID="RadPane2" runat="server" Scrolling="None">
                     Start >>
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     text
                     <br />
                     >>End
               </telerik:RadPane>
            </telerik:RadSplitter>
   ````
2. RadSplitter with **Horizontal** orientation:  
      ````ASPX
         <script type="text/javascript">
         function SplitterLoaded(splitter, arg)
         {
            var pane = splitter.getPaneById('<%= RadPane2.ClientID %>');
            var height = pane.getContentElement().scrollHeight;
            splitter.set_height(splitter.get_height() - pane.get_height() + height);     
            pane.set_height(height);   
         }
         </script>

         <telerik:RadSplitter ID="RadSplitter1" runat="server" Width="200px" Height="200px"
         OnClientLoaded="SplitterLoaded" Orientation="Horizontal">
         <telerik:RadPane ID="RadPane1" runat="server">
               text text text text text text text text text text text text text text text text
               
         </telerik:RadPane>
         <telerik:RadPane ID="RadPane2" runat="server" Scrolling="None">
               Start >>  text text text text text text text text text text text text text text 
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text text text
               text text text text text text text text text text text text text text tex >>End
         </telerik:RadPane>
         </telerik:RadSplitter>

      ````
 
Both the code snippets demonstrate the case when the RadPane2's content is the biggest one - you can extend this logic further by comparing all the pane's content and then resize according the biggest one.  
   
 Two working sample projects which demonstrate the explained approaches are attached.
   


