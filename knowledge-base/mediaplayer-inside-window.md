---
title: Media Player inside Window
description: Learn how to add a Media Player inside a Window 
type: how-to
page_title: Media Player inside Window. | RadWindow
slug: mediaplayer-inside-window
tags: window, media player, media player inside window
ticketid: 1654135
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms MediaPlayer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Sometimes, you might want to show a MediaPlauer with a video on it, after the press of a button.

## Solution

To do that, you can use the Window control and add a MediaPlayer as its template. 


````ASP.NET
<telerik:RadWindowManager ID="RadWindowManager1" runat="server" />
<telerik:RadButton runat="server" ID="RadButton1" Text="Postback" AutoPostBack="true" OnClick="RadButton1_Click" />
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    RadWindow window = new RadWindow()
    {
        ID = "PlayerWindow",
        VisibleOnPageLoad = true,
        Width = 950,
        Height = 500,
        OnClientShow = "onClientShow",
        OnClientBeforeClose = "onClientBeforeClose",
        ContentTemplate = new WindowMediaTemplate("MediaPlayer1"),
    };

    RadWindowManager1.Windows.Add(window);
}

private class WindowMediaTemplate : ITemplate
{
    protected RadMediaPlayer player;
    private string _id;

    public WindowMediaTemplate(string id)
    {
        _id = id;
    }

    public void InstantiateIn(Control container)
    {
        player = new RadMediaPlayer()
        {
            ID = _id,
            Height = Unit.Pixel(360),
            Width = Unit.Pixel(640),
            BannerCloseButtonToolTip = "Close",
            Title = "Getting Started with the JoT ERP",
            Playlist =
            {
                new MediaPlayerVideoFile()
                {
                    Path="https://www.youtube.com/watch?v=9M2zYspl9e0",
                    Title="Cat mewing",
                    Poster="~/Images/cat1.jpg"
                },
                new MediaPlayerVideoFile()
                {
                    Path="https://www.youtube.com/watch?v=kG7d_4LeP48",
                    Title="Cat says hi",
                    Poster="~/Images/cat2.jpg"
                },
            }
        };
        container.Controls.Add(player);
    }
}
````

- The [`onClientShow`]({%slug window/client-side-programming/events/onclientshow%}) event is used to remove any inactive windows after they are shown.
- The [`onClientBeforeClose`]({%slug window/client-side-programming/events/onclientbeforeclose%}) event is used to pause the MediaPlayer whenever the Window is closed.

````JavaScript
function onClientShow(sender, args) {
    var windows = document.querySelectorAll(".rwInactiveWindow"); // Get a reference to all the inactive windows

    windows.forEach(function (window) {
        var windowToHide = window.id.replace('RadWindowWrapper_', ''); // We remvoe the windows because every time the button is clicked, a new window is created
        var radWindow = $find(windowToHide); // Find the RadWindows (to see what we actually dispose, comment the code in the event)

        if (radWindow) {
            radWindow.dispose(); // Dispose the 
        }
    });
}

function onClientBeforeClose(sender, args) {
    var windowContent = sender.get_contentElement(); // Get the content of the RadWindow
    var mediaPlayer = $(windowContent).find(".RadMediaPlayer")[0].control; // Find the MediaPlayer control

    mediaPlayer.pause(); // Pause it when closing the player
}
````


 
  