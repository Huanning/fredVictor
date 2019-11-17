<!-- Start WPBot -->
<script>
function clickChatIcon() {
  if (!isChatOpen()) {
    document.getElementById("wp-chatbot-ball").click();
  }
}

function isChatOpen() {
  return document.getElementById("wp-chatbot-integration-container").style.display === "block";
}

function handleClick() {
  var chatIcon = document.getElementsByClassName("wp-chatbot-ball")[0];
  var chatIconImg = chatIcon.getElementsByTagName("img")[0];
  var closeChatImg = "https://www.fredvictor.org/wp-content/uploads/2019/11/botIcon.png";
  var openChatImg = "https://www.fredvictor.org/wp-content/uploads/2019/11/x-mark-3-xxl.png";
  if (chatIconImg.src === closeChatImg){
    chatIconImg.setAttribute("src", openChatImg);
  } else {
    chatIconImg.setAttribute("src", closeChatImg);
  }
  
}

function setListener() {
  document.getElementById("wp-chatbot-ball").addEventListener("click", handleClick);
}
setTimeout(setListener, 1000);
setTimeout(clickChatIcon, 5000);


</script> 
<!-- End WPBot -->
