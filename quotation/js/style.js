window.onload = function(){
	// get three page
	var list_page = document.querySelector(".list_page");
	var detail_page = document.querySelector(".detail_page");
	var add_page = document.querySelector(".add_page");
	// get three click
	var list_click = document.querySelector(".list_click");
	var detail_click = document.querySelector(".detail_click");
	var add_click = document.querySelector(".add_click");
	
	// list_page
	list_click.onclick = function(){
		// console.log("list_page...");

		// change page
		detail_page.style.display = "none";
		add_page.style.display = "none";
		list_page.style.display = "block";
		// change background-color
		list_click.style.backgroundColor = "#fff";
		detail_click.style.backgroundColor = "rgb(219, 219, 219)";
		add_click.style.backgroundColor = "rgb(219, 219, 219)";

	}

	// detail_page
	detail_click.onclick = function(){
		// console.log("detail_page...");

		// change page
		list_page.style.display = "none";
		add_page.style.display = "none";
		detail_page.style.display = "block";
		// change background-color
		detail_click.style.backgroundColor = "#fff";
		list_click.style.backgroundColor = "rgb(219, 219, 219)";
		add_click.style.backgroundColor = "rgb(219, 219, 219)";

	}

	// add_page
	add_click.onclick = function(){
		// console.log("add_page...");

		// change page
		list_page.style.display = "none";
		detail_page.style.display = "none";
		add_page.style.display = "block";
		// change background-color
		add_click.style.backgroundColor = "#fff";
		list_click.style.backgroundColor = "rgb(219, 219, 219)";
		detail_click.style.backgroundColor = "rgb(219, 219, 219)";

	}

	var addpro = document.querySelector('.addpro');
	addpro.onclick = function(){
		alert("保存成功");
	}

	var save = document.querySelector('.save');
	save.onclick = function(){
		alert("保存");
	}

}
