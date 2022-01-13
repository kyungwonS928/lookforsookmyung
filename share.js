const url="https://lookforyoursookmyung.netlify.app/";

function kakaoShare(){
    var resultImg=document.querySelector('#resultImg');
    var resultAlt=resultImg.firstElementChild.alt;
    const ShareTitle= '당신의 숙명은?';
    const shareDoc=infoList[resultAlt].name;
    const shareImage=url+"img/image-"+resultAlt+'.jpg';
    Kakao.Link.sendDefault(
        {
            objectType: 'feed',
            content: {
            title: ShareTitle,
            description: shareDoc,
            imageUrl:shareImage,
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
                androidExecutionParams: 'test',
            },
            },
            buttons: [
            {
                title: '나도 참여하기',
                link: {
                mobileWebUrl: 'https://developers.kakao.com',
                },
            },
            ]
        }
    )
};