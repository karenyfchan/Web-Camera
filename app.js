html, body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#camera, #camera--view, #camera--sensor, #camera--output{
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
#camera--view, #camera--sensor, #camera--output{
    transform: scaleX(-1);
    filter: FlipH;
}
#camera--trigger{
    width: 200px;
    background-color: black;
    color: white;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    padding: 15px 20px;
    text-align: center;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
    position: fixed;
    bottom: 30px;
    left: calc(50% - 100px);
}
.taken{
    height: 100px!important;
    width: 100px!important;
    transition: all 0.5s ease-in;
    border: solid 3px white;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
    top: 20px;
    right: 20px;
    z-index: 2;
}