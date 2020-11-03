




           new QuestionModel({
            title: 'Tell me your name',
            type:QuestionType.text,
            }) ,
           new QuestionModel({
            title: "let's get started. Tell me what type of trip do you want me to plan for you. ",
            type:QuestionType.MultipleChoice,
            options: [
              new ChoiceOption({
                label: 'Solo trip',
              }),
              
              new ChoiceOption({
                  label:'Couple\'s Getaway'
              }),
              new ChoiceOption({
                  label:'Family Holiday'
              }),
              new ChoiceOption({
                  label:'Workation'
              })]
           }), 
           new QuestionModel({
               title: "Are you interested in Winter Sports?",
               type:QuestionType.MultipleChoice,
               options: [
                   new ChoiceOption({
                       label: 'Oh yeah that\'s me'
                   }), 
                   new ChoiceOption({
                       label: 'I\'d rather relax'
                   })
               ] 
               
           }) 