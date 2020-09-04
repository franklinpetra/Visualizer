var i = 0, j = 0;
for(i = 0; i < a.length - 1; i++)
{
    for(j = i + 1; j < a.length; j++)
    {
        if(a[i] > a[j])
        {
            swap(a, i, j);
        }
    }
}