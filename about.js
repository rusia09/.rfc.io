const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-about');
        } else {
            entry.target.classList.remove('show-about');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden-about');
hiddenElements.forEach((el) => observer.observe(el));

const assistance = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-assistance');
        }
    })
})
const hiddenAssistance = document.querySelectorAll('.assistant');
hiddenAssistance.forEach((el) => assistance.observe(el));