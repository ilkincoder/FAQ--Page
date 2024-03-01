// Traverse dom


// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(button){
//     button.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
       
//         question.classList.toggle('show-text');
//     })
// })


// Using selectors

// Getting DOM

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    
    console.log(question);

    const btn  = question.querySelector('.question-btn');
    // console.log(btn);

    btn.addEventListener('click', function(){
        
        questions.forEach(function(article){
            if(article !== question){
                article.classList.remove('show-text');
            }
        })
    // Adding class to show and remove the answers using toggle method
        question.classList.toggle('show-text');
    })

})







































