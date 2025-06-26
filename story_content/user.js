function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61qqwoMyCP3":
        Script1();
        break;
      case "6VtPqU5QHZf":
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

