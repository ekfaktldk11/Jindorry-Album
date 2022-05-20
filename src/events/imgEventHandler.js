import { deleteImg } from '../api.js';

export const onDeleteImg = (imgListPageRender) => {
  console.log('onDelete triggered');
  const trashIcons = document.querySelectorAll('.fa-trash');
  trashIcons.length && Array.from(trashIcons).map((icon) => {
    icon.addEventListener('click', function(){
      if(confirm("정말로 이 사진을 삭제하시겠습니까?\n")){
        deleteImg(this.dataset.yy, this.dataset.mm, this.dataset.file).then((result) => {
          if(result) imgListPageRender();
        });
      }
    })
  })
}

export const onExtendImg = () => {
  const extendIcons = document.querySelectorAll('.fa-up-right-and-down-left-from-center');
  extendIcons.length && Array.from(extendIcons).map((icon) => {
    icon.addEventListener('click', function(){
      location.href = this.dataset.src;
    })
  })
}