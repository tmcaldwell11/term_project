Vue.component('top-menu', {
    props: {
        activeTab: {
            type: String,
            default: 'home'
        }
    },
    template: `<nav class="topnav">
      <ul>
        <li class="title"><a href="index.html"><span>&#9632; </span>Portfolio - Teresa Caldwell</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>`
});

const app = new Vue({
    el: '#app',
    data: {

    image1: 'images/IMG9.jpg',
    image2: 'images/IMG2.jpg',
    image3: 'images/IMG8.jpg',
    image4: 'images/IMG4.jpg',
    image5: 'images/IMG7.jpg',
    image6: 'images/IMG5.jpg',

  }
});
