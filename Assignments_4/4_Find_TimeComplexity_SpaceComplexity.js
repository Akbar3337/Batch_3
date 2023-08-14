/* 

4.
function solve(n)
{
	let i = n
	while(i>0)
	{
		if(i%2 == 0)
		{
			for(let j = 1; j <= n*n; j+=2)
			{
				statements
			}
		}
		i /=2
	}
}

Ans: TC = O(n^2 log n) and SC = O(1) 

*/