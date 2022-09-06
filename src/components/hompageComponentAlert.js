import React from 'react'
import { Alert } from 'react-bootstrap';

function HomeAlert() {
    
    
        return (
            <div>
                <Alert variant='success'>
                <Alert.Heading>
                    Ważne informacje 
                </Alert.Heading>
                <p>
                "Doświadczenie jest klęską i trzeba wszystko stracić, żeby dowiedzieć się odrobinę. Doświadczenie jest niezbędne do nauczenia się wszystkiego, czego dokonać można swoim instrumentem, ale zwłaszcza do unikania tego, na co nie należy się porywać. Doświadczenie rodzi prawa, nigdy znajomość praw nie poprzedza doświadczenia."
                </p>
                <p className='font-itali'>
                    - Randomowy cytat z bing
                    
                </p>
                
                    <hr/>
                    <p className='mb-0'>
                        Ale z odrobiną nadziej może czegoś się nauczę do trzydziestki...<br/>
                        Choć przyjaciel mówi bym się aż tak nie martwił...
                    </p> 
                
                
            </Alert>
            </div>
                
            
            
        );
    
};
 
export default HomeAlert;

