export function numAlea(limite) 
{
    const arrlegloAlea=[];
    
    let tamanio=10;
    if(limite<10)
        tamanio=limite;
    for (let i = 0; i < tamanio; i++) 
    {
        let element=Math.floor(Math.random()*(limite));
        let j=0;
        while(j<i)
        {
            if(arrlegloAlea[j]===element)
            {
                element=Math.floor(Math.random()*(limite));
                j=0;
            }
            else
                j++;
        }
        arrlegloAlea.push(element);    
    }
    return arrlegloAlea;
}