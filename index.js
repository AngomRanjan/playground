(() => {
  const arrSocialMedia = [
    {
      media: 'twitter',
      link: 'https://twitter.com/RanjanAngom',
      icon: 'images/twitter.png',
    },
    {
      media: 'linkedin',
      link: 'https://linkedin.com/in/angom-chittaranjan',
      icon: 'images/linkedin.png',
    },
    {
      media: 'medium',
      link: 'https://medium.com/',
      icon: 'images/medium.png',
    },
    {
      media: 'github',
      link: 'https://github.com/AngomRanjan',
      icon: 'images/github.png',
    },
    {
      media: 'angellist',
      link: 'https://angel.co/',
      icon: 'images/angellist.png',
    },
  ];
  function mediaList(social) {
    const span = document.createElement('span');
    span.textContent = "LET'S CONNECT";
    social.appendChild(span);
    const ul = document.createElement('ul');
    ul.innerHTML = `
       ${(arrSocialMedia.map((soc) => `<li>
      <a href='${soc.link}'>
        <img class='icons' src='${soc.icon}'alt='${soc.media}'>
      </a>
     </li>`)).join('')}
     `;
    social.appendChild(ul);
  }

  const socialMedia = Array.from(document.getElementsByClassName('socialMedia'));
  socialMedia.forEach((social) => mediaList(social));
})();
