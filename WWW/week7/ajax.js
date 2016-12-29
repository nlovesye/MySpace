function ajax(url,funy,funn)
{
    if(window.XMLHttpRequest)
    {
        var xhr = new XMLHttpRequest();
    }
    else
    {
        var xhr = new ActiveXObject("Microsoft XMLHTTP");
    }
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            funy(xhr.responseText);
        }
        else
        {
            if(xhr.status == 404)
            {
                funn(xhr.statusText);
            }
        }
    }
}