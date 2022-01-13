const url="https://lookforyoursookmyung.netlify.app/";

function kakaoShare(){
    var resultImg=document.querySelector('#resultImg');
    var resultAlt=resultImg.firstElementChild.alt;
    const shareDoc=infoList[resultAlt].name;
    const shareImage=url+'img/image'+resultAlt+'.jpg';
    Kakao.Link.sendCustom(
        {
            templateId: 68745,
            templateArgs: {
                'THU' : shareImage,
                'DESC': shareDoc,
            
        }})
};