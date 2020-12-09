//==========================================================================================================================================
//Responsive Menu JS. The window.onload deals with the null error from trying to operate in a DOM before being loaded
window.onload = function(){
	const menu = document.querySelector(".menu-list");
	const menuBtn = document.querySelector(".menu-btn");
	const offBtn = document.querySelector(".off-btn");
	menuBtn.onclick = () =>{ 
		menu.classList.add("active"); //adds a css mode for the menu_list when active tthat shows a hiden element
		menuBtn.classList.add("hide"); //hides the three bar menu icon when it's active
	}
	offBtn.onclick = () =>{ 
		menu.classList.remove("active"); //remove a css mode for the menu_list hiding the displayed element
		menuBtn.classList.remove("hide"); //shows the three bar menu icon when the side panel is closed
	}
}
//========================================================================================================================================