---
title: Creating DockableObjects programatically
description: Creating DockableObjects programatically. Check it now!
type: how-to
page_title: Creating DockableObjects programatically
slug: dock-creating-dockableobjects-programatically
res_type: kb
---

## HOW-TO  
Create RadDock during runtime
   
## SOLUTION  

Initially there are 2 RadDockZones in the aspx file and a button which is used to create a new RadDock everytime it is clicked. Please observe the code shown below in order to get idea how to create them. 
If you want to create RadDock controls dynamically you should do it in the Init event of the page, in order to allow the RadDockLayout to automatically manage their positions. You could create RadDock controls in other events, but you should recreate them in Init when the next postback or AJAX request occurs.

````ASPX
<%@ register assembly="Telerik.Web.UI" namespace="Telerik.Web.UI" tagprefix="telerik" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">  
<head runat="server">  
    <title>Untitled Page</title>   
</head> 
<body> 
    <form id="form1" runat="server">  
        <asp:scriptmanager id="ScriptManager1" runat="server">  
        </asp:scriptmanager> 
        <asp:button id="btnNewDock" runat="server" text="Add New Object"></asp:button> 
        <telerik:raddocklayout id="RadDockLayout1" runat="server" onsavedocklayout="RadDockLayout1_SaveDockLayout" 
            onloaddocklayout="RadDockLayout1_LoadDockLayout">  
            <telerik:raddockzone runat="server" id="RadDockZone1" width="300" minheight="200" 
                style="float: left; margin-right: 20px;">  
            </telerik:raddockzone> 
            <telerik:raddockzone width="300" minheight="200" runat="server" id="RadDockZone2" 
                style="float: left;">  
            </telerik:raddockzone> 
        </telerik:raddocklayout> 
    </form> 
</body> 
</html> 
````

````C#
using System;  
using System.Collections.Generic;  
using System.Configuration;  
using System.Data;  
using System.Web;  
using System.Web.Security;  
using System.Web.UI;  
using System.Web.UI.HtmlControls;  
using System.Web.UI.WebControls;  
using System.Web.UI.WebControls.WebParts;  
using Telerik.Web.UI;  
 
namespace RadDockTest  
{  
    /// <summary>  
    /// Summary description for WebForm21.  
    /// </summary>  
    public partial class CreateDynamicDocks : System.Web.UI.Page  
    {  
        private List<DockState> CurrentDockStates  
        {  
            get 
            {  
                //Store the info about the added docks in the session. For real life  
                // applications we recommend using database or other storage medium   
                // for persisting this information.  
                List<DockState> _currentDockStates = (List<DockState>)Session["CurrentDockStatesDynamicDocks"];  
                if (Object.Equals(_currentDockStates, null))  
                {  
                    _currentDockStates = new List<DockState>();  
                    Session["CurrentDockStatesDynamicDocks"] = _currentDockStates;  
                }  
                return _currentDockStates;  
            }  
            set 
            {  
                Session["CurrentDockStatesDynamicDocks"] = value;  
            }  
        }  
 
        private RadDock CreateRadDockFromState(DockState state)  
        {  
            RadDock dock = new RadDock();  
            dock.ID = string.Format("RadDock{0}", state.UniqueName);  
            dock.ApplyState(state);  
            return dock;  
        }  
 
 
        private void Page_Load(object sender, System.EventArgs e)  
        {  
            // Put user code to initialize the page here  
        }
        #region Web Form Designer generated code  
        override protected void OnInit(EventArgs e)  
        {  
            //  
            // CODEGEN: This call is required by the ASP.NET Web Form Designer.  
            //  
            InitializeComponent();  
            base.OnInit(e);  
 
            CreateDocks();  
        }  
 
        /// <summary>  
        /// Required method for Designer support - do not modify  
        /// the contents of this method with the code editor.  
        /// </summary>  
        private void InitializeComponent()  
        {  
            this.btnNewDock.Click += new System.EventHandler(this.btnNewDock_Click);  
        }
        #endregion  
 
        private void btnNewDock_Click(object sender, System.EventArgs e)  
        {  
            CreateDock();  
        }  
 
        void CreateDocks()  
        {  
            //Recreate the docks in order to ensure their proper operation  
            for (int i = 0; i < CurrentDockStates.Count; i++)  
            {  
                RadDock dock = CreateRadDockFromState(CurrentDockStates[i]);  
                //We will just add the RadDock control to the RadDockLayout.  
                // You could use any other control for that purpose, just ensure  
                // that it is inside the RadDockLayout control.  
                // The RadDockLayout control will automatically move the RadDock  
                // controls to their corresponding zone in the LoadDockLayout  
                // event (see below).  
                RadDockLayout1.Controls.Add(dock);  
                //We want to save the dock state every time a dock is moved.  
            }  
        }  
 
        protected void RadDockLayout1_LoadDockLayout(object sender, DockLayoutEventArgs e)  
        {  
            //Populate the event args with the state information. The RadDockLayout control  
            // will automatically move the docks according that information.  
            foreach (DockState state in CurrentDockStates)  
            {  
                e.Positions[state.UniqueName] = state.DockZoneID;  
                e.Indices[state.UniqueName] = state.Index;  
            }  
        }  
 
        protected void RadDockLayout1_SaveDockLayout(object sender, DockLayoutEventArgs e)  
        {  
            //Save the dock state in the session. This will enable us   
            // to recreate the dock in the next Page_Init.   
            CurrentDockStates = RadDockLayout1.GetRegisteredDocksState();  
        }  
 
        RadDock CreateDock()  
        {  
            int docksCount = CurrentDockStates.Count;  
 
            RadDock dock = new RadDock();  
            dock.UniqueName = Guid.NewGuid().ToString();  
            dock.ID = string.Format("RadDock{0}", dock.UniqueName);  
            dock.Title = "Dock";  
            dock.Text = string.Format("Added at {0}", DateTime.Now);  
            dock.Width = Unit.Pixel(300);  
 
            RadDockZone1.Controls.Add(dock);  
 
            return dock;  
        }  
    }  
} 
````

  