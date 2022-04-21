import { deleteImg } from '../api.js';

export const onDeleteImg = (imgContainerInit) => {
  const trashIcons = document.querySelectorAll('.fa-trash');
  trashIcons.length && Array.from(trashIcons).map((icon) => {
    icon.addEventListener('click', function(){
      if(confirm("정말로 이 사진을 삭제하시겠습니까?\n")){
        deleteImg(this.dataset.yy, this.dataset.mm, this.dataset.file).then((result) => {
          if(result) imgContainerInit();
        });
      }
    })
  })
}

export const onExtendImg = () => {
  const extendIcons = document.querySelectorAll('.fa-up-right-and-down-left-from-center');
  extendIcons.length && Array.from(extendIcons).map((icon) => {
    icon.addEventListener('click', function(){
      let imgSource = this.dataset.src.split('/')
      // console.log(imgSource);
      // location.href = `/img/${imgSource[-1]}`
      location.href = this.dataset.src;
    })
  })
}