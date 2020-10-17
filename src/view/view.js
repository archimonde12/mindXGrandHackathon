const view={}
const screens={
    WhyChoiceScreen:'whyChoice',
    Answer:'answer'
    
}

view.showScreen=function(screen){
    switch(screen){
        case 'whyChoice':
            window.location='../../html/whyChoice/whyChoice.html';
            break;
        case 'answer':
            window.location='../../html/answer/answer.html';
    }
}