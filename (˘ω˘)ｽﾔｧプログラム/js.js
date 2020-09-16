var suyaxahennsuu = 0
    suyaxa = document.getElementById("スヤァ")

function function_suyaxa()
{
    if (suyaxahennsuu == 0)
    {
        suyaxahennsuu = suyaxahennsuu + 1
        suyaxa.innerHTML = "( ﾟдﾟ)"
    }
    else
    {
        if (suyaxahennsuu == 1)
        {
        suyaxahennsuu = suyaxahennsuu + 1
        suyaxa.innerHTML = "φ(.. )"
        }
        else
        {
            if (suyaxahennsuu == 2)
            {
                suyaxahennsuu = 0
                suyaxa.innerHTML = "(˘ω˘)"
            }
        }
    }
}