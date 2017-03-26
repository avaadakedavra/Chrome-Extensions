var Yt2ConvMp3 = {

    DocOnLoad: function (oDoc) {
        try {
            if (oDoc != null && oDoc.body != null && oDoc.location != null && oDoc.getElementById("ytmp3converter_flvto") == null) {

                if (Yt2ConvMp3.IsYoutubeUrl(oDoc)) {
                    var oDivCont = oDoc.getElementById("watch7-headline");
                    if (oDivCont != null) {
                        //get and add command button
                        var oCommandButton = Yt2ConvMp3.GetCommandButton();
                        oDivCont.appendChild(oCommandButton);
                    }
                }
            }
        }
        catch (e) {
            alert("Failure. " + e);
        }

    },

    OnButtonClick: function (e) {
        try {
            this.postSendForm(document.location.href);
        } catch (e) {
            alert("Failure. " + e);
        }
    },

    GetCommandButton: function () {
        try {
            var oCommandButton = document.createElement("button");
            oCommandButton.id = "ytmp3converter_flvto";
            oCommandButton.className = "yt-uix-tooltip"; //yt-uix-button
            oCommandButton.setAttribute("type", "button");
            oCommandButton.setAttribute("title", "Convert to MP3 ");
            oCommandButton.innerHTML = "&nbsp;";
            oCommandButton.addEventListener("click", function (e) {
                Yt2ConvMp3.OnButtonClick(e)
            }, true);
            oCommandButton.setAttribute("style", "width:117px; height:125px; position:relative; top:1px; margin-right:3px; " +
            "cursor: pointer; " +
            "background-image: url(data:image/png;base64,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);" +
            " display: block; margin: 10px auto;");
            oCommandButton.setAttribute("onmouseover", "this.style.backgroundPosition='5px 7px'");
            oCommandButton.setAttribute("onmouseout", "this.style.backgroundPosition='0 0'");
            return oCommandButton;
        } catch (e) {
            alert("Failure. " + e);
        }
    },

    IsYoutubeUrl: function (oDoc) {
        if (oDoc.location.toString().toLowerCase().indexOf("youtube.com") != -1 && oDoc.location.toString().toLowerCase().indexOf("watch?v=") != -1)
            return true;
        else
            return false;
    },

    postSendForm: function (linkurl) {
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "http://www.flvto.biz/?utm_source=pluggin_chrome");
        form.setAttribute("target", "_blank");
        var params = {'convert[url]': encodeURI(linkurl), 'convert[format]': 1};
        for (var key in params) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }
        document.body.appendChild(form);
        form.submit();
    }
};

window.addEventListener("DOMNodeInserted", function() {Yt2ConvMp3.DocOnLoad(document);}, true);
