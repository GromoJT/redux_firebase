import React, { Component } from 'react'
import { Alert } from 'react-bootstrap';

class HomeAlert extends Component {
    state = {  } 
    render() { 
        return (
            <Alert variant='success'>
                <Alert.Heading>
                    Ważne informacje 
                </Alert.Heading>
                <p>
                    Brakuje mi doświadczen i wiedzy w zakresie... prawie wszystkiego... Trochę późno się zoriętowałem i teraz mam problem.
                    <br/>
                    Niew wiem w jakim kierunku powinienem się rozwijać, a wszystko co do tej pory udaje mi sie zrobić
                    powstaje tylko dla tego że znajdę odpowiedni tutorial lub dokumnetacje. 
                    <br/>
                    Zero własnej twórczości bo nawet nie wiem jak sie za to zabrać.
                </p>
                    <hr/>
                    <p className='mb-0'>
                        Ale z odrobiną nadziej może czegoś się nauczę do trzydziestki...
                    </p> 
                
                
            </Alert>
        );
    }
}
 
export default HomeAlert;

