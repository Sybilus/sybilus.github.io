const disappearSection = document.querySelector('.disappear');


function checkScreenSize() {
  if (window.innerWidth >= 600) {
    if (disappearSection) {
      disappearSection.parentNode.removeChild(disappearSection);
    }
  } else {
    if (!disappearSection) {
      const newSection = document.createElement('section');
      newSection.classList.add('disappear');
      newSection.innerHTML = `
        <div class="skills ">
            <div class="skillsT">
                <h2>Skills</h2>
            </div>
            <div class="skillsD">what is going on here</div>
        </div>
        <div class="contact">
            <div class="contactT">
                <h2>Contact</h2>
            </div>
            <div class="contactD">
                <ul>
                    <li>
                        <p id="email">
                            frontcodemj@gmail.com
                        </p>
                    </li>
                    <li>
                        <p id="email">
                            phone - future
                        </p>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mateusz-janczak-316ab9248/" id="linkedIn">
                            linked in
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      `;
      // Check if there are any .disappear sections in the document before appending the new one
      if (!document.querySelector('.disappear')) {
        document.body.appendChild(newSection);
      }
    }
  }
}

// Run checkScreenSize() on load and whenever the window is resized
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
