$(document).ready(function () {
  const menuButton = $(".burger_menu");
  const menu = $(".nav__btn");
  const menuLink = $(".nav__btn__link");

  menuButton.click(function () {
    menu.toggleClass("nav_open");
  });

  menuLink.click(function () {
    menu.toggleClass("nav_open");
  });

  const project = $(".project");

  const renderProjects = (p) => {
    project.html(`
    <div class="project__img">
      <img src=${p.img} alt="" />
    </div>
    <div class="project__content">
      <h3>${p.project}</h3>
      <p>
        ${p.descripcion}
      </p>
      <div class="project__languages">
        <span class="project__language">HTML</span>
        <span class="project__language">CSS</span>
        <span class="project__language">JavaScript</span>
        <span class="project__language">Responsive</span>
      </div>
      <a
        href="${p.link}"
        target="_blank"
        class="hero__btn"
        >Ver Proyecto</a>
    </div>
`);
  };

  renderProjects(projectData[0]);

  // Boton siguiente y anterior

  const nextBtn = $(".fa-angle-right");
  const prevBtn = $(".fa-angle-left");

  let index = 0;

  nextBtn.click(function () {
    index++;
    if (index > projectData.length - 1) {
      index = 0;
    }
    renderProjects(projectData[index]);
  });

  prevBtn.click(function () {
    index--;
    if (index < 0) {
      index = projectData.length - 1;
    }
    renderProjects(projectData[index]);
  });
});
