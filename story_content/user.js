function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vZHt5S5Eas":
        Script1();
        break;
      case "6l7wKQEnNjB":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');

if (audio.paused) {
    audio.play();
} else {
    audio.pause();
}
}

