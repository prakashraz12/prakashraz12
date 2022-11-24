const searchBox = document.getElementById("search-box")


const searchIcon = document.getElementById("search-icon")

searchIcon.addEventListener('click', function(){
	if(searchBox.style.display === 'none'){
		searchBox.style.display = 'block';
	}else{
		searchBox.style.display = 'none'
	}
})