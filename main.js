var odogwu_mobile_links = document.querySelector(".mobile-link-holder")
let our_backdrop=document.querySelector(".backdrop")

function addandremoveclass(){
    odogwu_mobile_links.classList.toggle("show-mobile-link-holder")
    our_backdrop.classList.toggle("show-backdrop")
}

our_backdrop.addEventListener('click',() =>addandremoveclass())