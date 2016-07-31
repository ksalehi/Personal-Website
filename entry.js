

$(document).ready( () => {

  const aboutContent = $('.about-content');
  const resume = $('.resume-content');
  const projects = $('.projects-content');
  const contact = $('.contact-content');
  const navHeader = $('.nav-header');
  const coverPhoto = $('.cover-photo');

  this.elements = [
    aboutContent,
    resume,
    projects,
    contact,
    coverPhoto
  ];

  $('.about').on('click', () => {
    hideAllExcept(aboutContent);
    aboutContent.removeClass('hidden');
  });
  $('.resume').on('click', () => {
    hideAllExcept(resume);
    resume.removeClass('hidden');
    });
  $('.projects').on('click', () => {
    hideAllExcept(projects);
    projects.removeClass('hidden');
    });
  $('.contact').on('click', () => {
    hideAllExcept(contact);
    contact.removeClass('hidden');
    });
  $('.nav-header').on('click', () => {
    hideAllExcept(coverPhoto);
    coverPhoto.removeClass('hidden');
    navHeader.removeClass('clickable');
    });
});

function hideCoverPhoto() {
  $('.cover-photo').addClass('hidden');
}

function showCoverPhoto() {
  const coverPhoto = $('.cover-photo');
  coverPhoto.removeClass('hidden');
  hideAllExcept(coverPhoto);
}

function hideAllExcept(showEl) {
  this.elements.forEach( (element, idx) => {
    if (element !== showEl) {
      element.addClass('hidden');
    }
  });
  showEl.removeClass('hidden');
  $('.nav-header').addClass('clickable');
}
