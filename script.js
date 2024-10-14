// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Populate client grid
const clientGrid = document.getElementById('clientGrid');
const clients = [
    "PT. Anadarko.png", "PT. Apexindo.png", "PT. Aquamarine.png", "PT. Arung.jpg",
    "PT. Arutmin.jpg", "PT. BKI.png", "PT. Chevron.png", "PT. CNOOC.jpg",
    "PT. Dewirahmi.png", "PT. Elnusa.png", "PT. Feria.png", "PT. Geo Ocean.png",
    "PT. Geotindo.png", "PT. Golder Associates.png", "PT. IndoSraits.png", "PT. JDI.jpg",
    "PT. Kideco.png", "PT. Lancar Rejeki.png", "PT. Maspion.jpg", "PT. Meindo.png",
    "PT. Modern Widya Tehnical.png", "PT. ModernWidya.jpg", "PT. Onasis.png", "PT. PancaDuta.png",
    "PT. PDC.jpg", "PT. Pertamina PHM.jpg", "PT. PutraTunggalMandiri.jpg", "PT. Raga Perkasa Ekaguna.jpg",
    "PT. Taka.png"
];

clients.forEach(client => {
    const col = document.createElement('div');
    col.className = 'col';
    
    const card = document.createElement('div');
    card.className = 'card h-100';
    
    const img = document.createElement('img');
    img.src = `assets/client/${client}`;
    img.className = 'card-img-top';
    img.alt = client.replace('.png', '').replace('.jpg', '');
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardText = document.createElement('p');
    cardText.className = 'card-text text-center';
    cardText.textContent = client.replace('.png', '').replace('.jpg', '');
    
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    clientGrid.appendChild(col);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Services tab functionality
var servicesTab = document.getElementById('servicesTabs')
servicesTab.addEventListener('click', function (event) {
  event.preventDefault()
  if (event.target.classList.contains('nav-link')) {
    var tabId = event.target.getAttribute('data-bs-target')
    var tabContent = document.querySelector(tabId)
    var allTabContents = document.querySelectorAll('.tab-pane')
    var allTabLinks = servicesTab.querySelectorAll('.nav-link')

    allTabContents.forEach(function(content) {
      content.classList.remove('show', 'active')
    })
    allTabLinks.forEach(function(link) {
      link.classList.remove('active')
    })

    tabContent.classList.add('show', 'active')
    event.target.classList.add('active')
  }
})

// Animate on scroll
function animateOnScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        
        // Checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);