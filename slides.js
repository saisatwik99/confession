var currentIndex = 0;
let data, response;

const getData = async () => 
{
       fetch('http://localhost:3000/api', {
         method: 'GET',
         mode: 'no-cors'
       });
       
      // item = data[currentIndex];
      // document.getElementById('title').textContent = item.title;
      // document.getElementById('college').textContent = item.college;   
      // document.getElementById('post').textContent = item.post;   
}

getData();


function plusDivs(n) {
  if(currentIndex == 0 && n<0)
  { 
    //do nothing
  }
  else
  {
    currentIndex += n;
    item = data[currentIndex];
      document.getElementById('title').textContent = item.title;
      document.getElementById('college').textContent = item.college;   
      document.getElementById('post').textContent = item.post;   
  }

}

