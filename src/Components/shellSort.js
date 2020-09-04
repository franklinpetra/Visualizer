var m = a.length / 2 | 0; // JavaScript rounding
m++; // Fixes a small bug with rounding

while(m > 0)
{
    for(var i = m; i < a.length; i++)
    {
        tmp = a[i];
        j = i;

        while(j >=  m && a[j - m] > tmp)
        {
            a[j] = a[j-m];
            j = j-m;
        }

        a[j] = tmp;
    }

    m = m / 2.2 | 0;
}