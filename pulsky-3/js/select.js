var isSortSelectOpen = false;

function openSelect() 
{
	if (isSortSelectOpen == false) 
	{
		document.getElementById('sort_list').style.display = 'block';
		isSortSelectOpen = true;
	}
	else 
	{
		document.getElementById('sort_list').style.display = 'none';
		isSortSelectOpen = false;
	}
}