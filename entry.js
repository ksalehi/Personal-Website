
$(document).ready( () => {
  $('.about').on('click', e => {
    console.log('hi');
    hideCoverPhoto();
  });
  $('.resume').on('click', e => {
    hideCoverPhoto();
  });
  $('.projects').on('click', e => {
    hideCoverPhoto();
  });
  $('.contact').on('click', e => {
    hideCoverPhoto();
  });
});

function hideCoverPhoto() {
  $('.cover-photo').addClass('hidden');
}
