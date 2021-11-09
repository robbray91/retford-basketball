function scrollFunction() {
    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
      document.getElementsByClassName("navbar")[0].style.backgroundColor = "transparent";
    } else {
      document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgb(10, 4, 4)";
    }
  }
  // Do not forget to call the function 
  scrollFunction();