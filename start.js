const main = document.querySelector("#main"); //const는 상수변수 
const qna = document.querySelector("#qna"); //querlySelector는 document에서 해당하는 css 지정(main, qna)

const result = document.querySelector("#result");
const select = [0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0]
const select2 = [0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0]



function setResult() {
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  const resultshort = document.querySelector('.resultshort');
  resultshort.innerHTML = infoList[point].short;
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image' + point + '.jpg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;

}

function calResult() {
  // if (Math.max(...select))
  var max=0
  var result = select.indexOf(Math.max(...select));
  while(true){
    result= indexOf(Math.max(...select), result+1); 
    if(max<select2[result]){
      max=select2[result];
    }
    return max;
  }
  // var result=0;
  // while(result){
  //   var result = indexOf(Math.max(...select));
  //   if(max<select2[result]){
  //     max=select2[result];
  //   }
  //   return max;
  // }
}
function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none"; //main꺼짐
      result.style.display = "block" //qna 켜짐
    }, 450) //초는 밀리초 단위. 450 뒤에 코드 진행
  }, 450);
  setResult();
  calResult();
 }

function goNext(qIdx, ss){
  if(ss-1 == 20) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i, ss);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = 5 * ss + '%';

}

  function addAnswer(answerText, qIdx, idx, ss){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-1');
    answer.classList.add('py-2');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
  
    a.appendChild(answer);
    answer.innerHTML = answerText;
  
    answer.addEventListener("click", function(){  ///결과값 저장 알고리즘
      var children = document.querySelectorAll('.answerList'); //.answerList에 버튼 3개를 한번에 묶어 넣어서 selector가 한번에 잡게함
      for(let i = 0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        var target2 = qnaList[qIdx].a[idx].best;
        for(let j=0;j<target.length;j++){
          select[target[j]] += 1;
        }
        if (target2!=null){
          for(let j=0;j<target2.length;j++){
            select2[target2[j]] += 1;
            select[target2[j]] += 1;
          }  
        }
          
        for(let i = 0; i < children.length; i++){
          children[i].style.display = 'none';
        }
        goNext(++qIdx, ++ss);
      },450)
    }, false);
  }

 
function begin(){

  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";

  
  var name = prompt("   그대는 예비 눈송이가 될 숙명이군! 그대의 이름을 알고싶어요");
  if (name === null) {
    alert('취소되었습니다');
    return;
  }
  var major = prompt("    예비 눈송이 ♥"+name+"♥! 그대는 어떤 분야에 관심이 있나요?","인문계열은 1, 자연계열은 2, 예체능계열은 3을 입력해주세요");
  var ss=1;
   switch(major){
      case '1':
          setTimeout(() => {
              qna.style.WebkitAnimation = "fadeIn 1s";
              qna.style.animation = "fadeIn 1s";
              setTimeout(() => {
                main.style.display = "none"; //main꺼짐
                qna.style.display = "block" //qna 켜짐
              }, 450) //초는 밀리초 단위. 450 뒤에 코드 진행
              let qIdx = 0;
              const endPoint = 20;
              goNext(qIdx, ss); //goNext호출
            }, 450);
              break;
      case '2':
          setTimeout(() => {
              qna.style.WebkitAnimation = "fadeIn 1s";
              qna.style.animation = "fadeIn 1s";
              setTimeout(() => {
                main.style.display = "none"; //main꺼짐
                qna.style.display = "block" //qna 켜짐
              }, 450) //초는 밀리초 단위. 450 뒤에 코드 진행
              let qIdx = 20;
              const endPoint = 40;
              goNext(qIdx, ss); //goNext호출
            }, 450);
              break;
      
          //qna
          break;
      case '3':
          setTimeout(() => {
              qna.style.WebkitAnimation = "fadeIn 1s";
              qna.style.animation = "fadeIn 1s";
              setTimeout(() => {
                main.style.display = "none"; //main꺼짐
                qna.style.display = "block" //qna 켜짐
              }, 450) //초는 밀리초 단위. 450 뒤에 코드 진행
              let qIdx = 40;
              const endPoint = 60;
              goNext(qIdx, ss); //goNext호출
            }, 450);
              break;
          //qna
          break;
      case null:
        alert("취소되었습니다.");
        return;

      default:
          alert("올바른 형식이 아닙니다. 다시 시도해주세요");
          begin();
  }


    
}