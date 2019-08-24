$("#start").on("click",function(){
 game.start();
})

var questions =[{
    question: "What was the first full length CGI movie?",
    answers:["A Bug's Life","Monsters Inc.","Toy story","The Lion King"],
    correctAnswer: "Toy Story"
},{

    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers:["Sporty Spice","Fred Spice","Scary Spice","Posh Spice"],
    correctAnswer:"Fred Spice"
},{
    
    question: "Whic NBA team won the most titles in 90s?",
    answers:["New York Knicks","Portland Trailblazers","Los Angeles clippers","Chicago Bulls"],
    correctAnswer: "Chicago Bulls"
},{
    
    question: 'Which group released the hit song, "Smells Like Teen Spirit?"',
    answers:["Nirvana","Backstreet Boys","The OffSpring","No Doubt"],
    correctAnswer: "Nirvana"
},{

    question: 'Which popular Disney movie featured the song, "Circle of life"?',
    answers:["Alladin","Hercules","Mulan","The Lion King"],
    correctAnswer: "The Lion King"
},{

    question: "What was Doug's best friend's name?",
    answers:["Skeeter","Mark","Zack","Cody"],
    correctAnswer:"Skeeter"
},{
    
    question: 'Finish this line from the Fresh Prince of Bel-Air theme song:"I whistled for a cab and when it came near,the license plate said..."',
    answers:["Dice","Mirror","Fresh","Cab"],
    correctAnswer: "Fresh"
},{
    
    question: "What was the name of the principal at Bayside High in Saved By The Bel?",
    answers:["Mr.Zhou","Mr.Driggers","Mr.Belding","Mr.Page"],
    correctAnswer:"Mr.Belding"

}];

var game = {
    correct:0,
    incorrect:0,
    counter:100,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();

        }
    },
    
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">100</span> Seconds</h2>');
       
        $("#start").remove();    
        for(var i=0;i<questions.length;i++){
        
        $("#subwrapper").append("<h2>"+questions[i].question+"</h2>");
        for (var j=0;j<questions[i].answers.length;j++){
        $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        
            }
        }  
    },
    done: function(){
        $.each($('input[name="question-0"]:checked'),function(){

        if($(this).val()==questions[0].correctAnswer){
            game.correct++;
        }
        else {
            game.incorrect++;
        }    

        });

        $.each($('input[name="question-1"]:checked'),function(){

        if($(this).val()==questions[1].correctAnswer){
        game.correct++;
         }
         else {
                game.incorrect++;
            }    
    
            });

        $.each($('input[name="question-2"]:checked'),function(){

             if($(this).val()==questions[2].correctAnswer){
            game.correct++;
                }
                else {
            game.incorrect++;
        }    
        
        });  
                
        $.each($('input[name="question-3"]:checked'),function(){

            if($(this).val()==questions[3].correctAnswer){
            game.correct++;
            }
            else {
            game.incorrect++;
            }    
            
            });  
        $.each($('input[name="question-4"]:checked'),function(){

            if($(this).val()==questions[4].correctAnswer){
            game.correct++;
            }
            else {
            game.incorrect++;
            }    
                
            }); 
                        
        $.each($('input[name="question-5"]:checked'),function(){

        if($(this).val()==questions[5].correctAnswer){
            game.correct++;
        }
        else {
        game.incorrect++;
        }    
                    
        });

        $.each($('input[name="question-6"]:checked'),function(){

        if($(this).val()==questions[6].correctAnswer){
        game.correct++;
        }
        else {
        game.incorrect++;
        }    
                        
        });

        $.each($('input[name="question-7"]:checked'),function(){

        if ($(this).val()==questions[7].correctAnswer){
        game.correct++;
        }
        else {
        game.incorrect++;
        }    
                            
        });

this.result();
    },
    result: function(){

        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }

}