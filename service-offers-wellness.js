// hide headline
const headline = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-headline');
        }
    })
})
const hideHeadline = document.querySelectorAll('.hide-headline');
hideHeadline.forEach((el) => headline.observe(el));

// column tab
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//assistace tab 
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

