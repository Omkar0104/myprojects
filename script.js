async function getprojects() {
    // write your code here
    let projectLink;
    const xhr= new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/Omkar0104/repos?sort=updated',true);
    xhr.onload = function(){
      let projectDetails=this.responseText;
      let data=JSON.parse(projectDetails);
      for(ele of data){
        console.log(ele.projectRepo);
        let projectRepo=`https://github.com/Omkar0104/${ele.name}`;
        if(!ele.has_pages)
        {
           projectLink=`https://github.com/Omkar0104/${ele.name}`;
        }
        else{
          projectLink=`https://omkar0104.github.io/${ele.name}/`;
        }
      if(!ele.fork){
        let description;
        if(ele.description==null){
description='Check out repository for more information';
        }
        else if(ele.description.length>60){
          description=`${ele.description.slice(0,60)} <a href=${projectRepo}>Read More</a>`;
        }
        else{
          description=ele.description;
        }
        document.querySelector('.projectContainer').insertAdjacentHTML('beforeend',
      `<div class="card projectCard">
      <div class="card-body">
      <div class="cardContent">
        <h5 class="card-title"><b>${ele.name.charAt(0).toUpperCase()+ele.name.slice(1)}</b></h5>
        <p class="card-text">
        ${description}
        </p>
        </div>
        <div class="cardLinks">
        <a href=${projectLink} target='_blank' style=" color:black" class='projectLink'> See Project</a>
        <a href=${projectRepo} target='_blank' style=" color:black" class='projectLink'>Project Repo</a>
        </div>
      </div>
    </div>`);
      }
      }
    }
  xhr.send();
    
}
getprojects();
