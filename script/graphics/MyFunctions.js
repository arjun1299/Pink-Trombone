                function say(_tongue, _constriction, duration, timeout, intensity, tenseness, frequency) {
                    return new Promise(resolve => {
                        window.setTimeout(() => {
                        if(_tongue.index)
                            pinkTromboneElement.parameters.tongue.index.linearRampToValueAtTime(_tongue.index, pinkTromboneElement.audioContext.currentTime+duration);
                        if(_tongue.diameter)
                            pinkTromboneElement.parameters.tongue.diameter.linearRampToValueAtTime(_tongue.diameter, pinkTromboneElement.audioContext.currentTime+duration);
                        if(_constriction.index)
                            pinkTromboneElement.constrictions[0].index.linearRampToValueAtTime(_constriction.index, pinkTromboneElement.audioContext.currentTime+duration);
                        if(_constriction.diameter)
                            pinkTromboneElement.constrictions[0].diameter.linearRampToValueAtTime(_constriction.diameter, pinkTromboneElement.audioContext.currentTime+duration);
                        
                        if(tenseness !== undefined) {
                            tenseness = 1 - Math.cos((tenseness) * Math.PI * 0.5);
                            pinkTromboneElement.parameters.tenseness.linearRampToValueAtTime(tenseness, pinkTromboneElement.audioContext.currentTime+duration);
                            const loudness = Math.pow(tenseness, 0.25);
                            pinkTromboneElement.parameters.loudness.linearRampToValueAtTime(loudness, pinkTromboneElement.audioContext.currentTime+duration);
                        }
                        if(intensity !== undefined)
                            pinkTromboneElement.parameters.intensity.linearRampToValueAtTime(intensity, pinkTromboneElement.audioContext.currentTime+duration);
                        if(frequency !== undefined)
                            pinkTromboneElement.parameters.frequency.linearRampToValueAtTime(frequency, pinkTromboneElement.audioContext.currentTime+duration);

                        window.setTimeout(() => {
                            resolve();
                        }, duration*1000)
                        }, timeout);    
                    });
                }
                
                function speakText()
                {
                    var text=document.getElementById("inputTextBox").value;
                    document.getElementById("header").innerHTML= text;
                }

                function getCoordinates()
                {
                    var text=`Tongue: <br> diameter: ${pinkTromboneElement.tongue.diameter.value} <br> index: ${pinkTromboneElement.tongue.index.value}`
                    //var text="hello"
                    document.getElementById("coordinates").innerHTML= text;
                }

                var textbox = document.getElementById("inputTextBox")
                
                document.getElementById("speakBtn").addEventListener("click",event=>{speakText()});
                window.addEventListener("click",event=>{getCoordinates()})

                const constriction = pinkTromboneElement.newConstriction(40, 3);

                window.say = say;
                window.speakText=speakText;
                window.getCoordinates=getCoordinates;

                window.constriction = constriction;
                
                var baseFrequency = pinkTromboneElement.parameters.frequency.value;



                //                     (_tongue, _constriction, duration, timeout, intensity, tenseness, frequency)
                window.sayE = () => say({index : 27.5, diameter : 2}, {diameter : 3}, 0.1, 0, 0, undefined, baseFrequency);
                window.sayU = () => say({index : 22.6, diameter : 2}, {index : 40, diameter : 0.8}, 0.3, 0.5, 1, undefined, baseFrequency*2^(6/12));
                window.sayK = () => say({}, {index : 20, diameter : -0.3}, 0.1, 0.5, 0, 0);
                window.sayA = () => say({index : 17, diameter : 3}, {index : 25, diameter : 4}, 0, 1000, 1, 1, baseFrequency*2^(3/12));
                window.sayT = () => say({}, {index : 36, diameter : -0.5}, 0.1, 0, 0, 1);
                window.sayO = () => say({index : 12.6, diameter : 2.3}, {diameter : 3}, 0.1, 0, 1, undefined, baseFrequency);
                window.sayN = () => say({}, {index : 36, diameter : -1.4}, 0.2, 0, 0.2, undefined);
                window.shutUp = () => say({}, {}, 0.1, 1, 0);
                window.sayUKATON = () => sayE().then(sayU).then(sayK).then(sayA).then(sayT).then(sayO).then(sayN).then(shutUp);

                


                //window.sayUKATON();
                /*
                
                My code
                tongue- tongue locatino
                constriciton- lips
                duration - transition delay
                timeout -?
                intensity- volume
                tenseness-
                frequency- pitch of voice

                */

                //Vowels

                window.say_æ = () => say({index : 14.93, diameter : 2.78}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency);
                window.say_aaO = () => say({index : 17, diameter : 3}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ɑ  = () => say({index : 2.3, diameter : 12.75}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ɒ  = () => say({index : 12, diameter :2.05 }, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ɔ = () => say({index : 17.7, diameter : 2.05}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ɪ = () => say({index : 26.11, diameter : 2.87}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_i = () => say({index : 27.2, diameter : 2.2}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_e = () => say({index : 19.4, diameter : 3.43}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ʌ = () => say({index : 17.8, diameter : 2.46}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_u = () => say({index : 22.8, diameter : 2.05}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                window.say_ə = () => say({index : 20.7, diameter : 2.8}, {index : 25, diameter : 4}, 0, 10, 1, 1, baseFrequency*2^(3/12));
                

                //nasals
                window.say_m = () => say({}, {index : 41, diameter : -1}, 0.2, 0, 0.2, undefined);
                window.say_n = () => say({}, {index : 36, diameter : -1.4}, 0.2, 0, 0.2, undefined);
                window.say_ŋ = () => say({}, {index : 20, diameter : -1}, 0.2, 0, 0.2, undefined);
                
                //window.sayA = () => say({index : 17, diameter : 3}, {index : 25, diameter : 4}, 0, 2, 1, 1, baseFrequency*2^(3/12));
                
                //refractivs
                window.say_h= () => say({index : 17, diameter : 3}, {index : 25, diameter : 4}, 0, 0, 1, 0, baseFrequency*2^(3/12));
                window.say_ʒ= () => say({index : 17, diameter : 3}, {index : 31, diameter : 0.6}, 0, 0, 1, 1, baseFrequency*2^(3/12));
                window.say_ʃ= () => say({index : 17, diameter : 3}, {index : 31, diameter : 0.6}, 0, 0, 1, 0, baseFrequency*2^(3/12));
                window.say_z= () => say({index : 17, diameter : 3}, {index : 36, diameter : 0.6}, 0, 0, 1, 2, baseFrequency*2^(3/12));
                window.say_s= () => say({index : 17, diameter : 3}, {index : 36, diameter : 0.6}, 0, 0, 1, 0, baseFrequency*2^(3/12));
                window.say_v= () => say({index : 17, diameter : 3}, {index : 41, diameter : 0.7}, 0, 0, 1, 1, baseFrequency*2^(3/12));
                window.say_f= () => say({index : 17, diameter : 3}, {index : 41, diameter : 0.5}, 0, 0, 1, 0, baseFrequency*2^(3/12));

                window.say_l= () => say({index : 17, diameter : 3}, {index : 37, diameter : 0.7}, 0, 0, 1, 1, baseFrequency*2^(3/12));

                //stops
                window.say_t = () => say({}, {index : 36, diameter : -0.5}, 0.1, 0, 0, 1);
                window.say_d = () => say({}, {index : 36, diameter : -0.5}, 0.1, 0, 1, 1);

                window.say_g = () => say({}, {index : 20, diameter : -0.5}, 0.1, 0, 1, 1);
                window.say_k = () => say({}, {index : 20, diameter : -0.5}, 0.1, 0, 0, 1);

                window.say_b = () => say({}, {index : 41, diameter : -0.5}, 0.1, 0, 1, 1);
                window.say_p = () => say({}, {index : 41, diameter : -0.5}, 0.1, 0, 0, 1);

                /*
                window.addEventListener("keypress", event => {
                    baseFrequency = pinkTromboneElement.parameters.frequency.value;
                    window.sayUKATON();
       
                }); */   