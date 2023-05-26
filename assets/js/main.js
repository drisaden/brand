window.addEventListener('load', function () {
    setTimeout(function () {
        var arrowIcons = document.getElementById('arrow-icons');
        arrowIcons.classList.remove('hidden');
    }, 5000);

    var scrolling = false;
    window.addEventListener('scroll', function () {
        if (!scrolling) {
            scrolling = true;
            setTimeout(function () {
                var arrowIcons = document.getElementById('arrow-icons');
                arrowIcons.classList.add('hidden');
                scrolling = false;
            }, 500);
        }
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    backDelay: 900,
    backSpeed: 30,
    smartBackspace: true,
    typeSpeed: 40,
    startDelay: 2000,
});

function countUp(element) {
    let target = parseInt(element.getAttribute('data-target'));
    let count = parseInt(element.innerText);
    let increment = Math.ceil(target / 100);
    if (count < target) {
        element.innerText = count + increment;
        setTimeout(function () { countUp(element) }, 10);
    } else {
        element.innerText = target;
    }
}

function startCounters() {
    let counters = document.querySelectorAll('.counter');
    let scrollTop = window.pageYOffset + window.innerHeight;
    let counterSection = document.querySelector('.counter-section');
    if (scrollTop > counterSection.offsetTop && !counterSection.classList.contains('counted')) {
        counters.forEach(function (counter) {
            countUp(counter);
        });
        counterSection.classList.add('counted');
    }
}

window.addEventListener('scroll', function () {
    startCounters();
});



const mySlides = document.getElementById("myslides");
const image = document.getElementById("image");
const photoNumber = document.getElementById("photo-number");
const caption = document.getElementById("caption");
const demo = document.getElementsByClassName("demo");
const secondS = document.getElementById("second-s");

let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    image.src = slides[slideIndex - 1].src;
    slides[slideIndex - 1].classList.add("active");
    photoNumber.innerHTML = `${slideIndex} / ${slides.length}`;
    caption.innerHTML = slides[slideIndex - 1].alt;
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

secondS.addEventListener("click", function (event) {
    if (event.target.className.includes("demo")) {
        currentSlide(parseInt(event.target.dataset.index));
    }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

mySlides.addEventListener("click", function (event) {
    if (event.target.className.includes("left-0")) {
        plusSlides(-1);
    } else if (event.target.className.includes("right-0")) {
        plusSlides(1);
    }
});

showSlides(slideIndex);

const form = document.querySelector('#hire-form');
const submitBtn = document.querySelector('#submit-btn');
const modal = document.querySelector('#modal');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formsubmit.co/ajax/drisaden@gmail.com', true);
    xhr.setRequestHeader('accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            modal.classList.remove('hidden');
        }
    };
    xhr.send(formData);
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})