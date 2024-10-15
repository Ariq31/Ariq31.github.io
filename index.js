// var modal = document.getElementById("projectModal");
// var modalImage = document.getElementById("modal-image");
// var modalTitle = document.getElementById("modal-title");
// var modalOverview = document.getElementById("modal-overview");
// var closeBtn = document.getElementsByClassName("close")[0];

// var myProjects = document.getElementsByClassName("card");

// for (var i = 0; i < myProjects.length; i++) {
//     myProjects[i].addEventListener('click', function() {
       
//         var title = this.querySelector('h2').textContent;
//         var image = this.querySelector('img').src;
//         var overview = this.getAttribute("data-overview"); 

        
//         modalTitle.innerHTML = title;
//         modalImage.src = image;
//         modalOverview.innerHTML = overview;

//         modal.style.display = "block";
//     });
// }

// closeBtn.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.project-item');
const modal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.add('active');
            } else if (item.classList.contains(filterValue)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});

portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
        const imageSrc = this.querySelector('.project-img-cont img').src;
        const title = this.querySelector('.project-description-cont h3').textContent;
        const description = this.getAttribute('data-description');
        const projectLink = this.getAttribute('data-project-link');

        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.innerText = title;
        modalDescription.innerText = description;

        if (projectLink) {
            modalLink.href = projectLink;
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }

        modal.style.display = 'flex';
    });
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});