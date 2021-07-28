---
title: Close RadWindow with Resize animation instead of Fade
description: Close RadWindow with Resize animation instead of Fade. Check it now!
type: how-to
page_title: Close RadWindow with Resize animation instead of Fade
slug: window-close-radwindow-with-resize-animation-instead-of-fade
res_type: kb
---

## How to
   
Close **RadWindow** with **Resize** animation instead of **Fade**  
   
## Solution
   
The **RadWindow** could be opened with a few different animation types while it always fades out. This is by design and it is done because some of the other animations are not suitable for closure (e.g **FlyIn** as closing animation is unclear as expected behavior). However, we received a few customer requests for closing **RadWindow** with **Resize** animation and we find it reasonable, that is why we prepared a simple and easy solution which is provided below.  

The idea of the solution is to handle **OnClientBeforeClose** event, cancel the default closure and play resize animation. When the resize animation ends, the **RadWindow** is explicitly closed. As you see, this means that we go through the **OnClientBeforeClose** event twice - once we should cancel it and play the animation and next time we need to actually close the **RadWindow** instead of cancellation. The easiest way to determine that is a boolean flag - if you are using it for only one **RadWindow** you could use a global javascript variable or you could attach a custom dynamic property to the client object as I have done. At last, in the **OnClientClose** event some restore of settings is done in order to correctly configure the next show.  
   
````ASPX
<%@ Page Language="C#" %>
 
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
</head>
<body>
    <form id="form1" runat="server">
    <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>
    <script type="text/javascript">
        function OnClientBeforeClose(sender, args) {
            var $T = Telerik.Web.UI;
            //check if closure should be cancelled and an animation played before that
            if (!sender._toClose) {
                args.set_cancel(true);
                //configure animation
                var animatedElement = sender.get_popupElement();
                var animationType = Telerik.Web.UI.WindowAnimation.Resize;
                var startBounds = $telerik.getBounds(animatedElement);
                var position = "" + sender._position;
                var onAnimationStart = null;
                //add a custom dynamic [_toClose] js property to use it as a flag
                var onAnimationEnd = function () { sender._toClose = true; sender.close(); };
                var endBounds = $telerik.getBounds(sender.get_popupElement());
                var animationDuration = sender.get_animationDuration();
                endBounds.width = 0;
                endBounds.height = 0;
                $T.Animations.playJQueryAnimation(animatedElement, animationType, startBounds, endBounds, position, onAnimationStart, onAnimationEnd, animationDuration);
                //set animation to none to prevent the default fade animation
                sender.set_animation($T.WindowAnimation.None);
            }
        }
 
        function OnClientClose(sender, args) {
            alert("The RadWindow was closed!");
            //restore settings for next show
            sender.setSize(sender.get_width(), sender.get_height());
            sender.set_animation(Telerik.Web.UI.WindowAnimation.Resize);
            sender._toClose = false;
        }
 
        function OpenWindow() {
            $find("<%=RadWindow1.ClientID %>").show();
        }
    </script>
    <asp:Button ID="btn" runat="server" OnClientClick="OpenWindow();return false;" Text="Open RadWindow" />
    <telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="Default2.aspx" Animation="Resize"
        OnClientBeforeClose="OnClientBeforeClose" AnimationDuration="1000" OnClientClose="OnClientClose">
    </telerik:RadWindow>
    </form>
</body>
</html>
````

 