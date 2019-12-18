function showHideToolTipDiv(event)
{
    var senderElement = event.target;

    var senderElementChildUls = [];

    for (i = 0; i < senderElement.childNodes.length; i++)
    {
        if (senderElement.childNodes[i].tagName == "DIV")
        {
            senderElementChildUls.push(senderElement.childNodes[i]);
        }
    }

    for (i = 0; i < senderElementChildUls.length; i++)
    {
        if (senderElementChildUls[i].classList.contains("tooltiphide"))
        {
            senderElementChildUls[i].classList.remove("tooltiphide");
    
            senderElementChildUls[i].classList.add("tooltipshow");
        }
        else
        {
            senderElementChildUls[i].classList.remove("tooltipshow");
    
            senderElementChildUls[i].classList.add("tooltiphide");
        }
    }

}



function showHideToolTipMouseOutDiv(event)
{
    var senderElement = event.target;

    var senderElementChildUls = [];

    for (i = 0; i < senderElement.childNodes.length; i++)
    {
        if (senderElement.childNodes[i].tagName == "DIV")
        {
            senderElementChildUls.push(senderElement.childNodes[i]);
        }
    }

    for (i = 0; i < senderElementChildUls.length; i++)
    {
        if (senderElementChildUls[i].classList.contains("tooltipshow"))
        {
            senderElementChildUls[i].classList.remove("tooltipshow");

            senderElementChildUls[i].classList.add("tooltiphide");
        }
    }
}

function showHideToolTip(event)
{
    var senderElement = event.target;

    var senderElementChildUls = [];

    for (i = 0; i < senderElement.childNodes.length; i++)
    {
        if (senderElement.childNodes[i].tagName == "UL")
        {
            senderElementChildUls.push(senderElement.childNodes[i]);
        }
    }

    for (i = 0; i < senderElementChildUls.length; i++)
    {
        if (senderElementChildUls[i].classList.contains("tooltiphide"))
        {
            senderElementChildUls[i].classList.remove("tooltiphide");
    
            senderElementChildUls[i].classList.add("tooltipshow");
        }
        else
        {
            senderElementChildUls[i].classList.remove("tooltipshow");
    
            senderElementChildUls[i].classList.add("tooltiphide");
        }
    }

}



function showHideToolTipMouseOut(event)
{
    var senderElement = event.target;

    var senderElementChildUls = [];

    for (i = 0; i < senderElement.childNodes.length; i++)
    {
        if (senderElement.childNodes[i].tagName == "UL")
        {
            senderElementChildUls.push(senderElement.childNodes[i]);
        }
    }

    for (i = 0; i < senderElementChildUls.length; i++)
    {
        if (senderElementChildUls[i].classList.contains("tooltipshow"))
        {
            senderElementChildUls[i].classList.remove("tooltipshow");

            senderElementChildUls[i].classList.add("tooltiphide");
        }
    }
}