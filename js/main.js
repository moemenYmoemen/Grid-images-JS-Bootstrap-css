var imageGrid = document.querySelectorAll('div.background_img_props');

var popUp = document.getElementById('popUp');
var popUpsection = document.getElementById('popUpsection');

var lastSelectedImg=0;
var currentImgIndex=-1;
console.log(imageGrid);

for(let i = 0 ; i < imageGrid.length; i++)
{

    imageGrid[i].addEventListener('click',function(e)
    {
        e.target
        console.log(imageGrid[i].classList.contains(`background_img_${i+1}`));

        showPopupSection();
        popImgShow(`background_img_${i+1}`);

        currentImgIndex=i;

  
    })

}

popUpsection.addEventListener('click', function(e){

    if(e.target == this)
    {
        hidePopupSection();
    }

})
function showPopupSection()
{

    if(popUpsection.classList.contains('d-none'))
    {
        popUpsection.classList.remove('d-none');
    }
    

}
var popUpvisible = false;
function hidePopupSection()
{

    if(!popUpsection.classList.contains('d-none'))
    {
        popUpsection.classList.add('d-none');
        popUpvisible = false;
    }

}


function popImgShow(newBackgroundClass)
{
    var imgClassExists = false;
    popUpvisible = true;
    console.log(newBackgroundClass);

    for(let i = 0 ; i < imageGrid.length; i++)
    {

        if ( popUp.classList.contains(`background_img_${i+1}`) )
        {
            popUp.classList.replace(`background_img_${i+1}`, newBackgroundClass);
            imgClassExists = true;

            break;
        }

    }

    if(imgClassExists == false)
    {
        popUp.classList.add(newBackgroundClass);

    }


}

function switchTonextImg()
{
    var imageLabelIndex = currentImgIndex+1;
    
    console.log(currentImgIndex);
    
  

    if(imageLabelIndex<imageGrid.length)
    {
        popImgShow(`background_img_${imageLabelIndex+1}`);
        currentImgIndex+=1;
    }
    else
    {
        popImgShow(`background_img_1`);
        currentImgIndex=0;
    }

  
}

function switchTopreviousImg()
{
    console.log(currentImgIndex);
    var imageLabelIndex = currentImgIndex+1;
    
    if(imageLabelIndex>1)
    {
        popImgShow(`background_img_${imageLabelIndex-1}`);
        currentImgIndex-=1;
    }
    else
    {
        popImgShow(`background_img_6`);
        currentImgIndex=5;
    }

  
}
var nextElement_popup = document.getElementById('next');
var previousElement_popup = document.getElementById('previous');
var closeElement_popup = document.getElementById('close');

closeElement_popup.addEventListener('click',hidePopupSection);
nextElement_popup.addEventListener('click',switchTonextImg);
previousElement_popup.addEventListener('click',switchTopreviousImg);

document.addEventListener('keyup',function(event){

  
    if(popUpvisible)
    {

        var name = event.key;
        var code = event.code;
        if(code =='ArrowRight')
        {
            switchTonextImg();
        }
        else if(code =='ArrowLeft')
        {
            switchTopreviousImg();
        }
        else if(code =='Escape')
        {
            hidePopupSection();
        }

        
    }
}
);
