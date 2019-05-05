$(document).ready(function(){
  /*Api call that returns listing data from simpleview's test api*/
  url="https://sv-reqres.now.sh/api/listings"
  $.getJSON(url,function(data){

    let viewData=data.data;
    /*String variable that will be used to post to the DOM*/
    let str="";
    /*Fallback image incase api links do not work*/
    let fallback="./css/images/fallback.jpg"
    let idNum=0;
    /*cycles through each entry in the data array from the api call*/
    viewData.forEach( element=>{
      idNum++;
      /*Html string that will get posted to the DOM once all listing have been completed*/
      str+=`<div class="outputDisplay" id="index${idNum}">
      <img class="listImage" src=${element.mediaurl} alt=${fallback} onerror="this.onerror=null;this.src=this.alt;"
    >


        <div class="text-field">
        <h2>${element.title}</h2>
          <div class="shadow"></div>
          ${element.description}

        </div>
        <p class="read-more">Read More</p>

    </div>
    `}
  )
  /*Posts api call data to the dom*/
    document.getElementById("container").innerHTML = str;
    /*Eventlistener for when a user mouses over a text field which the option to read more. the option to read more is not functional at the moment*/
    $(".text-field").mouseover(function(){

      $(this).siblings(".read-more").show(200)

    })
    $(".text-field").mouseleave(function(){

        $(this).siblings(".read-more").hide(200)

    })
  })



})
