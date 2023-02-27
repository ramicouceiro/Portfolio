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
        ${p.languages
          .map((l) => `<span class="project__language">${l}</span>`)
          .join("")}
      </div>
      <a
        href="${p.link}"
        target="_blank"
        class="hero__btn"
        >Ver Proyecto</a>
    </div>
`);
  };

  const projectContainer = $(".project");

  renderProjects(projectData[0]);

  // Boton siguiente y anterior

  const nextBtn = $(".fa-angle-right");
  const prevBtn = $(".fa-angle-left");
  const tl = gsap.timeline({ defaults: { duration: 0.5 } });
  let index = 0;

  nextBtn.click(function () {
    index++;
    if (index > projectData.length - 1) {
      index = 0;
    }
    renderProjects(projectData[index]);
    tl.fromTo(project, { x: 1000 }, { x: 0, duration: 1 });
  });

  prevBtn.click(function () {
    index--;
    if (index < 0) {
      index = projectData.length - 1;
    }
    renderProjects(projectData[index]);
    tl.fromTo(project, { x: -1000 }, { x: 0, duration: 1 });
  });
});
